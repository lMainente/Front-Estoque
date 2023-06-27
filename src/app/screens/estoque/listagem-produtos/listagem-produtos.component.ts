import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent {
  itensEstoque: any[] = [];
  idProduto: any;

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.getItensEstoque();
    
   
  }

  getItensEstoque(): void {
    this.http.get<any[]>('http://localhost:8000/api/itens-estoque/piscina')
      .subscribe(
        response => {
          console.log(response)
          this.itensEstoque = response;
     
        },
        error => {
          console.error('Erro ao obter itens de estoque:', error);
        }
      );
  }



}
