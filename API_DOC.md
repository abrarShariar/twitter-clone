

### Register a new user

Register a new user on sign up.

**URL** : `/api/auth/register`

**Method** : `POST`

**Data constraints**

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

**Data constraints**

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

**Data constraints**

```json
{
    "username": "string|requried",
    "tweet": "string|required"
}
```

### Get all TWeets

Create a new tweet

**URL** : `/api/tweets`

**Method** : `GET`

