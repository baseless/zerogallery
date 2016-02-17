#!/usr/bin/env node

/// <reference path="./index.ts" />
var GulpBrowserBrowserify;
(function (GulpBrowserBrowserify) {
    function init() {
        return function () {
            return plugins.through.obj(function (file, enc, cb) {
                var bundleCallback = function (err, bufferedContent) {
                    if (Buffer.isBuffer(bufferedContent)) {
                        file.contents = bufferedContent;
                    }
                    else {
                        plugins.beautylog.error("gulp-browser: .browserify() " + err.message);
                    }
                    cb(null, file);
                };
                plugins.browserify(file, { basedir: file.base })
                    .bundle(bundleCallback);
            });
        };
    }
    GulpBrowserBrowserify.init = init;
})(GulpBrowserBrowserify || (GulpBrowserBrowserify = {}));
/// <reference path="./typings/main.d.ts" />
/// <reference path="./modulebrowserify.ts" />
var plugins = {
    beautylog: require("beautylog"),
    through: require("through2"),
    gutil: require("gulp-util"),
    path: require("path"),
    browserify: require("browserify")
};
//create the return object
var gulpBrowser = {};
gulpBrowser.browserify = GulpBrowserBrowserify.init();
module.exports = gulpBrowser;
