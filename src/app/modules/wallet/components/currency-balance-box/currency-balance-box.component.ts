import { Component, Input, OnInit } from '@angular/core';
import { RatedBalance } from "../../types/rated.balance";


@Component({
    selector: 'app-currency-balance-box',
    templateUrl: './currency-balance-box.component.html',
    styleUrls: ['./currency-balance-box.component.less'],
})
export class CurrencyBalanceBoxComponent implements OnInit {
    private _balance: RatedBalance;

    constructor() {
    }

    ngOnInit() {
    }


    @Input('balance') set balance(value: RatedBalance) {
        this._balance = value;
    }

    get balance(): RatedBalance {
        return this._balance;
    }

    public diff = () => {
        return this._balance.ticker.open - this._balance.ticker.last
    }

}
