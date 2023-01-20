import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-rescue',
  templateUrl: './modal-rescue.component.html',
  styleUrls: ['./modal-rescue.component.scss']
})
export class ModalRescueComponent implements OnInit {

  sucesso: boolean;
  noRescuePermissions: Array<{
    acao: string,
    valor: number
  }> = [];

  constructor(
    private dialogRef: MatDialogRef<ModalRescueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.verifyRescue();
  }

  verifyRescue(): void {
    for (let i = 0; i < this.data.resgate.length; i++) {
      if (this.data.resgate[i] > this.data.saldosAcumulados[i]) {
        this.noRescuePermissions.push({
          acao: this.data.investimento.acoes[i].nome,
          valor: this.data.saldosAcumulados[i]
        })

      }
    }

    this.sucesso = this.noRescuePermissions.length === 0;
  }

  closeModal(): void {
    this.dialogRef.close({sucesso: this.sucesso});
  }

}
