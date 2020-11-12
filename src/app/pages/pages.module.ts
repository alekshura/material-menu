import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/pages/pages.module.material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import { HttpErrorHandler } from '@core/services/http-error-handler.service';
import {
  AuthorizationService,
  LoggingService,
  RequestCache,
  RequestCacheWithMap,
} from '@core/services';
import { httpInterceptorProviders } from '@core/interceptors/';

import {
  AppRoutingService,
  AppRoutingModule,
  AppRoutingGuard,
} from '@app/routing/index';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from '@pages/main/main.component';
import { LimitsListComponent } from '@pages/limits/limits-list/limits-list.component';
import { LimitsService } from '@pages/limits/limits.service';
import { SharedModule } from '@pages/shared';
import { MeComponent } from '@pages/me/me.component';
import { LogonComponent } from '@pages/logon/logon.component';
import { LogoutComponent } from '@pages/logout/logout.component';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

@NgModule({
  declarations: [
    MainComponent,
    LimitsListComponent,
    MeComponent,
    LogonComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [MainComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-UA' },
    HttpErrorHandler,
    LoggingService,
    {
      provide: RequestCache,
      useClass: RequestCacheWithMap,
    },
    AuthorizationService,
    AppRoutingService,
    AppRoutingGuard,
    LimitsService,
    httpInterceptorProviders,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: appearance },
    },
  ],
})
export class PagesModule {}
