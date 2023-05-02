# Freelancer Collective API

RESTful APIs for Freelancers Collective Web (ETIQA IT Interview Assessment)

# Folder & File Structure

```
doc/
middlewares/
routes/
services/
src/
└── health/
└── users/
└── favicon.ico
└── index.html
└── main.ts
└── styles.scss
.gitignore
app.js
config.js
Dockerfile
index.js
package-lock.json
package.json
README.md
vercel.json
```

## Installation instructions

First install the dependencies/requirements with:
```
1. Ensure to have node.js, npm and installed.
2. Install all the required dependencies by running `npm install`
```

## Developing and debugging locally
```
1. Create a .env in the root directory. Add PORT = 3000 and DB_URL_MONGODB = 'YOUR MONGO DB URL' inside it.
2. To start the Express server locally, run the command npm run dev. This will start the server on your local machine. You can access the APIs at http://localhost:3000/
```

## Running Via Docker
```
1. Clone the project repo:

   git clone -b master https://github.com/travismoney/freelance-collective-api.git

   cd into the project's folder

2. Build the docker image:

   docker build -t 'YOUR DOCKER IMAGE NAME' .

3. Run the Docker container:
    
    docker run -p 8080:80 'YOUR DOCKER IMAGE NAME'
```

## APIs
List of APIs
```
GET api/v1/users: Returns a list of all users in the database.

POST api/v1/user: Adds a new user to the database.

PUT api/v1/user/:id: Updates an existing user in the database.

DELETE /api/user/:id: Deletes a user from the database.

GET /api/user/:id: Returns details for a single user based on their ID.
```

## Hosted Version
```
APIs are deployed to Vercel. Here's the link: https://freelance-collective-api.vercel.app/
```

## Swagger Documentation
```
To view the swagger documentation, uncomment out the codes on line 9 and 10 from index.js and run the server locally. 

You are able to view the swagger doc at http://localhost:3000/api-docs/
```