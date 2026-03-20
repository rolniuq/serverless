## Serverless Simple Demo

This is a simple serverless demo that returns a JSON response from a Go Lambda.

### Run locally

Build the function first:

```sh
sam build
```

Then start the local API:

```sh
sam local start-api
```

This repository ships with `samconfig.toml` configured to skip pulling Lambda base images during local runs. That avoids registry lookup timeouts when the image is already available locally.

Test the endpoint:

```sh
curl http://localhost:3000/hello
```
