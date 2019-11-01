converter = (currency) => {
    if (typeof currency === 'number')
        return `$${(currency * 0.033).toFixed(3)}`
    else
        return "error"
}
module.exports = converter;