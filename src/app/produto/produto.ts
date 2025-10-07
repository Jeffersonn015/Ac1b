import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.html',
  styleUrls: ['./produto.css']
})
export class produto{

  produtos: Produto[] = [
    { id: 1, nome: 'Produto A', preco: 100, descricao: 'Descrição do Produto A', emEstoque: true },
    { id: 2, nome: 'Produto B', preco: 200, descricao: 'Descrição do Produto B', emEstoque: false },
    { id: 3, nome: 'Produto C', preco: 150, descricao: 'Descrição do Produto C', emEstoque: true }
  ];

  constructor(private router: Router) {}

  comprarProduto(id: number) {
    this.router.navigate(['/produto-detalhe', id]);
  }
}
