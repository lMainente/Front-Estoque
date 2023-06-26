import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
        Quantidade: 10
      };

      this.http.post('http://localhost:8000/api/itens-estoque', formData)
        .subscribe(
          response => {
            console.log('Produto criado com sucesso:', response);
            // Realize as ações necessárias após o envio do formulário com sucesso
          },
          error => {
            console.error('Erro ao criar produto:', error);
            // Realize as ações necessárias em caso de erro
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
