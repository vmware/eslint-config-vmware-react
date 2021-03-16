/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import React, { FC } from 'react';

const Foo: FC = () => <p>Foo</p>;
export const Component: FC = () => <Foo />;

interface Props {
  age: number;
  name: string;
}
export const ComponentWithProps: FC<Props> = ({ age, name }: Props) => (
  <p>
    {name}, {age}
  </p>
);
