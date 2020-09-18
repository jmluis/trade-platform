import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Stock } from '@modules/dashboard/models/stock.model';
import { StockService } from '@modules/dashboard/services/stock.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    private destroyed$ = new Subject();
    private tradeableStocks$ = new BehaviorSubject<Stock[]>([]);
    private stock$ = new BehaviorSubject<Stock>({ companyName: '🚀', stockIndex: 'NASDAQ', companySymbol: 'TSLA'});
    curStockTicker = 'AAPL';

    constructor(private stockService: StockService) { }
    ngOnInit() {
        this.stockService
            .fetchStock(this.curStockTicker)
            .pipe(takeUntil(this.destroyed$))
            .subscribe(stock => this.stock$.next(stock));
        this.stockService
            .fetchTradeables()
            .pipe()
            .subscribe(stockList => {
                console.log(stockList)
                this.stock$.next(stockList[0]);
                this.tradeableStocks$.next(stockList);
            });
    }

    getObservableStock(): Observable<Stock> {
        return this.stock$.asObservable();
    }

    getObservableList(): Observable<Stock[]> {
        return this.tradeableStocks$.asObservable();
    }

    ngOnDestroy() {
        // todo: destroy destroyed$
    }
}
