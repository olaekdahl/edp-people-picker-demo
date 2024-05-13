# edp-people-picker

This project lists the Travelers EDP program bootcamp cohort 1 and picks a random person from the group. People start out unpicked, and are displayed and added to the list of picked people when they are selected. The list can be reset using the Reset button.

## Running this project locally

### 1. Dependencies
- Node.js
- MongoDB

### Set up mongoDB
Add these lines to a `.env` file:
```
PORT=3000;
MONGO_DB_URL=mongodb://localhost:27017
MONGO_DB=your_db_name
MONGO_DB_COLLECTION=your_collection_name
```
### 2. How to run locally
1. Make sure mongoDB is running.

Bonus: You *may* create a local folder called `db/data` and run ...
  ```
  npm run mongo
  ```
To create a **local** database. Change package.json to customize the port number.

2. **Clone this repository**
    - Change into the `edp-people-picker` directory:
        ```
        $ cd edp-people-picker
        ```
    - Install node module dependencies:
        ```
        $ npm install
        ```
    - Change into the `edp-people-picker/people-app` directory and install node module dependencies for the React app:
        ```
        $ cd people-app
        $ npm install
        ```

3. **Start the server**
    - Make sure you are back in the `edp-people-picker` directory:
    ```
    $ node --watch ./server.js
    ```
    Alternatively, you can use:
   ```
   $ npm run start
   ```
   - Open a new bash console, and cd into the `edp-people-picker/people-app` directory:
   ```
   $ npm run dev
   ```

### 3. Navigate to [http://localhost:5173/](http://localhost:5173/)
