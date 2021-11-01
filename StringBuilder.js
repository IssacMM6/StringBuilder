const chUtil = {
	spa: 32, sco: 59,
	fac: 33, lth: 60,
	bsl: 34, eqa: 61,
	has: 35, gth: 62,
	dol: 36, que: 63,
	per: 37, asi: 64,
	and: 38, lsb: 91,
	squ: 39, dbs: 92, 
	lpa: 40, rsb: 93,
	rpa: 41, cac: 94,
	sta: 42, lli: 95,
	plu: 43, gac: 126,
	com: 44, lcb: 123,
	min: 45, vli: 124,
	sla: 46, reb: 125,
	col: 58, epm: 31,
}

const StringBuilder = {
	util: {},
	then: null,
	setUtil: function(u){
		this.util = u;
		return this;
	},
	modify: function(target, callback){

		const args = typeof target === "string"? target.split(" "): target;

		this.then = callback(args,this.util).reduce((p,c)=>{
			typeof c === "number"? p+= String.fromCharCode(c):
			p+=c; 
			return p;
		},"")
		return this;
	},
	result: function(callback){
		callback(this.then);
	}
};