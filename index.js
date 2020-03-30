const funs = require('./functions.js');
let command = process.argv[2]
let firstArg = process.argv[3]
let secondArg = process.argv[4]
let thirdArg = process.argv[5]



function main(){
  switch (command)
  {
    case "add":
      funs.add(firstArg, secondArg);
      break;
    case 'edit':
      funs.edit(firstArg-1, secondArg, thirdArg)
      break;
    case 'delete':
      funs.deletee(firstArg-2)
      break;
    case 'check':
      funs.check(firstArg-1)
      break;
    case 'uncheck':
      funs.uncheck(firstArg-1)
      break; 
    case 'list':
      funs.list(firstArg)
      break;
    default:
      console.log("The command is wrong!");
  }
}
main()
// console.log("HELLOOOOO")
