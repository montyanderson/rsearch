const chars = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const match = letters.map(l => new RegExp(l, "g"));
const repl = letters.map(l => "[" + l.toUpperCase() + l + "]");

function rsearch(q) {
	let str = q.toLowerCase()
	.split("")
	.map(l => {
		if(l == " ") return "*";
		if(chars.indexOf(l) > -1) return l;
		return "?";
	})
	.join("");

	for(let i = 0; i < letters.length; i++) {
		str = str.replace(match[i], repl[i]);
	}

	return "*" + str + "*";
};

module.exports = rsearch;
