## qrdecoder

### description  
A command line tool to decode local qrcode image

### usage
```bash
$ qrdecoder path/to/img1.png [path/to/img2.png ...]
```

### install
```bash
npm i -g qrdecoder
```

### If you want another name instead of `qrdecoder`
- git clone this repo && cd this repo
- edit `package.json` like this:

```javascript
  "bin": {
    "whatever-cmd-you-like": "./bin/qrdecoder"
  }
```

- run `npm link` to add `whatever-cmd-you-like` to PATH

### license
MIT
