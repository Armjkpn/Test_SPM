const converter = require('./converter')
test('input 0฿ Chaange to $0.00', () => {
    expect(converter(0)).toEqual('$0.000')
})
test('input 1฿ Chaange to $0.033', () => {
    expect(converter(1)).toEqual('$0.033')
})
test('input 10฿ Chaange to $0.33', () => {
    expect(converter(10)).toEqual('$0.330')
})
test('input 60฿ Chaange to $1.99', () => {
    expect(converter(60)).toEqual('$1.980')
})
test('input 100฿ Chaange to $3.31', () => {
    expect(converter(100)).toEqual('$3.300')
})
test('input 200฿ Chaange to $6.63', () => {
    expect(converter(200)).toEqual('$6.600')
})