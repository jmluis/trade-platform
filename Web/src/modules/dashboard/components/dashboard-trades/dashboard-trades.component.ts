import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-trades',
    templateUrl: './dashboard-trades.component.html',
    styleUrls: ['./dashboard-trades.component.scss'],
})
export class DashboardTradesComponent implements OnInit {
    constructor() {}

    onValChange(value: any) {
        console.log(value);
    }

    addTrade(){
        const quantity = parseFloat(( < HTMLInputElement > document.getElementById("quantity")).value);
        const price = parseFloat(( < HTMLInputElement > document.getElementById("price")).value);
    }
    ngOnInit() {}
}
