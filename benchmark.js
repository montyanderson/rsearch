const Benchmark = require("benchmark");
const rsearch = require("./");

const suite = new Benchmark.Suite();

suite.add("rsearch", () => {
	rsearch("Hello, World!");
}).on('cycle', function(event) {
  console.log(String(event.target));
}).run();
