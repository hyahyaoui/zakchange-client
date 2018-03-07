import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Wallet} from "../modules/wallet/types/wallet";
import {RatedWallet} from "../modules/wallet/types/rated.wallet";
import {CurrencyPair} from "../shared/model/currency.pair";
import {Ticker} from "../shared/model/ticker";
import {Http} from "@angular/http";


@Injectable()
export class WalletService {


    private WALLET_URL = 'http://localhost:9090/api/zakchange/rest/v1/account/kraken/wallets';
    private TICKER_URL = 'http://localhost:9090/api/zakchange/rest/v1/market/kraken/rates?p=';


    constructor(protected http: Http) {
    }

    public getWallets(): Observable<Wallet[]> {
        return this.http.get(this.WALLET_URL).map(res => res.json().map(wallet => new Wallet(wallet)));
    }

    public getRatedWallets(): Observable<RatedWallet[]> {
        return this.http.get(this.WALLET_URL).map(res => res.json().map(wallet => RatedWallet.of(wallet)));
    }


    public getTickers(currencyPairs: CurrencyPair[]): Observable<Map<string, Ticker>> {
        let pairs = currencyPairs.map(p => p.toString())
        return Observable.interval(10000).startWith(0)
            .switchMap((curInterval) => this.http.get(this.TICKER_URL + pairs)
                .map(res => {
                    return res.json();
                }))
    }

}

