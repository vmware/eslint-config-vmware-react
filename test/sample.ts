/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

export function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2);

interface Person {
  age: number;
  name: string;
}

export function greeter(person: Person): string {
  return `My name is ${person.name}. I am ${person.age} years old.`;
}

greeter({ age: 44, name: 'John' });
