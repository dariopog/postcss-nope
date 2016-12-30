var postcss = require('postcss'),
    plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('should trasform \'display: nope;\' to \'display: none;\'', () => {
    return run('a{display: nope;}', 'a{display: none;}', {});
});

it('should not trasform \'content: "nope";\'', () => {
    return run('a:after{content: "nope";}', 'a:after{content: "nope";}', {});
});

it('should trasform \'nope\' to \'none\' leaving \'important!\'', () => {
    return run( 'a{display: nope !important;}',
                'a{display: none !important;}', {});
});
