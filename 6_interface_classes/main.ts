import { Duck } from "./Duck";
import { Animal } from "./Animal";

const duck = new Duck(4, "Duck");

// method that takes interface
const printDescription = (animal: Animal) => {
  console.log(animal.getDescription());
};

// call method on duck
printDescription(duck);
