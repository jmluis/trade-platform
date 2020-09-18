import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Stock } from '../models/stock.model';

@Injectable({ providedIn: 'root' })
export class StockService {
    private readonly url = '/api/trade/ables/';

    private _loading$ = new BehaviorSubject<boolean>(true);
    private _tradeables$ = new BehaviorSubject<Stock[]>([]);
    private _stock$ = new BehaviorSubject<Stock>({ name: '🎈' })

    get stock$() {
        return this._stock$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get tradeables$() {
        return this._tradeables$.asObservable();
    }

    constructor(private httpClient: HttpClient) {}

    // private Observable<any> fetchTradeables() { }
    fetchTradeables(): Observable<any> {
        // make a GET request to 'this.url'
        return this.httpClient.get<any>(this.url).pipe(
            tap(response => {
                this._tradeables$.next(response);
            })
        );
    }

    
    fetchStock(symbol: string): Observable<any> {
        return this.httpClient.get<any>(this.url + symbol).pipe(
            tap(response => {
                this._stock$.next(response);
            })
        );
    }
}
