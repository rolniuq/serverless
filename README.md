## Serverless Simple Demo

This is a simple serverless demo

### Run locally

Build the function first:

```sh
yarn build
```

Then start the local API:

```sh
yarn start
```

This repository ships with `samconfig.toml` configured to skip pulling Lambda base images during local runs. That avoids registry lookup timeouts when the image is already available locally.
