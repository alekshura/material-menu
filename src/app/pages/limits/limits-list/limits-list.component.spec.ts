import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitsListComponent } from './limits-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpErrorHandler } from '@app/core/services/http-error-handler.service';
import { AppRoutingService } from '@app/routing';
import { AuthorizationService } from '@app/core/services';


describe('EmployeesListComponent', () => {
  let component: LimitsListComponent;
  let fixture: ComponentFixture<LimitsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ LimitsListComponent ],
        providers: [HttpClient, HttpHandler, HttpErrorHandler, AppRoutingService, AuthorizationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
