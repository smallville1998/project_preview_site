const path = require('path');

//the main configuration object
module.exports = {

    //path to your entry point. from this file webpack will begin his work
    entry: './src/js/index.js',

    //path and filename of your result bundle
    // webpack will bundle all javascript into this file

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
      },

    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript 
    // minifying and other thing so let's set mode to development
    mode: 'development'

}


















