import { Balance } from "./balance";

export class Wallet {

    private _name: String;
    private _balances: Balance[];


    constructor(wallet?: Wallet) {
        this._name = wallet.name;
        this._balances = wallet.balances;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get balances(): Balance[] {
        return this._balances;
    }

    set balances(value: Balance[]) {
        this._balances = value;
    }

}
