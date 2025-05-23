import { pgEnum, pgTableCreator } from "drizzle-orm/pg-core";
import { Role, roles } from "~/lib/enum";

export const createTable = pgTableCreator((name) => `handing-agent_${name}`);

export const roleEnum = pgEnum("role", roles);

export const users = createTable("user", (d) => ({
  id: d.varchar({ length: 256 }).primaryKey(),
  name: d.varchar({ length: 256 }).notNull(),
  email: d.varchar({ length: 256 }).notNull(),
  mobile: d.varchar({ length: 256 }).notNull(),
  role: roleEnum().notNull().default(Role.USER),
  agentActive: d.boolean().notNull().default(false),
}));
export type User = typeof users.$inferSelect;
