import {runClickBenchmark, verifyNoBrowserErrors} from 'angular2/src/testing/perf_util';

describe('ng1.x tree benchmark', function() {

  var URL = 'benchmarks_external/src/tree/tree_benchmark.html';

  afterEach(verifyNoBrowserErrors);

  it('should log the stats (create)', function(done) {
    runClickBenchmark({
      url: URL,
      buttons: ['#destroyDom', '#createDom'],
      id: 'ng1.tree.create',
      params: [{name: 'depth', value: 9, scale: 'log2'}],
      waitForAngular2: false
    }).then(done, done.fail);
  });

  it('should log the stats (update)', function(done) {
    runClickBenchmark({
      url: URL,
      buttons: ['#createDom'],
      id: 'ng1.tree.update',
      params: [{name: 'depth', value: 9, scale: 'log2'}],
      waitForAngular2: false
    }).then(done, done.fail);
  });

});
