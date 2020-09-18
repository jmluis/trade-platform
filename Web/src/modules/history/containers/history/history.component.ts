import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Trade } from '@modules/history/models';
import { TradeService } from '@modules/history/services';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'sb-history',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './history.component.html',
    styleUrls: ['history.component.scss'],
})
export class HistoryComponent implements OnInit {
    private trades$ = new BehaviorSubject<Trade[]>([]);
    private destroyed$ = new Subject();

    getTrades(): Observable<Trade[]> {
        return this.trades$.asObservable();
    }

    constructor(private tradeService: TradeService) {}
    ngOnInit() {
        this.tradeService
            .fetchAllTrades()
            .pipe(takeUntil(this.destroyed$))
            .subscribe(trades => {
                this.trades$.next(trades);
            });
    }
}
