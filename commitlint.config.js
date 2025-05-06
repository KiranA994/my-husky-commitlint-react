export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'header-max-length': [2, 'always', 50],
      'body-max-line-length': [2, 'always', 72],
      'subject-case': [2, 'always', ['sentence-case']], // Capitalized subject
    },
  };
  
