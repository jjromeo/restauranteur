module.exports = function(config) {
  config.set({
    basePath: '../..',
    
    frameworks: ['jasmine'],
    
    autoWatch: true,

    preprocessors: {
      '**/*.coffee': 'coffee'
    },

    browsers : ['Chrome'],

    files: [
      'vendor/assets/bower_components/angular/angular.js',
      'vendor/assets/bower_components/angular-mocks/angular-mocks.js',
      'app/assets/javascripts/main.js.coffee',
      'vendor/assets/bower_components/angular-route/angular-route.js',
      'app/assets/javascripts/angular/controllers/RestaurantIndexCtrl.js.coffee',
      'app/assets/javascripts/angular/*',
      'spec/javascripts/*_spec.js.coffee'
    ]
  });
};
