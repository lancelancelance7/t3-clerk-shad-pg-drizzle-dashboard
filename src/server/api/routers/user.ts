import { eq } from "drizzle-orm";
import { z } from "zod";
import { Role } from "~/lib/enum";

import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { users } from "~/server/db/schema";

export const userRouter = createTRPCRouter({
  upsert: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
        mobile: z.string(),
        agentActive: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { name, email, mobile, agentActive } = input;
      await ctx.db
        .insert(users)
        .values(input)
        .onConflictDoUpdate({
          target: [users.id],
          set: {
            name,
            email,
            mobile,
            agentActive,
          },
        });
      return input;
    }),
  updateRole: adminProcedure
    .input(
      z.object({
        id: z.string(),
        role: z.nativeEnum(Role),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, role } = input;
      await ctx.db.update(users).set({ role }).where(eq(users.id, id));
    }),
});
