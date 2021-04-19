let mix = require('laravel-mix');

// mix.sass('src/app.scss', 'dist');

mix.sass("src/app.scss", "dist").options({
  processCssUrls: false
});
