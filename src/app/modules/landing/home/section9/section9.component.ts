import { Component } from '@angular/core';

@Component({
  selector: 'app-section9',
  templateUrl: './section9.component.html',
  styleUrls: ['./section9.component.scss']
})
export class Section9Component {
    yearlyBilling: boolean = true;

    
  planPeriod: 'mensual' | 'anual' = 'mensual';

  prices = {
    basico: {
      mensual: 33,
      anual: 29, // 20% descuento por anual
    },
    pro: {
      mensual: 57,
      anual: 49, // sin descuento, se factura 1500 en total
      anualFacturado: 1500,
    },
    enterprise: {
      mensual: 69,
      anual: 59, // 15% descuento por anual (ejemplo)
      anualFacturado: 2550, // podría ser distinto al cálculo para mostrar facturado
    },
  };

  setPlanPeriod(period: 'mensual' | 'anual') {
    this.planPeriod = period;
  }
}
