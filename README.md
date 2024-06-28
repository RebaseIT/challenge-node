# Getting Started

- System requirements
    - node >= 20
    - yarn
- Start the dev server.
  ```bash
  yarn install
  node index.js
  ```

# Getting Started (Docker)

Instead of following the steps above, you can also use Docker to set up your environment.

- System requirements
    - [Docker Compose](https://docs.docker.com/compose/install/)
- Run `docker-compose up` to spin up the dev server.
- Enter `Ctrl-C` in the same same terminal or `docker-compose down` in a separate terminal to shut down the server.

# Verify That Everything Is Set Up Correctly

You can use cURL or a tool like [Postman](https://www.postman.com/) to test the API.

#### Example Curl Commands

You can log in as one of the seeded users with the following curl command:

```bash
curl --location --request POST 'localhost:8100/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": {
        "username": "admin",
        "password": "admin"
    }
}'
```

Then you can use the token that comes back from the /login request to make an authenticated request to create a new product:

```bash
curl --location --request POST 'localhost:8100/api/products' \
--header 'Token: your-token-here' \
--header 'Content-Type: application/json' \
--data-raw '{
    "product": {
        "name": "ACME Dynamite",
        "price": "10"
    }
}'
```