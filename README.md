# PostCSS Nope [![Build Status][ci-img]][ci]
[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dariopog/postcss-nope.svg
[ci]:      https://travis-ci.org/dariopog/postcss-nope

Without any doubt the best [PostCSS] plugin in the world! It lets you write `nope` instead of `none`.

## Usage
Install PostCSS Nope via npm:
```css
npm install postcss-nope --save-dev
```

Include it in your build pipeline (for example using [Gulp](http://gulpjs.com/)):
```js
var gulp = require('gulp');
var postcss = require('postcss');
var nope = require('postcss-nope');

gulp.task('css', function () {
    return gulp.src([
            'src/css/index.css'
        ])
        .pipe(postcss([
            nope()
        ]))
        .pipe(gulp.dest('dist/css'));
});
```

Write the coolest CSS rules in the world:
```css
.foo {
    display: nope;
}
```
PS: it works with any CSS property, not only with display!

## License
MIT © [@dariopog](https://twitter.com/dariopog)
