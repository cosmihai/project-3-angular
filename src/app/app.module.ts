import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
// ---PAGES-------------------------------
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SpiritsPageComponent } from './pages/spirits-page/spirits-page.component';
import { SpiritDetailsPageComponent } from './pages/spirit-details-page/spirit-details-page.component';
import { CocktailsListPageComponent } from './pages/cocktails-list-page/cocktails-list-page.component';
import { CocktailsCreatePageComponent } from './pages/cocktails-create-page/cocktails-create-page.component';
import { CocktailDetailPageComponent } from './pages/cocktail-detail-page/cocktail-detail-page.component';
import { CocktailEditPageComponent } from './pages/cocktail-edit-page/cocktail-edit-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { UserEditPageComponent } from './pages/user-edit-page/user-edit-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

// ---COMPONENTS-------------------------------------
import { CocktailItemComponent } from './components/cocktail-item/cocktail-item.component';

const routes: Routes = [
  { path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SpiritsPageComponent,
    SpiritDetailsPageComponent,
    CocktailsListPageComponent,
    CocktailsCreatePageComponent,
    CocktailDetailPageComponent,
    CocktailEditPageComponent,
    UsersPageComponent,
    UserDetailPageComponent,
    UserEditPageComponent,
    SignupPageComponent,
    LoginPageComponent,
    CocktailItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
