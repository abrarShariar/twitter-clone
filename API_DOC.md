# API Documentation
This document contains all the API endpoints and their detailed parameters.

### Register a new user

Register a new user on sign up.

**URL** : `/api/auth/register`

**Method** : `POST`

**Request Body**

```json
{
    "username": "string|requried",
    "password": "string|required|min:6"
}
```

### Login a user

Login a new user on sign up.

**URL** : `/api/auth/login`

**Method** : `POST`

**Request Body**

```json
{
    "username": "string|requried",
    "password": "string|required|min:6"
}
```


### Create a new Tweet

Create a new tweet

**URL** : `/api/tweets`

**Method** : `POST`

**Request Body**

```json
{
    "username": "string|requried",
    "tweet": "string|required"
}
```

### Get all Tweets

Create a new tweet

**URL** : `/api/tweets`

**Method** : `GET`

**Query Parameters (Optional)**
```json
{
    "limit": "number",
    "offset": "number"
}
```


