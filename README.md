# Prisma Project

A simple project with a user crud, github api integration and media upload/download. 

## Technologies Used

- Typescript
- Node.js
- Express
- Prisma
- SQLite
- Multer
- EsLint

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using the following command:
```
npm install
```
4. Create a `.env` file in the root directory and configure the following environment variables:
```
PORT=8080
FRONTEND_URL="your_frontend_url" (cors)
DATABASE_URL="file:./dev.db"
```
5. Run the migrations to create the database schema:
```
npx prisma migrate dev
```
6. Start the server:
```
npm run build
npm start
```
or
```
npm run dev
```
7. The server will be running at `http://localhost:8080`.


## API Endpoints

<details>
  <summary>User</summary>
  
  ### `POST /user`

  Create a new user.

  #### Request Body

  ```
  {
   "name": "Matheus Tostes",
   "email": "devtostes@example.com",
   "password": "matheus321",
   "login": "matheus1996"
  }
  ```

  Response
  Status: 201 Created

  Body:
  ```
  {
   "name": "Matheus Tostes",
   "email": "devtostes@example.com",
   "login": "matheus1996"
  }
  ```

  ### `GET /user/:id`

  Get a specific user.

  Response
  Status: 200 OK

  Body:
  ```
  {
   "id": 15,
   "email": "devtostes@example.com",
   "name": "Matheus Tostes",
   "password": "matheus321",
   "login": "matheus1996",
   "createdAt": "2023-06-05T05:36:47.017Z",
   "updatedAt": "2023-06-05T05:36:47.017Z"
  }
  ```

  ### `GET /user/:id`

  Get all users.

  Response
  Status: 200 OK

  Body:
  ```
  [
   {
    "name": "nathalia",
    "email": "nathalia@gmail.com"
   },
   {
    "name": "Matheus Tostes",
    "email": "devtostes@example.com",
   }
  ]

  ```

  ### `PUT /user/:id`

  Update a specific user.

  #### Request Body

  ```
  {
   "name": "Matheus Tostes",
   "email": "devtostesNew@example.com",
   "password": "matheus321",
   "login": "matheus1996"
  }
  ```

  Response
  Status: 200 OK

  Body:
  ```
  {
   "name": "Matheus Tostes",
   "email": "devtostes@example.com",
   "login": "matheus1996"
  }
  ```

  ### `DELETE /user/:id`

  Delete a specific user.

  Response
  Status: 200 OK

  Body:
  ```
  {
   "message": "User deleted"
  }
  ```
</details>

<details>
  <summary>Github</summary>
  
  ### `GET /user/:githubUsername`

  Get github user.

  Response
  Status: 200 OK

  Body:
  ```
  {
	 "login": "MatheusTostes",
	 "id": 64822140,
	 "node_id": "MDQ6VXNlcjY0ODIyMTQw",
	 "avatar_url": "https://avatars.githubusercontent.com/u/64822140?v=4",
	 "gravatar_id": "",
	 "url": "https://api.github.com/users/MatheusTostes",
	 "html_url": "https://github.com/MatheusTostes",
	 "followers_url": "https://api.github.com/users/MatheusTostes/followers",
	 "following_url": "https://api.github.com/users/MatheusTostes/following{/other_user}",
	 "gists_url": "https://api.github.com/users/MatheusTostes/gists{/gist_id}",
	 "starred_url": "https://api.github.com/users/MatheusTostes/starred{/owner}{/repo}",
	 "subscriptions_url": "https://api.github.com/users/MatheusTostes/subscriptions",
	 "organizations_url": "https://api.github.com/users/MatheusTostes/orgs",
	 "repos_url": "https://api.github.com/users/MatheusTostes/repos",
	 "events_url": "https://api.github.com/users/MatheusTostes/events{/privacy}",
	 "received_events_url": "https://api.github.com/users/MatheusTostes/received_events",
	 "type": "User",
	 "site_admin": false,
	 "name": "Tostes",
	 "company": null,
	 "blog": "https://www.linkedin.com/in/matheustostes/",
	 "location": "Vila Velha - ES, Brasil",
	 "email": null,
	 "hireable": true,
	 "bio": "Let's code!!",
	 "twitter_username": null,
	 "public_repos": 37,
	 "public_gists": 0,
	 "followers": 72,
	 "following": 82,
	 "created_at": "2020-05-05T03:07:58Z",
	 "updated_at": "2023-06-04T11:53:16Z"
  }

  ```
</details>

<details>
  <summary>Media</summary>
  
  ### `POST /media`

  Upload a new media.

  structured: Multipart Form  
  fieldname: "file"

  #### Request Body
  
  ```
   "file": media,
  ```

  Response
  Status: 200 OK

  Body:
  ```
  {
	 "media": {
	  "fieldname": "file",
	  "originalname": "foto.jpg",
	  "encoding": "7bit",
	  "mimetype": "image/jpeg",
	  "destination": "...path/express-prisma-sqlite/public",
	  "filename": "1685942056461_foto.jpg",
	  "path": "...path/express-prisma-sqlite/public/1685942056461_foto.jpg",
	  "size": 19844
	 }
  }
  ```
  
   ### `GET /media/:filename`

  Download a specific media.

  Response
  Status: 200 OK

  Body:
  ```
  media
  ```
</details>
