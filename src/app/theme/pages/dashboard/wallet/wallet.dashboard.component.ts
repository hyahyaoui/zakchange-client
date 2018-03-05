import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RatedWallet} from "../../../../modules/wallet/types/rated.wallet";
import {WalletService} from "../../../../_services/wallet.service";
import {CurrencyPair} from "../../../../shared/model/currency.pair";
import {Currency} from "../../../../shared/model/currency";
import {Ticker} from "../../../../shared/model/ticker";
import * as _ from "lodash"

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class WalletDashboardComponent implements OnInit {
    private _wallets: RatedWallet[];
    private _selected: number;
    private _walletLoaded: boolean;
    private counterCurrency = 'EUR';


    constructor(private walletService: WalletService) {
    }

    ngOnInit(): void {
        this._selected = 0;
        /*        this._walletLoaded = false;
                const ratedWallets = this.walletService.getRatedWallets();
                ratedWallets.subscribe(wallets => {
                    this._wallets = wallets;
                    this.walletService.getTickers(
                        this.extractCurrencyPairs(wallets)).subscribe(
                        tickers => {
                            this.updateRates(tickers)
                            this._walletLoaded = true;
                        });

                });*/

        $('#todatatable').mDatatable({});


    };

    /*    extractCurrencyPairs = (wallets: RatedWallet[]): CurrencyPair[] => {
            let res = _.flatten(wallets.map(wallet => wallet.balances))
                .filter(rb => rb.currency.currencyCode !== this.counterCurrency)
                .map(rb =>
                    new CurrencyPair(new Currency(rb.currency.currencyCode),
                        new Currency(this.counterCurrency)));
            return res;
        }*/

    get wallets(): RatedWallet[] {
        return this._wallets;
    }


    get selected(): number {
        return this._selected;
    }

    get walletLoaded(): boolean {
        return this._walletLoaded;
    }

    private updateRates = (tickers: Map<string, Ticker>) => {
        tickers[this.counterCurrency + '/' + this.counterCurrency] = 1;
        this._wallets.forEach(wallet => wallet.balances.forEach(
            balance => {
                balance.ticker = tickers[balance.currency.currencyCode + '/' + this.counterCurrency]
            }
        ));
    }
}
