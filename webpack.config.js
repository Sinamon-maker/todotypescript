const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer'); // help tailwindcss to work

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'inline-source-map' : undefined;

module.exports = {
	mode,
	target,
	devtool,
	devServer: {
		static: {
			directory: path.resolve(__dirname, './dist'),
		},
		port: 8080,
		open: true,
		hot: true,
		historyApiFallback: true,
	},
	entry: [path.resolve(__dirname, 'src', 'index.tsx')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: 'index.js',
		publicPath: '/',
		assetModuleFilename: 'assets/[name][ext]',
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),

		new MiniCssExtractPlugin({
			filename: 'main[contenthash].css',
		}),
		new CopyPlugin({
			patterns: [{ from: 'src/images', to: 'src/images' }],
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: [tailwindcss, autoprefixer],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.woff2?$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[ext]',
				},
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				issuer: /\.[jt]sx?$/,
				use: '@svgr/webpack',
			},
			{
				test: /\.(jpe?g|png|webp|gif)$/i,
				type: 'asset/resource',
			},

			{
				test: /\.(m?js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules|\.d\.ts$/,
				use: {
					loader: 'ts-loader',
					options: {
						compilerOptions: {
							noEmit: false, // this option will solve the issue
						},
					},
				},
			},
		],
	},
	resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
};
