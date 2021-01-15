# Programming in Lua

Written by [Roberto Ierusalimschy](http://www.inf.puc-rio.br/~roberto/), one of the designers behind Lua itself, _Programming in Lua_ details the relevant features of the language. It is available online and [in its first editition](https://www.lua.org/pil/contents.html), directly on Lua"s website.

Here I follow the manual, jot down a few notes about the language, and try to replicate the code snippets introduced in the same book. To execute (and double-check) the code, use the [demo environment](https://www.lua.org/cgi-bin/demo) available on the official website. Alternatively, set up an environment on platforms like [repl.it](https://repl.it/)

## Basics

### Chunks

Any piece of code executed by Lua is called a _chunk_.

Be it a statement.

```lua
print("Hello there")
```

Or a series of statements and function definitions.

```lua
function greetings(name)
   print("Hello " .. name)
end

greetings("Timoty")
```

### Conventions

Variables might include letters, number, underscores, but must not begin wih a number.

```lua
name = "Thessa"
age = 32
is_sunny = false

SECRET_CODE_5763 = 123412
```

Capitalization matters, so that `isSunny` and `issunny` refer to two distinct variables.

Like many languages then, there exist a set of reserved works. These are keywords like `end`, `if`, or again `for` which have a particular meaning, and cannot be used as the name of a variable.

### Comments

You comment in one of two ways:

- inline, following two hyphens `-`

  ```lua
  -- inline comment
  ```

- multiline, opening two sets of square brackets `[[` after the hyphens

  ```lua
  --[[
     multi line
     comment
  ]]
  ```

  The matching set of closing brackets `]]` describes the end of the comment

_Nifty_: write multiline comments as follows:

```lua
--[[
    multi line
    comment
--]]
```

This makes it easier to uncomment the nested code. Add a hyphen to the first line and you end up with two inline comments. In this situation the code is then executed.

```lua
---[[
    multi line
    comment
--]]
```

### Separator

Lua does not need a separator between statements. You can separate statements with white space:

```lua
a = 12 b = 1 a + b
```

Semicolons:

```lua
a = 12; b = 1; a + b;
```

New lines:

```lua
a = 12
b = 1

a + b
```

Indentation is also unnecessary:

```lua
function cube(a)
return a ^ 3
end

print(cube(2)) -- 8
```

Just be sure to embrace a convention and keep the style throughout the script. New lines, and indentations help people and your-later-self as well to better assimilate the code.

```lua
function cube(a)
   return a ^ 3
end
```

### Global variables

Any unitialized variable returns a value of `nil`.

```lua
print(name) -- nil
```

You can also assign the specific `nil` value yourself.

```lua
name = nil
```

_Be warned_: while global variables mean you have more freedom in the way you write code, accessing a field from a table that is not declared will result in an error (more on tables soon).

```lua
print(name) -- nil
print(person.name) -- attempt to index a nil value
```

### Types and values

Lua is dynamically typed. You don"t need specify the type ahead of time. With this in mind, the language considers the following types:

1. _nil_

   This is a type with a single value: `nil`. As mentioned in an earlier section, it describes unitialized variables, but it can also be assigned to a variable.

2. _boolean_

   In this category you find two values: `true` and `false`. They are useful in the context of boolean logic.

   _Be warned_: in Lua **only two values return `false`**: `false` and `nil`. Anything else, including zero `0` and empty strings `" "` is considered `true`.

   You can use the `and`, `or` operators for conditional logic.

   _Nifty_: use `or` to initialize variables with a default value.

   ```lua
   name = input or "timothy"
   --[[ equivalent to
      name
      if input then
         name = input
      else
         name = "timothy"
      end
   ]]
   ```

3. _number_

   Numbers come in two variety, integers and float. In terms of type, they are both described by `number`

4. _string_

   Anything between quotes

5. _function_

   Reusable chunks of code, introduced by the keyword function

6. _table_

   Data structure introduced by curly braces `{}`

Use the `type()` function to return a string describing the type.

```lua
print(type(name)) -- nil
print(type(type(name))) -- string
```

_Please note:_ there are two additional types in `thread` and `userdata`. They are currently beyond the scope of these notes.

### Numbers

As hinted above, but only with Lua 5.3, numerals have two representations:

- integers, 64-bit integers

- float, double-precision floating-point numbers

The distinction impacts the way numbers are stored, but not the type returned by the `type` function.

```lua
print(type(3)) -- number
print(type(3.0)) -- number
```

In terms of equality, the `==` operator also considers the type `number`. This means integers and floats match if they share the same measure.

```lua
print(3 == 3.0) -- true
```

To distinguish between the two, use `math.type` (again only with Lua 5.3).

```lua
print(math.type(3) == math.type(3.0)) -- false

print(math.type(3)) -- integer
print(math.type(3.0)) -- float
```

#### Arithmetic operators

Lua offers familiar arithmetic operators `+-*/`.

```lua
3 + 4
12 - 14
7 * 2
5 / 5

-12
```

Moreover, Lua supports modulo `%`, exponentiation `^`.

```lua
print(13 % 5) -- 3
print(2 ^ 3) -- 8.0
```

Starting with Lua 5.3, the language finally supports floor division `//`.

```lua
print(13 // 5) -- 2
```

In terms of type:

- division and exponent will always return a float

- operations different from division will return an integer **only if** both operands are integers. Else, they will return a float (this by coercing the integer to a float before the operation).

_Nifty_: with real numbers, the modulo operator allows to compute a number with a given precision, taking advatage of the following syntax

```lua
pi = 3.1415926535897
print(pi - pi % 0.1) -- 3.1
print(pi - pi % 0.01) -- 3.14
print(pi - pi % 0.001) -- 3.141
print(pi - pi % 0.0001) -- 3.1415
```

#### Relational operators

`<`, `>`, `<=`, `=>`, `==`, `~=`

These always produce a boolean. Comparison happens by type.

```lua
print(3 == "3") -- false
print(3 == 3.0) -- true
```

#### Math library

The standard `math` library comes with a set of functions.

- `math.cos` and `math.sin` compute the cosine and sine respectively. Be careful that trigonometric functions always return a value in radians. Use `math.deg` and `math.rad` to convert between the two.

- `math.random` returns a random number depending on the number of input arguments:

  - on its own, a random float in the `[0, 1)` range

  - with a positive integer, an integer in the `[1, n]` range

  - with two integers, an integer in the `[m, n]` range

  _Be warned_: `math.random` uses a seed, so that ultimately, it will return the same sequence of numbers. Set a different seed to change the way random numbers are generated. For instance using the current time:

  ```lua
  math.randomseed(os.time())
  ```

- `math.floor()`, `math.ceil()`, and `math.modf()` to round numbers.

  `floor` and `ceil` round the number respectively down and up the nearest integer. `modf` rounds toward 0, and returns two results:

  1. the final integer

  2. the rounded decimal

  ```lua
  print(math.modf(3.25)) -- 3	0.25
  ```

#### Conversion

From integer to floating point number, add `0.0`.

From float to integer, use rounding functions, or again `math.tointeger()`.

```lua
print(3 + 0.0) -- 3.0
print(math.floor(3.0)) -- 3
print(math.tointeger(3.0)) -- 3
```

_Nifty_: `math.tointeger` returns `nil` if the conversion is not possible. This means you can use the function to test if a conversion is possible.

#### Precedence

Lua follows an order, but you can change the default through parentheses `()`

```lua
print(3 + 4 * 2) -- 11
print((3 + 4) * 2) -- 14
```

### Strings

String represent text. They are wrapped between quotes, single or double, and are immutable in value.

```lua
"you say hello"
```

Lua provides a `string` library with a few helper methods. That being said, there are a few important notes on strings alone.

- the hash character `#` describes the length of a string.

  ```lua
  print(#"Hello") -- 5
  ```

- the concatenation operator `..` adds two strings together.

  ```lua
  print("Hello " .. "there")
  ```

  _Be warned_: when an operand is a number, it will be converted to a string.

  ```lua
  num = 3
  print("Favorite number is " .. num) -- "Favorite number is 3"
  print(type(num .. num)) -- string
  ```

- escape characters with a backslash character: `\n`

- wrap text in double square brackets `[[]]` to write text in multiple lines.

  ```lua
  text = [[
     this is a longer piece of text
     and this is shorter
  ]]
  print(text)
  ```

  _Be warned_: the whitespace between brackets is respected, and counts toward the length of the string.

  To include brackets in the text, without closing the structure, update the opening and closing set with an equal sign `=`

  ```lua
  text = [=[
     this doesn"t close the long string
     not even a[b[5]]
  ]=]
  ```

  Add one or more equal signs between the two brackets, and Lua will not close the block until a matching pattern is found for the closing set. This is true for multiline strings, but also comments introduced in the previous section.

  ```lua
  --[==[
     [[ this doesn"t close the comment]]
  ]==]
  ```

#### Coercion

Lua tries to automatically convert between numbers and strings and vice versa

```lua
print(4 + "7") -- 11
print(4 .. 7) -- "47"
```

Do not rely on this feature, however. It"s considered as a "second class" feature of Lua.

- from string to number, use `tonumber`. The function returns a number or `nil` if the conversion is not possible.

  ```lua
  print(tonumber("4")) -- 4
  print(tonumber("fff")) -- nil
  ```

  An optional second argument specifies the base (decimal by default).

  ```lua
  print(tonumber("fff", 16)) -- 4095
  ```

- from number to strubg use `tostring`. `string.format` provides additional features, but is covered in a later section.

_Be warned_: relational operators never coerce their arguments, and Lua raises an error if the two operands are mixed.

```lua
print("4" < 12) -- input:1: attempt to compare string with number
```

#### string library

String manipulation comes from the `string` library.

- find the length of a string

  ```lua
  s = "hello, world"
  print(string.len(s)) -- 12
  ```

- repeat a string `n` times

  ```lua
  s = "hello, world"
  n = 2
  print(string.rep(s, n)) -- hello, worldhello, world
  ```

- reverse a string

  ```lua
  s = "hello, world"
  print(string.reverse(s)) -- dlrow ,olleh
  print(s) -- hello, world
  ```

  Note that the function doesn"t modify the origial string

- return an uppercase, or lowercase string

  ```lua
  s = "hello, world"
  print(string.upper(s)) -- HELLO, WORLD
  ```

- return a substring based on a given `[i, j]` range

  ```lua
  s = "hello, world"
  i = 1
  j = 4
  print(string.sub(s, i, j)) -- hell
  ```

  _Be warned_: Lua is 1-indexed, which means the first character has an index of `1`. Negative values are allowed, and consider the index from the end of the string.

In `string.format` you find a powerful tool to format text and converting numbers to string. It works similar to the C language, where arguments are injected in place of certain keywords (directives like `%d`, `%f`, `%s`).

```lua
print(string.format("x = %d", 10)) -- x = 10
```

Following the `%` character, you have also more control on the details of the formatting. You can customize, for instance:

- the numbers after the decimal point

  ```lua
  print(string.format("x = %.4f", 10)) -- 10.0000
  ```

- the padding added before a number

  ```lua
  print(string.format("x = %3d", 5)) -- "  5"
  print(string.format("x = %02d", 5)) -- "05"
  ```

Finally, and in `string.find` and `string.gsub` (global substitution), you find two functions to match a certain pattern.

- `find` returns `nil` or the indexes describing the beginning and end of the first match.

```lua
s = "hello, world"
p = "wo"
print(string.find(s, p)) -- 8 9
```

- `gsub` replaces all instances of the pattern `x` with the string `y`.

  ```lua
  s = "hello, world"
  x = "hello"
  y = "goodbye"
  print(string.gsub(s, x, y)) -- goodbye, world	1
  print(s) -- hello, world
  ```

  Notice that the function doesn"t modify the original string. Notice that the function also returns two values, the string and the index describing where the substitution takes place. This is useful in the moment the function is not able to replace a string.

  ```lua
  s = "hello, world"
  x = "monday"
  y = "goodbye"
  print(string.gsub(s, x, y)) -- hello, world	0
  ```

#### colon operator

The colon operator `:` allows to use the functions from a library without specifying the library itself. This is discussed in more details in the section covering object-oriented programming.

```lua
s = "hello, world"
-- print(string.upper(s))
print(s:upper()) --  "HELLO WORLD"
```

### Tables

Tables are the only data structure provided by the Lua language.

One way to create tables is by using curly braces `{}` and then assigning values with square brackets or dot notation.

```lua
t = {}
t["age"] = 28
t.name = "Timothy"

print(t.name) -- "Timothy"
```

#### Indices

Both strings and numbers are valid values for key.

```lua
t = {}
t["age"] = 28
t[1] = 12

print(t[1]) -- 12
```

_Be warned_: string and numbers with the same value do represent a different key.

```lua
t = {}
t[0] = 0
t["0"] = "zero"
```

The same is not true for integers and floats.

```lua
t = {}
t[0] = 0
t[0.0] = "zero point zero"

print(t[0]) -- "zero point zero"
print(t[0.0]) -- "zero point zero"
```

#### Constructors

As mentioned earlier, one way to build tables is by assigning key value pairs after initializing a variable with curly braces `{}`. Alternatively, you can build tables with the following ways:

- by specifying the values as a list of comma-separated values

  ```lua
  numbers = {1, 10, 15, 8, 5}
  ```

  Here, the individual items are accessed by index. Always starting with `1`.

  ```lua
  numbers = {1, 10, 15, 8, 5}
  print(numbers[2]) -- 10
  ```

- by specifying key-value pairs in between the set of braces

  ```lua
  person = {
     name = "Timothy",
     age = 28
  }
  ```

  Consider that the key can also be a string, wrapped in square brackets `[]`

  ```lua
  person = {
     ["name"] = "Timothy",
     ["age"] = 28
  }
  ```

  Here, the individual items are accessed through their matching key.

  ```lua
  person = {
     ["name"] = "Timothy",
     ["age"] = 28
  }
  print(person["age"]) -- 28
  print(person.age) -- 28
  ```

_Be warned_: you can mix the two approaches, with a list of comma separated values and key-value pairs.

```lua
person = {
   ["name"] = "Timothy",
   ["age"] = 28,
   28,
   2,
   2020
}
```

_Be warned_: accessing items by index considers only the comma separated values

```lua
person = {
   ["name"] = "Timothy",
   ["age"] = 28,
   28,
   2,
   2020
}

print(person[1]) -- 28
```

_Nifty_: trailing commas are valid.

```lua
person = {
   ["name"] = "Timothy",
   ["age"] = 28,
}
```

#### length

The hash symbol `#` returns the length of a table.

```lua
numbers = {1, 10, 15, 8, 5}
print(#numbers) -- 5
```

This measure is however reliable only with _sequences_, that is tables without `nil` values. In this instance, the suggestion is to use a key in the table dedicated to describe its length.

#### Traversal

Lua provides two iterators to loop through a table

- `pairs` for key-value pairs

  ```lua
  person = {
     ["name"] = "Timothy",
     ["age"] = 28,
  }
  for k, v in pairs(person) do
     print(k .. ": " .. v)
  end

  -- "name: Timothy"
  -- "age: 28"
  ```

  _Be warned_: `pairs` doesn"t guarantee that the key value pairs are considered in the order in which they are initialized in the table.

  ```lua
  person = {
     ["name"] = "Timothy",
     ["age"] = 28,
     ["zet"] = 29,
  }
  for k, v in pairs(person) do
     print(k .. ": " .. v)
  end

  -- "name: Timothy"
  -- "zet: 29"
  -- "age: 28"
  ```

- `ipairs` for comma separated lists

  ```lua
  numbers = {1, 10, 15}

  for i, v in ipairs(numbers) do
     print(i .. ": " .. v)
  end

  -- 1: 1
  -- 2: 10
  -- 3: 15
  ```

  The order is here guaranteed.

  _Nifty_: with sequences a numerical `for` loop is just as effective

  ```lua
  numbers = {1, 10, 15}

  for i = 1, #numbers do
     print(i .. ": " .. numbers[i])
  end
  ```

#### table library

Similarly with strings and the string library, the table library provides useful functions to work with tables.

- `table.insert(t, v)`

  The function adds the value at the end of the table.

  ```lua
  numbers = {1, 10, 15}

  table.insert(numbers, 7)
  print(numbers[#numbers]) -- 7
  ```

  By specifying three arguments, it is also possible to detail _where_ to position the element in the table: `table.insert(t, i, v)`

  ```lua
  numbers = {1, 10, 15}

  table.insert(numbers, 1, 7)
  print(numbers[1]) -- 7
  ```

- `table.remove(t)`

  The function removes the last element the element.

  ```lua
  numbers = {1, 10, 15}

  print(#numbers) -- 3
  table.remove(numbers)
  print(#numbers) -- 2
  print(numbers[#numbers]) -- 10
  ```

  Similarly to `insert`, it is possible to specify an additional argument to describe a different element: `table.remove(t, i)`

  ```lua
  numbers = {1, 10, 15}

  print(#numbers) -- 3
  table.remove(numbers)
  print(#numbers) -- 2
  print(numbers[#numbers]) -- 15
  ```

  _Nifty_: the function also returns the element being removed.

  ```lua
  numbers = {1, 10, 15}

  num = table.remove(numbers, 1)
  print(#numbers) -- 2
  print(num) -- 1
  ```

### Functions

Reusable chunks of code:

- statements, executing a specific task

  ```lua
  function greetings(name)
     print("Hello " .. name)

  end

  greetings("Timothy") -- "Hello Timothy"
  ```

- expressions, computing and returning values

  ```lua
  function buildSequence(length)
     local sequence = {}
     for i = 1, length do
        table.insert(sequence, i)
     end

     return sequence
  end

  s = buildSequence(10) -- {1, 2, 3, .., 10}
  ```

The more general syntax of a function can be summed up as follows:

```lua
function name(parameters)
   -- body
end
```

_Nifty_: Lua is quite forgiving when a function is called with more or less arguments than necessary.

- with more arguments, the additional values are disregarded

  ```lua
  function sumSquared(num1, num2)
     return (num1 + num2) ^ 2
  end

  print(sumSquared(10, 2, "hello"))-- 144
  ```

- with less arguments, the values default to `nil`

  ```lua
  function printSomething(something)
     print(something)
  end

  printSomething() -- nil
  ```

  This is an extension of the fact that unitialized variables are `nil`

#### Multiple returns

Lua functions are able to return more than a single value.

```lua
CELL_SIZE = 10
function pointToTile(x, y)
   column = math.floor(x / CELL_SIZE) + 1
   row = math.floor(y / CELL_SIZE) + 1
   return column, row
end
```

When using the function as an expression, Lua accommodates for different number of variables.

- with less variables than necessary, the language provides the value(s) in order

  ```lua
  c = pointToTile(100, 50)
  print(c) -- 11
  ```

- with more variables than necessary, the variables are set to `nil`

  ```lua
  c, r, id = pointToTile(100, 50)
  print(id) -- nil
  ```

#### Variable arguments

By using three dots `...` as a parameter, a function is able to accept an unspecified number of arguments.

```lua
function printAll(...)
   s1, s2, s3 = ...
   print(s1) -- "something"
   print(s2) -- "something new"
   print(s3) -- nil
end

printAll("something", "something new")
```

By wrapping the expression in curly brackets, you essentially create a sequence containing the arguments.

```lua
function printAll(...)
   all = {...}
   for i, v in ipairs(all) do
      print(v)
   end
end
```
