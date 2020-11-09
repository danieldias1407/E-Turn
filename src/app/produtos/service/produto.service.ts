import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProdutoDto } from '../dto/produto-dto';
import { ImagemDto } from '../dto/imagem-dto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: ProdutoDto[] = new Array();
  produto: ProdutoDto;
  imagem: ImagemDto;
  nota: Array<number>;


   private readonly ApiMedia = 'http://api.mathjs.org/v4/?expr=';
  constructor(
    private http: HttpClient) { }

    notaMedia(produto: ProdutoDto){
      const soma = this.somaNotas(produto);
      const url = `${this.ApiMedia}${soma}/${produto.Notas?.length}`;
      return this.http.get<number>(url);
    }

    listarProduto(){
      const listaProdutos  =
      [{
        'id': 1,
        'nome': 'Casaco alfaiataria com bolsos laterais',
        'categoria': 'Casaco',
        'notas': [
          {
            nota: 5
          },
          {
            nota: 4
          },
          {
            nota: 2
          },
          {
            nota: 1
          },
          {
            nota: 3
          }
        ],
        'imagens': [
          {
              nome: 'L1-1.jpg',
              destacada: false,
          },
          {
              nome: 'L1-2.jpg',
              destacada: true,
          }
        ],
        'precoMedio': 4,
        'disponivel': true
      }, {
        'id': 2,
        'nome': 'Blusa com pregas e gola arredondada',
        'categoria': 'Blusa',
        'notas': [
          {
              nota: 4,
          },
          {
              nota: 5,
          },
          {
              nota: 1,
          },
          {
              nota: 5,
          }
        ],
        'imagens': [
          {
              nome: 'L2-1.jpg',
              destacada: false
          },
          {
              nome: 'L2-2.jpg',
              destacada: true,
          },
          {
              nome: 'L2-3.jpg',
              destacada: false
          }
        ],
        'precoMedio': 2,
        'disponivel': true
      }, {
        'id': 3,
        'nome':'Vestido midi tubinho',
        'categoria': 'Vestido',
        'notas': [
          {
              nota: 4,
          },
        ],
        'imagens': [
          {
              nome: 'L3-1.jpg',
              destacada: true,
          },
        ],
        'precoMedio': 4,
        'disponivel': false
      }, {
        'id': 4,
        'nome': 'Calça social alfaiataria com bolsos',
        'categoria': 'Calça',
        'notas': [
          {
              nota: 5,
          },
          {
              nota: 3
          }
        ],
        'imagens': [
            {
                nome: 'L4-1.jpg',
                destacada: true,
            },
        ],
        'precoMedio': 3,
        'disponivel': true
      }, {
        'id': 5,
        'nome': 'Blusa de algodão com estampa de sorvete',
        'categoria': 'Blusa',
        'notas': [
          {
              nota: 4,
          }
        ],
        'imagens': [
            {
                nome: 'L5-1.jpg',
                destacada: true,
            },
        ],
        'precoMedio': 1,
        'disponivel': false
      },  {
        'id': 6,
        'nome': 'Body preto básico',
        'categoria': 'Body',
        'notas': [
          {
              nota: 1,
          },
          {
              nota: 4,
          },
          {
              nota: 2,
          },
          {
              nota: 4,
          },
          {
              nota: 5,
          },
          {
              nota: 4,
          },
          {
              nota: 3,
          },
          {
              nota: 5
          }
        ],
        'imagens': [
            {
                nome: 'L6-1.jpg',
                destacada: true,
            },
        ],
        'precoMedio': 3,
        'disponivel': false
      }, {
        'id': 7,
        'nome': 'Body cavado com corte',
        'categoria': 'Body',
        'notas': [
          {
              nota: 1,
          },
          {
              nota: 4,
          },
          {
              nota: 2,
          },
          {
              nota: 4,
          },
          {
              nota: 5,
          },
          {
              nota: 4,
          },
          {
              nota: 3,
          },
          {
              nota: 5
          }
        ],
        'imagens': [
            {
                nome: 'L7-1.jpg',
                destacada: true,
            },
        ],
        'precoMedio': 4,
        'disponivel': true
      }, {
        'id': 8,
        'nome': 'Blusa ciganinha branca com elástico',
        'categoria': 'Blusa',
        'notas': [
          {
              nota: 4,
          },
          {
              nota: 3,
          },
          {
              nota: 3,
          },
          {
              nota: 4,
          },
          {
              nota: 4
          }
        ],
        'imagens': [
            {
                nome: 'L8-1.jpg',
                destacada: true,
            },
        ],
        'precoMedio': 2,
        'disponivel': false
      }, {
        'id': 9,
        'nome': 'Casaco alfaiataria slim com bolsos',
        'categoria': 'Casaco',
        'notas': [
          {
              nota: 5,
          },
          {
              nota: 5
          }
        ],
        'imagens': [
            {
                nome: 'L9-1.jpg',
                destacada: true,
            },
        ],
        'precoMedio': 4,
        'disponivel': true
      },
      {
        'id': 10,
        'nome': 'Vestido branco com detalhes em renda',
        'categoria': 'Vestido',
        'notas': [
          {
              nota: 1,
          },
          {
              nota: 4,
          },
          {
              nota: 2,
          },
          {
              nota: 4,
          },
          {
              nota: 5,
          },
          {
              nota: 4,
          },
          {
              nota: 3,
          },
          {
              nota: 5
          }
        ],
        'imagens': [
            {
                nome: 'L10-1.jpg',
                destacada: true,
            },
        ],
        'precoMedio': 2,
        'disponivel': false
      }, {
        'id': 11,
        'nome': 'Blusa branca com corte',
        'categoria': 'Blusa',
        'notas': [
          {
              nota: 5,
          },
          {
              nota: 5,
          },
          {
              nota: 5,
          },
          {
              nota: 5,
          },
          {
              nota: 4,
          },
          {
              nota: 5,
          },
          {
              nota: 5
          }
        ],
        'imagens': [
            {
                nome: 'L11-1.jpg',
                destacada: true,
            },
        ],
        'precoMedio': 1,
        'disponivel': true
      }, {
        'id': 12,
        'nome': 'Calça jeans com rasgos e detalhes',
        'categoria': 'Calça',
        'notas': [
        ],
        'imagens': [
            {
                nome: 'L12-1.jpg',
                destacada: true,
            },
        ],
        'precoMedio': 3,
        'disponivel': false
      }, {
        'id': 9,
        'nome': null,
        'categoria': null,
        'notas': [
          {
              nota: 3,
          },
          {
              nota: 3,
          },
          {
              nota: 5,
          },
          {
              nota: 2,
          },
          {
              nota: 3
          },
          {
              nota: 3
          }
        ],
        'imagens': [
            {
                nome: 'L12-1.jpg',
                destacada: true,
            },
        ],
        'precoMedio': 3,
        'disponivel': false
      }];

     // const url = "assets/img/";

      listaProdutos.forEach(produto => {
          const existeId = this.produtos.find(r => produto?.id === r.Id);
          if (existeId) {
            this.produto.Notas = new Array();
            this.imagem = new ImagemDto();
            this.nota = new Array();
            produto.notas.forEach(n => {
              this.nota.push(n.nota);
            });
            this.produto.Notas = this.nota;
            this.produto.PrecoMedio = this.convertePrecoMedio(produto.precoMedio);
            this.produto.Disponivel = produto.disponivel;
            this.produto.Categoria = produto.categoria;

          }else{
            this.produto = new ProdutoDto();
            this.produto.Notas = new Array();
            this.produto.Imagens = new Array();
            this.imagem = new ImagemDto();
            this.nota = new Array();
            this.produto.Id = produto.id;
            this.produto.Nome = produto.nome;
            this.produto.PrecoMedio = this.convertePrecoMedio(produto.precoMedio);
            this.produto.Disponivel = produto.disponivel;
            this.produto.Categoria = produto.categoria;
            produto.notas.forEach(n => {
              this.nota.push(n.nota);
            });
            this.produto.Notas = this.nota;
            produto.imagens.forEach(i => {
            this.imagem.Nome = 'assets/img/' + i.nome;
            this.imagem.Destacada = i.destacada;
            this.produto.Imagens.push(this.imagem);
          });
            this.produtos.push(this.produto);

          }
        });

      return this.produtos;
    }

    somaNotas(produto: ProdutoDto){

      let total = 0 ;
      produto.Notas.forEach(soma => {
        total = total + soma;
      });
      return total;
    }

    convertePrecoMedio(precoMedio: number){
      let preco = '';
      for (let i = 0; i < precoMedio; i++) {
        preco = preco + '$';
      }
      return preco;
    }
}
