# User API http-server

A simple http-server with a user API

##  TODO (homework)

* Clone this repo and using [duplicating](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository) create your own repository on GitHub or GitLab (Done)
* **Important!** Make your repository **PRIVATE** (done)
* Find all the TODO comments and enrich this app
* If you have questions, ask me by email sergei@adaltas.com (link your private repo, if you have technical questions and invite me to you project)

## Functionality

* Uses default configuration with a path of the file storage
* Start http-server
* Create a user
* Get a user information

## Installation

```
git clone ...
npm install
```

## Usage

```
npm start
```

Go to `http://localhost:3003`

### Using Postman app

1. POST Create user:

```
http://localhost:3003/user/
```

Body parameters:
```
{
  username: 'toto',
  firstname: 'toto-firstname',
  lastname: 'toto-lastname'
}
```

2. GET user by username

```
http://localhost:3003/user/sergkudinov
```

## Developer

Run tests:
```
npm test
```

## Author

Hannachi Nada  
nada.hannachi@edu.ece.fr

Ilhem Laroussi
ilhem.laroussi@edu.ece.fr


