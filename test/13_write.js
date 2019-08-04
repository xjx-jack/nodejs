const fs = require('fs');
fs.writeFile('./message.txt','消息通知。 \r\n 这是第二行。',(err,data)=>{
	if(err){
		console.log('写文件失败');
	}else{
		console.log('写文件成功');
		const d = fs.readFileSync('./message.txt', 'UTF-8');
		console.log(d);
	}
})