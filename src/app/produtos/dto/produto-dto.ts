import { DecimalPipe } from '@angular/common';
import { ImagemDto } from './imagem-dto';

export class ProdutoDto {
  Id: number;
  Nome: string;
  Categoria: string;
  Notas: Array<number>;
  Imagens: ImagemDto[];
  PrecoMedio: string;
  Disponivel: boolean;
  NotaMedia: number;

  constructor()
    {

  }
}
