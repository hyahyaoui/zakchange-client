import { Currency } from '../../../shared/model/currency';

export class Balance {

    private _currency: Currency;
    private _availableForWithdrawal: number;
    private _frozen: number;
    private _borrowed: number;
    private _loaned: number;
    private _withdrawing: number;
    private _depositing: number;
    private _total: number;
    private _available: number;

    constructor(balance?: Balance) {
        this._currency = balance && balance.currency;
        this._availableForWithdrawal = balance && balance.availableForWithdrawal;
        this._frozen = balance && balance.frozen;
        this._borrowed = balance && balance.borrowed;
        this._loaned = balance && balance.loaned;
        this._withdrawing = balance && balance.withdrawing;
        this._depositing = balance && balance.depositing;
        this._total = balance && balance.total;
        this._available = balance && balance.available;
    }

    get currency(): Currency {
        return this._currency;
    }

    set currency(value: Currency) {
        this._currency = value;
    }

    get availableForWithdrawal(): number {
        return this._availableForWithdrawal;
    }

    set availableForWithdrawal(value: number) {
        this._availableForWithdrawal = value;
    }

    get frozen(): number {
        return this._frozen;
    }

    set frozen(value: number) {
        this._frozen = value;
    }

    get borrowed(): number {
        return this._borrowed;
    }

    set borrowed(value: number) {
        this._borrowed = value;
    }

    get loaned(): number {
        return this._loaned;
    }

    set loaned(value: number) {
        this._loaned = value;
    }

    get withdrawing(): number {
        return this._withdrawing;
    }

    set withdrawing(value: number) {
        this._withdrawing = value;
    }

    get depositing(): number {
        return this._depositing;
    }

    set depositing(value: number) {
        this._depositing = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }

    get available(): number {
        return this._available;
    }

    set available(value: number) {
        this._available = value;
    }

}

