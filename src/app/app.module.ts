import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';

// ---COMPONENTS-------------------------------------
import { CocktailItemComponent } from './components/cocktail-item/cocktail-item.component';

// ----services
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CocktailService } from './services/cocktail.service';

// -- guards
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';


const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [InitAuthGuardService]},
  // { path: 'spirits', component: SpiritsPageComponent, canActivate: [InitAuthGuardService]},
  { path: 'cocktails', component: CocktailsListPageComponent, canActivate: [InitAuthGuardService]},
  { path: 'cocktails/create', component: CocktailsCreatePageComponent, canActivate: [RequireUserGuardService]},
  { path: 'cocktails/:id', component: CocktailDetailPageComponent, canActivate: [InitAuthGuardService]},
  { path: 'cocktails/:id/edit', component: CocktailEditPageComponent, canActivate: [RequireUserGuardService]},
  { path: 'users', component: UsersPageComponent, canActivate: [InitAuthGuardService]},
  { path: 'users/:id', component: UserDetailPageComponent, canActivate: [InitAuthGuardService]},
  { path: 'users/:id/edit', component: UserEditPageComponent, canActivate: [RequireUserGuardService]},
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuardService]},
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuardService]},
  { path: '**', component: NotFoundComponent }
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
    CocktailItemComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CocktailService,
    UserService,
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
