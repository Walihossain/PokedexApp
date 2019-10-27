import React from "react";
import "./Pokedex.css";
import Entry from "./Entry";
import Title from "./Title";
//import Navbar from "./NavBar";
// import PokemonData from "./PokemonData";
// import pokeball from "./pkball.png";

class Pokedex extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      pokemonarray: [],
      gen: "Gen1",
      gen1Array: "",
      gen2Array: "",
      gen3Array: "",
      gen4Array: "",
      gen5Array: "",
      gen6Array: "",
      gen7Array: "",
      test: "21",
      region: "Kanto"
    };
  }

  setAllArrays() {
    let gen1 = [];
    let gen2 = [];
    let gen3 = [];
    let gen4 = [];
    let gen5 = [];
    let gen6 = [];
    let gen7 = [];
    let i = 1;
    for (i = 1; i < 152; i++) {
      gen1.push(i);
    }
    for (i = 152; i < 252; i++) {
      gen2.push(i);
    }
    for (i = 252; i < 386; i++) {
      gen3.push(i);
    }
    for (i = 387; i < 494; i++) {
      gen4.push(i);
    }
    for (i = 495; i < 649; i++) {
      gen5.push(i);
    }
    for (i = 650; i < 741; i++) {
      gen6.push(i);
    }
    for (i = 722; i < 809; i++) {
      gen7.push(i);
    }

    this.setState({ gen1Array: gen1 });
    this.setState({ gen2Array: gen2 });
    this.setState({ gen3Array: gen3 });
    this.setState({ gen4Array: gen4 });
    this.setState({ gen5Array: gen5 });
    this.setState({ gen6Array: gen6 });
    this.setState({ gen7Array: gen7 });
  }

  chooseGen() {
    var gen = Math.floor(Math.random() * 7 + 1);
    let start = 0;
    let end = 0;

    switch (gen) {
      case 1:
        start = 1;
        end = 151;
        this.setState({ gen: "Gen1" });
        this.setState({ pokemonarray: this.state.gen1Array });
        this.setState({ region: "Kanto" });
        break;
      case 2:
        start = 152;
        end = 251;
        this.setState({ gen: "Gen2" });
        this.setState({ pokemonarray: this.state.gen2Array });
        this.setState({ region: "Johto" });
        break;
      case 3:
        start = 252;
        end = 386;
        this.setState({ gen: "Gen3" });
        this.setState({ pokemonarray: this.state.gen3Array });
        this.setState({ region: "Hoenn" });
        break;
      case 4:
        start = 387;
        end = 494;
        this.setState({ gen: "Gen4" });
        this.setState({ pokemonarray: this.state.gen4Array });
        this.setState({ region: "Sinnoh" });
        break;
      case 5:
        start = 495;
        end = 649;
        this.setState({ gen: "Gen5" });
        this.setState({ pokemonarray: this.state.gen1Array });
        this.setState({ region: "Unova" });
        break;
      case 6:
        start = 650;
        end = 721;
        this.setState({ gen: "Gen6" });
        this.setState({ pokemonarray: this.state.gen1Array });
        this.setState({ region: "Kalos" });
        break;
      case 7:
        start = 722;
        end = 809;
        this.setState({ gen: "Gen7" });
        this.setState({ pokemonarray: this.state.gen1Array });
        this.setState({ region: "Alola" });
        break;
      default:
        start = 1;
        end = 151;
    }

    return [start, end];
  }

  setPokemon() {
    let array = [];
    let x = this.chooseGen();
    for (var i = x[0]; i < x[1]; i++) {
      array.push(i);
    }
    this.setState({ pokemonarray: array });
  }

  componentDidMount() {
    this.setPokemon();
    this.setAllArrays();
  }
  

  handleClick(gen) {
    switch (gen) {
      case 1:
        this.setState({ gen: "Gen1" });
        this.setState({ pokemonarray: this.state.gen1Array });
        this.setState({ region: "Kanto" });
        break;
      case 2:
        this.setState({ gen: "Gen2" });
        this.setState({ pokemonarray: this.state.gen2Array });
        this.setState({ region: "Johto" });
        break;
      case 3:
        this.setState({ gen: "Gen3" });
        this.setState({ pokemonarray: this.state.gen3Array });
        this.setState({ region: "Johto" });
        break;
      case 4:
        this.setState({ gen: "Gen4" });
        this.setState({ pokemonarray: this.state.gen4Array });
        this.setState({ region: "Johto" });
        break;
      case 5:
        this.setState({ gen: "Gen5" });
        this.setState({ pokemonarray: this.state.gen5Array });
        this.setState({ region: "Johto" });
        break;
      case 6:
        this.setState({ gen: "Gen6" });
        this.setState({ pokemonarray: this.state.gen6Array });
        this.setState({ region: "Johto" });
        break;
      case 7:
        this.setState({ gen: "Gen7" });
        this.setState({ pokemonarray: this.state.gen7Array });
        this.setState({ region: "Johto" });
        break;

      default:
    }
  }

  render() {
    console.log(this.state.pokemonarray);
    return (
      <div>
        <div>
          <Title gen={this.state.gen} region={this.state.region}></Title>{" "}
        </div>
        {
          <div className="Generations">
            <button onClick={this.handleClick.bind(this,1)}>Gen1 </button>
            <button onClick={this.handleClick.bind(this,2)}>Gen2</button>
            <button onClick={this.handleClick.bind(this,3)}>Gen3</button>
            <button onClick={this.handleClick.bind(this,4)}>Gen4</button>
            <button onClick={this.handleClick.bind(this,5)}>Gen5</button>
            <button onClick={this.handleClick.bind(this,6)}>Gen6</button>
            <button onClick={this.handleClick.bind(this,7)}>Gen7</button>
          </div>
        }
        <div className="row main-row">
          {this.state.pokemonarray.map((ele, index) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
              key={ele}
            >
              <Entry id={ele} gen={this.state.gen}>
                {" "}
                key={ele}
              </Entry>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
