import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloggersComponent } from './components/bloggers/bloggers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BloggerEditComponent } from './components/blogger-edit/blogger-edit.component';

const appRoutes: Routes = [
  { path: '', component: BloggersComponent },
  { path: 'edit/:id', component: BloggerEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BloggersComponent,
    NavbarComponent,
    BloggerEditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
