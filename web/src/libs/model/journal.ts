import { DateTime } from "luxon";
import { Entity } from "./entity";

export enum TradingStatus {
    Open = 'Open',
    Win = 'Win',
    Lost = 'Lost'
}

export enum TradingSide {
    Long = 'Long', 
    Short = 'Short'
}

export interface Journal extends Entity {
    account: string;
    strategy: string;
    status: TradingStatus;
    side : TradingSide;
    symbol: string;
    entry: number;
    exist: number;
    target: number;
    open: DateTime;
    close: DateTime;
    profit: number;
    size: number;
    amount: number;
    cost: number;
    mistake: any;
    note: string;
    multipleR: number;
    commission: number;
    entity: Entity;
}