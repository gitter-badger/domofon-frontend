var path = require('path');

module.exports = {
 entry: path.resolve('src', 'app.js'), 
 output: {
   path: path.join(__dirname, 'dist'),
   filename: 'app.js'
 },
 module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015', 'stage-0'] 
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 }
}
