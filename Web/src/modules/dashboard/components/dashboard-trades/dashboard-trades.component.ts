import { Component, OnInit } from '@angular/core';
import { TradeService } from '@modules/history/services';

@Component({
    selector: 'app-dashboard-trades',
    templateUrl: './dashboard-trades.component.html',
    styleUrls: ['./dashboard-trades.component.scss'],
})
export class DashboardTradesComponent implements OnInit {
    constructor(private tradeService: TradeService) {}

    onValChange(value: any) {
        console.log(value);
    }

    addTrade(){
        /// see: \Web\src\modules\dashboard\components\dashboard-charts\dashboard-charts.component.ts
    }
    ngOnInit() {}
}

