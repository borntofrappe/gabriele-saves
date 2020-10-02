## Lua & Love2D

Lessons learned while developing games with the game engine Love2D.

### local

Using the `local` keyword it's possible to enclose variables in the block in which they are created. This is handy in the moment you create functions or tables for different files.

```lua
function doSomething()
   local x = 12
end
```

In this trivial example, even if you initialize a variable `x` before using the function `x` will always refer to `12` in the body of the function.

A block refers the body of a function, if statement, loop. Whatsmore, you can delimit a block specifically using the `do ... end` syntax.

```lua
do
   local x = 2
end
```

### pairs v ipairs

To iterate through a table, lua offers the `pairs` and `ipairs` functions.

The difference emerges when the table has keys

- pairs returns key-value pairs

- ipairs returns index-value pairs

The latter is mostly for numeric tables, it follows the index-based order and it ignores non-numeric keys.

## Programming in Lua

The first edition of _Programming in Lua_ is [available online](https://www.lua.org/pil/contents0.html). The [official website](https://www.lua.org/) also provides a [demo environment](https://www.lua.org/cgi-bin/demo). That being said, what follows is a rationalization of the book in its fourth edition.

### Getting started

#### Chunks

Any piece of code executed by Lua is called a _chunk_.

Be it a statement.

```lua
print("Hello there")
```

Or a series of statements and function definitions.

```lua
function factorial(n)
    if n == 0 then
        return 1
    else
        return n * factorial(n - 1)
    end
end

print("Give us a number")
num = io.read("*n")
print(factorial(num))
```

#### Conventions

You name variables with letters, digits, underscores, but you don't start a variable with a digit.

```lua
name = "Thessa"
age = 32
is_sunny = false

SECRET_CODE_5763 = 123412
```

Like many languages however, you cannot use a set of words, which have a particular meaning. Consider for instance `end`, `if`, or again `for`.

#### Comments

You comment in one of two ways:

- inline following two hyphens

  ```lua
  -- inline comment
  ```

- multiline adding two sets of square brackets after the hyphens

  ```lua
  --[[
     multi line
     comment
  ]]
  ```

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

#### Separator

Lua does not need a separator between statements. You can separate statements with white space.

```lua
a = 12 b = 1 a + b
```

Semicolons.

```lua
a = 12; b = 1; a + b;
```

New lines.

```lua
a = 12
b = 1

a + b
```

Indentation is also unnecessary.

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

#### Global variables

You don't need to declare global variables. These are however `nil` by default.

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

#### Types and values

Lua is dynamically typed. You don't need specify the type ahead of time. With this in mind, the language describes the following eight types:

1. **nil**

   This is a type with a single value: `nil`. As mentioned in an earlier section, it describes unassigned variables, but it can also be assigned to a variable.

2. **boolean**

   In this category you find two values: `true` and `false`. They are useful in the context of boolean logic.

   _Be warned_: in lua only two values return `false`: `false` and `nil`. Anything else, including `0` and `" "` empty strings is considered `true`.

   You can use the `and`, `or` operators for conditional logic.

   _Nifty_: use `or` to initialize variables with a default value.

   ```lua
   name = text or "timothy"
   --[[ equivalent to
      if text then
         name = text
      else
         name = "timothy"
      end
   ]]
   ```

3. **number**

   Numbers come in two variety, integers and float. In terms of type, they are both described by `number`

4. **string**

   Anything between quotes

5. **function**

   Reusable chunks of code, introduced by the keyword function

6. **table**

   Data structure introduced by curly braces `{}`

You find also a `thread` and `userdata` type. These will be covered if necessary and in future sections (threads have to do with _coroutines_ and userdata with the _C API_).

Use the `type()` function to return a string describing the type.

```lua
print(type(name)) -- nil
print(type(type(name))) -- string
```

### Numbers

As hinted above, but only with **Lua 5.3**, numerals have two representations:

- integers (64-bit integers)

- float (double-precision floating-point numbers)

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

Lua offers familiar arithmetic operators.

```lua
3 + 4
12 - 14
7 * 2
5 / 5

-12
```

Moreover, Lua supports modulo, exponentiation, and floor division. This last one however, only with **Lua 5.3**.

```lua
print(13 % 5) -- 3
print(2 ^ 3) -- 8.0

print(13 // 5) -- 2
```

_Nifty_: with real numbers, the modulo operator allows to compute a number with a given precision with the following syntax

```lua
pi = 3.1415926535897
print(pi - pi % 0.1) -- 3.1
print(pi - pi % 0.01) -- 3.14
print(pi - pi % 0.001) -- 3.141
print(pi - pi % 0.0001) -- 3.1415
```

In terms of type:

- division and exponent will always return a float

- operations different from division will return an integer **only if** both operands are integers. Else, they will return a float (this by coercing the integer to a float before the operation).

#### Relational operators

`<`, `>`, `<=`, `=>`, `==`, `~=`

These always produce a boolean. Comparison happens by type.

```lua
print(3 == "3") -- false
```

#### Math library

The standard `math` library comes with a set of functions.

`math.cos` and `math.sin` compute the cosine and sine respectively. Be careful that trigonometric functions always return a value in radians. Use `math.deg` and `math.rad` to convert between the two.

`math.random` returns a random number depending on the number of input arguments:

- on its own, a random float in the `[0, 1)` range

- with one integer, an integer in the `[1, n]` range

- with two integers, an integer in the `[m, n]` range

_Be warned_: `math.random` uses a given seed, so that ultimately, it will return the same sequence of numbers. Set a different seed to change the way random numbers are generated. For instance using the current time:

```lua
math.randomseed(os.time())
```

To round numbers Lua offers three alternatives:

- `.floor()`

- `.ceil()`

- `.modf()`

`math.modf` rounds toward 0, and returns two results:

- the rounded portion

- the fractional part

```lua
print(math.modf(3.25)) -- 3	0.25
```

#### Conversion

From int to float, add `0.0`.

From float to int, use rounding functions, or again `math.tointeger()`.

```lua
print(3 + 0.0) -- 3.0
print(math.floor(3.0)) -- 3
print(math.tointeger(3.0)) -- 3
```

_Nifty_: `math.tointeger` returns `nil` if the conversion is not possible. This means you can use the function to test if a conversion is possible.

#### Precedence

Lua follows an order, but you can change the default through parentheses `()`

### Strings

String represent text. They are wrapped between quotes, single or double, and are immutable in value.

```lua
"you say hello"
```

Lua provides a `string` library with a few helper methods (more on this soon). Moreover, it allows to describe the length of a string with the length operator `#` (counting happens in bytes, and might lead to unexpected results with some encodings).

```lua
print(#"Hello") -- 5
```

The concatenation operator `..` allows to add two strings together.

```lua
print("Hello " .. "there")
```

When the operand is a number, it will be converted to a string.

```lua
num = 3


print("Favorite number is " .. num) -- "Favorite number is 3"
print(type(num .. num)) -- string
```

You escape characters with a backslash character: `\n`

You can use double square brackets to wrap strings on multiple lines.

```lua
text = [[
   this is a longer piece of text
   and this is shorter
]]
print(text)
```

_Be warned_: the whitespace between brackets is respected.

With regards to the double square brackets, both for multi-line strings and for comments, you might need to include square brackets within the two wrapping sets.

Lua provides a handy syntax to customize the beginning/end set

```lua
text = [=[
   this doesn't close the long string
   not even a[b[5]]
]=]

--[==[
   [[ this doesn't close the comment]]
]==]
```

Add one or more equal signs between the two brackets, and lua will not close the block until a matching pattern is found for the closing set.

#### Coercion

Lua tries to automatically convert between numbers and strings and vice versa

```lua
print(4 + "7") -- 11
print(4 .. 7) -- "47"
```

Do not rely on thus feature however. It's considered as a "second class" feature of Lua.

- from string to number, use `tonumber`. The function returns a number or `nil` if the conversion is not possible.

  ```lua
  tonumber("4")

  tonumber("fff", 16)
  ```

  The optional second argument specifies the base (decimal by default).

- from number to strubg use `tostring`. `string.format` provides additional features and is covered in a later section.

_Be warned_: order operators never coerce their arguments, and lua raises an error if the two operands are mixed.

```lua
"4" < 12 -- errors out
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

- return an uppercase/lowercase string

  ```lua
  s = "hello, world"
  print(string.upper(s)) -- HELLO, WORLD
  ```

- retrive a substring in a given `[i, j]` range

  ```lua
  s = "hello, world"
  i = 1
  j = 4
  print(string.sub(s, i, j)) -- hell
  ```

_Be warned_: with regards to the index, lua consider the first character to have a index of `1`. Negative values start from the end.

In `string.format` you find a powerful tool to format text and converting numbers to string.

It works similar to the C language, where arguments are injected in place of certain keywords (directives like `%d`, `%f`, `%s`).

```lua
print(string.format("x = %d", 10)) -- x = 10
```

Following the `%` character, you have also more control on the details of the formatting. For instance, on the number of decimal points.

```lua
print(string.format("x = %.4f", 10)) -- 10.0000
```

On the padding added before a number.

```lua
print(string.format("x = %3d", 5)) -- "  5"
print(string.format("x = %02d", 5)) -- "05"
```

Finally, and for pattern matching, lua offers `string.find` and `string.gsub` (global substitution).

`find` returns `nil` or the index describing the beginning/end of the first match.

```lua
s = "hello, world"
p = "l"
print(string.find(s, "l")) -- 3   3
```

`gsub` replaces all instances of the pattern `x` with the string `y`.

```lua
s = "hello, world"
x = "hello"
y = "goodbye"
print(string.gsub(s, x, y)) -- goodbye, world	1
```

_Nifty_: as spotted in the previous snippet, `gsub` returns the index of the string where the substitution takes place. This is useful in the moment the function is not able to replace a string.

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
print(s:upper())
```

### Tables

Tables are the only data structure provided by the lua language.

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
     name = 'Timothy',
     age = 28
  }
  ```

  Consider that the key can also be a string, wrapped in square brackets `[]`

  ```lua
  person = {
     ["name"] = 'Timothy',
     ["age"] = 28
  }
  ```

  Here, the individual items are accessed through their matching key.

  ```lua
  person = {
     ["name"] = 'Timothy',
     ["age"] = 28
  }
  print(person["age"]) -- 28
  print(person.age) -- 28
  ```

_Be warned_: you can mix the two approaches, with a list of comma separated values and key-value pairs.

```lua
person = {
   ["name"] = 'Timothy',
   ["age"] = 28,
   28,
   2,
   2020
}
```

In this situation however, accessing items by index considers only the comma separated values.

```lua
person = {
   ["name"] = 'Timothy',
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
   ["name"] = 'Timothy',
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
     ["name"] = 'Timothy',
     ["age"] = 28,
  }
  for k, v in pairs(person) do
     print(k .. ": " .. v)
  end

  -- "name: Timothy"
  -- "age: 28"
  ```

  _Be warned_: `pairs` doesn't guarantee that the key value pairs are considered in the order in which they are initialized in the table.

  ```lua
  person = {
     ["name"] = 'Timothy',
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
  function sayHello(toWhom)
     print("Hello " .. toWhom)

  end

  sayHello('Timothy')
  ```

- expressions, computing and returning values

  ```lua
  function buildSequence(length)
     local sequence = {}
     for i = 1, length do
        sequence[i] = i
     end

     return sequence
  end

  s = buildSequence(10)
  ```

The more general syntax of a function can be summed up as follows:

```lua
function name(parameters)
   -- body
end
```

_Nifty_: lua is quite forgiving when a function is called with more/less arguments than necessary.

With more, it disregards the additional values.

```lua
function sumSquared(num1, num2)
   return (num1 + num2) ^ 2
end

print(sumSquared(10, 2, "hello"))-- 144

```

With less, the arguments are set to `nil`

```lua
function printSomething(something)
   print(something)
end

printSomething() -- nil
```

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

When using the function as an expression, lua accommodates for different number of variables.

With less variables than necessary, the language provides the values in order.

```lua
c = pointToTile(100, 50)
print(c) -- 11
```

With more variables than necessary, the language adds `nil` to superfluous ones.

```lua
c, r, extra = pointToTile(100, 50)
print(extra) -- nil
```

#### Variable arguments

Functions can be _variadic_ by specifying the parameters with three dots `...`. This is a _vararg expression_, and behaves like a function returning multiple inputs (the inputs received when calling the function).

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
