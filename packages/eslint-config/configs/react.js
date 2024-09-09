module.exports = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  rules: {
    "react/prop-types": 1,
    "react/sort-comp": 1,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/prop-types": 0,
        "react/sort-comp": [
          1,
          {
            order: [
              "static-variables",
              "static-methods",
              "instance-variables",
              "lifecycle",
              "render",
              "everything-else",
            ],
          },
        ],
      },
    },
  ],
};
