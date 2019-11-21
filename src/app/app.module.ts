import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AngularFireModule } from '@angular/fire';
import {firebaseConfig} from "../environments/environment";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CsvExporterComponent } from './components/csv-exporter/csv-exporter.component';
import { PdfExporterComponent } from './components/pdf-exporter/pdf-exporter.component';
import { AltaVehiculoComponent } from './components/alta-vehiculo/alta-vehiculo.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CsvExporterComponent,
    PdfExporterComponent,
    AltaVehiculoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,MatIconModule,MatCardModule,MatButtonModule,MatProgressSpinnerModule,MatInputModule,MatFormFieldModule,MatSelectModule,MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
