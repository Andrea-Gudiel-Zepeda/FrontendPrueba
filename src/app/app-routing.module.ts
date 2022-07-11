import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationComponent } from './components/publication/publication.component';
import { PublicationFormComponent } from './components/publication-form/publication-form.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'publication',
    component: PublicationComponent
  },
  {
    path: 'publication/add',
    component: PublicationFormComponent
  }, 
  {
    path: 'publication/edit/:id',
    component: PublicationFormComponent
  },  
  {
    path: 'login',
    component: LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
