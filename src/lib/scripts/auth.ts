import { db } from "$lib/db/db.server";
import { teams, users, students as schemaStudent } from "$lib/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_JWT_SECRET } from '$env/static/private';

function isValidUsername(username:string) {

    const validPattern = /^[a-zA-Z0-9_]+$/;

    if (!validPattern.test(username)) {
        return false;
    }

    return true;
}


export const login = async (email:string , password:string) => {
	
	const user = await db.select().from(users).where(eq(users.email, email));
	if (user.length === 0) {
		
		const team = await db.select().from(teams).where(eq(teams.name, email));

		if(team.length === 0){
			return [null, "Invalid Credentials!"];
		}
		
		const valid = await bcrypt.compare(password, team[0].password);

		if (!valid) {
			return [null, "Invalid Credentials!"];
		}
		
		const token = jwt.sign({ id: team[0].id, type: "teams" }, SECRET_JWT_SECRET, { expiresIn: '8h' });

		return  [token, null, "team"];
	}
	
	const valid = await bcrypt.compare(password, user[0].password);
	if (!valid) {
		return [null, "Invalid Credentials!"];
	}

	const token = jwt.sign({ id: user[0].id, type: "admin" }, SECRET_JWT_SECRET, { expiresIn: '8h' });

	return  [token, null, 'user'];
}

export const register = async (username: string, email: string | undefined | null, password: string, type: string, students: Array<{name: string, class: string, nisn: string}>, company: string) => {

    if(!isValidUsername(username)){
        return [null, "contains illegal characters! (Only AlphaNumerics!)"]
    }

	if(type === "team"){
		const existingTeams = await db.select().from(teams).where(eq(teams.name, username))

		if (existingTeams.length > 0) {
			return [null, 'Team already exists'] ;
		}

        const hashedPassword = await bcrypt.hash(password, 10);

        const team = await db.insert(teams).values({
            name: username,
            password: hashedPassword,
            company
        }).returning();

		const studentMap = students.map((e) => {
			return {
				name: e.name,
				class: e.class,
				nisn: e.nisn,
				teamId: team[0].teamId!,
			}
		});

		await db.insert(schemaStudent).values(studentMap)

        return ['Team and Member registered successfully', null];

	}

    if(type != "user"){
        return [null, "type not matching !"]
    }

    if(!email){
        return [null, "No Email!"]
    }
    
	const existingUser = await db.select().from(users).where(eq(users.email, email!));
	if (existingUser.length > 0) {
		return [null, 'User already exists'] ;
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	await db.insert(users).values({
		name: username,
		email,
		password: hashedPassword
	});

	return ['User registered successfully', null];
}