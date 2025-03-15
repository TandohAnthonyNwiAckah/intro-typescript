# Intro TypeScript

TypeScript is a superset of JavaScript developed by Microsoft that adds static typing and additional features to make JavaScript development more scalable and maintainable. TypeScript compiles to plain JavaScript, so it runs anywhere JavaScript does (browsers, Node.js, etc.).


## Key Features of TypeScript
   - Static Typing – Helps catch errors at compile time rather than runtime.

   - Interfaces – Allows defining object structures for better maintainability.

   - Generics – Enables reusable and type-safe functions and classes.

   - Enums – Provides named constants for better code readability.

   - Access Modifiers – Supports public, private, and protected for better OOP.

   - Compiles to JavaScript – Works with existing JS libraries and frameworks.

   - Modern Features – Supports ES6+ features like async/await, destructuring, etc.


## Install TypeScript globally 
```typescript
npm install -g typescript
```


## Compile TypeScript to JavaScript
```typescript
tsc filename.ts
```


## Run the generated JavaScript file
```typescript
node filename.js
```


## tsc --init Command in TypeScript
The command ```tsc --init``` is used to create a tsconfig.json file, which is the configuration file for TypeScript. This file defines compiler options, project settings, and file inclusions/exclusions.


## Watching for Changes in .ts files
```typescript
tsc --watch
```


## Generate package.json
```javascript
npm init -Y
```



## Run with parcel
```javascript
npx parcel src/*.html  
```


## Run with json-server
```javascript
json-server --watch db.json 
```