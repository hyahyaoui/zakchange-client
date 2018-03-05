export class Currency {

    private _currencyCode: string;
    private _symbol: string;
    private _currencyCodes: string[];
    private _displayName: string;


    constructor(currencyCode: string) {
        this._currencyCode = currencyCode;
    }

    get currencyCode(): string {
        return this._currencyCode;
    }

    set currencyCode(value: string) {
        this._currencyCode = value;
    }

    get symbol(): string {
        return this._symbol;
    }

    set symbol(value: string) {
        this._symbol = value;
    }

    get currencyCodes(): string[] {
        return this._currencyCodes;
    }

    set currencyCodes(value: string[]) {
        this._currencyCodes = value;
    }

    get displayName(): string {
        return this._displayName;
    }

    set displayName(value: string) {
        this._displayName = value;
    }
}
