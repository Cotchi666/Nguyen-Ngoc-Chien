# Introduction
### This application is a set of CRUD interface that allow a user to interact with the service.
##### USER INTERFACE:
  - User could access http://localhost:8080/read to interact with view.
##### BACKEND API:
  - GET /api/users: Retrieves all users from the database.
  - GET /api/users/:id: Retrieves a user by their ID from the database.
  - PUT /api/users/:id: Updates a user's information based on their ID.
  - POST /api/users/create: Creates a new user.
  - DELETE /api/users/:id: Deletes a user by their ID from the database.
  - Example JSON Content:

             {
                "first_name": "John",
                "last_name": "Doe",
                "email": "johndoe@example.com"
            }


# Requirement

### Install [Node 18.18.2](https://nodejs.org/en/blog/release/v18.18.2)
### Install [nvm](https://github.com/nvm-sh/nvm)
### Create and check out '.env' file and make sure it matches with '.env.example'
               
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
        
