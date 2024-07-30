import ERole from "./ERole";

export default interface IAccount {
    accountId: number;
    password: number;
    role: ERole;
}