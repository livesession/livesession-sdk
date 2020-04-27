# Official LiveSession SDK

This small package let you install LiveSession script and configure it properly.

If you need you can use methods that were also provided in this SDK.

**Important: script is working only in production mode!**

## Usage

`npm i livesession-sdk` or `yarn add livesession-sdk`

Next, you should initialize the SDK in your page like in this example:

```javascript
import ls from "livesession-sdk";

// init a script, trackID is required
ls.init("YOUR TRACKID", options);
```

**Initialization example**

```javascript
ls.init("123456789", { keystrokes: true, rootHostname: ".mypage.com });
```

## React usage

Find your Layout component - it's important if you want to init your script on every page. We recommend to init script in componentDidMount(lifecycle method).

```javascript
// In your Layout component
useEffect(() => {
  ls.init("example");
}, []);
// or
componentDidMount(){
  ls.init("example");
}
```

For more about initializing script check out our [guide](https://developers.livesession.io/javascript-api/configuration/)

## API

If you initialized script, you can simply customize it with following functions:

| Function          | Parameter                   | Default | Allowed                  |
| ----------------- | --------------------------- | ------- | ------------------------ |
| init              | trackID, options            | null    | string(required), object |
| getSessionURL     | callback(url, isNewSession) | null    | void(string, bool)       |
| identify          | data                        | null    | object                   |
| invalidateSession | -                           | null    | -                        |
| newPageView       | options                     | null    | object                   |
| setOptions        | options                     | null    | object                   |
| setCustomParams   | data                        | null    | object                   |
| off               | -                           | null    | -                        |
| optOut            | -                           | false   | -                        |
| debug             | -                           | false   | -                        |

If out want to learn more about all methods, go to our [developers page](https://developers.livesession.io/javascript-api/methods/)

## Contributing

We're always open to work with our community. Let us know if you have ideas for new features or suggestions. Pull requests for bug fixes are also welcome!

## License

[MIT](https://github.com/livesession/livesession-sdk/blob/master/LICENSE)
