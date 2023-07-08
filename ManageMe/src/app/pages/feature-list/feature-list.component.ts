import { Component, OnInit } from '@angular/core';
import { Feature } from '../../models/feature.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {
  features: Feature[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.features = this.dataService.getFeatures();
  }

  onDeleteFeature(id: number): void {
    this.dataService.deleteFeature(id);
    this.features = this.dataService.getFeatures();
  }
}
