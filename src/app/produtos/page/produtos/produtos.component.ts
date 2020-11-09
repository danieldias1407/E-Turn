import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  constructor() { }
  preco: string;
  tipo: number;
  categoria: string;

  ngOnInit(): void {
  }

  recebeCategoria(categoria) {
    this.categoria = categoria;
  }
  recebePreco(preco) {
    this.preco = preco;
  }
  recebeTipo(tipo) {
    this.tipo = tipo;
  }
}
