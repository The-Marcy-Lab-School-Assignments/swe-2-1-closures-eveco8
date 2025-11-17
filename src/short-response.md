# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Question 1

### Prompt 1

What are the core principles of encapsulation in object-oriented programming?

### Response 1

In object-oriented programming, **_encapsulation_** is the bundling of data into a **_class_** that has the **_methods_** that use that data. It protects an objects data by restricting direct access to it's properties through **_private fields_** or **_getter/setter methods_**. This helps prevent unwanted changes and allow for control of how the data is accessed or changed. Making the code safer and keeping it organized.

---

## Question 2

### Prompt 2

The code snippet below is an example of a **closure**.

```js
const multiplyNumsBy = (nums, multiplier) => {
  return nums.map((num) => num * multiplier);
};

const multiplesOfFive = multiplyNumsBy([1, 2, 3, 4], 5); // [5, 10, 15, 20]
```

First, define what a **closure** is in your own words and then explain how this example includes a closure.

### Response 2

A **_closure_** is when an _inner_ function can access **_variables_** from its _outer_ function. This example includes a closure because the `multiplier` **_parameter_** in the outer function is **_referenced_** in the inner function.

---

## Question 3

### Prompt 3

Consider the code snippet below showing a factory function for creating animal objects. The `makeNoise` method is not working as intended:

```js
const makeAnimal = (name, species, sound) => {
  const animal = {
    name: name,
    species: species,
    makeNoise() {
      console.log(`${this.name} the ${this.species} says ${sound}`);
    },
  };
  return animal;
};

const betty = makeAnimal("betty", "cat", "meow");
betty.makeNoise(); // undefined the undefined says meow

const bugs = makeAnimal("bugs", "bunny", "whatsup doc");
bugs.makeNoise(); // undefined the undefined says meow says whatsup doc
```

First, define the `this` keyword.

Then, explain why the `makeNoise` method is not working (why are `this.name` and `this.species` returning `undefined`?).

Finally, update the code snippet above to fix it.

### Response 3

The `this` keyword refers to the _object_ that is currently _calling the method_.

In the code above, the `makeNoise` method is not working because it is written as an **_arrow function_** and arrow functions do not have their own `this`. They inherit `this` from the _surrounding scope_ which is the `makeAnimal` function itself and not the the object, making it undefined.
