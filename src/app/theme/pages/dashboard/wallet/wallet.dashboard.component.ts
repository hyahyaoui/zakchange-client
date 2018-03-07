import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RatedWallet} from "../../../../modules/wallet/types/rated.wallet";
import {WalletService} from "../../../../_services/wallet.service";
import {CurrencyPair} from "../../../../shared/model/currency.pair";
import {Currency} from "../../../../shared/model/currency";
import {Ticker} from "../../../../shared/model/ticker";
import * as _ from "lodash"
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'app-wallet-dashboard',
    templateUrl: './wallet.dashboard.component.html',
    styleUrls: ['./wallet.dashboard.component.less'],
})
export class WalletDashboardComponent implements OnInit, AfterViewInit {

    private _wallets: RatedWallet[];
    private _counterCurrencies = environment.counterCurrencies;
    private _selectedCounterCurrency: string;
    private _walletLoaded: boolean;
    private _totalBalance: number;

    constructor(private walletService: WalletService) {
    }

    ngOnInit(): void {
        this._totalBalance = 0;
        this._walletLoaded = false;
        this._selectedCounterCurrency = this._counterCurrencies[1];
        const ratedWallets = this.walletService.getRatedWallets();
        ratedWallets.subscribe(wallets => {
            this._wallets = wallets;
            this.walletService.getTickers(
                this.extractCurrencyPairs(wallets)).subscribe(
                tickers => {
                    this.updateRates(tickers)
                    this._walletLoaded = true;
                });

        });


    };

    ngAfterViewInit(): void {
        $('#buy-table').mDatatable({data: {pageSize: 5}});
        $('#buy-table2').mDatatable({data: {pageSize: 5}});
    }

    extractCurrencyPairs = (wallets: RatedWallet[]): CurrencyPair[] => {
        let res = _.flatten(wallets.map(wallet => wallet.balances))
            .filter(rb =>
                [this.selectedCounterCurrency, 'EUR', 'USD'].indexOf(rb.currency.currencyCode) < 0)
            .map(rb =>
                new CurrencyPair(new Currency(rb.currency.currencyCode),
                    new Currency(this._selectedCounterCurrency)));
        return res;
    }

    get wallets(): RatedWallet[] {
        return this._wallets;
    }

    get counterCurrencies(): (string | string | string)[] {
        return this._counterCurrencies;
    }

    get selectedCounterCurrency(): string {
        return this._selectedCounterCurrency;
    }

    get walletLoaded(): boolean {
        return this._walletLoaded;
    }

    get totalBalance(): number {
        return this._totalBalance;
    }

    private updateRates = (tickers: Map<string, Ticker>) => {
        this._totalBalance = 0;
        this._wallets.forEach(wallet =>
            wallet.balances.forEach(balance => {
                    balance.ticker = tickers[balance.currency.currencyCode + '/' + this._selectedCounterCurrency]
                    if (balance.ticker)
                        this._totalBalance += balance.ticker.last * balance.available;
                }
            )
        )
        ;
    }
}
