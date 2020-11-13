import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LimitsService } from '@app/pages/limits/limits.service'
import { Limit } from '@app/dto/limits';
import { AppRoutingService } from '@app/routing/app-routing.service';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-limits',
  templateUrl: './limits-list.component.html',
  styleUrls: ['./limits-list.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
    ]),
  ],
})
export class LimitsListComponent implements OnInit {
  displayedColumns: string[] = [
    'avatar',
    'userName',
    'name',
    'value',    
    'remainingValue',
    'who',
    'when'
  ];

  dataSource: MatTableDataSource<Limit>;
  showProgressBar: boolean = true;

  constructor(
    private limitsService: LimitsService,
    private appRoutingService: AppRoutingService) { }

  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    this.limitsService
      .getLimits().subscribe(limits => {

        this.dataSource = new MatTableDataSource(limits);
        this.showProgressBar = false;
      });
  }

  goToMain() {
    this.appRoutingService.goToMain();
  }
}