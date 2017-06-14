const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");


const dir = `${__dirname}`;

const root = `${__dirname}/src`;
const dist = `${__dirname}/dist`;

const paths = {
    app: `${root}/app/root.module.js`,
    styles: `${root}/styles`,
    bootstrap: `${dir}/node_modules/bootstrap/dist/`,
    marvel: `${dir}/node_modules/typeface-marvel/files/`,
    static: {
        index: `${root}/index.html`,
        images: `${root}/images/**/*`,
        templates: `${root}/app/**/*.html`
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
                presets: ['es2015','stage-2'],
            }
        }

    ]
};


const html = {
    test: /\.html$/,
    use: [
        {loader: 'ngtemplate-loader?relativeTo=' + dir},
        {loader: 'html-loader'}
    ]
};

const fonts = {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader?name=fonts/[name].[ext]',
};

const styles = {
    test: /\.(css|scss)$/,
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
                        includePaths: [paths.styles],
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
                to: 'images/',
                flatten: true,
            },
            {
                from:paths.bootstrap
            },
            {
                from:paths.marvel,
                to:'fonts/'
            }

        ]
    ),
};

const devServer = {
    host: "zyos0.marvel.com",
    port: 80,
    https: false
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
    plugins: [
        plugins.clean,
        plugins.copy,
        new extractPlugin('css/styles.css'),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    output: {
        path: `${dist}/`,
        publicPath: '/',
        filename: 'js/app.[name].js',
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
    }

};


module.exports = config;
