/* Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { greeter, sum } from './sample';

describe('sample', () => {
  it('sum', () => {
    const result = sum(2, 7);
    expect(result).toBe(9);
  });

  it('greeter', () => {
    const result = greeter({ age: 44, name: 'John' });
    expect(result).toBe('My name is John. I am 44 years old.');
  });
});
