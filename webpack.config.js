module.exports = {
    entry: "./app/assets/scripts/modules/app.js",
    output: {
        path: "./app/temp/scripts",
            filename: "app.js"
    
},
module: {
    loaders:[
        {
    loader: 'babel',
        query:{
            presets: ['es2015']
        },
            test: /\.js$/,
            exclude:/node_modules/
            }
         ]
            
       }    
     }