export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  MANAGER = "MANAGER",
  HANDING = "HANDING",
}
export const roles = Object.values(Role) as [Role, ...Role[]];
