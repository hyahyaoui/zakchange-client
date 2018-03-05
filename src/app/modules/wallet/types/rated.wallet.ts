import { RatedBalance } from "./rated.balance";
import { Wallet } from "./wallet";

export class RatedWallet {

    private _name: String;
    private _balances: RatedBalance[];

    constructor(name: String, ratedBalances: RatedBalance[]) {
        this._name = name;
        this._balances = ratedBalances;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get balances(): RatedBalance[] {
        return this._balances;
    }

    set balances(value: RatedBalance[]) {
        this._balances = value;
    }

    public static of = (wallet: Wallet): RatedWallet => {
        return new RatedWallet(wallet.name, wallet.balances.map(balance => RatedBalance.of(balance)));
    }
}
