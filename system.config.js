(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/',
    },
    map: {
      app: 'dist',
      angular: 'npm:angular',
    },
    packages: {
      app: {main: 'main', defaultExtension: 'js'},
      angular: {main: 'index', defaultExtension: 'js'},
    },
  });
})(this);
