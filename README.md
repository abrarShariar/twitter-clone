# Getting started

Please run the followings to set up and running the project:

- Clone the project: 
```
> git clone https://github.com/linkx-assignments/msg-web-abrarShariar.git
> cd msg-web-abrarShariar
```

- Set up the backend
```
> cd backend
> cp .env.example .env
> yarn
> yarn migrate
> yarn start
```
A node.js server will be running on the port assigned in the .env file 


 - Set up the frontend:
```
> cd frontend
> cp .env.example .env
> yarn 
> yarn start
```
A React web app would be running on port 3306. Be sure to set the `REACT_APP_API_URL` to 
`http://localhost:8000/api`, assuming that the node server is running on port 8000




