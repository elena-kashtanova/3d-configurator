# 3D Configurator

## Launching the project

The project uses PostgreSQL 14.0.

1. Clone the repository to the local machine.
2. Run `npm install`.
3. Fill in info in dev.env file in the root folder: port and host for the server, name of the database from the etc. Remove 'dev' from the file's name.
4. Run `npm start`. A database will be created automatically.
5. To seed the database, run `npm run typeorm migration:run`.

## Requirements
### Backend Functionality
- I can get a list of all 3D objects in the database
- I can get a specific object data by its ID
- I can update a specific object and save the changes
- I can delete an object from the database

### Architecture
- It should be generic and scalable
- Any technology stack (Node.js and three.js are recommended)

## Process
### Technology Stack and Reasoning
- **Express.js** - flexibility of the framework allows for different approaches to architecture
- **TypeScript** - type checking may provide some overhead but it allows for less syntax errors which saves time in the long run
- **TypeORM** - for managing our persistence layer
- **PostgreSQL** - I'm used to this system so I'm going to use it but I might change it later if NoSQL database proves to be a better choice
- **Jest** and **Swagger** - if there's time, it's a good idea to test the functionality and provide API info. TypeORM repos can be finicky to mock, though.

## Project Structure
Since we're really only working with a single entity, it doesn't really make sense to structure our project based on that. Therefore, I'm goind to separate files into folders based on their purpose (controllers, services etc).

## Architecture
### app.ts
Here I'm setting up a basic Express server. It could be done as a class but I find that it doesn't provide many benefits because it's not reused elsewhere and it may be harder to reason about than providing some middlewares and calling an IIFE to start up the app. A database connection is also going to be established here.

### Layers
In order for the app to be scalable, I'm want to implement in accordance with layered architecture principle. So I'm going to have:
- A routing layer, which can also be separated into several components in case we want to add more routes with different paths in the future. Routes will handled by a controller class.
- A service layer which implements specific methods for working with 3d models.
- A data access layer consisting of a TypeORM repository which will be used in the services to interact with database entities. I also want to create a repository interface which will describe what methods should be implemented by a repo class in case we want to switch out TypeORM for another ORM.
- I think I'm also going to use Dependency Injections so that the components are more loosely coupled and so that they're easier to mock if I get to testing. As much as I love TDD, setting up mocks for TypeORM takes a long time sometimes.

## Process
------
Set up the server. Added some basic error handling. Exported .env variables as an object with necessary info.
____________
Created a very basic 3D model entity. Right now it just has an id and a color. I'm realising now that if I try and figure out an appropriate structure for it right now, right from the beginning, I might get stuck here and not get to working on the other components. I'll set everything up and come back to it.
___________
TypeORM had some updates in March. I guess it's a chance to explore some of the new functionality. Initializing a connection and creating custom repositories is different now.
__________________________
Created a repository interface and implemented a specific TypeORM repo. It's injected into service methods which are in turn are injected into a controller class.
_______________
Set up routes and added some very minimal validation. It would make sense to run some tests here and normally I would do that but I want to get back to working on 3D model. Some manual testing shows that everything seems to be working fine.
_______________
Created a seed migration and configured automatic database creation on initial launch.

### 3D Models
#### Before reading the documentation
I know that a 3d object has a mesh created with vertices and edges where each vertex has some coordinates. So if I were to display it visually, I'd need to rebuild it based on its metadata.

The challenge is that each object has different characteristics. It can be a cube, a torus, a sphere, a cone etc. So it can't be represented by a schema where each attribute would be a column especially since some shapes can't be easily categorized.

I guess, using NoSQL would be better here because it's schemaless. But even if we were able to store information about a model and retrieve it, we would still need to be able to process the data on the frontend side in order to display the model. So the data still has to be somewhat uniform. 

Maybe just save it as a JSON object into one column?

#### BufferGeometry
Geometry core functionality from the task description is now deprecated and it's recommended to use BufferGeometry for custom objects.

It appears that the most important attribute is positions. Normals can be calculated with a class method. A mesh is created based on geometry object and material information which can include color.

Attributes in geometry are stored as TypedArrays which can be extracted with `.getAttribute()` and by accessing array property in the result.

Posgres supports array data types so it can be used to store info about vertices' positions.

So in this case, the server would expect to receive a JSON object with data which would have a color property and an array of positions.

When loaded from database, a mesh can be created by assigning the array as `position` value with `BufferAttribute`.

## What Else Could Be Done
- More properties for the 3D entity (normals, uvs etc)
- Unit tests
- More specific validation checks for body data in accordance with business requirements
- A more robust logger using something like Winston
- API documentation with Swagger
- Maybe some abstraction for services and routes would also be useful. If there were more modules - make interface more basic and extend them as needed for different modules.