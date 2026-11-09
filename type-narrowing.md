# Understanding Type Narrowing in TypeScript

### Introduction

Type narrowing in TypeScript means checking a value’s type before using it. For example, if a value can be a `string` or `number`, we can check whether it is a string before using string methods.


### Common Techniques

**1. Using `typeof`**

For basic types like `string` and `number`, we can use `typeof`.

```ts
const printLength = (value: string | number) => {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
};
```

Here, TypeScript knows `value` is a string inside the `if` block.

**2. Using `instanceof`**

For objects like `Error`, we can use `instanceof`.

```ts
const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return "Something went wrong!";
};
```

This lets us safely use `error.message`.

**3. Using the `in` operator**

The `in` operator is useful when objects have different properties.

```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

const animalSound = (animal: Dog | Cat) => {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
};
```

If `bark` exists, TypeScript knows it is a `Dog`; otherwise, it is a `Cat`.

### Conclusion

Type narrowing helps us write safer TypeScript code by checking the type before using a value. The common methods are `typeof`, `instanceof`, and `in`.