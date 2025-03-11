# Todo Application Backend README

# Todo Application Backend

This is the backend part of the Todo application, built using Node.js, Express, and MongoDB. The backend provides a RESTful API for managing tasks, allowing users to create, read, update, and delete tasks.

## Features

- Create a new task
- Retrieve all tasks
- Update an existing task
- Delete a task

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB database (local or cloud)

### Installation

1. Clone the repository:

   git clone <repository-url>

2. Navigate to the backend directory:

   cd todo-app/backend

3. Install the dependencies:

   npm install

4. Create a `.env` file in the backend directory and add your MongoDB connection string:

   MONGO_URI=<your_mongodb_connection_string>

### Running the Application

To start the server, run the following command:

npm start

The server will start on port 3000 and connect to the MongoDB database.

### API Endpoints

- `POST /tasks` - Create a new task
- `GET /tasks` - Retrieve all tasks
- `PUT /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.