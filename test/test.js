var path = require('../index'),
    assert = require('assert');

describe('path', function() {
    it('path.normalize(p)', function() {
        assert.equal(path.normalize('/foo/bar//baz/asdf/quux/..'),'/foo/bar/baz/asdf');
    });

    it('path.join(..)', function() {
        assert.equal(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'), '/foo/bar/baz/asdf');
        try {
            path.join('foo', {}, 'bar')
        }catch(e) {
            assert(e instanceof TypeError);
            assert.equal(e.message, 'Arguments to path.join must be strings');
        }
    });

    it('path.resolve([from ...], to)', function() {
        assert.equal(path.resolve('/foo/bar', './baz'), '/foo/bar/baz');
        assert.equal(path.resolve('/foo/bar', '/tmp/file/'), '/tmp/file');
        console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
        // if currently in /home/myself/node, it returns
        // '/home/myself/node/wwwroot/static_files/gif/image.gif'
    });


    it('path.relative(from, to)', function() {
        // TODO: window sys path
        //path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')
        // '..\\..\\impl\\bbb'
        assert.equal(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'), '../../impl/bbb');
    });


    it('path.dirname(p)', function() {
        assert.equal(path.dirname('/foo/bar/baz/asdf/quux'),'/foo/bar/baz/asdf');
    });


    it('path.basename(p, [ext])', function() {
        assert.equal(path.basename('/foo/bar/baz/asdf/quux.html'), 'quux.html');
        assert.equal(path.basename('/foo/bar/baz/asdf/quux.html', '.html'), 'quux');
    });

    it('path.extname(p)', function() {
        assert.equal(path.extname('index.html'), '.html');
        assert.equal(path.extname('index.'), '.');
        assert.equal(path.extname('index'), '');
    });

    it('path.sep', function() {
        assert.equal(path.sep, '/');
    });

    it('path.delimiter', function() {
        assert.equal(path.delimiter, ':');
    });
});

