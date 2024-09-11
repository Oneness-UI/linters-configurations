# @oneness-ui/stylelint-config

## Install

```bash
npm i --save-dev stylelint postcss @oneness-ui/stylelint-config
```

## Usage

Add the following to your `.stylelintrc`:

```json
{
    "extends": "@oneness-ui/stylelint-config"
}
```

### Order

The order of the rules is as follows:

```json
{
    "extends": ["@oneness-ui/stylelint-config", "@oneness-ui/stylelint-config/order"]
}
```

### Prettier

If you're utilizing Prettier, augment the root configuration with supplementary rules.

```json
{
    "extends": ["@oneness-ui/stylelint-config", "@oneness-ui/stylelint-config/prettier"]
}
```
