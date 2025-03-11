# README for Todo Application

## Project Overview
This Todo application allows users to create, delete, update, and view tasks. It consists of a backend built with Node.js and Express, and a frontend developed using React.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

### Backend
- **src/app.js**: Entry point of the backend application. Sets up the Express server, connects to MongoDB, and configures middleware and routes.
- **src/controllers/taskController.js**: Contains the `TaskController` class with methods for handling CRUD operations on tasks.
- **src/models/taskModel.js**: Defines the Mongoose model for tasks, including properties like title, description, and completed status.
- **src/routes/taskRoutes.js**: Sets up the routes for task-related endpoints using the `TaskController` methods.
- **src/types/index.js**: Exports interfaces or types related to tasks, defining the structure of task objects.
- **package.json**: Configuration file for npm, listing dependencies and scripts for starting the server.
- **.env**: Contains environment variables, including `MONGO_URI` for connecting to the MongoDB database.
- **README.md**: Documentation for the backend part of the application.

### Frontend
- **src/components/Task.js**: Represents a single task item and includes functionality for displaying and deleting a task.
- **src/components/TaskList.js**: Fetches and displays a list of tasks using the `Task` component.
- **src/components/TaskForm.js**: Provides a form for creating and updating tasks.
- **src/App.js**: Main component of the frontend application, setting up routing and including the `TaskList` and `TaskForm` components.
- **src/index.js**: Entry point of the React application, rendering the `App` component into the DOM.
- **src/App.css**: Contains styles for the frontend application.
- **public/index.html**: Main HTML file for the React application, serving as the entry point for the web app.
- **package.json**: Configuration file for npm, listing dependencies and scripts for building and starting the React app.
- **README.md**: Documentation for the frontend part of the application.

## Getting Started
To get started with the application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```
   MONGO_URI=<your_mongodb_connection_string>
   ```

4. Start the backend server:
   ```
   npm start
   ```

5. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

6. Start the frontend application:
   ```
   npm start
   ```

## Usage
Once both the backend and frontend are running, you can access the Todo application in your web browser at `http://localhost:3000`. You can create, view, update, and delete tasks through the user interface.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.