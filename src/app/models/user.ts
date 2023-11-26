import { Move } from "./move";

export interface User {
    name: string,
    coins: number,
    moves: Move[],
    age: number,
    address: string,
    phone: string,
    email: string,
}
