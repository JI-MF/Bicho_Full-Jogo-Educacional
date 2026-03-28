import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-home',
  templateUrl: './game.html',
  imports:[CommonModule],
  styleUrls: ['./game.scss']
})
export class Game {

  constructor(private router: Router) {}

  animalSelecionado: any = null;

  animais = [
    { numero: '01  02 03 04', nome: 'Avestruz', imagem:'assets/svg/Avestruz.svg' },
    { numero: '02', nome: 'Águia', imagem:'assets/svg/Aguia.svg' },
    { numero: '03', nome: 'Burro', imagem:'assets/svg/Burro.svg' },
    { numero: '04', nome: 'Borboleta', imagem:'assets/svg/Borboleta.svg' },
    { numero: '05', nome: 'Cachorro', imagem:'assets/svg/Cachorro.svg' },
    { numero: '06', nome: 'Cabra', imagem:'assets/svg/Cabra.svg' },
    { numero: '07', nome: 'Carneiro', imagem:'assets/svg/Carneiro.svg' },
    { numero: '08', nome: 'Camelo' , imagem:'assets/svg/Camelo.svg' },
    { numero: '09', nome: 'Cobra' , imagem:'assets/svg/Cobra.svg' },
    { numero: '10', nome: 'Coelho', imagem:'assets/svg/Coelho.svg' },
    { numero: '11 12 13 14', nome: 'Cavalo', imagem:'assets/svg/Cavalo.svg' },
    { numero: '12', nome: 'Elefante', imagem:'assets/svg/Elefante.svg' },
    { numero: '13', nome: 'Galo', imagem:'assets/svg/Galo.svg' },
    { numero: '14', nome: 'Gato', imagem:'assets/svg/Gato.svg' },
    { numero: '15', nome: 'Jacaré', imagem:'assets/svg/Jacare.svg' },
    { numero: '16', nome: 'Leão', imagem:'assets/svg/Leao.svg' },
    { numero: '17', nome: 'Macaco', imagem:'assets/svg/Macaco.svg' },
    { numero: '18', nome: 'Porco', imagem:'assets/svg/Porco.svg' },
    { numero: '19', nome: 'Pavão', imagem:'assets/svg/Pavao.svg' },
    { numero: '20', nome: 'Peru', imagem:'assets/svg/Peru.svg' },
    { numero: '21', nome: 'Touro', imagem:'assets/svg/Touro.svg' },
    { numero: '22', nome: 'Tigre', imagem:'assets/svg/Tigre.svg' },
    { numero: '23', nome: 'Urso', imagem:'assets/svg/Urso.svg' },
    { numero: '24', nome: 'Veado', imagem:'assets/svg/Veado.svg' },
    { numero: '25', nome: 'Vaca', imagem:'assets/svg/Vaca.svg' }
  ];

  selecionarAnimal(animal: any) {
    this.animalSelecionado = animal;
  }





confirmarAnimal() {
  if (this.animalSelecionado) {
    this.router.navigate(['/money-wallet'], {
      queryParams: {
        numero: this.animalSelecionado.numero,
        nome: this.animalSelecionado.nome,
        imagem: this.animalSelecionado.imagem
      }
    });
  } else {
    alert('Selecione um animal primeiro!');
  }
}

}


