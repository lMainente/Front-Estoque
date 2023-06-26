import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent {
  itensEstoque: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getItensEstoque();
  }

  getItensEstoque(): void {
    this.http.get<any[]>('http://localhost:8000/api/itens-estoque/piscina')
      .subscribe(
        response => {
          this.itensEstoque = response;
        },
        error => {
          console.error('Erro ao obter itens de estoque:', error);
        }
      );
  }
}
