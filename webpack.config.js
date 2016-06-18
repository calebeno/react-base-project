var webpack = require('webpack');
var path = require('path');
var cssnext = require('postcss-cssnext');
var postcssImport = require('postcss-import');

var BUILD_DIR = path.resolve(__dirname, 'src/client/dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    // entry: APP_DIR + '/index.jsx',

    entry: [
        'webpack-dev-server/client?http://localhost:1337',
        'webpack/hot/only-dev-server',
        APP_DIR + '/index.jsx'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'app.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
                include: APP_DIR
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader?sourceMap!postcss-loader"
            }, {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader?name=[name].[ext]'
                    // loader: 'url?limit=25000'
            }

            // ?xyz[]=a,xyz[]=b       -> { xyz: ["a", "b"] }

            // {
            //     test: /\.jsx?/,
            //     include: APP_DIR,
            //     loader: 'babel',
            //     query: {
            //         presets: ['es2015', 'react']
            //     }
            // }, {
            //     test: /\.css$/,
            //     loader: "style-loader!css-loader!postcss-loader"
            // }
        ]
    },
    postcss: function() {
        return [
            postcssImport({
                onImport: function(files) {
                    files.forEach(this.addDependency);
                }.bind(this)
            }),
            cssnext()
        ];
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;
