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

    private destroyed$ = new Subject();
    private trade$ = new BehaviorSubject<Trade[]>([]);

    getTrades(): Observable<Trade[]> {
        return this.trade$.asObservable();
    }

    constructor(private tradeService: TradeService) {}

    ngOnInit() {
        console.log("initializing dashboard history comp1")
        this.tradeService
            .fetchAllTrades()
            .pipe(takeUntil(this.destroyed$))
            .subscribe(trade => {
                console.log('??')
                console.log(trade)
                this.trade$.next(trade);
            });
    }
}
