/* tslint:disable:no-unused-variable */
import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { TradeService } from './trade.service';

describe('TradeService', () => {
  let tradeService: TradeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [TradeService, DecimalPipe],
    });
    tradeService = TestBed.inject(TradeService);
});

  describe('trades$', () => {
    it('should return Observable<Trade[]>', () => {
        tradeService.trades().subscribe((response: any) => {
          expect(response).toBeDefined();
        });
    });
});
});
