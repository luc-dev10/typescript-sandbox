import { Holder } from "./Holder";

// function wrapper
const printValue = <T>(holder: Holder<T>): void => {
  console.log(holder.getValue());
};

const numHolder: Holder<number> = new Holder<number>(1);
printValue(numHolder);
