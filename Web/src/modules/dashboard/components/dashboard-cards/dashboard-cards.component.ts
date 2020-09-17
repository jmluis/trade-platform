import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sb-dashboard-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-cards.component.html',
    styleUrls: ['dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {
    @Input() stock!: string;

    constructor() {}
    ngOnInit() {}
}
