import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormSectionComponent } from './components/form-section/form-section.component';
import { PeopleSectionComponent } from './components/people-section/people-section.component';
import { CodeManagementComponent } from './components/code-management/code-management.component';
import { CensusMetricsComponent } from './components/census-metrics/census-metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FormSectionComponent,
    PeopleSectionComponent,
    CodeManagementComponent,
    CensusMetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
