# PostCSS Nope [![Build Status][ci-img]][ci]

Without any doubt the best [PostCSS] plugin in the world! It lets you write `nope` instead of `none`.

All started with a tweet from [@brad_frost](https://twitter.com/brad_frost):

<p align="center">
  <img src="https://raw.githubusercontent.com/dariopog/postcss-nope/master/brad_frost.png" alt="I just wrote display: nope." width="594" height="107"/>
</p>

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dariopog/postcss-nope.svg
[ci]:      https://travis-ci.org/dariopog/postcss-nope

Input:
```css
.foo {
    display: nope;
}
```

Output:
```css
.foo {
    display: none;
}
```

## Usage
```js
postcss([ require('postcss-nope') ])
```

See [PostCSS] docs for examples for your environment.

## License
MIT © [@dariopog](https://twitter.com/dariopog)
