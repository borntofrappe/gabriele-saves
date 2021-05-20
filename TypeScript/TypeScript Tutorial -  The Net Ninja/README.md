_Please note:_ the demo analysed in the project, 'Finance Logger', is recreated with Svelte [in this REPL](https://svelte.dev/repl/55aafcf3c39f455a8cb91ecf667ed27f?version=3.38.2). In the `public` folder you find the markup and the stylesheet from this environment.

_Please also note:_ in order to bypass a CORS restriction, it is necessary to set up a server. The `live-server` module provides a quick way to set up the environment on local host.

```bash
live-server
```

# [TypeScript Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)

TypeScript works as a superset of JavaScript, extending the language with additional features.

```bash
npm install -g typescript
```

## Compiling

A web browser understands JavaScript. It is therefore necessary to compile `.ts` files to JavaScript syntax.

With `tsc`:

- convert a specific `.ts` file to a specific `.js` file

  ```bash
  tsc script.ts script.js
  ```

  As a convenience, calling the compiler only with the input file creates a `.js` file with the same name

  ```bash
  tsc script.ts # script.js
  ```

- convert and watch for changes

  ```bash
  tsc script.ts -w
  ```

## Types

TypeScript enforces strict types: a variable cannot change type past the first time you assign a value, or past the first type you explicitly set the type.

When you assign a value, TypeScript infers the type.

```ts
let age = 30;

age = 'thirthy'; // Type 'string' is not assignable to type 'number'
```

In this example `age` is initialized with a type of `number`, and it is not possible to change its value to a different type.

In the example it is TypeScript which sets the type, but you can explictly define the type yourself. This is especially useful when describing the arguments of a function, which are implicitly set to `any` type.

This would not raise an error.

```ts
function getDogAge(age) {
  return age * 7;
}

console.log(getDogAge(7)); // 49
console.log(getDogAge('woof')); // NaN
```

Setting the type will force the function to work only with number values.

```ts
function getDogAge(age: number) {
  return age * 7;
}

console.log(getDogAge(7)); // 49
console.log(getDogAge('woof')); // Argument of type 'string' is not assignable to parameter of type 'number'
```

As described in the example, the type follows the name of the argument and a colon `:` character.

```ts
let age: number;
```

## Types of types

Beside the type of `number` and `string` introduced in the previous snippets, it is also possible to set a variable with a type of `boolean`, `array`, or again `object`. These last two types have a couple of idiosyncrasies:

- array have a type themselves. An array initialized with numbers, for instance, can only hold numbers

  ```ts
  let numbers = [12, 23];
  numbers.push('hello'); // Argument of type 'string' is not assignable to parameter of type 'number'
  ```

  In this instance TypeScript infers a type of `number`.

  That being said, an array initialized with different types can receive different types.

  ```ts
  let numbers = ['hello', 23];
  numbers.push('goodbye');
  ```

  In this instance TypeScript infers a type of `mixed`, more on this later.

- the values stored in objects have a type themselves

  ```ts
  let profile = {
    name: 'Timothy',
    age: 32,
  };

  profile.age = 'thirthy-twp'; // Type 'string' is not assignable to type 'number'
  ```

- objects have a type themselves. Once initialized, it is not possible to add more properties, or otherwise modify the original structure

  ```ts
  let profile = {
    name: 'Timothy',
    age: 32,
  };

  profile.isOnline = true; // Property 'isOnline' does not exist on type '{ name: string; age: number; }'
  ```

  Even if assigning a different object, the variable needs to maintain the type

  ```ts
  let profile = {
    name: 'Timothy',
    age: 32,
  };

  profile = {
    name: 'Eliza',
    age: 31,
    isOnline: true,
  }; // Type '{ name: string; age: number; isOnline: boolean; }' is not assignable to type '{ name: string; age: number; }'
  ```

  You can only reassign the variable with an object with the same structure

  ```ts
  let profile = {
    name: 'Timothy',
    age: 32,
  };

  profile = {
    name: 'Eliza',
    age: 31,
  };
  ```

- array need to remain array. Objects need to remain objects. In this instance the two types are exactly like `string` or `number`

  ```ts
  let profile = ['Timothy', 32];
  profile = {
    name: 'Timothy',
    number: 32,
  }; // Type '{ message: string; number: number; }' is not assignable to type '(string | number)[]'
  ```

## Explicit types

Set a type following the colon character `:`.

```ts
let name: string;
let age: number;
let isOnline: boolean;
```

TypeScript then enforces the same type checking explained in the previous sections.

For arrays include square brackets after the type of values included in the array.

```ts
let numbers: number[];
```

Note that in the snippet `numbers` is still undefined. TypeScript just checks the type, and doesn't initialize the variable with an empty array. The following would raise an error when the code runs, but not when TypeScript compiles the code.

```ts
let numbers: number[];
numbers.push(32); // cannot read property 'push' of undefined
```

If you need to add items to the array, be sure to initialize it first.

```ts
let numbers: number[] = [];
numbers.push(32); // [32]
```

It is possible to describe multiple types with the pipe operator `|`

```ts
let mix: (string | number)[] = [];
mix.push('hello');
mix.push(23);
mix.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'
```

In this instance the array is allowed to store string and number values.

The operator works with arrays, but also individual variables.

```ts
let id: string | number;
id = 0;
id = '133';
```

For objects note that arrays are a type of object. The following would therefore not raise an error with the compiler.

```ts
let profile: object;
profile = { name: 'Tim', age: 30 };
profile = ['hello', 32];
```

To only accept key-value pairs, you need to be more explicit and define the object structure.

```ts
let profile: {
  name: string;
  age: number;
};
profile = { name: 'Tim', age: 30 };
profile = ['hello', 32]; // Type '(string | number)[]' is missing the following properties from type '{ name: string; age: number; }': name, age
```

## Dynamic Types

Introduced in the context of the parameter of a function, the `any` type allows a variable to store any possible type.

```ts
let age: any;
```

Note that, while useful in some cases, the concept goes againstthe purpose of having a strict type system. Use with caution.

<!-- prettier-ignore -->
```ts
let numbers: any[];
let profile: {
  name: any, 
  age: any
};
```

## Workflow

Instead of compiling individual files, create a `tsconfig.json` config file, manually or with the `--init` command.

```bash
tsc --init
```

Here you specify options like `rootDir`, for where the code resides, `outDir` for where the code should be compiled. Running `tsc` would then be enough to have typescript compile the necessary files.

```bash
tsc -w
```

Note that `tsc` compiles every `.ts` file in the folder, even if not in the root directory. To restrict the files to a specific location add an additional field in the config file with an `include` field.

```json
{
  "compilerOptions": {
    // ---
  },
  "include": ["src"]
}
```

Setting `rootDir` just prevents the compiler from creating a folder.

```json
{
  "rootDir": "./src"
}
```

Withtout this instruction, a file stored under `src/script.ts` would be compiled to `outDir/src/script.js`.

**Update**: at the time of writing, it seems TypeScript compiles files outside of the `rootDir` folder, but also raises an error in the console.

```bash
# error TS6059: File '...' is not under 'rootDir'
# 'rootDir' is expected to contain all source files.
```

## Functions

When defining a function TypeScript infers a type of function.

```js
let sayHi = () => {
  console.log('Hi');
};

sayHi = 32; // Type 'number' is not assignable to type '() => void'
```

You can set the type explicitly with the `Function` type, beginning with a capital letter.

```ts
let sayHi: Function;
sayHi = () => {
  console.log('Hi');
};
```

As mentioned earlier, you can set the type of the parameters.

```ts
const saySomething = (something: string) => {
  console.log(something);
};
```

Parameters can be optional adding a question mark `?` after the name of the variable.

```ts
const saySomething = (something: string, isExclamation?: boolean) => {
  console.log(`${something}${isExclamation ? '!!!' : ''}`);
};

saySomething('new', true); // new!!!
saySomething('normal'); // normal
```

Note that calling the function without the optional argument results in the value to be `undefined`. You can specify a default value, but this is already possible with JavaScript.

```ts
const saySomething = (something: string, isExclamation: boolean = false) => {
  console.log(`${something}${isExclamation ? '!!!' : ''}`);
};
```

As noted in the first snippet of this section, the TypeScript notes the type of the value returned by a function, which is `void` if nothing is returned. That being said, TypeScript infers the type similarly to when variables are first initialized.

```ts
const adder = (a: number, b: number, c: number = 0) => {
  return a + b + c;
};

const value = adder(10, 5); // const value: number
```

You can explicitly set the return type after the arguments.

```ts
const adder = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
}; // const adder: (a: number, b: number, c?: number) => number
```

## Type Alias

Define a type with the `type` keyword.

```ts
type strNum = string | number;
```

This allows to reuse the type throughout the script.

```ts
type objectProfile = { name: string; age: strNum };

function saySomething(something: strNum) {
  console.log(something);
}

function greet(profile: objectProfile) {}
```

## Function Signatures

A signature works as a blueprint for functions.

```ts
// no argument, returns void
let sayHi: () => void;
sayHi = () => {
  console.log('Hi');
};
```

It is necessary to have the function match the signature in its definition.

```ts
// string argument, return void
let saySomething: (s: string) => void;

saySomething = (something: number) => {
  console.log(something);
}; // Type '(something: number) => void' is not assignable to type '(s: string) => void'.
```

## DOM and Type Casting

TypeScript raises an error when using a variable initialized with `document.querySelector`, because it doesn't know if the matching element exist.

```ts
const form = document.querySelector('form'); // const form: HTMLFormElement | null

form.addEventListener('submit', handleSubmit); // Object is possibly 'null'
```

To fix this include the code in a conditional

```ts
if (form) {
  form.addEventListener('submit', handleSubmit);
}
```

Or, benefit from the exclamation mark `!` operator.

```ts
const form = document.querySelector('form')!;
form.addEventListener('submit', handleSubmit);
```

Past this precaution, and as hinted in the first snippet, TypeScript infers the type for DOM elements, like `HTMLFormElement`.

```ts
const form = document.querySelector('form'); // const form: HTMLFormElement
```

Using a selector that doesn't identify a specific element, like a class or id, results in TypeScript inferring a more general type of `Element`

```ts
const form = document.querySelector('.record')!; // const form: Element
```

You can cast a specific type following with the `as` syntax.

```ts
const form = document.querySelector('.record')! as HTMLFormElement; // const form: HTMLFormElement
```

When working with events, TypeScript provides a specific type for the event.

```ts
form.addEventListener('submit', (e: Event) => {
  e.preventDefault;
});
```

Additionally, TypeScript provides a convenient syntax to cast input values to a given type.

```ts
const input = form.querySelector('input')!;

console.log(input.value); // HTMLInputElement.value: string
console.log(input.valueAsNumber); // HTMLInputElement.valueAsNumber: number
```

The value from the selected `input` element is retrieved as a string, but can be casted to a number using `valueAsNumber`.

## Classes

Classes are already available in JavaScript, and allow to create objects with a specific structure.

```js
class Profile {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
}

const p1 = new Profile('Timothy', 32); // Profile {name: "Timothy", age: 32}
```

With TypeScript you can explicitly set the type of the properties later included in the constructor.

```ts
class Profile {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  } // constructor Profile(n: string, a: number): Profile
}
```

Methods receive a similar treatment with types.

```ts
class Profile {
  credential() {
    return `${this.name}, age ${this.age}`;
  } // (method) Profile.credential(): string
}
```

With this setup you create objects passing the necessary inputs. These objects carry the type described by the class.

```ts
const p1 = new Profile('Timothy', 32); // const p1: Profile
```

The class is a type itself. This means it is also possible to create an array storing nothing but instances of the class as follows.

```ts
const profiles: Profile[] = [];
```

TypeScript enforces types like with the mentioned strings, numbers and so forth.

```ts
profiles.push('hello'); // Argument of type 'string' is not assignable to parameter of type 'Profile'
profiles.push(p1);
```

## Public, private, readonly

In the context of classes you are able to modify access to the different variables.

Properties are `public` by default. You can access and reassign their value.

With the `private` keyword it is no longer possible to access or modify the property from outside the scope of the object.

```ts
class Profile {
  name: string;
  private age: number;

  // ...
}

p1.age = 12; // Property 'age' is private and only accessible within class 'Profile'
```

It is still possible from within the class.

```ts
class Profile {
  celebrateBirthday() {
    this.age = this.age + 1;
  }
}
```

With the `readonly` keyword you gain access to the value, but cannot modify the original measure.

```ts
class Profile {
  name: string;
  readonly age: number;

  // ...
}

p1.age = 12; // Cannot assign to 'age' because it is a read-only property.
```

With access modifiers you can simplify the way the objects are first initialized, and include the instructions directly in the constructor.

```ts
class Profile {
  constructor(public name: string, public age: number) {}
} // constructor Profile(name: string, age: number): Profile
```

## Modules

With ES6 you can split the logic of the project in multiple `.ts` file.

Update the config file.

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es2015"
  }
}
```

Include the script as a module in the markup.

```html
<body>
  <script type="module" src="script.js"></script>
