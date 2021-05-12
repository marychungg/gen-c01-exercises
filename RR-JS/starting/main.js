const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//step 2 & 3
class Field {
  constructor(field){
    this.field = field;
    this.x = 0;
    this.y = 0;
  }

  print () {
    for (let i=0; i < this.field.length; i++){
      console.log (this.field[i].join(''));
    }
  }

  //step 4
  winOrLose () {
      let x = this.x;
      let y = this.y;
      if (x >=0 && x < this.field[0].length && y >=0 && y < this.field.length) {
        if (this.field[x][y] === hole) {
          console.log("You Lost!");
          return true;
        } else if(this.field[x][y] === hat) {
          console.log("Congrats! You found your hat!");
          return true;
        } else {
            this.field[x][y] = pathCharacter;
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
      }
      return this.winOrLose();
    }



}

