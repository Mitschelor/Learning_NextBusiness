const sayHello = (name: string) => {
  console.log("Hello " + name);
};

function sayHallo(name: string) {
  console.log("Hallo " + name);
}

sayHello("Bruno");
sayHallo("Heinz");

const multiply = (number1: number, number2: number): number => {
  const result: number = number1 * number2;
  return result;
};

console.log(multiply(2, 7));
