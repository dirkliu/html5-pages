function createPxReplace(pixels, viewportSize, unitPrecision, viewportUnit) {
  return (pixels / viewportSize * 100).toFixed(unitPrecision) + viewportUnit;
}

function getQueryString(query){
  if(!query) {
    return {};
  }
  if(typeof query !== "string" && typeof query !== 'object') {
    console.error('query need use json type');
    return {};
  }
  if(typeof query === "string" && query.substr(0, 1) === "{" && query.substr(-1) === "}"){
    return JSON.parse(query);
  }else{
    return query;
  }
}

function glob2RegExp (test) {
	if (typeof test === "string") {
		test = new RegExp("^" + test.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"));
	}
	return test;
}

function testRegExpOrGlob (str, test) {
	if (!test) return true;
	test = glob2RegExp(test);
	if (Array.isArray(test)) {
		return test.map(glob2RegExp).some(regExp => regExp.test(str));
	} else {
		return test.test(str);
	}  
}

const px2vw = function (source) {
  if (!this.cacheable) {
    return source
  }
  this.cacheable()

  var options = Object.assign({},{
    viewportWidth: 750,
    viewportUnit: 'vw',
    minPixelValue:1,
    decimal:3
  }, getQueryString(this.query))
  var matchPXExp = /([0-9.]+px)([;,| |}|'|"\)\r|\n])/g
  if (options.include && !testRegExpOrGlob(this.resourcePath, options.include)) {
    return source
  }

  if (options.exclude && testRegExpOrGlob(this.resourcePath, options.exclude)) {
    return source
  }

  let newSource = source.replace(matchPXExp, function (match, m1, m2) {
    var pixels = parseFloat(m1.slice(0, m1.length - 2));
    if (pixels <= options.minPixelValue) {
        return match;
    }
    return createPxReplace(pixels, options.viewportWidth, options.decimal, options.viewportUnit) + m2;
  })

  return newSource
}

module.exports = px2vw
