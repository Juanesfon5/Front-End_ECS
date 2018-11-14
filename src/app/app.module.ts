import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from "./components/login/login.component";
import { FormSectionComponent } from "./components/form-section/form-section.component";
import { PeopleSectionComponent } from "./components/people-section/people-section.component";
import { CodeManagementComponent } from "./components/code-management/code-management.component";
import { CensusMetricsComponent } from "./components/census-metrics/census-metrics.component";
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';

//Libreria de diseño de formulario

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FormSectionComponent,
    PeopleSectionComponent,
    CodeManagementComponent,
    CensusMetricsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
