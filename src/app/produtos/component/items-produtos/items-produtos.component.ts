import { Component, Input, OnInit, TemplateRef  } from '@angular/core';
import { ProdutoDto } from '../../dto/produto-dto';
import { ProdutoService } from '../../service/produto.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-items-produtos',
  templateUrl: './items-produtos.component.html',
  styleUrls: ['./items-produtos.component.css']
})
export class ItemsProdutosComponent implements OnInit {

  produtos: ProdutoDto[];
  listaProdutos: ProdutoDto[];
  @Input() tipo: number;
  @Input() filtroCategoria: string;
  @Input() filtroPreco: string;
  value: number;
  listaFiltro: ProdutoDto[];
  produto: ProdutoDto;
  modalRef: BsModalRef;
  estoque: boolean;
  constructor(
      private  produtoService: ProdutoService,
      private modalService: BsModalService
   ) { }


  ngOnInit(): void {
      this.inicializaCampos();
      this.recebeProdutos();
      this.calculaNotaMedia();
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(){
    if (this.listaProdutos){
        this.verificaFiltro();
    }
  }

  inicializaCampos(){
      this.produtos = new Array();
      this.listaProdutos = new Array();
      this.filtroCategoria = 'Todos';
      this.filtroPreco = 'Todos';
      this.produto = new ProdutoDto();

  }

  recebeProdutos(){
    this.produtos = this.produtoService.listarProduto();
    this.listaFiltro = this.verificaFiltro();
  }
  calculaNotaMedia(){
    this.produtos.forEach( media => {
      this.produtoService.notaMedia(media).subscribe(response => {
        media.NotaMedia = response;
        this.listaProdutos.push(media);
        this.verificaFiltro();
      });
    });
  }

  verificaFiltro(){
    this.selecionaEstoque();
    this.listaFiltro = new Array();
    if (this.tipo === 1){
        this.listaFiltro = this.listaProdutos.filter(i =>
        this.estoque === i.Disponivel);
      } else{
              if (this.tipo === 2)
              {
                this.listaFiltro = this.listaProdutos.filter(i =>
                this.estoque === i.Disponivel);
              } else {
                      this.listaFiltro = this.listaProdutos;

               }
       }
    if (this.filtroCategoria !== 'Todos'){
        this.listaFiltro = this.listaFiltro.filter(i =>
          this.filtroCategoria === i.Categoria);
      }

    if (this.filtroPreco !== 'Todos'){
      this.listaFiltro = this.listaFiltro.filter(i =>
        this.filtroPreco === i.PrecoMedio);
    }
    return this.listaFiltro;

  }
  openModal(template: TemplateRef<any>, produto: ProdutoDto ) {
    this.produto = produto;
    this.modalRef = this.modalService.show(template);
  }
  selecionaEstoque(){
    if (this.tipo === 1){
      return this.estoque = true;
    }
    if (this.tipo === 2 ){
      return this.estoque = false;
    }

  }
}
