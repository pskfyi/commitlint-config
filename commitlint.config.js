module.exports = {
  /**
   * Conventional Commit Vocabulary:
   *
   *    type(scope): Subject
   *
   *    Body
   *
   *    Footer
   *
   */
  rules: {
    // Require blank line above body and header when used.
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    // Set max length of first line to 72 chars for GitHub alignment.
    "header-max-length": [2, "always", 72],
    // When present, scope should always be lowercase.
    "scope-case": [2, "always", "lower-case"],
    // Scope may be omitted.
    "scope-empty": [0, "never"],
    // When present, scope should be one of these values.
    "scope-enum": [
      2,
      "always",
      // Override these values per your repo's scoping needs.
      [
        "repo",
        // Note that "docs" is removed from types and added to scopes. This
        // reflects contemporary advancements in documentation which often now
        // has its own bugs to fix, build processes, features, etc.
        "docs",
      ],
    ],
    // Allow subject to be any case - caps, lowercase, anything.
    "subject-case": [0],
    // Subject is required.
    "subject-empty": [2, "never"],
    // Type should always be lowercase, always present, and one of the values
    // provided to scope-enum
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "chore",
        "feat",
        "fix",
        "refactor", // Types "perf" and "revert" rolled into "refactor"
        "style",
        "test",
        "config", // Alternative to "chore" for updating tooling configuration
      ],
    ],
  },
};
