import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.tsx', // Обязательно измените расширение на .tsx для TypeScript и JSX
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/, // Добавляем поддержку ts и tsx файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // Для ES6 и выше
              ['@babel/preset-react', { runtime: 'automatic' }] // Поддержка JSX
            ],
            plugins: ['react-refresh/babel'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,               // Обработка файлов .ts и .tsx
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3001,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    devMiddleware: {
      publicPath: '/',
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Поддержка расширений
    alias: {
      "@": path.resolve(__dirname, 'src/'),
      "@components": path.resolve(__dirname, 'src/components/'),
      "@api": path.resolve(__dirname, 'src/api/'),
      "@styles": path.resolve(__dirname, 'src/styles/'),
    },
  },
};
