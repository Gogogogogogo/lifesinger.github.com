/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['test.js']) {
  _$jscoverage['test.js'] = [];
  _$jscoverage['test.js'][3] = 0;
  _$jscoverage['test.js'][4] = 0;
  _$jscoverage['test.js'][6] = 0;
  _$jscoverage['test.js'][7] = 0;
  _$jscoverage['test.js'][10] = 0;
  _$jscoverage['test.js'][13] = 0;
}
_$jscoverage['test.js'].source = ["","","<span class=\"k\">function</span> testFn<span class=\"k\">(</span>a<span class=\"k\">,</span> b<span class=\"k\">,</span> c<span class=\"k\">)</span> <span class=\"k\">{</span>","\t<span class=\"k\">var</span> ret <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","","\t<span class=\"k\">if</span><span class=\"k\">(</span>a <span class=\"k\">||</span> b <span class=\"k\">||</span> c<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\tret<span class=\"k\">++;</span>","\t<span class=\"k\">}</span>","","\t<span class=\"k\">return</span> ret<span class=\"k\">;</span>","<span class=\"k\">}</span>","","testFn<span class=\"k\">(</span><span class=\"s\">1</span><span class=\"k\">);</span>"];
_$jscoverage['test.js'][3]++;
function testFn(a, b, c) {
  _$jscoverage['test.js'][4]++;
  var ret = 0;
  _$jscoverage['test.js'][6]++;
  if ((a || b || c)) {
    _$jscoverage['test.js'][7]++;
    (ret++);
  }
  _$jscoverage['test.js'][10]++;
  return ret;
}
_$jscoverage['test.js'][13]++;
testFn(1);