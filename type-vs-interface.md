# Differences Between Type Aliases and Interfaces in TypeScript

### Introduction
When understanding the core concept of TypeScript, one of the first questions we face is whether to use `type` or `interface`. They look very similar because both help us describe the shape of an object. But behind the scenes, there are a few important differences that decide when to use which.

### Key Differences and Code Examples

The first big difference is `declaration merging`.
If we declare two interfaces with the exact same name in our code that automatically merges their fields together in Typescript. But, this does not work with type aliases. If we try to define two types with the same name, TypeScript immediately throws an error.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
// Now User has both name and age
```

For extending shapes, interfaces use the clean `extends` keyword. On the other hand, type aliases use the ampersand symbol (`&`) for intersection.

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  roll: number;
}
```

Another major difference is how they `handle basic types and unions`.
With a type alias, we can create union types, primitives, and tuples easily. An interface cannot do this because it is only designed to define object shapes.

```ts
type Status = "success" | "error";
type Point = [number, number];
```

### When to Choose Which
So, which one should we choose?
For regular objects, models, or class contracts, `interface` is usually the better choice. But when we need union types, tuples, or quick aliases, `type` is the way to go.

### Conclusion
In summary, both `type` and `interface` are essential in TypeScript. Using `interface` for standard objects and `type` for unions makes our code simple and easy to maintain.
