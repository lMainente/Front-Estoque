import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      Nome: ['', Validators.required],
      Preco: ['', Validators.required],
      Descricao: ['', Validators.required],
      Quantidade: ['', Validators.required],
      Piscinas: [false],
      Saunas: [false],
      Outros: [false],
      Destaque: [false]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = {
        Nome: this.productForm.value.Nome,
        Categoria: this.getCategoriaSelecionada(),
        Preco: this.productForm.value.Preco,
        Descricao: this.productForm.value.Descricao,
        Quantidade: this.productForm.value.Quantidade
      };

      this.http.post('http://localhost:8000/api/itens-estoque', formData)
        .subscribe(
          response => {
            console.log('Produto criado com sucesso:', response);
              
            },
          error => {
            console.error('Erro ao criar produto:', error);
          
          }
        );
    } else {
      this.productForm.markAllAsTouched();
    }
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
