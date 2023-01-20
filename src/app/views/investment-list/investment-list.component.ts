import {  Component, OnInit } from '@angular/core';
import {  InvestmentService } from "../../shared/services/investment.service";
import {  Investment  } from "../../shared/models/investment";
import {  LocalStorageService } from "../../shared/services/LocalStorage.service";
import {  Router  } from "@angular/router";

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent implements OnInit {

  listInvest: Array<Investment> = [];

  constructor(private service: InvestmentService,
              private localStorageService: LocalStorageService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.changeInvestment();
  }

  changeInvestment(): void {
    this.service.searchInvestment().subscribe((response: any) => {
      if (response.response.status === '200') {
        this.listInvest = response.response.data.listaInvestimentos;
      }
    });
  }

  setLocalStorage(inv: Investment) {
    if (inv.indicadorCarencia === 'N') {
      this.localStorageService.setStorage(inv);
      this.router.navigate(['./rescue', inv.nome]);
    }
  }
}
