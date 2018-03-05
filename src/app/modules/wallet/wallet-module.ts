import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyBalanceBoxComponent } from './components/currency-balance-box/currency-balance-box.component';
import { WalletService } from "../../_services/wallet.service";

@NgModule({
    providers: [WalletService],
    imports: [CommonModule],
    declarations: [CurrencyBalanceBoxComponent],
    exports: [CurrencyBalanceBoxComponent]

})
export class WalletModule {
}
