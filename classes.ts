class Vehicle {
  constructor(public color: string) {}
  drive(): void {
    console.log('chugga chugga', `Color is: ${this.color}`);
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('vroom');
    console.log('chugga chugga', `Color is: ${this.color}`);
  }
}

const car = new Car(4, 'orange');
car.drive();
car.honk();
console.log(car.color, car.wheels);
