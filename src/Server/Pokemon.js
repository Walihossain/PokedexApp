class Pokemon {
  constructor() {
    this.name = "";
    this.id = "";
    this.sprite = "";
    this.type1 = "";
    this.type2 = "";
    this.weight = "";
    this.height = "";
    this.stat_spd = "";
    this.stat_sp_def = "";
    this.stat_sp_atk = "";
    this.stat_atk = "";
    this.stat_def = "";
    this.stat_hp = "";
    this.flavor_text = "";
  }

  displayName() {
    return this.name + ' ' + this.id
  }
}

export default Pokemon;
