import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardsComponent } from './widgets/cards/cards.component';
import { PiechartComponent } from './widgets/piechart/piechart.component';
import { TableComponent } from './widgets/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { StreamComponent } from './widgets/stream/stream.component';
import { WeirdComponent } from './widgets/weird/weird.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AreaComponent,
    CardsComponent,
    PiechartComponent,
    TableComponent,
    StreamComponent,
    WeirdComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AreaComponent,
    CardsComponent,
    PiechartComponent,
    TableComponent,
    StreamComponent,
    WeirdComponent
  ]
})
export class SharedModule { }
