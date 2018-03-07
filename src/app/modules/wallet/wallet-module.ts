import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyBalanceBoxComponent } from './components/balance-boxes/currency-balance-box.component';
import { WalletService } from "../../_services/wallet.service";
import {BalanceTableComponent} from "./components/balance-table/balance-table.component";

@NgModule({
    providers: [WalletService],
    imports: [CommonModule],
    declarations: [BalanceTableComponent],
    exports: [BalanceTableComponent]

})
export class WalletModule {
}
