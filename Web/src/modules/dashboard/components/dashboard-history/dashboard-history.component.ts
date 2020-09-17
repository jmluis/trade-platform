import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Trade } from '@modules/history/models';
import { TradeService } from '@modules/history/services';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'sb-dashboard-history',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-history.component.html',
    styleUrls: ['dashboard-history.component.scss'],
})
export class DashboardHistoryComponent implements OnInit {
    private destroyed$ = new Subject();
    private trade$ = new BehaviorSubject<Trade[]>([
        {
            action: 'SELL',
            price: 1,
            quantity: 1,
            status: 'CREATED',
            stockTicker: 'C',
        },
    ]);
    constructor(private tradeService: TradeService) {}

    ngOnInit() {
        this.tradeService
            .fetchAllTrades()
            .pipe(takeUntil(this.destroyed$))
            .subscribe(trade => {
                console.log(trade);
                this.trade$.next(trade);
            });
    }
}
