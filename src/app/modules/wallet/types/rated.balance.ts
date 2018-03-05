import { Balance } from "./balance";
import { Ticker } from "../../../shared/model/ticker";


export class RatedBalance extends Balance {
    private _ticker: Ticker;

    constructor(balance: Balance, ticker: Ticker) {
        super(balance);
        this._ticker = ticker;
    }

    get ticker(): Ticker {
        return this._ticker;
    }

    set ticker(value: Ticker) {
        this._ticker = value;
    }

    public static of = (balance: Balance): RatedBalance => {
        return new RatedBalance(balance, new Ticker())
    }
}
