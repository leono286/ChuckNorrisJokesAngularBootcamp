import { DummyService } from './dummy.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArrayItemsToLiItemsPipe } from './pipes/array-items-to-li-items.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArrayItemsToLiItemsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DummyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
