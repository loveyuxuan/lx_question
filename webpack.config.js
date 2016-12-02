var webpack=require('webpack');
var path=require('path');
module.exports={
    entry:{
        banner:'./js/banner.js',
        gender:'./js/gender.js',
        illness:'./js/illness.js',
        allergy:'./js/allergy.js',
        basicInfo:'./js/basicInfo.js',
        howFeel:'./js/howFeel.js',
        status:'./js/status.js'
       
    },
    output:{
        path:'dist/',
        filename:'js/[name].js',
        publicPath:'../dist/'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            {test:/\.scss$/,loaders:["style","css","sass"]},           
            {test:/\.(png|jpg|gif)$/,loader:'file?limit=8162&name=img/[name].[ext]'},
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: 'node_modules'
            }

        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery":"jquery"
    })
  ]
}