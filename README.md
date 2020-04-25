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

3.Travis CI: Continuous Integration Platform

Automates the Execution of all codes at the same time with each change of source code, checks that everything works well.

This system retrieves the code via the Github repository.

we have created a .travis.yml file where we explain the language type and how to run etc.

4.CONTINUOUS DELIVERY

Once the code is tested and built, we deploy the application with Heroku .

Once we have both tools, we can get the key and encrypted and add it to the .travis.yml/ file.

5.Docker

configuration on Docker-compose.yml and Dockerfile

6.Kubernetes
7.ISTIO
8.Ansible


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

saad Hasnaoui
saad.hasnaoui@edu.ece.fr



````
