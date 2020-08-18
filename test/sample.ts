/*
 * Copyright (c) 2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function sum(a: number, b: number) {
  return a + b;
}

sum(1, 2);

interface Person {
  age: number;
  name: string;
}

export function greeter(person: Person) {
  return `My name is ${person.name}. I am ${person.age} years old.`;
}

greeter({ age: 44, name: 'John' });
