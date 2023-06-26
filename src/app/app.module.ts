import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './login/login.component';
import { EstoqueComponent } from './screens/estoque/estoque.component';
import { AdicionarProdutoComponent } from './screens/estoque/adicionar-produto/adicionar-produto.component';
import { ListagemProdutosComponent } from './screens/estoque/listagem-produtos/listagem-produtos.component';
import { EditarProdutosComponent } from './screens/estoque/editar-produtos/editar-produtos.component';
import { EditarDestaquesComponent } from './screens/estoque/editar-destaques/editar-destaques.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EstoqueComponent,
    AdicionarProdutoComponent,
    ListagemProdutosComponent,
    EditarProdutosComponent,
    EditarDestaquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
