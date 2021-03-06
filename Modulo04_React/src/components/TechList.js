import React, { Component } from 'react';

import TechItem from './TechItem';

class Techlist extends Component {
  state = {
    newTech: '',
    techs: [ ]
  };

  // Executando assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }

  }

  // Executando sempre que houver alteracoes nas props ou estato
  componentDidUpdate(_, prevState) {
    // this.props, this.state
    if (prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {

  }

  handleInputChange = e => {
    this.setState({ newTech:e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState ({
      techs: [... this.state.techs, this.state.newTech],
      newTech: ''
    })

  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter( t => t !== tech)});
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Techlist;
