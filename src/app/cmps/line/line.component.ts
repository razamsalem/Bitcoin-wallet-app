import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent {
  
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: false,
        tension: 0.2,
        borderColor: '#c1d8f0',
        backgroundColor: 'rgba(193,216,240,0.3)'
      },
      {
        data: [40, 20, 45, 61, 76, 85, 60 ],
        label: 'Series B',
        fill: false,
        tension: 0.2,
        borderColor: '#00ffff',
        backgroundColor: 'rgba(850,216,240,0.3)'
      },
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  }
  public lineChartLegend = true;

  constructor() {
  }

  ngOnInit() {
  }

}
