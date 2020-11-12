import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LimitsService } from '@app/pages/limits/limits.service'
import { Limit } from '@app/dto/limits';
import { AppRoutingService } from '@app/routing/app-routing.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoggingService, AuthorizationService } from '@app/core/services';
// import {
//   DateAdapter,
//   MAT_DATE_FORMATS,
//   MAT_DATE_LOCALE,
// } from '@angular/material/core';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { HttpResponse } from '@angular/common/http';
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
    'pair',
    'limit',
    'amount',
    'percentage',
    'net',
    'netequivalent',
    'netavgrate',
    'buy',
    'buyequivalent',
    'buyavgrate',
    'sell',
    'sellequivalent',
    'sellavgrate',
    'who',
    'when'
  ];

  dataSource: MatTableDataSource<Limit>;
  showProgressBar: boolean = true;
  form: FormGroup;
  expandedRow: Limit | null;
  newAmount: number;
  newPercentage: number;
  panelOpenState: boolean = false;
  constructor(
    private limitsService: LimitsService,
    private appRoutingService: AppRoutingService, private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      limitFormControl: ['', Validators.required]
    })
  }

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

  edit(limit: Limit): Limit {
    this.form.controls['limitFormControl'].setValue(limit.limit);
    this.newAmount = limit.remainingLimitAmount;
    this.newPercentage = limit.remainingLimitPercentage;
    return this.expandedRow = this.expandedRow === limit ? null : limit;
  }

  updateLimit(limit: Limit): Limit {
    return this.expandedRow = this.expandedRow === limit ? null : limit;
  }

  onChange(value: any): void {
    var newLimit = Number.parseInt(value.replaceAll(" ", ""));

    var newRemaining = -1 * newLimit + 75000;
    this.newAmount = newRemaining;
    var newPercentage = -1 * (newLimit - 75000) * 100 / newLimit;
    this.newPercentage = newPercentage;
  }
}
