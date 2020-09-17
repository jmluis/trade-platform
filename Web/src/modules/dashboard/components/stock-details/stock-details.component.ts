import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-stock-details',
    templateUrl: './stock-details.component.html',
    styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}