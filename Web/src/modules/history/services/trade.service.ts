import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trade } from '@modules/history/models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TradeService {
    private readonly url = '/api/trade/';
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _trades$ = new BehaviorSubject<Trade[]>([]);

    get trades$() {
        return this._trades$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }

    constructor(private httpClient: HttpClient) {}

    createBuyOrder(trade: Trade) {
        return this.httpClient.post<Trade>(this.url, trade).pipe(
            tap(response=> {
                console.log('we heard back!')
                console.log(response)
            })
        );
    }

    createSellOrder() {
        console.log('smiley 😄');
    }

    fetchAllTrades() {
        return this.httpClient.get<Trade[]>(this.url).pipe(
            tap(response => {
                this._trades$.next(response);
            })
        );
    }

    fetchTradesByTicker(stock: string) {
        return this.httpClient.get<Trade[]>(this.url + 'ticker/' + stock).pipe(
            tap(response => {
                this._trades$.next(response);
            })
        );
    }

    fetchTradesByStatus(status: string) {
        return this.httpClient.get<Trade[]>(this.url + 'status/' + status).pipe(
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
