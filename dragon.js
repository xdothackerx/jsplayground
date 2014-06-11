function Dragon ( variety, bodyLength, element, abilities, color, age, gender, name ) {

  this.variety = variety;
  this.bodyLength = bodyLength;
  this.element = element;
  this.abilities = abilities;
  this.color = color;
  this.age = age;
  this.gender = gender;
  this.name = name;

  this.profile = function () {
    return "Dragon Profile: \nName: " + this.name + "\nType: " + this.variety + " dragon \nLength: " + this.bodyLength + "ft \nAffinity: " + this.element + "\nAbilities: " + this.abilities.toString() + "\nColor: " + this.color + "\nAge: " + this.age + " years\nGender: " + this.gender
  }
}

var endsong = new Dragon ( "Serynthian", 40, "Psychic", ["flight", " firebreathing", " size-shifting"], "black/violet", 230, "Female", "Endsong");
var smaug = new Dragon ( "Western", 650, "Fire", ["flight", " firebreathing", " speech", " armored"], "red/gold", 2076, "Male", "Smaug");
var saphira = new Dragon ( "Western", 27, "Magic", ["flight", " firebreathing", " spellcasting"], "blue", 8, "Female", "Saphira")

console.log( smaug.profile() + "\n");
console.log( saphira.profile() + "\n");
console.log( endsong.profile() );
