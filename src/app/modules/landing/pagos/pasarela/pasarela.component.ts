import { Component } from '@angular/core';

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.component.html',
  styleUrls: ['./pasarela.component.scss']
})
export class PasarelaComponent {
  selectedPlan: string | null = null;

  plans = {
    basico: {
      name: 'Plan Básico',
      anualPrice: 29,
      mensualPrice: 33,
      methods: ['Transferencia bancaria', 'Tarjeta de crédito/débito'],
      description: 'Pago mediante transferencia bancaria o tarjeta de crédito/débito.'
    },
    gold: {
      name: 'Plan Gold',
      anualPrice: 49,
      mensualPrice: 57,
      methods: ['Tarjeta', 'PayPal', 'Transferencia bancaria'],
      description: 'Pago con tarjeta, PayPal o transferencia bancaria.'
    },
    premium: {
      name: 'Plan Premium',
      anualPrice: 59,
      mensualPrice: 69,
      methods: ['PayPal', 'Tarjeta', 'Transferencia', 'Criptomonedas'],
      description: 'Pago con todos los métodos disponibles, incluyendo PayPal, tarjeta, transferencia y criptomonedas.'
    }
  };

  selectedPaymentMethod: string | null = null;

  selectPlan(plan: string) {
    this.selectedPlan = plan;
    this.selectedPaymentMethod = null; // Reset método pago al cambiar plan
  }

  selectPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
  }

  paymentMode: 'mensual' | 'anual' = 'mensual';

}

