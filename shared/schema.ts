import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const moods = pgTable("moods", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  mood: text("mood").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const journals = pgTable("journals", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const affirmations = pgTable("affirmations", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  category: text("category"),
});

export const savedAffirmations = pgTable("saved_affirmations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  affirmationId: integer("affirmation_id").references(() => affirmations.id),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertMoodSchema = createInsertSchema(moods).pick({
  userId: true,
  mood: true,
});

export const insertJournalSchema = createInsertSchema(journals).pick({
  userId: true,
  title: true,
  content: true,
  category: true,
});

export const insertAffirmationSchema = createInsertSchema(affirmations).pick({
  content: true,
  category: true,
});

export const insertSavedAffirmationSchema = createInsertSchema(savedAffirmations).pick({
  userId: true,
  affirmationId: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertMood = z.infer<typeof insertMoodSchema>;
export type Mood = typeof moods.$inferSelect;

export type InsertJournal = z.infer<typeof insertJournalSchema>;
export type Journal = typeof journals.$inferSelect;

export type InsertAffirmation = z.infer<typeof insertAffirmationSchema>;
export type Affirmation = typeof affirmations.$inferSelect;

export type InsertSavedAffirmation = z.infer<typeof insertSavedAffirmationSchema>;
export type SavedAffirmation = typeof savedAffirmations.$inferSelect;
