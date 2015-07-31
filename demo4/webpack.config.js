/**
 * Created by YU on 2015/7/30.
 */
module.exports = {
    entry:{
        'page1':'./entry.js'
    },
    output:{
        path:__dirname,
        filename:'bundle.[name].js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,loader:'style!css'
            }
        ]
    }
};