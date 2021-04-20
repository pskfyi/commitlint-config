# `@pskfyi/commitlint-config`

An opinionated commitlint config. Well-commented, justified, and tidily formatted.

## Getting Started

> **Note:** see [this gist](https://gist.github.com/pskfyi/497fbcc10a0625c716d30995fe336947) for setting up commitlint and husky.

```sh
# with npm
npm i -D @pskfyi/commitlint-config

# with yarn
yarn add -D @pskfyi/commitlint-config
```

In `commitlint.config.js` at the root of your repo:

```js
module.exports = {
  extends: ["@pskfyi/commitlint-config"],
  rules: {
    // Override this rule to explicitly state your own (scope)s.
    "scope-enum": [
      2, // Throw error when (scope) is not one of these values.
      "always",
      [
        // These are the defaults baked into the config.
        "docs",
        "repo",
      ],
    ],
  },
};
```

## Testing

See [`/tests/README.md`](./tests#readme)

## Differences from Conventional Commits

Invalid:

```sh
echo "docs(core): some message" # docs type removed; now is a default (scope)
echo "revert(repo): some message" # revert and perf types removed; use refactor
```

Valid:

```sh
echo "fix(docs): Sandbox re-renders as expected" # uppercase subject allowed
echo "refactor(core): now uses Typescript; provided interfaces." # period allowed
echo "config(app): added namespacing to PostCSS" # new type: config
```

### Why not `@commitlint/config-conventional`?

- In all other contexts, we use capital letters at the beginnings of statements. Commits aren't special.

- Types 'revert' and 'perf' both are varieties of refactor; no need for additional types.

- Elaborate docs, often found in monorepos, function more as a scope than a type; they can have their own feats, fixes, styles, tests, ci, and builds. "docs" deserves to be a (scope) rather than a type to allow these commits to be accurately expressed.

- Changing config files, especially babel and webpack files, is not a _chore_. An alternative type is preferable, but none are suitable, hence the addition of the "config" type.
