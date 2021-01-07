let names: string[] = [
  "Maria",
  "Heinz",
  "Bruno",
  "Martin",
  "Björn",
  "Markus",
  "Ludwig",
];

let h: number = 0;

while (h < 5) {
  h++;
  console.log(h);
}
let i: number = 0;

do {
  i++;
  console.log(i);
} while (i < 5);

for (let j: number = 0; j < 5; j++) {
  console.log(j);
}

for (let name of names) {
  console.log(`Sali ${name}!`);
}

names.forEach((name) => {
  console.log(name);
});

const uppercasedNames = names.map((name) => {
  return name.toUpperCase();
});

console.log(uppercasedNames);
