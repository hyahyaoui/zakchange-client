import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutModule} from '../../layouts/layout.module';
import {DefaultComponent} from "../default/default.component";
import {WalletDashboardComponent} from "./wallet/wallet.dashboard.component";
import {WalletModule} from "../../../modules/wallet/wallet-module";

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': 'wallet',
                'component': WalletDashboardComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        WalletModule,
    ], exports: [
        RouterModule
    ], declarations: [
        WalletDashboardComponent,
    ],
})
export class DashboardModule {
}