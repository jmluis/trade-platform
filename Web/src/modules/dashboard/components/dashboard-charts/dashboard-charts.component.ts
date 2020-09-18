import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Stock } from '@modules/dashboard/models';
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
    private _askStockQuantity = 0;
    private _askRequestPrice = 0.0;
    private _bidStockQuantity = 0;
    private _bidRequestPrice = 0.0;

    constructor(private tradeService: TradeService) {}
    ngOnInit() {
        this.stock.subscribe(stock => {
            this._stock = stock;
        });
    }

    onValChange(value: any) {
        console.log(value);
    }

    askTrade() {
        const obj: Trade = {
            stock: this._stock,
            stockQuantity: this._askStockQuantity, 
            requestPrice: this._askRequestPrice,
            action: 'ASK',
        };
        this.tradeService.createBuyOrder(obj).subscribe(response => {
            /// TODO: check for exceptions
        });
    }

    bidTrade() {
        const obj: Trade = {
            stock: this._stock,
            stockQuantity: this._bidStockQuantity, 
            requestPrice: this._bidRequestPrice,
            action: 'BID',
        };
        this.tradeService.createBuyOrder(obj).subscribe(response => {
            /// TODO: check for exceptions
        });
    }
}
