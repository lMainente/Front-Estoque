import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {
  productForm!: FormGroup;
  categoria: any;
  id: any;
  product: any;
  Nome: any;
  Preco: any;
  Descricao: any;
  Quantidade: any;
  Categoria: any;

  
  constructor(
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private http: HttpClient
  ) {}

  ngOnInit(): void {
   
      this.categoria = this.route.snapshot.params['categoria'];
      this.id = this.route.snapshot.params['id'];
  
      this.http.get(`http://localhost:8000/api/itens-estoque/${this.categoria}/${this.id}`).
      subscribe((product: any) => {
      console.log(product[0].Nome) 
      
      this.Nome = product[0].Nome;
      this.Preco = product[0].Preco;
      this.Descricao = product[0].Descricao;
      this.Quantidade = product[0].Quantidade;
      this.Categoria = product[0].Categoria

      this.productForm = this.formBuilder.group({
          Nome: [product.Nome, Validators.required],
          Preco: [product.Preco,  Validators.required],
          Descricao: [product.Descricao, Validators.required],
          Quantidade: [product.Quantidade, Validators.required],
          Piscinas: [this.categoria === 'piscina'],
          Saunas: [this.categoria === 'sauna'],
          Outros: [this.categoria === 'outro'],
          Categoria: [this.Categoria] 
        });
        
        this.productForm.setValue({
          Nome: this.Nome,
          Preco: this.Preco,
          Descricao: this.Descricao,
          Quantidade: this.Quantidade,
          Categoria: this.Categoria,
          Piscinas: this.categoria === 'piscina' ? true : false,
          Saunas: this.categoria === 'sauna',
          Outros: this.categoria === 'outro',
          
        })
      });
    }
   
  onSubmit(): void {
   
  }

  getCategoriaSelecionada(): string {
    if (this.productForm.value.Piscinas) {
      return 'Piscina';
    } else if (this.productForm.value.Saunas) {
      return 'Sauna';
    } else if (this.productForm.value.Outros) {
      return 'Outro';
    } else {
      return '';
    }
  }
}