import { Entity } from "./entity";

export interface Account extends Entity {
    email: string;
    mobile?: string;
    password: string;
    active?: boolean;
    locked?: boolean;
    invalidLogins: number;
}

export interface AuthenticateRequest {
    email: string;
    password: string;
}

export interface AuthenticateResponse {
    success: boolean;
    token: string;
    message?: string;
}