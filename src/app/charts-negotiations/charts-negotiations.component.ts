import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ChartComponent,
} from 'ng-apexcharts';
import { round } from '../dashboard/data';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  legend: ApexLegend;
  titles: ApexTitleSubtitle;
  fill: ApexFill;
  colors: any[];
  tooltip: ApexTooltip
}

@Component({
  selector: 'app-charts-negotiations',
  templateUrl: './charts-negotiations.component.html',
  styleUrls: ['./charts-negotiations.component.css']
})
export class ChartsNegotiationsComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'radialBar',
        height: 350,
        width: 380,
      },
      plotOptions: {
        radialBar: {
          inverseOrder: true,
          hollow: {
            margin: 5,
            size: '48%',
            background: 'transparent',
    
          },
          track: {
            show: false,
          },
          startAngle: -180,
          endAngle: 180
    
        },
      },
      stroke: {
        lineCap: 'round'
      },
      series: [71, 63, 77],
      labels: ['June', 'May', 'April'],
      legend: {
        show: true,
        floating: true,
        position: 'right',
        offsetX: 70,
        offsetY: 240
      },
    }
   }

  ngOnInit() {
  }

}