let a: any, cb

describe('test module', ()=> {
  beforeEach(()=> {
    a = {}
    cb = jest.fn()
  })
  it('test case1', ()=> {
    expect(Object.keys(a).length).toEqual(0)
  })
})