import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-history',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './history.component.html',
    styleUrls: ['history.component.scss'],
})
export class HistoryComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
