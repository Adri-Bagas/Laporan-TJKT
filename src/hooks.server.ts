import { db } from "$lib/db/db.server";
import { teams, users } from "$lib/db/schema";
import type { Handle } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken"
import { parse } from "querystring";
import { SECRET_JWT_SECRET } from '$env/static/private';



export const handle: Handle = async ({ event, resolve }) => {
    const { headers } = event.request;
    
    const { AuthorizationToken } = parse(headers.get("cookie") ?? "", "; ", "=");

    if (AuthorizationToken) {
        // Remove Bearer prefix
        const token = (AuthorizationToken as string).split(" ")[1];

        try {
            const jwtUser = jwt.verify(token, SECRET_JWT_SECRET);

            if (typeof jwtUser === "string") {
                throw new Error("Something went wrong");
            }

            if(!jwtUser.type){
                throw new Error("Something went wrong");
            }

            if(jwtUser.type == "teams"){
                const user = await db.select().from(teams).where(eq(teams.id, jwtUser.id));

                if (!user) {
                    throw new Error("User not found");
                }

                if(user.length == 0){
                    throw new Error("User not found");
                }

                const sessionUser = {
                    id: user[0].id,
                    name: user[0].name,
                    teamId: user[0].teamId,
                    company: user[0].company,
                    type: 'team'
                };

                event.locals.user = sessionUser;
            }

            if(jwtUser.type == "admin"){
                const user = await db.select().from(users).where(eq(users.id, jwtUser.id));

            if (!user) {
                throw new Error("User not found");
            }

            if(user.length == 0){
                throw new Error("User not found");
            }

            const sessionUser = {
                id: user[0].id,
                uuid: user[0].userId,
                name: user[0].name,
                email: user[0].email,
                type: 'admin'
            };

            event.locals.user = sessionUser;
            }

            
        } catch (error) {
            console.error(error);
        }
    }

    return await resolve(event);
};