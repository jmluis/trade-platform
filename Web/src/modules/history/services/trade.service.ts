import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trade } from '@modules/history/models';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';

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
            tap(response=> {}), 
            catchError(this.handleError<any>('Error Adding Trade'))
        );
    }
    
    fetchAllTrades() {
        return this.httpClient.get<Trade[]>(this.url).pipe(
            tap(response => {
                this._trades$.next(response);
            }), 
            catchError(this.handleError<any>('fetchAllTrades'))
        );
    }

    fetchTradesByTicker(stock: string) {
        return this.httpClient.get<Trade[]>(this.url + 'ticker/' + stock).pipe(
            tap(response => {
                this._trades$.next(response);
            }),
            catchError(this.handleError<any>('fetchTradesByTicker'))
        );
    }

    fetchTradesByStatus(status: string) {
        return this.httpClient.get<Trade[]>(this.url + 'status/' + status).pipe(
            tap(response => {
                this._trades$.next(response);
            }),
            catchError(this.handleError<any>('fetchTradesByStatus'))
        );
    }

    fetchTradeById(id: string): Observable<any> {
        return this.httpClient.get<any>(this.url + id).pipe(
            tap(response => {
                this._trades$.next(response);
            }),
            catchError(this.handleError<any>('fetchTradeById'))
        );
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.log(error);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
