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
    // Scope should always be lowercase, always present, and one of the values
    // provided to scope-enum
    "scope-case": [2, "always", "lower-case"],
    "scope-empty": [2, "never"],
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
    // Type must be lowercase.
    "type-case": [2, "always", "lower-case"],
    // Type may be omitted.
    "type-empty": [0, "never"],
    // When present, type should be one of these values.
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
