/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
    AfterViewInit,
    Component,
    DebugElement,
    ElementRef,
    OnDestroy,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';


/** @title Monitoring autofill state with AutofillMonitor */
@Component({
    selector: '',
    templateUrl: ['./dashboard-trades.component.html'],
    styleUrls: ['./dashboard-trades.component.css']
})
export class DashboardTradesComponent implements AfterViewInit, OnDestroy {
    @ViewChild('quantity', { read: ViewContainerRef }) quantity: ElementRef<HTMLElement>;
    @ViewChild('price', { read: ViewContainerRef }) price: ElementRef<HTMLElement>;
    quantityAutofilled: boolean | undefined;
    priceAutofilled: boolean | undefined;

    toggleOptions: Array<String> = ["Buy", "Sell"]
    selectedValue: String[] = ["First"]

    constructor(private _autofill: AutofillMonitor) {}

    ngAfterViewInit() {
        this._autofill
            .monitor(this.quantity)
            .subscribe(e => (this.firstNameAutofilled = e.isAutofilled));
        this._autofill
            .monitor(this.price)
            .subscribe(e => (this.lastNameAutofilled = e.isAutofilled));
    }

    ngOnDestroy() {
        this._autofill.stopMonitoring(this.quantity);
        this._autofill.stopMonitoring(this.price);
    }
}

describe('DashboardTradesComponent', () => {
    let component: DashboardTradesComponent;
    let fixture: ComponentFixture<DashboardTradesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardTradesComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardTradesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
