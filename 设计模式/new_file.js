var makePrison = function(priosner){
	return function(){
		return priosner;
	}
}

var jokePrison = makePrison('Joke');