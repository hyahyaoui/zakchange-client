import {Ticker} from "./ticker";

export class TickerSummary {
    private _diffIn24h: number;
    private _changeIn24h: number;
    private _isPriceUp: boolean;
    private _isPriceDown: boolean;


    get diffIn24h(): number {
        return this._diffIn24h;
    }

    set diffIn24h(value: number) {
        this._diffIn24h = value;
    }

    get changeIn24h(): number {
        return this._changeIn24h;
    }

    set changeIn24h(value: number) {
        this._changeIn24h = value;
    }

    get isPriceUp(): boolean {
        return this._isPriceUp;
    }

    set isPriceUp(value: boolean) {
        this._isPriceUp = value;
    }

    get isPriceDown(): boolean {
        return this._isPriceDown;
    }

    set isPriceDown(value: boolean) {
        this._isPriceDown = value;
    }


    public static of(ticker: Ticker): TickerSummary {
        let tickerSummary = new TickerSummary();
        if (ticker) {
            tickerSummary.diffIn24h = ticker.last - ticker.open;
            tickerSummary.changeIn24h = (tickerSummary.diffIn24h / ticker.open) % 100;
            tickerSummary.isPriceUp = ticker.last > ticker.open;
            tickerSummary.isPriceDown = ticker.last < ticker.open;
        }
        return tickerSummary;
    }

    public toString = (): String => this._diffIn24h + '';

}