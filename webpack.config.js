var path = require('path');

module.exports = {
    entry:  ['babel-polyfill','./src/main/js/app.js'],
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
      },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins:['transform-runtime']
                }
            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff(2)?)(\?.*)?$/,
                include: /(third-party|node_modules)/,
                loader: 'file',
                query: {
                    name: '[2]',
                    regExp: '(core|modules)/(.+)$'
                  }
            }, 
            {
            	test: /\.css(\?.*)?$/,
            	loader: 'style!css'
            }
        ]
    }
};