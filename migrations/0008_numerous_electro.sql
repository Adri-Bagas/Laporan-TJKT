ALTER TABLE "teams_to_pkl_reports" ADD COLUMN "status" text DEFAULT 'PENDING' NOT NULL;--> statement-breakpoint
ALTER TABLE "pklReports" DROP COLUMN IF EXISTS "status";