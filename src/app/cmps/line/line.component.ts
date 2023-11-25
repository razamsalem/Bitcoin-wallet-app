import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [30000, 32000, 31000, 33000, 34000, 32000, 35000],
        label: 'Bitcoin Price',
        fill: false,
        tension: 0.2,
        borderColor: '#c1d8f0',
        backgroundColor: 'rgba(193,216,240,0.3)',
      },
      {
        data: [20000, 22000, 21000, 24000, 23000, 22000, 25000],
        label: 'Transaction Volume',
        fill: false,
        tension: 0.2,
        borderColor: '#E6676B',
        backgroundColor: 'rgba(230, 102, 106,0.3)',
      },
      {
        data: [15000, 16000, 18000, 17000, 19000, 20000, 19000],
        label: 'Mining Power',
        fill: false,
        tension: 0.2,
        borderColor: '#ffcc00',
        backgroundColor: 'rgba(255,204,0,0.3)',
      },
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };

  public lineChartLegend = true;

  constructor() { }

  ngOnInit() { }
}
