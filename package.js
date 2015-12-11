Package.describe({
  name: 'moonkin:mdl',
  version: '1.0.6_1',
  // Brief, one-line summary of the package.
  summary: 'A wrapper package for Google\'s Material Design Lite.',
  // URL to the Git repository containing the source code for this package.
  git: 'http://git.chillbits.org/meteor-packages/meteor-mdl-scss.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use('fourseven:scss@3.4.1');


///>>>>ASSETS

///<<<<ASSETS



  api.addFiles([
    'envConfigs.js',
    'material.js',
    'export.js'
  ], 'client');
  api.export([
    'componentHandler',
    'MDl'
  ], 'client');
  // Patchers.
  api.addFiles([
    'patchers/blaze.js'
  ], 'client');
  // SCSS
  api.addFiles([
     'animation/_animation.scss',
     'badge/_badge.scss',
     'button/_button.scss',
     'card/_card.scss',
     'checkbox/_checkbox.scss',
     'data-table/_data-table.scss',
     'footer/_mega_footer.scss',
     'footer/_mini_footer.scss',
     'grid/_grid.scss',
     'icon-toggle/_icon-toggle.scss',
     'layout/_layout.scss',
     'menu/_menu.scss',
     'palette/_palette.scss',
     'progress/_progress.scss',
     'radio/_radio.scss',
     'resets/_resets.scss',
     'resets/_h5bp.scss',
     'resets/_mobile.scss',
     'ripple/_ripple.scss',
     'shadow/_shadow.scss',
     'slider/_slider.scss',
     'spinner/_spinner.scss',
     'switch/_switch.scss',
     'tabs/_tabs.scss',
     'textfield/_textfield.scss',
     'tooltip/_tooltip.scss',
     'typography/_typography.scss',
     '_color-definitions.scss',
     '_functions.scss',
     '_mixins.scss',
     '_variables.scss',
  ], 'client', {isImport:true});
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('jquery');
  api.use('zodiase:mdl');
  api.addFiles([
    'tests/export.js',
    'tests/patcher-blaze.js'
  ], 'client');
});
