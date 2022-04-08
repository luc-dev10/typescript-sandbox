export class Person {
  private year: number;
  private brand: String;

  constructor(year: number, brand: string) {
    this.year = year;
    this.brand = brand;
  }

  toString(): string {
    return `${this.brand} ${this.year}`;
  }
}

export const printName = () => {
  console.log("Hello There");
};
