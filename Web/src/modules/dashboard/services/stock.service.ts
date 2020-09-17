import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { stocks } from '../../../data/stocks';
import { Stock } from '../models/stock.model';

@Injectable({ providedIn: 'root' })
export class StockService {
    private readonly url = '/api/stock/';
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _stock$ = new BehaviorSubject<Stock>({ name: '🎈' });

    get stock$() {
        return this._stock$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }

    constructor(private httpClient: HttpClient) {}

    createBuyOrder() {
        console.log('smiley ');
    }

    createSellOrder() {
        console.log('smiley ');
    }

    fetchStock(symbol: string): Observable<any> {
        return this.httpClient.get<any>(this.url + symbol).pipe(
            tap(response => {
                this._stock$.next(response);
            })
        );
    }
}
