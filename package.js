Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ ",
  name: "glasser:binary-package-test"
});

Npm.depends({kexec: "0.1.2"});

Package.onUse(function(api) {
  api.versionsFrom('METEOR-CORE@0.9.0-rc12');
  api.addFiles('binary-package-test.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('binary-package-test');
  api.addFiles('binary-package-test-tests.js');
});
