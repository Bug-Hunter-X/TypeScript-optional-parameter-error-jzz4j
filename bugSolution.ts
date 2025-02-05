function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + (person.lastName || ''));
}

const person1 = {firstName: 'John', lastName: 'Doe'};
printName(person1); // Output: John Doe

const person2 = {firstName: 'Jane'};
printName(person2); // Output: Jane 