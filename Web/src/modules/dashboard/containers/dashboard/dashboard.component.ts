import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Stock } from '@modules/dashboard/models/stock.model';
import { StockService } from '@modules/dashboard/services/stock.service';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    currentStock: Stock = { name: '🎈' };
    curStockTicker = 'AAPL';

    constructor(private stockService: StockService) {

    }
    ngOnInit() {
        this.getStockData();
    }

    getStockData() {
        this.currentStock = this.stockService.fetchStock(this.curStockTicker);
    }
}
