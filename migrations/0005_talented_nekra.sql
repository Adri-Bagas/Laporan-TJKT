ALTER TABLE "pklReports" ADD CONSTRAINT "pklReports_pkl_report_id_unique" UNIQUE("pkl_report_id");--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_student_id_unique" UNIQUE("student_id");--> statement-breakpoint
ALTER TABLE "teams" ADD CONSTRAINT "teams_team_id_unique" UNIQUE("team_id");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_user_id_unique" UNIQUE("user_id");

--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_to_pkl_reports" ADD CONSTRAINT "teams_to_pkl_reports_team_id_teams_team_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("team_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_to_pkl_reports" ADD CONSTRAINT "teams_to_pkl_reports_pkl_report_id_pklReports_pkl_report_id_fk" FOREIGN KEY ("pkl_report_id") REFERENCES "public"."pklReports"("pkl_report_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
