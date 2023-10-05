import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  Highcharts = Highcharts;
  areaChart:any = {
    // Data retrieved from https://netmarketshare.com
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Accident types in the workplace',
      align: 'left'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Slip',
          y: 70.67,
          sliced: true,
          selected: true
      }, {
          name: 'Fall',
          y: 14.77
      },  {
          name: 'Cut',
          y: 4.86
      }, {
          name: 'Death',
          y: 2.63
      }, {
          name: 'Infection',
          y: 1.53
      },  {
          name: 'Arson',
          y: 1.40
      }, {
          name: 'Cheese',
          y: 0.84
      }, {
          name: 'Talal',
          y: 0.51
      }, {
          name: 'Other',
          y: 2.6
      }]
  }]
};
  
}
