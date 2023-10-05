import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor () {
    this.label = "Metric";
    this.total = "4000";
    this.percentage = "30";
  }

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data = [65,76,32,54];

  Highcharts = Highcharts;
  areaChart:any = {
    chart: {
      type: 'area',
      backgroundColor: null,
      borderWidth: 0,
      margin: [2, 2, 2, 2],
      height: 60
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    tooltip: {
      split: true,
      outside: true
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false,
    },
    xAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickOptions: []
    },
    yAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickOptions: []
    },
    series: [{
      data: this.data
    }]
  };
}
