import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkemakprComponent } from './skemakpr/skemakpr.component';
import { DetailkprComponent } from './detailkpr/detailkpr.component';
import { FormkprComponent } from './formkpr/formkpr.component';

@NgModule({
  declarations: [
    AppComponent,
    SkemakprComponent,
    DetailkprComponent,
    FormkprComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
