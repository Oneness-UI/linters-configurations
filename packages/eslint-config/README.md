# @oneness-ui/eslint-config

## Description

ESLint config for our projects.

## Installation

```bash
npm install --save-dev eslint @oneness-ui/eslint-config
```

or

```bash
pnpm add -D eslint @oneness-ui/eslint-config
```

## Usage

Add the following to your `.eslintrc.cjs`:

```cjs
module.exports = {
    extends: ['@oneness-ui/eslint-config'],
    root: true,
};
```

### Client & Server

Add the following to your `.eslintrc.cjs`:

```cjs
module.exports = {
    extends: ['@oneness-ui/eslint-config/configs/client'],
};
```

or for server:

```cjs
module.exports = {
    extends: ['@oneness-ui/eslint-config/configs/server'],
};
```

### Prettier

If you're utilizing Prettier, change the root configuration to extend the `prettier` preset.

```cjs
module.exports = {
    extends: ['@oneness-ui/eslint-config', '@oneness-ui/eslint-config/configs/prettier'],
    root: true,
};
```

### Import order

If you want to enforce a convention in module import order, extend root config with the additional rules:

```cjs
module.exports = {
    extends: ['@oneness-ui/eslint-config', '@oneness-ui/eslint-config/configs/import'],
    root: true,
};
```

### A11y

If you want to spot accessibility issues, extend root config with the additional rules:

```cjs
module.exports = {
    extends: ['@oneness-ui/eslint-config', '@oneness-ui/eslint-config/configs/a11y'],
    root: true,
};
```
