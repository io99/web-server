var middleware = {
	requireAuthentication:function (req, res, next){
		console.log('private route hit');
		next();
	}
}
logger: function (req, res, next){
	console.log('Request:'+ new Date().toString() + '' + req.method + '' + req.original
next();
}
};

module.exports = middleware;
//every middlewareattribute can be used by other files now