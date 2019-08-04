console.log('this is a module');

const testVar = 100;
function test(){
	console.log(testVar);
}

module.exports.testVar = testVar; /*对外输出变量*/
module.exports.testFn = test;    /*对外输出函数*/