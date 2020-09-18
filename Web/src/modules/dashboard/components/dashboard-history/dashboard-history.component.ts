import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Stock } from '@modules/dashboard/models';
import { Trade } from '@modules/history/models';
import { TradeService } from '@modules/history/services';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'sb-dashboard-history',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-history.component.html',
    styleUrls: ['dashboard-history.component.scss'],
})
export class DashboardHistoryComponent implements OnInit {
    @Input() stock!: Observable<Stock>;
    private trade$ = new BehaviorSubject<Trade[]>([]);
    private _stock!: Stock;

    getTrades(): Observable<Trade[]> {
        return this.trade$.asObservable();
    }

    constructor(private tradeService: TradeService) {}

    ngOnInit() {
        this.stock.subscribe(stock => {
            this._stock = stock;
            this.tradeService
                .fetchTradesByTicker(this._stock.companySymbol)
                .pipe()
                .subscribe(trades => {
                    this.trade$.next(trades);
                });
        });
    }
}
