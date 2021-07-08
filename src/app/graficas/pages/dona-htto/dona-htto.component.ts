import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dona-htto',
  templateUrl: './dona-htto.component.html',
  styles: [
  ]
})
export class DonaHttoComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor:[
        '#6C12FC',
        '#9A10E0',
        '#E91EF7',
        '#E01092',
        '#FC122E'
      ]
    }
  ]
  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {
    //this.graficaService.getUsuariosRedesSociales()
    //  .subscribe(data => {
    //    console.log(data);
    //    const labels = Object.keys(data);
    //    const value = Object.values(data);
    //    this.doughnutChartLabels = labels;
    //    this.doughnutChartData.push(value);
    //    console.log(value);
    //    console.log(labels);
    //  });
    this.graficaService.getUsuariosRedesDonaData()
      .subscribe(({labels, value}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(value);
      })
  }

}
