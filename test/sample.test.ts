/*
 * Copyright (c) 2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

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
