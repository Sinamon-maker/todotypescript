export const mode: string;
export const target: "web" | "browserslist";
export const devtool: "source-map" | undefined;
import HTMLWebpackPlugin = require("html-webpack-plugin");
import MiniCssExtractPlugin = require("mini-css-extract-plugin");
import tailwindcss = require("tailwindcss");
import autoprefixer = require("autoprefixer");
export declare namespace devServer {
    export namespace _static {
        const directory: string;
    }
    export { _static as static };
    export const port: number;
    export const open: boolean;
    export const hot: boolean;
}
export declare const entry: string[];
export declare namespace output {
    const path: string;
    const clean: boolean;
    const filename: string;
}
export declare const plugins: (HTMLWebpackPlugin | MiniCssExtractPlugin)[];
export declare namespace module {
    const rules: ({
        test: RegExp;
        loader: string;
        use?: undefined;
        type?: undefined;
        generator?: undefined;
        issuer?: undefined;
        exclude?: undefined;
    } | {
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                postcssOptions: {
                    ident: string;
                    plugins: (typeof tailwindcss | typeof autoprefixer)[];
                };
            };
        })[];
        loader?: undefined;
        type?: undefined;
        generator?: undefined;
        issuer?: undefined;
        exclude?: undefined;
    } | {
        test: RegExp;
        type: string;
        generator: {
            filename: string;
        };
        loader?: undefined;
        use?: undefined;
        issuer?: undefined;
        exclude?: undefined;
    } | {
        test: RegExp;
        issuer: RegExp;
        use: string;
        loader?: undefined;
        type?: undefined;
        generator?: undefined;
        exclude?: undefined;
    } | {
        test: RegExp;
        use: {
            loader: string;
            options: {
                mozjpeg: {
                    progressive: boolean;
                };
                optipng: {
                    enabled: boolean;
                };
                pngquant: {
                    quality: number[];
                    speed: number;
                };
                gifsicle: {
                    interlaced: boolean;
                };
                webp: {
                    quality: number;
                };
            };
        }[];
        type: string;
        loader?: undefined;
        generator?: undefined;
        issuer?: undefined;
        exclude?: undefined;
    } | {
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
            options: {
                presets: string[];
                compilerOptions?: undefined;
            };
        };
        loader?: undefined;
        type?: undefined;
        generator?: undefined;
        issuer?: undefined;
    } | {
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
            options: {
                compilerOptions: {
                    noEmit: boolean;
                };
                presets?: undefined;
            };
        };
        loader?: undefined;
        type?: undefined;
        generator?: undefined;
        issuer?: undefined;
    })[];
}
export declare namespace resolve {
    const extensions: string[];
}
