import { Currency } from "./currency";
import { CurrencyPair } from "./currency.pair";


export class Ticker {

    private _currencyPair: CurrencyPair;
    private _last: number;
    private _volume: number;
    private _open: number;
    private _ask: number;
    private _bid: number;
    private _high: number;
    private _low: number;
    private _vwap: number;
    private _quoteVolume: number;


    constructor(ticker?: Ticker) {
        this._currencyPair = ticker && ticker.currencyPair;
        this._last = ticker && ticker.last;
        this._volume = ticker && ticker.volume;
        this._open = ticker && ticker.open;
        this._ask = ticker && ticker.ask;
        this._bid = ticker && ticker.bid;
        this._high = ticker && ticker.high;
        this._low = ticker && ticker.low;
        this._vwap = ticker && ticker.vwap;
        this._quoteVolume = ticker && ticker.quoteVolume;
    }

    get currencyPair(): CurrencyPair {
        return this._currencyPair;
    }

    get last(): number {
        return this._last;
    }

    get volume(): number {
        return this._volume;
    }

    get open(): number {
        return this._open;
    }

    get ask(): number {
        return this._ask;
    }

    get bid(): number {
        return this._bid;
    }

    get high(): number {
        return this._high;
    }

    get low(): number {
        return this._low;
    }

    get vwap(): number {
        return this._vwap;
    }

    get quoteVolume(): number {
        return this._quoteVolume;
    }

}