</body>
```

With this setup you can then create different files.

Export the desired variables, methods, classes from the individual files.

```ts
export class Profile {}
```

Import as needed (note that you import a JavaScript file).

```ts
import { Profile } from '/Profile.js';
```

A couple of issues with this approach:

- it considers only the most recent ecosystem, with `es6` and the module definition of `es2015`

- there are multiple JavaScript files and multiple requests

A build tool like webpack is here to target a broader environment and compile the code in a single file.

## Interface

Interfaces work to enforce a type of structure on classes or objects.

### Objects

```ts
interface IsProfile {
  name: string;
  age: number;
  celebrateBirthday(): void;
}
```

Once initialized use the interface as a type.

```ts
let me: IsProfile;
```

TypeScript raises an error until the variable has the desired fields. Moreover,

```ts
me = {}; // Type '{}' is missing the following properties from type 'IsProfile': name, age, celebrateBirthday
```

When used as a type, for instance in a function, the code editor is able to highlight the available variables.

```ts
function introduceProfile(profile: IsProfile) {
  profile. // name? age?
}
```

As with previous examples, then, TypeScript ensures that the function is called with the desired object.

```ts
introduceProfile(); // An argument for 'profile' was not provided.
```

### Classes

```ts
interface HasFormatter {
  format(): string;
}
```

Ensure that a class follows the interface.

```ts
class Payment implements HasGreeting {} // Class 'Payment' incorrectly implements interface 'HasFormatter'.
```

In the example the error is cleared when `Payment` defines a `format` function.

```ts
class Payment implements HasFormatter {
  format(): string {
    return `...`;
  }
}
```

In this manner it is possible to know that every instance of the class will have the `format` function.

Note that the interface can also be used by variables as in the previous section.

```ts
let doc: HasFormatter;
let docs: HasFormatter[];
```

## HTML Template

```ts
class ArticleTemplate {
  constructor(private container: HTMLDivElement) {}
}
```

```ts
render(item: HasFormatter, heading: string) {
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  h2.textContent = heading;

  article.append(h2)

  const p = document.createElement('p');
  p.textContent = item.format();

  article.append(p)
  this.container.append(article);
}
```

```ts
const div = document.querySelector('div')!;
const articles = new ArticleTemplate(div);

// doc

articles.render(doc, type.value);
```

## Generics

## Enums

Store a set of constant with a numeric value. The concept helps to map constants instead of using an integer value.

```ts
enum ResourceType {
  BOOK,
  AUTHOR,
}

const doc: object = {
  resourceType: ResourceType.BOOK, // resourceType: ResourceType
};
```

If you were to log the value you'd retrieve the associated number.

```ts
console.log(doc.resourceType); // 0
```

## Tuples

Similar to arrays, but creating a sequence of items fixed in place.

You specify a specific set of types ahead of time.

```ts
let tuple: [string, number, boolean];
```

The collection can only store the defined types and in the specific sequence.

```ts
tuple = [false, 32, false]; // Type 'boolean' is not assignable to type 'string'
```

```ts
tuple = ['timothy', 32, false];
```
