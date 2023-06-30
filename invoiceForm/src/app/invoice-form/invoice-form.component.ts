import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      issuer: this.fb.group({
        name: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        postalCode: ['', Validators.required],
        taxId: ['', Validators.required],
        bankAccount: ['', Validators.required]
      }),
      customer: this.fb.group({
        name: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        postalCode: ['', Validators.required],
        taxId: ['']
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
}

