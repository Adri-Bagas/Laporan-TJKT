CREATE TABLE IF NOT EXISTS "pklReports" (
	"id" serial PRIMARY KEY NOT NULL,
	"pkl_report_id" uuid DEFAULT gen_random_uuid(),
	"title" text NOT NULL,
	"description" text NOT NULL,
	"status" text DEFAULT 'PENDING' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_id" uuid DEFAULT gen_random_uuid(),
	"team_id" uuid,
	"nisn" text NOT NULL,
	"name" text NOT NULL,
	"class" text NOT NULL,
	CONSTRAINT "students_nisn_unique" UNIQUE("nisn")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teams" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_id" uuid DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"company" text NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teams_to_pkl_reports" (
	"team_id" uuid NOT NULL,
	"pkl_report_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
