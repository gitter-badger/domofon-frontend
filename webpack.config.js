module.exports = {
 entry: ["./src/app.js"],
 output: {
   filename: "./dist/app.js"
 },
 module: {
   loaders: [
     {
       test: /\.es6$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015'] 
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 },
}
