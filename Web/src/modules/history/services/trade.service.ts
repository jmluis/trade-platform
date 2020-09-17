import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trade } from '@modules/history/models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: string;
}

@Injectable({ providedIn: 'root' })
export class TradeService {
    private readonly url = 'http://localhost/api/trade/';
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _trades$ = new BehaviorSubject<Trade[]>([]);

    get trades$() {
        return this._trades$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }

    constructor(private httpClient: HttpClient) {}

    createBuyOrder() {
        console.log('smiley 😄');
    }

    createSellOrder() {
        console.log('smiley 😄');
    }

    fetchAllTrades() {
        return this.httpClient.get<any>(this.url).pipe(
            tap(response => {
                console.log(response);
                this._trades$.next(response);
            })
        );
    }

    fetchTradesByTicker(stock: string) {
        return this.httpClient.get<any>(this.url + 'ticker/' + stock).pipe(
            tap(response => {
                this._trades$.next(response);
            })
        );
    }

    fetchTradesByStatus(status: string) {
        return this.httpClient.get<any>(this.url + 'status/' + status).pipe(
            tap(response => {
                this._trades$.next(response);
            })
        );
    }

    fetchTradeById(id: string): Observable<any> {
        return this.httpClient.get<any>(this.url + id).pipe(
            tap(response => {
                this._trades$.next(response);
            })
        );
    }
}
