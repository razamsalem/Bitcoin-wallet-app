import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent {

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    scales: {
      r: {
        ticks: {
          display: false
        }
      }
    }
  };

  public radarChartLabels: string[] = ['Market Sentiment', 'Volatility', 'Transaction Volume', 'Market Cap', 'Mining Power', 'Adoption', 'Security'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [70, 50, 80, 90, 60, 75, 85], label: 'Last Month' },
    { data: [40, 70, 60, 80, 50, 90, 75], label: 'This Month' },
  ];

  constructor() {
  }
}
