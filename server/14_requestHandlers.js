var querystring = require('querystring'),
	 fs = require('fs'),
	 formidable = require('formidable');

function start(response){
	console.log("Request handler start was called");

	// 表单打开
	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />'+
	'</head>'+
	'<body>'+
	'<form action="/upload" enctype="multipart/form-data" method="post" >'+
	'<input type="file" name="upload" multiple="multiple" />'+
	'<input type="submit" value="Upload file" />'+
	'</form>'+
	'</body>'+
	'</html>';
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write(body);
	response.end();
}

function upload(response,request){
	console.log("Request handler upload was called");
	const form = new formidable.IncomingForm();
	console.log("about to parse");
	try{
		form.parse(request,(error,fields,files)=>{
		console.log("parsing done");
		fs.renameSync(files.upload.path, "/Users/jack/NodeJS/temp/temp.jpeg");
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write("You've received image <br/> ");
		response.write("<img src = '/show' /> ");
		response.end();	
	})
	}catch(e){
		console.log(e);
	}

}

function show(response){
	console.log("Request handler 'show' was called.");
	fs.readFile("/Users/jack/NodeJS/temp/temp.jpeg","binary",(error,file)=>{
		if(error){
			response.writeHead(500,{"Content-Type":"text/plain"});
			response.write(error+"\n");
			response.end();
		}else{
			response.writeHead(200,{"Content-Type":"image/jpeg"});
			response.write(file,"binary");
			response.end();
		}
	});
}

module.exports.start = start;
module.exports.upload = upload;
module.exports.show = show;