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
<<<<<<< HEAD
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _trades$ = new BehaviorSubject<Trade[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private readonly url = '/trade/';


  private _state: State = {
    page: 1,
    pageSize: 4,
//    searchTerm: '',
//   sortColumn: '',
};


  get trades$() {
    return this._trades$.asObservable();
  }
  get total$() {
      return this._total$.asObservable();
  }
  get loading$() {
      return this._loading$.asObservable();
  }

  get page() {
    return this._state.page;
  }
  set page(page: number) {
      this._set({ page });
  }
  get pageSize() {
      return this._state.pageSize;
  }
  set pageSize(pageSize: number) {
      this._set({ pageSize });
  }
  // get searchTerm() {
  //     return this._state.searchTerm;
  // }
  // set searchTerm(searchTerm: string) {
  //     this._set({ searchTerm });
  // }
  // set sortColumn(sortColumn: string) {
  //     this._set({ sortColumn });
  // }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    //this._search$.next();
  }

 // private _search$ = new Subject<void>();

  my_trades = [ ]

  constructor(
    private http: HttpClient
  ) { }

  getTrades() {
    return this.my_trades;
  }

  createBuyOrder() {
    return this.http.get<any>(this.url).pipe(
      tap(response => {
          this._trades$.next(response);
      })
  );
  }

  createSellOrder() {
    console.log('smiley 😄')
  }

  fetchAllTrades() {
    var mmmm = this.http.get('/trade/');
    console.log(mmmm)
    return mmmm
  }

  fetchTradesByTicker(stock: string) {
    var mmmm = this.http.get('/trade/ticker/' + stock);
    console.log(mmmm)
    return mmmm
  }

  fetchTradesByStatus(status: string) {
    var mmmm = this.http.get('/trade/status/' + status);
    console.log(mmmm)
    return mmmm
  }

  fetchTradeById(id: string) {
    var mmmm = this.http.get('/trade/' + id);
    console.log(mmmm)
    return mmmm
  }
=======
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
>>>>>>> 266f9e7b1b7e7ff8d97701e8ac709ccd7b8b49fa
}
