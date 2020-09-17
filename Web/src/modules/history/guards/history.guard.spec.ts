import { TestBed } from '@angular/core/testing';

import { HistoryGuard } from './history.guard';

describe('Tistory Guards', () => {
    let historyGuard: HistoryGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [HistoryGuard],
        });
        historyGuard = TestBed.inject(HistoryGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            historyGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
