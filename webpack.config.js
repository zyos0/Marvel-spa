const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');

const root = `${__dirname}/src`;
const dist = `${__dirname}/dist`;

const paths = {
    app: `${root}/app/root.module.js`,
    styles: `${root}/styles`,
    static: {
        index: `${root}/index.html`,
        images: `${root}/img/**/*`
    },
};

const scripts = {
    test: /\.js?$/,
    exclude: [/node_modules/],
    use: [
        {
            loader: 'ng-annotate-loader'
        },
        {
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
            }
        }

    ]
};


const html = {
    test: /\.html$/,
    use: [
        {loader: 'ngtemplate-loader'},
        {loader: 'html-loader'}
    ]
};

const fonts = {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader?name=fonts/[name].[ext]',
};

const styles = {
    test: /\.scss$/,
    loader: extractPlugin.extract(
        {
            fallback: "style-loader",
            use: [
                {
                    loader: 'css-loader', options: {sourceMap: true}
                },
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths:[paths.styles],
                        sourceMap: true,

                    }
                }
            ]
        }
    )
};


const plugins = {
    clean: new cleanPlugin([
        dist,
    ]),
    copy: new copyPlugin(
        [
            {
                from: paths.static.index,
            },
            {
                from: paths.static.images,
                to: 'img/',
                flatten: true,
            }
        ]
    ),
};

const config = {
    entry: {
        bundle: paths.app,
    },
    devtool: 'source-map',
    module: {
        rules: [
            scripts,
            styles,
            html,
            fonts,
        ]
    },
    plugins:[
        plugins.clean,
        plugins.copy,
        new extractPlugin('css/styles.css')
    ],
    output:{
        path: `${dist}/`,
        publicPath: '/',
        filename: 'js/app.[name].js',
    }
};


module.exports = config;
/*{
    entry: './app/root.module.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'ngtemplate-loader'
                    },
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'ng-annotate-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                        }
                    }

                ]
            }

        ]
    }
};*/

