import { Entity } from "./entity";

export interface Account extends Entity {
    email: string;
    firstName?: string;
    lastName?: string;
    mobile?: string;
    password?: string;
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