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
			if (!object[method]  || typeof object[method] != 'function') {
				throw new Error(method + '没有实现接口方法');
			}
		}
	}
}

function extend(subClass, supClass) {
	var F = function() {};
	F.prototype = supClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
	subClass.supClass = supClass.prototype;
	if(supClass.prototype.constructor == Object.prototype.constructor){
		supClass.prototype.constructor = supClass;
	}

}

function addEvent(ele, active, fn) {
	if (window.attachEvent) {
		ele.attachEvent(active, fn);
	} else {
		ele.addEventListener(active, fn);
	}
}
