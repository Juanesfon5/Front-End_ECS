import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FormSectionComponent } from "./components/form-section/form-section.component";
import { LoginAnalistComponent } from "./components/login-analist/login-analist.component";
import { CensusMetricsComponent } from "./components/census-metrics/census-metrics.component";
import { LoginCollectorComponent } from "./components/login-collector/login-collector.component";
import { CodeManagementComponent } from "./components/code-management/code-management.component";
const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "Form1",
    component: FormSectionComponent
  },
  {
    path: "loginAnalist",
    component: LoginAnalistComponent
  },
  {
    path: "CensusMetrics",
    component: CensusMetricsComponent
  },
  {
    path: "loginCollector",
    component: LoginCollectorComponent
  },
  {
    path: "codeManagement",
    component: CodeManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
