const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
  configureWebpack: {
    plugins: [
        new CopyWebpackPlugin([
            {context: path.resolve(__dirname,'./src/assets/material'),from: '**/*',to: './material'}
        ])
    ]
  }
};
