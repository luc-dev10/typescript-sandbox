import { Animal } from "./Animal";

export class Duck implements Animal {
  limbs: number;
  name: string;

  constructor(limbs: number, name: string) {
    this.limbs = limbs;
    this.name = name;
  }

  getDescription(): string {
    return `Duck with ${this.limbs} limbs`;
  }
}
