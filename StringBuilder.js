const chUtil = {
	"spa": 32, "sco": 59, "yen":165,
	"fac": 33, "lth": 60, "ust":175,
	"bsl": 34, "eqa": 61, "pms":177,
	"has": 35, "gth": 62, "psi":182,
	"dol": 36, "que": 63, "ssi":167,
	"per": 37, "asi": 64, "div":247,
	"and": 38, "lsb": 91, "csy":169,
	"squ": 39, "dbs": 92, 
	"lpa": 40, "rsb": 93,
	"rpa": 41, "cac": 94,
	"sta": 42, "usc": 95,
	"plu": 43, "gac": 126,
	"com": 44, "lcb": 123,
	"min": 45, "vli": 124,
	"dot": 46, "reb": 125,
	"col": 58, "epm": 0,
	"cro": 215,"fsi": 402,
	"dlh": 171,"dgr": 187,
	"mdo": 9617,"mdw": 9618,
	"dfb": 9619,"cen": 162,

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

		this.then = callback(args,this.util).reduce((p,c)=>{
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
