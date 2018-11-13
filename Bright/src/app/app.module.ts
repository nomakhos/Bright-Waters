import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import {MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
   RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
