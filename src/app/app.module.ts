import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from "./components/login/login.component";
import { FormSectionComponent } from "./components/form-section/form-section.component";
import { PeopleSectionComponent } from "./components/people-section/people-section.component";
import { CodeManagementComponent } from "./components/code-management/code-management.component";
import { CensusMetricsComponent } from "./components/census-metrics/census-metrics.component";
import { FormsModule } from "@angular/forms";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { ArrayTypeComponent } from "./array.type";
import { HttpClientModule } from "@angular/common/http";

//Libreria de diseño de formulario
//Servicios
import { UserService } from "./services/user.service";
import { AnalistService } from "./services/analist.service";
import { CollectorService } from "./services/collector.service";
import { FormService } from "./services/form.service";
import { GeneralService } from "./services/general.service";

//Manejo de cookies
import { CookieService } from "angular2-cookie/services/cookies.service";
import { LoginAnalistComponent } from "./components/login-analist/login-analist.component";
import { LoginCollectorComponent } from "./components/login-collector/login-collector.component";
import { FormSection2Component } from "./components/form-section2/form-section2.component";
import { FormSection3Component } from "./components/form-section3/form-section3.component";
import { FormSection4Component } from "./components/form-section4/form-section4.component";

//Animacion
import { NgxSpinnerModule } from "ngx-spinner";

//Graficador
import { ChartsModule } from "ng2-charts";

export function minlengthValidationMessage(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field) {
  return `This value should be less than ${
    field.templateOptions.maxLength
  } characters`;
}

export function minValidationMessage(err, field) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.max}`;
}

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
    HomePageComponent,
    ArrayTypeComponent,
    LoginAnalistComponent,
    LoginCollectorComponent,
    FormSection2Component,
    FormSection3Component,
    FormSection4Component
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyBootstrapModule,
    NgxSpinnerModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: "required", message: "This field is required" },
        { name: "minlength", message: minlengthValidationMessage },
        { name: "maxlength", message: maxlengthValidationMessage },
        { name: "min", message: minValidationMessage },
        { name: "max", message: maxValidationMessage }
      ],
      types: [
        { name: "string", extends: "input" },
        {
          name: "number",
          extends: "input",
          defaultOptions: {
            templateOptions: {
              type: "number"
            }
          }
        },
        {
          name: "integer",
          extends: "input",
          defaultOptions: {
            templateOptions: {
              type: "number"
            }
          }
        },
        { name: "object", extends: "formly-group" },
        { name: "boolean", extends: "checkbox" },
        { name: "array", component: ArrayTypeComponent },
        { name: "enum", extends: "select" }
      ]
    })
  ],
  providers: [
    CookieService,
    UserService,
    AnalistService,
    CollectorService,
    FormService,
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
