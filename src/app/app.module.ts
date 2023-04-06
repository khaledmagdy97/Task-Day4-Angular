import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "students", component: StudentsComponent },
  { path: "student/:id", component: DetailsComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    HomeComponent,
    ErrorComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
