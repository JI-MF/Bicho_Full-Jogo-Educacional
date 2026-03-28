import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-money-wallet',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './money-wallet.html',
  styleUrl: './money-wallet.scss',
})
export class MoneyWallet {
  message:String='Carteira digital';
  saldo:number=1000;
  valor:number=0;
  historico:string[]=[]

  depositar(){
    if(this.valor>=0){
      this.saldo+=this.valor;
    } else{
      alert("digite um valor valido")
    }
  }

  apostar(){
    if(this.valor<=0){
      alert("Digite um valor valido")
    }

    if(this.valor>this.saldo){
      alert('saldo insufuciente')
      return;
    }

    this.saldo -= this.valor;
    alert('Aposta Realizda')

    this.historico.push(`Aposta de R${this.valor}`);
  }

  numero!: number;
  nome!: string;
  imagem!: String;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.numero = params['numero'];
    this.nome = params['nome'];
    this.imagem = params['imagem']
  });
}

}
