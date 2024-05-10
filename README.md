# edp-people-picker

This project lists the Travelers EDP program bootcamp cohort 1 and picks a random person from the group. People start out unpicked, and are displayed and added to the list of picked people when they are selected. The list can be reset using the Reset button.

## Running this project locally

### 1. Dependencies
- Node.js
- Express
- Vite

### 2. How to run locally
1. **Clone this repository**
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

2. **Start the server**
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
