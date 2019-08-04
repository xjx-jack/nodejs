const fs = require('fs');
const buf = new Buffer.from('我爱编程')；
console.log()
fs.open('./message.txt', 'wx',  function(err,fd) {
	fs.write(fd,buf,0,buf.length,0,(err,written,buffer)=>{
		if(err){
			console.log('写文件操作失败');
		}else{
			console.log("写文件操作成功");
		}
		fs.fsync(fd);
		fs.close(fd);
	});
})