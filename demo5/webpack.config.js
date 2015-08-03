/**
 * Created by YU on 2015/7/30.
 */

var webpack = require('webpack');

module.exports = {
    entry:{
        'main':'./main'
    },
    output:{
        path:__dirname,
        filename:'bundle.[name].js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            {test:/\.js/,loader:'imports?this=>window'}
        ]
    },
    resolve:{
        modulesDirectories:['node_modules'],
        extensions:['.js','','.css'],
        alias:{
            jquery:require.resolve('./jquery-1.9.1.min')
        }
    },
    plugins:[
        /*new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery"
        }),*/
        new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js',Infinity)
    ],
    externals:{
        'jquery':'$'
    }

};