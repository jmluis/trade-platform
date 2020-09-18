import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/history/directives';
import { Trade } from '@modules/history/models';
import { TradeService } from '@modules/history/services/trade.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-ng-bootstrap-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './ng-bootstrap-table.component.html',
    styleUrls: ['ng-bootstrap-table.component.scss'],
})
export class NgBootstrapTableComponent implements OnInit {
    @Input() pageSize = 4;
    @Input() trades$!: Observable<Trade[]>;

    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;

    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    getTrades$() {
        return this.trades$;
    }
    
    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {}

    onSort({ column, direction }: SortEvent) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.changeDetectorRef.detectChanges();
    }
}

