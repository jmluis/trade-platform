import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PipeTransform } from '@angular/core';
import { TRADES } from '@modules/history/data/trades';
import { SortDirection } from '@modules/history/directives';
import { Trade } from '@modules/history/models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

interface State {
  page: number;
  pageSize: number;
//  searchTerm: string;
//  sortColumn: string;
}


@Injectable({ providedIn: 'root' })
export class TradeService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _trades$ = new BehaviorSubject<Trade[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

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
    console.log('smiley 😄')
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
}
