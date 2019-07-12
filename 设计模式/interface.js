var Interface = function(name, methods) {
	if (arguments.length != 2) {
		throw new Error('2个参数需要');
	}
	this.name = name;
	this.methods = [];
	for (var i = 0; i < methods.length; i++) {
		if (typeof methods[i] !== 'string') {
			throw new Error('方法名称应该是字符串');
		}
		this.methods.push(methods[i]);
	}
}

Interface.ensureImplements = function(object) {
	if (arguments.length < 2) {
		throw new Error('arguments at lest 2');
	}
	for (var i = 1; i < arguments.length; i++) {
		var interfacetmp = arguments[i];
		if (interfacetmp.constructor !== Interface) {
			throw new Error('not Interface');
		}
		for (j = 0; j < interfacetmp.methods.length; j++) {
			var method = interfacetmp.methods[j];
			if (!object[method] || typeof object[method] != 'function') {
				throw new Error(method + '没有实现接口方法');
			}
		}
	}
}

function extend(child,parent){
			var F = function(){};
			F.prototype = parent.prototype;
			child.prototype = new F();
			child.prototype.constructor = child;
			child.parent = parent.prototype;
			if(parent.prototype.constructor == Object.prototype.constructor){
				parent.prototype.constructor = parent;
			}
		}
function addEvent(ele,active,fn){
	if(window.attachEvent){
		ele.attachEvent(active,fn);
	}else{
		ele.addEventListener(active,fn);
	}
}		
		