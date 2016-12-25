import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { ROUTER_CONFIG } from './app.routes';
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(ROUTER_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
