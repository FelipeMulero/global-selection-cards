import {Action} from "./actions";

export interface Investment {
  nome: string;
  objetivo: string;
  indicadorCarencia: string;
  saldoTotal: number;
  acoes: Array<Action>;
}
