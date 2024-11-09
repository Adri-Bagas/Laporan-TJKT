// db/db.server.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { SECRET_DATABASE_URL } from '$env/static/private';
import * as schema from './schema';
// import { dev } from '$app/environment';

// const client = dev ? postgres(SECRET_DATABASE_URL) : postgres(SECRET_DATABASE_URL, { ssl: 'require' });
const client =  postgres(SECRET_DATABASE_URL) 
export const db = drizzle(client, {schema});