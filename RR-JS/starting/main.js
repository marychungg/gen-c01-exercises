const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this._field = field;
    this.y = 0;
    this.x = 0;
  }

  print() {
    for (let i = 0; i < this._field.length ; i++ ){
      console.log(this._field[i].join(" "))
    }
  }

  winLoseTest() {
    let ver = this.x;
    let hor = this.y;
    if (hor >=0 && hor < this._field[0].length && ver >=0 && ver < this._field.length) {
      if (this._field[ver][hor] === hole) {
        console.log("You lost!");
        return true;
      } else if(this._field[ver][hor] === hat) {
        console.log("You win!");
        return true;
      } else {
        this._field[ver][hor] = pathCharacter;
        return false;
      }
    } 
    }
  
  userInput() {
    this.print();
    let userInput = prompt('Next Step?').toLowerCase();
    switch (userInput) {
      case "w":
          this.x -= 1;
          break;
      case "s":
          this.x += 1;
          break;
      case "a":
          this.y -= 1;
          break;
      case "d":
          this.y += 1;
          break;
      default:
        console.log("Wrong Step!Please use w,s,a,d!");
        break;
      }
      return this.winLoseTest();
  }

  play() {
    this.setPlayerAndHatRandom();
    while(this.userInput() === false) { 
    }
  }

  static generateField(height, length) {
    const newField = [];
    for ( let i = 0 ; i < height ; i++) {
      if(Math.random()*10 <= 8 ) {
        newField.push([fieldCharacter]);
      } else {
        newField.push([hole]);
      }
      for (let int = 0; int < length-1; int++ ) {
        if ( Math.random()*10 <= 8 ){
          newField[i].push(fieldCharacter);
        } else {
          newField[i].push(hole);
        }
      }
    }
  return newField;
  }

  setPlayerAndHatRandom() {
    let ver = Math.floor(Math.random()*this._field.length);
    let hor = Math.floor(Math.random()*this._field[0].length);
    this.y = hor;
    this.x = ver;
    this._field[ver][hor] = pathCharacter;
    this._field[Math.floor(Math.random()*this._field.length)][Math.floor(Math.random()*this._field[0].length)] = hat;
  }
}

const myField = new Field(Field.generateField(10,10));

myField.play();