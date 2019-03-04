export const rules = [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
    ],
  },
];

export const backendRules = [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
    ],
    exclude: /node_modules/,
  },
];

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
};
