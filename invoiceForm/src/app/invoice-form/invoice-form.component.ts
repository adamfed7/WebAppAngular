import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm!: FormGroup;

  constructor(private fb: FormBuilder) { }
  
  onSubmit() {
    console.log('Formularz został złożony');
  }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      issuer: this.fb.group({
        name: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        postalCode: ['', Validators.required],
        nip: ['', Validators.required],
        bankAccount: ['', Validators.required]
      }),
      customer: this.fb.group({
        name: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        postalCode: ['', Validators.required],
        nip: ['']
      }),
      invoiceNumber: ['', Validators.required],
      issueDate: ['', Validators.required],
      saleDate: ['', Validators.required],
      paymentDueDate: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      invoiceItems: this.fb.array([])
    });
  }

  get invoiceItems() {
    return this.invoiceForm.get('invoiceItems') as FormArray;
  }

  addItem() {
    this.invoiceItems.push(this.fb.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unit: ['', Validators.required],
      netPrice: ['', [Validators.required, Validators.min(0)]],
      vatRate: ['', Validators.required],
      netValue: [''],
      grossValue: ['']
    }));
  }
  get totalNet() {
    return this.invoiceItems.controls.reduce((sum, item) => {
      return sum + (item.value.netPrice * item.value.quantity);
    }, 0);
  }
  
  get totalVat(): number {
    const items = this.invoiceForm.get('invoiceItems') as FormArray;
    return items.controls.reduce((sum, item) => {
      const netPrice = item.get('netPrice')?.value || 0;
      const quantity = item.get('quantity')?.value || 0;
      const vatRate = this.getVatRate(item.get('vatRate')?.value) || 0;
      return sum + (netPrice * quantity * vatRate);
    }, 0);
  }
  
  get totalGross(): number {
    const items = this.invoiceForm.get('invoiceItems') as FormArray;
    return items.controls.reduce((sum, item) => {
      const netPrice = item.get('netPrice')?.value || 0;
      const quantity = item.get('quantity')?.value || 0;
      const vatRate = this.getVatRate(item.get('vatRate')?.value) || 0;
      return sum + (netPrice * quantity * (1 + vatRate));
    }, 0);
  }

  private getVatRate(vatRate: string): number {
    switch (vatRate) {
      case 'zw':
        return 0;
      case '0':
        return 0;
      case '5':
        return 0.05;
      case '8':
        return 0.08;
      case '23':
        return 0.23;
      default:
        return 0;
    }
  }
}

