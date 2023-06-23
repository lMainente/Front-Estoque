import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './login/login.component';
import { EstoqueComponent } from './screens/estoque/estoque.component';
import { AdicionarProdutoComponent } from './screens/estoque/adicionar-produto/adicionar-produto.component';
import { ListagemProdutosComponent } from './screens/estoque/listagem-produtos/listagem-produtos.component';
import { EditarProdutosComponent } from './screens/estoque/editar-produtos/editar-produtos.component';
import { EditarDestaquesComponent } from './screens/estoque/editar-destaques/editar-destaques.component';

const routes: Routes = [

  {path:"home",
    component: HomeComponent},

  {path:"login",
    component: LoginComponent},

  {path:"estoque",
    component: EstoqueComponent}, 

  {path:"AdicionarProduto",
    component: AdicionarProdutoComponent},
    
  {path:"listagemProdutos",
    component: ListagemProdutosComponent},
  
  {path:"editarProdutos",
    component: EditarProdutosComponent}, 
    
  {path:"gerenciarDestaques",
    component: EditarDestaquesComponent,}   
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
