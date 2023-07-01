import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  reports = ['Report 1', 'Report 2', 'Report 3'];

  constructor() { }

  ngOnInit(): void {
  }
}

