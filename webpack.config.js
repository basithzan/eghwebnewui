module.exports = {
    module: {
      rules: [
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'media/',
          },
        },
        // Other rules...
      ],
    },
  };
  