# eslint-config-vmware-react

VMware's ESLint config extending eslint-config-react-app.

## Overview

Inspired by [`eslint-config-airbnb-typescript-prettier`](https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier) but extends [`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app).

Mostly uses "WARN" level to allow a better DX with eslint-loader.
Code is transpiled when warnings are present but not when errors exists.

In CI treat warnings as errors with ESLint option: `--max-warnings 0`.

# How to use

Install `eslint`, `typescript` with `@vmw/eslint-config-vmware-react`.

```bash
$ npm install eslint typescript eslint-config-vmware-react --save-dev
```

and put into your `.eslintrc.js` file:

```js
module.exports = {
  extends: '@vmw/vmware-react',
};
```

## Contributing

The eslint-config-vmware-react project team welcomes contributions from the community. Before you start working with eslint-config-vmware-react, please
read our [Developer Certificate of Origin](https://cla.vmware.com/dco). All contributions to this repository must be
signed as described on that page. Your signature certifies that you wrote the patch or have the right to pass it on
as an open-source patch. For more detailed information, refer to [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Open source [licensed as MIT](https://github.com/vmware/eslint-config-vmware-react/blob/master/LICENSE).
