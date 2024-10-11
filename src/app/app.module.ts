import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//Angular material
import { MatIconModule } from '@angular/material/icon';
import { ModalAddBookComponent } from './pages/modals/modal-add-book/modal-add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    HomeComponent,
    HeaderComponent,
    MenuBarComponent,
    ModalAddBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
