import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatExpansionModule, MatSortModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/core/about/about.component';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { IgracComponent } from './components/igrac/igrac.component';
import { LigaComponent } from './components/liga/liga.component';
import { NacionalnostComponent } from './components/nacionalnost/nacionalnost.component';
import { TimComponent } from './components/tim/tim.component';

import {MatPaginatorModule, MatDialogModule, MatDatepickerModule} from '@angular/material';
import {MatInputModule,MatSnackBarModule,MatCheckboxModule,MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {enableProdMode} from '@angular/core';



import { NacionalnostDialogComponent } from './components/dialogs/nacionalnost-dialog/nacionalnost-dialog.component';
import { TimDialogComponent } from './components/dialogs/tim-dialog/tim-dialog.component';
import { IgracDialogComponent } from './components/dialogs/igrac-dialog/igrac-dialog.component';
import { LigaDialogComponent } from './components/dialogs/liga-dialog/liga-dialog.component';
import { NacionalnostService } from './services/nacionalnost.service';
import { LigaService } from './services/liga.service';
import { TimService } from './services/tim.service';
import { IgracService } from './services/igrac.service';

const Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'author', component: AuthorComponent},
  { path: 'igrac', component: IgracComponent},
  { path: 'liga', component: LigaComponent},
  { path: 'nacionalnost', component: NacionalnostComponent},
  { path: 'tim', component: TimComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AuthorComponent,
    IgracComponent,
    LigaComponent,
    NacionalnostComponent,
    TimComponent,
    NacionalnostDialogComponent,
    TimDialogComponent,
    IgracDialogComponent,
    LigaDialogComponent
    
  ],
  
  imports: [
    RouterModule.forRoot(Routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
    MatGridListModule, MatExpansionModule, MatSortModule, MatTableModule,
    MatToolbarModule, MatSelectModule, MatOptionModule,
    HttpClientModule,
    MatSnackBarModule,
    MatPaginatorModule, MatDialogModule, MatInputModule, MatDatepickerModule,
    MatCheckboxModule, MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  entryComponents: [NacionalnostDialogComponent, LigaDialogComponent, TimDialogComponent, IgracDialogComponent],
  providers: [NacionalnostService, LigaService, TimService, IgracService],
  bootstrap: [AppComponent]
})
export class AppModule { }
