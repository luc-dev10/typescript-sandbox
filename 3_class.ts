class Car {
  private color: string;
  private year: number;

  // constructor
  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }

  drive() {
    console.log("vroom");
  }

  getDescription(): string {
    return `Color: ${this.color}\nYear: ${this.year}`;
  }
}

const car = new Car("blue", 1992);
console.log(car.getDescription());
