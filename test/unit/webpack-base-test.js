//webpack.base.js的测试用例

const assert=require('assert') //断言库

describe('webpack.base.js test case',()=>{
    const baseConfig=require('../../lib/webpack.base')
    console.log(baseConfig);
    
    it('entry',()=>{
        assert.equal(baseConfig.entry.index.indexOf('/test/smoke/template/src/index/index.js')>-1,true)
        assert.equal(baseConfig.entry.search.indexOf('/test/smoke/template/src/search/index.js')>-1,true)
    })
})