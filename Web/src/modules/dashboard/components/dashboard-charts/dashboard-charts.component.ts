import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Stock } from '@modules/dashboard/models/stock.model';
import { StockService } from '@modules/dashboard/services/stock.service';
import { Trade } from '@modules/history/models';
import { TradeService } from '@modules/history/services';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'sb-dashboard-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-charts.component.html',
    styleUrls: ['dashboard-charts.component.scss'],
})
export class DashboardChartsComponent implements OnInit {
    @Input() stock!: Observable<Stock>;

    private _stock!: Stock;
    private _isAsk = true;
    private _stockQuantity = 0;
    private _requestPrice = 0.0;

    constructor(private tradeService: TradeService) {}
    ngOnInit() {
        this.stock.subscribe(stock => {
            this._stock = stock;
        });
    }

    onValChange(value: any) {
        console.log(value);
    }

    addTrade(bronzeAction: string) {
        /// TODO: remove this \/
        console.log(this._stock)
        this._isAsk = bronzeAction === 'ASK';
        const obj: Trade = {
            stock: this._stock,
            stockQuantity: this._stockQuantity, 
            requestPrice: this._requestPrice,
            action: this._isAsk ? 'ASK' : 'BID',
        };
        console.log(obj)
        this.tradeService.createBuyOrder(obj).subscribe(response => {
            /// TODO: check for exceptions
        });
    }
}
