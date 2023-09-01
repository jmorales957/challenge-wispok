# Clean Architecture Authentication Project

This is an authentication project that utilizes clean architecture to maintain modular, flexible, and easily maintainable code. The project uses the following technologies:

- TypeScript: A typed programming language that compiles to JavaScript.
- Node.js: A JavaScript runtime environment for server-side execution.
- Express.js: A web framework for Node.js that facilitates the creation of web applications and APIs.
- MongoDB: A NoSQL database used for storing project data.
- JWT (JSON Web Tokens): An open standard based on JSON for creating access tokens used for authenticating and authorizing HTTP requests.
- Prettier: A code formatting tool that helps maintain consistent style throughout the project.
- Zod: A schema library for data validation in TypeScript.
- Bcrypt: A library for secure password hashing and verification.

## Advantages of Using Clean Architecture

Clean Architecture offers several advantages in application development, some of which are highlighted below:

1. Separation of Concerns: The architecture is divided into layers, allowing clear separation of concerns and facilitating maintenance and system evolution.

2. Framework and Library Independence: Architecture layers are decoupled from implementation details, enabling changing or updating technologies without affecting other parts of the system.

3. Unit Testing: The modular structure and separation of concerns make it easier to write unit tests, ensuring code quality and system robustness.

4. Flexibility and Scalability: Clean architecture enables efficient system scaling, whether through adding new features or managing high workloads.

5. Long-Term Maintainability: The clear and modular structure of the code facilitates long-term understanding and maintenance, reducing technical debt accumulation and improving code readability.

## Installation and Configuration

1. Clone the repository to your local machine.
2. Ensure that Node.js and Yarn are installed.
3. Run `yarn install` to install the project dependencies.
4. Configure the necessary environment variables, such as the MongoDB database connection and the secret key for generating and verifying JWT tokens.
5. Run `yarn start` to start the server.
6. Root URL https://sequence-rz36.onrender.com/

Once the server is up and running, you can make requests to the different routes using an appropriate HTTP client such as Postman or curl.

Enjoy the clean architecture authentication project! Feel free to explore and expand the project according to your needs.
