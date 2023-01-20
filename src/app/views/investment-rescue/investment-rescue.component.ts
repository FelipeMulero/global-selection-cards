import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { Investment } from 'src/app/shared/models/investment';
import { InvestmentService } from 'src/app/shared/services/investment.service';
import { ModalRescueComponent } from 'src/app/shared/components/modal-rescue/modal-rescue.component';

@Component({
  selector: 'app-investment-rescue',
  templateUrl: './investment-rescue.component.html',
  styleUrls: ['./investment-rescue.component.scss']
})
export class InvestmentRescueComponent implements OnInit {

  listaInvestimentos: Array<Investment> = []
  investimento: Investment;
  resgate: Array<number> = [];
  saldosAcumulados: Array<number> = [];
  params: any;

  constructor(private service: InvestmentService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
      this.params = params;
      this.listInvestment();
    });
  }

  listInvestment() {
    this.service.searchInvestment().subscribe((response: any) => {
      this.listaInvestimentos = response.response.data.listaInvestimentos;

      for (let i = 0; i < this.listaInvestimentos.length; i++) {
        let inv = this.listaInvestimentos[i];
        if (inv.nome === this.params.nome) {
          this.investimento = inv;
          break;
        }
      }

      this.calculateValueAccumulated();
    })
  }


  calculoResgate(): number {
    let soma: number = 0;
    this.resgate.forEach(r => {
      soma += Number(r);
    })

    return soma;
  }

  temErroResgate(ind: number): boolean {
    return this.resgate[ind] > this.saldosAcumulados[ind];
  }

  calculateValueAccumulated() {
    this.saldosAcumulados = [];
    this.investimento.acoes.forEach(acao => {
      const saldoAcumulado = this.investimento.saldoTotal * acao.percentual / 100;
      this.saldosAcumulados.push(saldoAcumulado);
    })
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalRescueComponent, {
      data: {
        investimento: this.investimento,
        saldosAcumulados: this.saldosAcumulados,
        resgate: this.resgate
      }
    });
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response.sucesso) {
        this.backFromList();
      }
    });
  }

  backFromList(): void {
    this.router.navigate(['/list']);
  }
}
