import { DateTime } from "luxon";
import { Entity } from "./entity";

export interface TradingCount {
    month: number;
    week: number;
    day: number;
}

export interface TradingTime {
    start: DateTime;
    end: DateTime;
}

export interface Discipline extends Entity {
    numberOfTrade: TradingCount;
    profit: TradingCount;
    loss: TradingCount;
    time: TradingTime;
    openOrders: number;
    accountRisk: number;
}