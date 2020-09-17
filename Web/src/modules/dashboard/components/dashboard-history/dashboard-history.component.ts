import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-dashboard-history',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-history.component.html',
    styleUrls: ['dashboard-history.component.scss'],
})
export class DashboardHistoryComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
