import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Stock } from '@modules/dashboard/models/stock.model';
import { StockService } from '@modules/dashboard/services/stock.service';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'sb-dashboard-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-charts.component.html',
    styleUrls: ['dashboard-charts.component.scss'],
})
export class DashboardChartsComponent implements OnInit {
    @Input() stock!: Stock;

    constructor() {}
    ngOnInit() {}
}
