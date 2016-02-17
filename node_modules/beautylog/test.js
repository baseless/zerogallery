/// <reference path="./typings/tsd.d.ts" />
var smartenv = require("smartenv");
var beautyLog = require('./index.js');
console.log('*** start OS console test ***');
console.log('');
console.log('declarative function calls:');
beautyLog.log('beautylog.log(), with normal logText, without logType');
beautyLog.dir('beautylog.dir(), with normal logText, without logType');
beautyLog.error('beautylog.error(), with normal logText, without logType');
beautyLog.info('beautylog.dir(), with normal logText, without logType');
beautyLog.ok('beautylog.ok(), with normal logText, without logType');
beautyLog.success('beautylog.success(), with normal logText, without logType');
beautyLog.warn('beautylog.warn(), with normal logText, without logType');
console.log('');
console.log('logType String:');
beautyLog.log('beautylog.log(), with normal logText, without logType');
beautyLog.log('beautylog.log(), with normal logText, with logType "dir"', 'dir');
beautyLog.log('beautylog.log(), with normal logText, with logType "error"', 'error');
beautyLog.log('beautylog.log(), with normal logText, with logType "info"', 'info');
beautyLog.log('beautylog.log(), with normal logText, with logType "ok"', 'ok');
beautyLog.log('beautylog.log(), with normal logText, with logType "success"', 'success');
beautyLog.log('beautylog.log(), with normal logText, with logType "warn"', 'warn');
console.log('');
console.log('*** end OS console test ***');
console.log("*** start table test ***");
(function () {
    var testTable1 = beautyLog.table.new("checks");
    testTable1.push(['check1', 'success']);
    testTable1.push(['check2', 'error']);
    testTable1.push(['check3', 'error']);
    testTable1.print();
    var testTable2 = beautyLog.table.new("custom", ["Column1".red, "Column2".blue, "Column3".cyan]);
    testTable2.push(["Hey", "this", "works"]);
    testTable2.print();
})();
console.log("*** end table test ***");
console.log("*** start code test ***");
beautyLog.code("var test = 3; function(){}\n", {
    language: "javascript"
});
