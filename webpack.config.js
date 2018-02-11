const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,    // 如果文件是 .js 结尾
                exclude: /(node_modules|bower_components)/,
                use: {             // 使用 babel-loader 转换
                    loader: 'babel-loader',
                    options: {       // 选项，参数 env
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,   // 1. 发现后缀 .scss 文件
                use: [
                    {
                        loader: "style-loader" // 4. 使用 style-loader 将 JS 字符串 ==> <style> 标签（creates style nodes from JS strings）
                    }, {
                        loader: "css-loader?url=false", // 3. 使用 css-loader 将 css ==> JS 字符串（translates CSS into CommonJS）
                    //     options: { importLoaders: 1 }
                    // }, {
                    //     loader: 'postcss-loader?url=false',
                    //     options: {                     // 如果没有 options 则不会添加后缀，先尝试不添加 options，如果 postcss-loader 不工作，再添加 options
                    //         plugins: () => [
                    //             require('autoprefixer')
                    //         ]
                    //     }
                    }, {
                        loader: "sass-loader" // 2. 使用 sass-loader 将 sass ==> css (compiles Sass to CSS）
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    }
}
