module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/joulu2020'
        : process.env.NODE_ENV === 'test' ? '/joulu2020-dev' : '/'
}