import { UserRole } from "../../generated/enums";

export interface IRequestUser {
    id: string;
    role: UserRole;
    email: string;
}
