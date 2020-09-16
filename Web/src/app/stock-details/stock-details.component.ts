import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stocks } from '../stocks';


@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  stock
  constructor( 
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.stock = stocks[+params.get('stockId')];
    });
  }

}
