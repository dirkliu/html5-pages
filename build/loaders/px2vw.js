function createPxReplace(pixels, viewportSize, unitPrecision, viewportUnit) {
  return (pixels / viewportSize * 100).toFixed(unitPrecision) + viewportUnit;
}

function getQueryString(query){
  if(!query) {
       return {};
  }
  if(typeof query !== "string" && typeof query !== 'object') {
  util.error('query need use json type');
  return {};
}
  if(typeof query === "string" && query.substr(0, 1) === "{" && query.substr(-1) === "}"){
      return JSON.parse(query);
  }else{
  return query;
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
