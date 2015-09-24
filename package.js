Package.describe({
	name: 'chillbits:mdl',
	version: '1.0.4',
	// Brief, one-line summary of the package.
	summary: 'A wrapper package for Google\'s Material Design Lite.',
	// URL to the Git repository containing the source code for this package.
	git: 'http://git.chillbits.org/meteor-packages/meteor-mdl-scss.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.1.0.2');

	api.addFiles([
		'material-icons.css',
		'envConfigs.js',
		'material.js',
		'export.js'
	], 'client');
	api.export([
		"componentHandler",
		"MDl"
	], 'client');
	// Patchers.
	api.addFiles([
		'patchers/blaze.js'
	], 'client');
    // SCSS
    api.addAssets([
      'mdl/animation/_animation.scss',
      'mdl/badge/_badge.scss',
      'mdl/button/_button.scss',
      'mdl/card/_card.scss',
      'mdl/checkbox/_checkbox.scss',
      'mdl/data-table/_data-table.scss',
      'mdl/footer/_mega_footer.scss',
      'mdl/footer/_mini_footer.scss',
      'mdl/grid/_grid.scss',
      'mdl/icon-toggle/_icon-toggle.scss',
      'mdl/layout/_layout.scss',
      'mdl/menu/_menu.scss',
      'mdl/palette/_palette.scss',
      'mdl/progress/_progress.scss',
      'mdl/radio/_radio.scss',
      'mdl/resets/_resets.scss',
      'mdl/resets/_h5bp.scss',
      'mdl/resets/_mobile.scss',
      'mdl/ripple/_ripple.scss',
      'mdl/shadow/_shadow.scss',
      'mdl/slider/_slider.scss',
      'mdl/spinner/_spinner.scss',
      'mdl/switch/_switch.scss',
      'mdl/tabs/_tabs.scss',
      'mdl/textfield/_textfield.scss',
      'mdl/tooltip/_tooltip.scss',
      'mdl/typography/_typography.scss',
      'mdl/_color-definitions.scss',
      'mdl/_functions.scss',
      'mdl/_mixins.scss',
      'mdl/_variables.scss',
    ], 'server');
});

Package.onTest(function (api) {
	api.use('tinytest');
	api.use('jquery');
	api.use('chillbits:mdl');
	api.addFiles([
		'tests/export.js',
		'tests/patcher-blaze.js'
	], 'client');
});
