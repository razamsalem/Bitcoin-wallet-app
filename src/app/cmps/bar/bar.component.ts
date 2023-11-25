import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']  ,
    datasets: [
      { data: [30000, 32000, 31000, 33000, 34000, 32000, 35000], label: 'Bitcoin Price' },
      { data: [20000, 22000, 21000, 24000, 23000, 22000, 25000], label: 'Transaction Volume' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor() {}
}
