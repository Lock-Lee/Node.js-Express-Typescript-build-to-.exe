# Node.js Express with TypeScript

This is a sample Node.js Express project that utilizes TypeScript, Babel, Mocha, Chai, Swagger, eslint, and Webpack. The project is built using TypeScript and compiled and bundled with Babel and Webpack. It also includes testing with Mocha and Chai, linting with eslint, and API documentation with Swagger.

## Prerequisites

To use this project, you need to have Node.js and npm installed on your machine.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Lock-Lee/Node.js-Express-Typescript-build-to-.exe.git
```

2. Navigate to the project directory:

```bash
cd node.js-express-typescript
```

3. Install the dependencies:

```bash
npm install
```

## Development

To start the development server with hot reloading:

```bash
npm run dev
```

This will start the server and enable hot reloading, which means that any changes you make to the code will be automatically reflected in the running server. The server will be accessible at http://localhost:4000/.

## Production

The production bundle is compiled and output to the `dist` folder. To build the production bundle and generate a standalone executable for the current platform:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Testing

Run the test suite using Mocha and Chai:

```bash
npm run test
```

This will run the test suite and output the results to the console.

## Linting

Run eslint to check for linting errors:

```bash
npm run lint
```

This will run the linting tool and output any errors found.

## Build with Docker

To build the Docker image:

```bash
docker build -t my_nodejs_app:latest .
```

To run the Docker container:

```bash
docker run --name my_nodejs_app -d --restart unless-stopped -e APP_PORT=1234 -p 81:1234 my_nodejs_app
```

## API Documentation

This project includes integration with Swagger for API documentation. To view the documentation, start the server and navigate to http://localhost:4000/api-docs. This will open the Swagger UI, which allows you to view and interact with the API endpoints.

## Further Reading

- [Node.js](https://nodejs.org/en/): a JavaScript runtime built on Chrome's V8 JavaScript engine, used to execute JavaScript code on the server-side.
- [Express](https://expressjs.com/): a fast, minimalist web framework for Node.js, used to build web applications and APIs.
- [Babel](https://babeljs.io/): a JavaScript transpiler that converts modern JavaScript code into code that is compatible with older JavaScript environments, allowing you to use newer language features even if your target environment doesn't support them.
- [Mocha](https://mochajs.org/): a JavaScript test framework, used to write and run tests for your code.
- [Chai](https://www.chaijs.com/): a library for writing assertions in tests, used in conjunction with Mocha to make it easy to write tests that validate the behavior of your code.
- [Swagger](https://swagger.io/): a tool for documenting and testing APIs, used to create interactive documentation and automatic testing tools for your API.
- [eslint](https://eslint.org/): a tool for linting JavaScript code, used to enforce style and best practices in your codebase.
- [Webpack](https://webpack.js.org/): a module bundler for JavaScript applications, used to transform and bundle your code and dependencies into a single package that can be run in a web browser.
- [TypeScript](https://www.typescriptlang.org/): a typed superset of JavaScript, used to add type checking and other type-related features to JavaScript.

## License

This project is licensed under the MIT License.
