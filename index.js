const fs = require('fs');

module.exports = function (req, res, next) {
    res.download = res.download || function (opt, cb) {
        fs.readFile(opt.path, (err, data) => {
            if (err) {
                cb ? cb(err) : {}
            } else {
                res.charSet(opt.charSet);
                res.set({
                    'content-type': opt.type,
                    'Content-Disposition': `attachment;filename="${opt.name||new Date().toLocaleString()}"`
                })
                res.write(data);
                res.end();
                cb ? cb() : {}
            }
        })
    }
    res.sendFile = res.sendFile || function (data, opt, cb) {
        res.charSet(opt.charSet);
        res.set({
            'content-type': opt.type,
            'Content-Disposition': `attachment;filename="${opt.name||new Date().toLocaleString()}"`
        });
        res.write(data);
        res.end();
        cb ? cb() : {}
    }
    next()
}