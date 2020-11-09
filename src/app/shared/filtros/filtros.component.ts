import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  @Output() filtroTipo = new EventEmitter<number>();
  @Output() filtroCategoria = new EventEmitter<string>();
  @Output() filtroPreco = new EventEmitter<string>();

 btnEstoque: number;
 btncategoria: string;
 btnpreco: string;
 categorias = [];
 precos = [];



  ngOnInit(): void {
    this.btnEstoque = 0;
    this.btncategoria = 'Todos';
    this.btnpreco = 'Todos';
    this.precos = ['Todos', '$', '$$', '$$$', '$$$$'];
    this.categorias = ['Todos', 'Blusa', 'Calça', 'Casaco', 'Vestido', 'Body', 'Calçados', 'Meias' ];
    this.selecionaPreco(this.btnpreco);
    this.selecionaCategoria(this.btncategoria);
    this.selecionaTipo(this.btnEstoque);
  }

  selecionaPreco(preco: string  ){
    this.filtroPreco.emit(preco);
  }
  selecionaCategoria(categoria: string  ){
    this.filtroCategoria.emit(categoria);
  }
  selecionaTipo(tipo: number){
    this.filtroTipo.emit(tipo);
  }

  limparFiltro(){
    this.btnEstoque = 0;
    this.btncategoria = 'Todos';
    this.btnpreco = 'Todos';
    this.selecionaPreco(this.btnpreco);
    this.selecionaCategoria(this.btncategoria);
    this.selecionaTipo(this.btnEstoque);
  }



}
