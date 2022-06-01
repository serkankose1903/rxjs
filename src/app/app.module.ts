import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateTimeComponent } from './lib/components/date-time/date-time.component';
import { appReducer } from './lib/store/app.state';
import { environment } from '../environments/environment';
import { UserDetailComponent } from './lib/components/user-detail/user-detail.component';
import { UserListComponent } from './lib/components/user-list/user-list.component';
import { LastViewComponent } from './lib/components/last-view/last-view.component';
import { HeaderComponent } from './lib/components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    DateTimeComponent,
    UserDetailComponent,
    UserListComponent,
    LastViewComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
