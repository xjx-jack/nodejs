const {argv,argv0, execArgv,execPath} = process;

argv.forEach( item =>{
	console.log(item);
});

execArgv.forEach(item => {
	console.log(execArgv);
})