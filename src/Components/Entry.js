import React from "react";
import "./Entry.css";
import pokeball from "./pkball.png";

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id? this.props.id: '1',
      name: '',
      sprite: "",
      type1: "",
      type2: "",
      flavor_text: "",
      type1Color: { background: "green" },
      type2Color: { background: "blue" },
      weight: "",
      height: "",
      stat_spd: '48',
      stat_def: '48',
      stat_atk: '48',
      stat_sp_atk: '48',
      stat_hp: '48',
      stat_sp_def: '48',

    };
  }

  componentDidMount() {
    const API = "https://pokeapi.co/api/v2/";
    fetch(API + "pokemon/" + this.props.id + "/")
      .then(res => res.json())
      .then(res =>
        this.setState({
          name: res.name,
          sprite: res.sprites.front_default,
          type1: res.types[0].type.name,
          type2: res.types[1] ? res.types[1].type.name : "",
          weight: res.weight,
          height: res.height,
          stat_spd: res.stats[0].base_stat,
          stat_sp_def : res.stats[1].base_stat,
          stat_sp_atk : res.stats[2].base_stat,
          stat_atk : res.stats[3].base_stat,
          stat_def : res.stats[4].base_stat,
          stat_hp : res.stats[5].base_stat
        })
      )
      .then(res => this.setTypeColors());

    fetch(API + "pokemon-species/" + this.props.id + "/")
      .then(res => res.json())
      .then(res => {
        var x;
        if (res.flavor_text_entries[0].language.name === "en") {
          x = res.flavor_text_entries[0].flavor_text;
        } else if (res.flavor_text_entries[1].language.name === "en") {
          x = res.flavor_text_entries[1].flavor_text;
        } else if (res.flavor_text_entries[2].language.name === "en") {
          x = res.flavor_text_entries[2].flavor_text;
        }

        this.setState({ flavor_text: x });
      });
  }

  getTypecolor(type) {
    var color;
    if (type === "normal") {
      color = "#A8A878";
    } else if (type === "fire") {
      color = "#f08030";
    } else if (type === "fighting") {
      color = "#c03028";
    } else if (type === "water") {
      color = "#6890f0";
    } else if (type === "flying") {
      color = "#a890f0";
    } else if (type === "grass") {
      color = "#78c850";
    } else if (type === "poison") {
      color = "#a040a0";
    } else if (type === "electric") {
      color = "#f8d030";
    } else if (type === "ground") {
      color = "#e0c068";
    } else if (type === "psychic") {
      color = "#f85888";
    } else if (type === "rock") {
      color = "#b8a038";
    } else if (type === "ice") {
      color = "#98D8D8";
    } else if (type === "bug") {
      color = "#A8B820";
    } else if (type === "dragon") {
      color = "#7038F8";
    } else if (type === "ghost") {
      color = "#705898";
    } else if (type === "dark") {
      color = "#705848";
    } else if (type === "steel") {
      color = "#b8b8d0";
    } else if (type === "fairy") {
      color = "#ee99ac";
    }
    return color;
  }

  setTypeColors() {
    if (this.state.type1) {
      let color;
      let type = this.state.type1;
      color = this.getTypecolor(type);
      this.setState({ type1Color: { background: color } });
    }
    if (this.state.type2) {
      let color;
      let type = this.state.type2;
      color = this.getTypecolor(type);
      this.setState({ type2Color: { background: color } });
    }
  }

  handleClick(e,gen){

  }

  render() {
    let myclasses = this.props.id % 2!==0? 'border-Top' : 'border-Top2';
    myclasses += ' my-container'
    return (
      <div className={myclasses}>
        <img className="portrait" src={this.state.sprite} alt=""></img>
        <p className="id"> #{this.props.id}</p>
        <div className="card">
          {" "}
          <p className="Name" id={this.props.gen}>
            {" "}
            {this.state.name}
          </p>
         
          <span className="types">
            <p className="type12" style={this.state.type1Color}>
              {this.state.type1}
            </p>{" "}
            {this.state.type2 ? (
              <p className="type12" style={this.state.type2Color}>
                {" "}
                {this.state.type2}
              </p>
            ) : (
              ""
            )}
          </span>
          <div className="stats">
            {" "}
            <span className="height-weight"><p id="weight" >
              Weight: {(this.state.weight / 10).toFixed(2)} kg
            </p>
            <p id="height">
              Height: {(this.state.height / 10).toFixed(1)} m
            </p></span>
          </div>
          <p className="flavor-text">{this.state.flavor_text}</p>
          <div className="moreStats">
            <p className="val"> ATK: {this.state.stat_atk} </p>
            <p className="val">DEF: {this.state.stat_def} </p>
            <p className="val">HP: {this.state.stat_hp} </p>
            <br></br>
            <p className="val">SPD: {this.state.stat_spd} </p>
            <p className="val">SP. ATK:{this.state.stat_sp_atk} </p>
            <p className="val">SP. DEF: {this.state.stat_sp_def} </p>
          </div>
          <a
            href={"https://pokemondb.net/pokedex/" + this.state.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img className="tinyPK" src={pokeball} alt="pokeball"></img>{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default Entry;
