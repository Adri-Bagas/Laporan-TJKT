import dotenv from "dotenv";
import { users } from "./schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import bcrypt from "bcrypt";

dotenv.config()

const { SECRET_DATABASE_URL } = process.env;

const main = async () => {
    const client =  postgres(SECRET_DATABASE_URL!)
    const db = drizzle(client);
    const data: (typeof users.$inferInsert)[] = [];

    const password = "TJKTH3ll0W0rld!!!"

    const hashedPassword = await bcrypt.hash(password, 10);

    data.push({
        name: "AdminTJKT",
        email: "AdminTJKT@gmail.com",
        password: hashedPassword
    });
    
    console.log("Seed start");
    await db.insert(users).values(data);
    console.log("Seed done");
};

main();