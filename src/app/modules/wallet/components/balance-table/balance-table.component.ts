import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {RatedBalance} from '../../types/rated.balance';
import {Ticker} from '../../../../shared/model/ticker';
import {TickerSummary} from '../../../../shared/model/ticker.summary';


@Component({
    selector: 'app-balance-table',
    templateUrl: './balance-table.component.html',
    styleUrls: ['./balance-table.component.less'],
})
export class BalanceTableComponent implements OnInit, AfterViewInit {
    @Input() private _balances: RatedBalance[];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        $('#balance-table').mDatatable({
            search: {
                input: $('#generalSearch'),

            },
            columns: [
                {field: "RecordID", width: 10},
                {field: "RecordID", width: 40},
                {field: "RecordID", width: 300},
                {field: "RecordID", width: 300}],
        });
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

