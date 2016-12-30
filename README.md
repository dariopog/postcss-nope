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

## Be cool
Stay tuned, be cool, follow [@postcss_nope](https://twitter.com/postcss_nope) and star [/postcss-nope](https://github.com/dariopog/postcss-nope).

## Thanks
Special thanks to [@brad_frost](https://twitter.com/brad_frost) for being an endless source of inspiration:

<p align="center">
    <img src="https://raw.githubusercontent.com/dariopog/static/master/postcss-nope/brad_frost.png" alt="I just wrote display: nope." width="512" height="172"/>
</p>

## License
MIT © [@dariopog](https://twitter.com/dariopog)
