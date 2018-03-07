import {Component, Input} from '@angular/core';
import {RatedBalance} from '../../types/rated.balance';
import {Ticker} from '../../../../shared/model/ticker';
import {TickerSummary} from '../../../../shared/model/ticker.summary';


@Component({
    selector: 'app-balance-table',
    templateUrl: './balance-table.component.html',
    styleUrls: ['./balance-table.component.less'],
})
export class BalanceTableComponent {
    @Input() private _balances: RatedBalance[];
    private _totalHoldings: number;

    constructor() {
    }

    ngOnInit() {
        this._totalHoldings = this._balances.reduce((mem, curr) => {
            return mem + curr.total * (curr.ticker  && curr.ticker.last) || 1
        }, 0)
    }


    get totalHoldings(): number {
        return this._totalHoldings;
    }

    get balances(): RatedBalance[] {
        return this._balances;
    }

    set balances(value: RatedBalance[]) {
        this._balances = value;
    }

    public getTickerSummary = (ticker: Ticker): TickerSummary => {
        return TickerSummary.of(ticker)
    }
}

