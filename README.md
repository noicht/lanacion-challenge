# La Nacion Challenge API

This API is designed to handle various functionalities required for the La Nacion challenge. It provides endpoints for managing and retrieving data efficiently.

## Features

- **High Performance**: Optimized for speed and reliability.
- **Scalable**: Designed to handle a large number of requests.
- **MongoDB Integration**: Utilizes MongoDB for efficient data storage and retrieval.

## How to Run

To run the API, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/lanacion-challenge.git
    cd lanacion-challenge
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Server**:
    ```bash
    npm run start
    ```

4. **Configure .env file**:
    Inside the project, you will find a `.env.example` that contains the environment variables of the API. Create a new `.env` file and use the `.env.example` contents or add any information you desire.

5. **Access the API**:
    Use Postman, Thunder Client, or any other API client and navigate to `http://localhost:{PORT}` (default PORT=4000).

6. **Run API tests**:
    ```bash
    npm test
    ```

## Endpoints

- **GET /contacts**: Retrieve all data.
- **POST /contacts**: Add new data.
- **PUT /contacts/:id**: Update data by ID.
- **DELETE /contacts/:id**: Delete data by ID.
- **GET /contacts/search**: Search a contact using phone number or email.
- **GET /contacts/location**: Search a contact by location.

**IMPORTANT**:
- This API uses Swagger to document endpoints. You can get a more graphic view of the project by navigating to `http://localhost:{PORT}/api-doc`.
- You must be running a MongoDB client to make changes in your local database.

**ALTERNATIVE**:
- You can use Docker to run this project:
    - Ensure you have the right Docker client.
    - Run `docker-compose up --build` to run the container.
    - Test the endpoints manually using the API client you want.

    - **TODO**: Unfortunately, you can't run the tests inside the Docker container. I recommend running the API locally since this feature is in progress.

If you have any doubts, contact me at `mcabreracaz@gmail.com`. Thank you kindly! :D
