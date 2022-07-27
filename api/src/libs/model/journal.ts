import { DateTime } from "luxon";
import { Attachment } from "./attachment";
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
    account: Entity;
    strategy: Entity;
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
    note: string;
    multipleR: number;
    commission: number;
    before: Attachment[];
    during: Attachment[];
    after: Attachment[];
}