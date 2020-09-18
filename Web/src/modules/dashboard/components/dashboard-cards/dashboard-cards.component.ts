import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Stock } from '@modules/dashboard/models';
import { StockService } from '@modules/dashboard/services';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'sb-dashboard-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-cards.component.html',
    styleUrls: ['dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {
    private destroyed$ = new Subject();



    private stock$ = new BehaviorSubject<Stock[]>([]);

    
    @Input() stock!: string;

    constructor(private stockService: StockService) {}
    ngOnInit() {
        this.stockService
            .fetchTradeables()
            .pipe(takeUntil(this.destroyed$))
            .subscribe(tradeables => {
                this.stock$.next(tradeables);
            })
    }

    onSubmit() {}
}
