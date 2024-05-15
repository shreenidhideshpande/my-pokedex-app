import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API =
//   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let pad = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${pad(this.props.id)}.png`;
    // console.log(imgSrc);
    return (
      <div className="Pokecard">
        <h1 id="Pokecard-name">{this.props.name}</h1>
        <div className="Pokecard-img-container">
          <img id="Pokecard-img" src={imgSrc} alt={this.props.name} />
        </div>
        <div id="Pokecard-type">Type: {this.props.type}</div>
        <div id="Pokecard-exp">EXP: {this.props.exp} </div>
      </div>
    );
  }
}

export default Pokecard;
