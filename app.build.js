//SCHEMA : https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
    appDir: "./src/",
    baseUrl: "./",
    dir: "./srcCompiled",
    optimizeCss: 'none',
    paths: {
        angular: 'empty:',
    },
    optimize: "none", //use uglify2 in production
    //optimize: "uglify2", //use uglify2 in production
    //generateSourceMaps: true,
    //preserveLicenseComments:false,
    fileExclusionRegExp: /^\-/,
    shim: {
        'angular': {exports: 'angular'},
        'angular-animate': {deps: ['angular']},
        'angular-cookies': {deps: ['angular']},
        'angular-messages': {deps: ['angular']},
        'angular-mocks': {deps: ['angular']},
        'angular-resource': {deps: ['angular']},
        'angular-sanitize': {deps: ['angular']}
    },
    modules: [
        {
            name: "app/app"
        }
    ],
    onModuleBundleComplete: function () {
        var fs = module.require('fs');
        var amdclean = module.require('amdclean'),
            outputFile = './srcCompiled/app/app.js',

            cleanedCode = amdclean.clean({
                //sourceMap: mapData,
                'filePath': outputFile,
                'wrap': false,
                'esprima': {
                    'source': 'app.js' // name of your file to appear in source map
                },
                'escodegen': {
                    'sourceMap': true,
                    sourceRoot: 'js/',
                    'sourceMapWithCode': true
                }
            });

        //fs.writeFileSync('./www/js/app.min.js', cleanedCode);
        fs.writeFileSync('./www/js/app.js', cleanedCode.code);
        fs.writeFileSync('./www/js/app.js.map', cleanedCode.map);
    }
})