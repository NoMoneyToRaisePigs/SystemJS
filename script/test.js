var SystemJS = require('systemjs');
require('reflect-metadata');

let x = 0;

(function (global) {
    SystemJS.config({
        map:{
            '@angular/core': '../node_modules/@angular/core/bundles/core.umd.js',
            'rxjs': '../node_modules/rxjs',
            x :'./app/main.js',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            "app": {
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'systemjs-angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);


setTimeout(function() {
        SystemJS.import('./app/main.js').then((x)=>{
        console.log(x);
    });
}, 10000);


