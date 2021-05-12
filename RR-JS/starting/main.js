const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
  constructor(field){
    this.field = field;
    this.x = 0;
    this.y = 0;
  }

  print () {
    for (let i=0; i < this.field.length; i++){
      console.log (this.field[i].join(' '));
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
        console.log('Wrong Step!Please use w,s,a,d!');
        break;
      }
    }
}

const myField = new Field([
  ['░', '░', '░', '░', 'O', 'O', 'O'],
  ['░', 'O', '░', '░', '░', 'O', '░'],
  ['░', '^', 'O', '░', '░', '░', '░'],
  ['░', '░', 'O', '░', '░', 'O', '░'],
  ['░', 'O', 'O', '░', '░', '░', 'O'],
  ['O', 'O', '░', '░', 'O', '░', '░'],
  ['░', '░', '░', '░', '*', '░', 'O'],
  ['O', '░', '░', 'O', '░', 'O', '░'],
]);

myField.userInput()
