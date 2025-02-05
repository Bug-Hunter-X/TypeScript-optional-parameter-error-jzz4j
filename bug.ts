function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + person.lastName);
}

const person1 = {firstName: 'John', lastName: 'Doe'};
printName(person1); // Works fine

const person2 = {firstName: 'Jane'};
printName(person2); // Error: Object is possibly 'undefined'