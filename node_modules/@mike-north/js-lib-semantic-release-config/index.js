module.exports = {
  verifyConditions: ['@semantic-release/github', '@semantic-release/npm'],
  prepare: [
    {
      path: '@semantic-release/changelog',
      changelogFile: 'CHANGELOG.md'
    },
    {
      path: '@semantic-release/git',
      assets: ['package.json', 'CHANGELOG.md', 'docs/**', 'etc/**'],
      message:
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    },
    '@semantic-release/npm'
  ],
  publish: ['@semantic-release/npm', '@semantic-release/github'],
  success: ['@semantic-release/github'],
  fail: ['@semantic-release/github']
};
