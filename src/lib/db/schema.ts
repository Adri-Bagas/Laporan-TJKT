import { relations } from "drizzle-orm";
import { pgTable,serial,text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id:serial("id").primaryKey(),
  userId:uuid("user_id").defaultRandom().unique(),
  name:text("name").notNull(),
  email:text("email").notNull().unique(),
  password:text("password").notNull()
})

export const pklReports = pgTable("pklReports", {
  id:serial("id").primaryKey(),
  pklReportId:uuid("pkl_report_id").defaultRandom().unique(),
  title:text("title").notNull(),
  description:text("description").notNull(),
})

export const teams = pgTable("teams", {
  id:serial("id").primaryKey(),
  teamId:uuid("team_id").defaultRandom().unique(),
  name:text("name").notNull().unique(),
  company:text("company").notNull(),
  password:text("password").notNull()
})

export const students = pgTable("students", {
  id:serial("id").primaryKey(),
  studentId:uuid("student_id").defaultRandom().unique(),
  teamId:uuid("team_id").references(() => teams.teamId),
  nisn: text("nisn").notNull().unique(),
  name: text("name").notNull(),
  class: text("class").notNull()
})

export const teamsRelations = relations(teams, ({ many }) => ({
  students: many(students),
  pklReports: many(teamsToPklReports)
}))

export const pklReportsRelations = relations(pklReports, ({many}) => ({
  teams: many(teamsToPklReports)
}))

export const studentsRelations = relations(students, ({ one }) => ({
  team: one(teams, {
    fields: [students.teamId],
    references: [teams.teamId]
  })
}))

export const teamsToPklReports = pgTable("teams_to_pkl_reports", {
  id:serial("id").primaryKey(),
  teamId: uuid('team_id').notNull().references(() => teams.teamId),
  pklReportId: uuid("pkl_report_id").notNull().references(() => pklReports.pklReportId),
  status:text('status').notNull().default("PENDING")
})

export const teamsToPklReportsRelations = relations(teamsToPklReports, ({ one }) => ({
  team: one(teams, {
    fields: [teamsToPklReports.teamId],
    references: [teams.teamId]
  }),
  pklReport: one(pklReports, {
    fields: [teamsToPklReports.pklReportId],
    references: [pklReports.pklReportId]
  })
}))