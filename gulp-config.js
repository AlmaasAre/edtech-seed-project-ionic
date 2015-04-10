var src = 'src';
var www = 'www';

var paths = {
  src: {
    html: src + '/**/*.html',
    scripts: src + '/**/*.ts',
    root: src
  },
  sass: ['./scss/**/*.scss'],
  test: {
    spec: src + '/**/*.spec.js'
  },
  typescript:{
    definitions:[
      'www/lib/dt-jquery/dt-jquery.d.ts',
      'www/lib/dt-angular/angular.d.ts',
      'www/lib/dt-angular/angular-animate.d.ts',
      'typedefinitions/*.ts'
    ]
  },
  www:{
    root: www,
    css: www + '/**/*.css',
    templates: www + '/ui/templates',
    scripts: www + '/**/*.js'
  }
};

module.exports = paths;
