const chUtil = {
	"space": 32, "simiColom": 59, "yen":165,
	"factorial": 33, "lessThan": 60, "underscoreTop":175,
	"backslash": 34, "equal": 61, "plusMinus":177,
	"hash": 35, "greaterThan": 62, "paragraphSign":182,
	"dollar": 36, "question": 63, "sectionSign":167,
	"percent": 37, "atSign": 64, "divide":247,
	"and": 38, "leftSideBracket": 91, "copyright":169,
	"singleQuote": 39, "doubleBackSlash": 92, 
	"leftPara": 40, "rightSideBracket": 93,
	"rightPara": 41, "circumflexAccent": 94,
	"star": 42, "underScore": 95,
	"plus": 43, "grveAccent": 126,
	"coma": 44, "leftBrace": 123,
	"minus": 45, "varticleLine": 124,
	"dot": 46, "rightBrace": 125,
	"colma": 58, "empty": 0,
	"cross": 215,"funcSign": 402,
	"doubleLessThen": 171,"doubleGreaterThan": 187,
	"dotFill": 9617,"dotFillWave": 9618,
	"dotFillBlack": 9619,"cent": 162,
}

const funcUtil = {
	"chc": function(ch){
		return String.fromCodePoint(ch);
	},
	"times":function(ch,times){
		let result = "";
		for (var i = 0; i < times; i++) {
			result+=this.chc(ch);
		}
		return result;	
	},
	"num":function(n){
		return String(n);
	}
}

const StringBuilder = {
	util: {},
	then: undefined,
	setUtil: function(util){
		let res = {};

		for(let utilIndex in util){
			let obj = util[utilIndex];
			for(let keyValue in obj){
				let key = keyValue;
				let value = obj[key];
				res[key] = value;
			}
		}
		this.util = res;
		return this;
	},
	modify: function(target, callback){

		const args = typeof target === "string"? target.split(" "): target;

		this.then = callback(args, this.util).reduce((p,c)=>{
			typeof c === "number"? p+= String.fromCodePoint(c):
			p+=c; 
			return p;
		},"")
		return this;
	},
	result: function(callback){
		callback(this.then);
	}
};
