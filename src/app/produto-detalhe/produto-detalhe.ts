import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.html',
  styleUrls: ['./produto-detalhe.css']
})
export class ProdutoDetalhe implements OnInit {

  produto!: Produto | undefined;

  // Simulando um "banco de dados"
  produtos: Produto[] = [
    { id: 1, nome: 'Produto A', preco: 100, descricao: 'Descrição do Produto A', emEstoque: true },
    { id: 2, nome: 'Produto B', preco: 200, descricao: 'Descrição do Produto B', emEstoque: false },
    { id: 3, nome: 'Produto C', preco: 150, descricao: 'Descrição do Produto C', emEstoque: true }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtos.find(p => p.id === id);
  }
}
