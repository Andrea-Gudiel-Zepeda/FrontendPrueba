import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http'
import { ConnectUrlService } from './services/connect-url.service';
import { PublicationComponent } from './components/publication/publication.component';
import { PublicationFormComponent } from './components/publication-form/publication-form.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PublicationComponent,
    PublicationFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ConnectUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
