import { Currency } from "./currency";

export class CurrencyPair {
    private _base: Currency;
    private _counter: Currency;


    constructor(base: Currency, counter: Currency) {
        this._base = base;
        this._counter = counter;
    }

    get base(): Currency {
        return this._base;
    }

    set base(value: Currency) {
        this._base = value;
    }

    get counter(): Currency {
        return this._counter;
    }

    set counter(value: Currency) {
        this._counter = value;
    }

    public toString = (): String => this.base.currencyCode + '/' + this.counter.currencyCode;
}
