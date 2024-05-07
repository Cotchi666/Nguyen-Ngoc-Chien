# Introduction
### This application provides a set of CRUD interfaces for users to interact with the service.

##### User Interface:
  - Access the user interface at http://localhost:8080/read to interact with the view.
  - I also hosted the project on https://nguyen-ngoc-chien.onrender.com/read

##### Backend API:
  - Domain: http://localhost:8080/api/users
  - Live domain : https://nguyen-ngoc-chien.onrender.com/api/users
    
  - GET /api/users: Retrieves all users from the database.
  - GET /api/users/:id: Retrieves a user by their ID from the database.
  - PUT /api/users/:id: Updates a user's information based on their ID.
  - POST /api/users/create: Creates a new user.
  - DELETE /api/users/:id: Deletes a user by their ID from the database.

##### Example JSON Content:
    {
      "first_name": "John",
      "last_name": "Doe",
      "email": "johndoe@example.com"
    }

# Requirements
#### Install [Node.js v18.18.2](https://nodejs.org/en/blog/release/v18.18.2).
#### Install [nvm](https://github.com/nvm-sh/nvm) (Optional) - If you have Node.js already . 
#### Create and match the .env file with the provided .env.example file.
               
        PORT=8080
        DB_USER=postgres.kjlbsgoewlgxrrlmqemj
        DB_HOST=aws-0-ap-southeast-1.pooler.supabase.com
        DB_NAME=postgres
        DB_PASSWORD=TwqiEFOUQz9bxJEa
        DB_PORT=5432

# Install

### Command to install
    
        git clone https://github.com/Cotchi666/Nguyen-Ngoc-Chien.git
        cd problem5
        nvm use 18.18.2
        npm install
        npm run dev
        
