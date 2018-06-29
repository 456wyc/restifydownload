# Usage

```
    const rd=require('restifydownload');
    app.use(rd);

    app.get('/test/download',(req, res, next)=>{
        res.download({
            path: '/the/path/of/file',
            name: 'filename',
            type: 'contentType',
            charSet: 'charSet'
        })
    })
    app.get('/test/download2',(req, res, next)=>{
        res.sendFile('filedata',{
            name: 'filename',
            type: 'contentType',
            charSet: 'charSet'
        })
    })
```
