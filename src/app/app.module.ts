import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@app/app.component';
import { PagesModule } from '@pages/pages.module';
// import  ukrainian  from '@angular/common/locales/ru-UA'
import { AppRoutingModule } from '@app/routing/app-routing.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';

const appearance : MatFormFieldDefaultOptions= {
  appearance : 'outline'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue : appearance
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// registerLocaleData(ukrainian, 'ru-UA');
