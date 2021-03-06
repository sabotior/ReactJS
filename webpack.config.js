const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exlude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}