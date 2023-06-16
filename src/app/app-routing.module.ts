import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { MetodosComponent } from "./pages/metodos/metodos.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'metodos', component: MetodosComponent},
  { path:'', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
