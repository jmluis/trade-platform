import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from '@modules/dashboard/models';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'sb-dashboard-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-cards.component.html',
    styleUrls: ['dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {
    private destroyed$ = new Subject();
    @Input() stockList!: Observable<Stock[]>;
    @Input() currentStock!: Observable<Stock>;
    @Output() clickedCard = new EventEmitter<Stock>();

    getStockList$() {
        return this.stockList;
    }

    private _stocks!: Stock[];
    private _stock!: Stock;

    constructor() {}
    ngOnInit() {
        this.stockList.subscribe(stonks => {
            this._stocks = stonks;
        });
        this.currentStock.subscribe(stock => {
            this._stock = stock;
        })
    }

    getBackground(stk: Stock) {
        if (this._stock === undefined)
            return 'bg-primary';
        if (stk.companySymbol === this._stock.companySymbol)
            return 'bg-primary';
        else
            return 'bg-secondary';
    }

    handleClick(stk: Stock) {
        this.clickedCard.emit(stk);
        this._stock = stk;
    }
}
