/*
 * Copyright (c) 2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import React from 'react';

const Foo = () => <p>Foo</p>;
export const Component = () => <Foo />;

interface Props {
  age: number;
  name: string;
}
export const ComponentWithProps = ({ age, name }: Props) => (
  <p>
    {name}, {age}
  </p>
);
