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

//Libreria de diseño de formulario

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
    ArrayTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyBootstrapModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
