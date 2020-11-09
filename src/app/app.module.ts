import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/page/produtos/produtos.component';
import { FiltrosComponent } from './shared/filtros/filtros.component';
import { ItemsProdutosComponent } from './produtos/component/items-produtos/items-produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxStarsModule } from 'ngx-stars';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    FiltrosComponent,
    ItemsProdutosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgxStarsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
