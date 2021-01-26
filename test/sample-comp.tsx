/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

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
