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

Data structures with key-value pairs

`math.sin` for instance can be described as using the key `sin` from the table `math`

Tables are _objects_ with keys that can be string or numbers

```lua
a = {}
a["x"] = 20
a[4] = "hello"

print(a[4]) -- "hello"
a["x"] = a["x"] + 1
```

As you can spot, you can change the values to which the table points.

A table is always anonymous. This means that there is **no** relation between variable and table. Modify the variable, you do not modify the associated table

```lua
a = {}
a["name"] = "tim"
b = a

b["name"] = "thess"
-- both name refer to "thess"

a = nil
-- b still points to the table
```

The memory kept for the table is garbage collected when there are no more reference to it

#### Indeces

Strings or integers are accepted for the keys of a table. As global variables, any key that is not initialized will return `nil`

```lua
a["key"] -- nil
```

As with global variables, setting the value to `nil` will allow lua to garbage collect the table. As a matter of fact, this is exactly what happes with global variables, which are stored by lua in tables.

```lua
a = nil
```

For the index, you can use `[` square brackets `]` or dot notation `.`. They are interchangeable, but convey a different meaning:

- `table["string"]`: modify the table with any key

- `table.string`: use the table as a data structure

Any string or number can be used as a index, which might lead to some confusion. Be careful that different types refer to different keys

```lua
a[0]
a["0"]

a[tonumber("0")] -- will refer to the first one
```

When using float, lua will try to convert the value to an integer, meaning number subtypes do not give the same issues as strings/numbers

#### Constructors

You can initialize an empty table and fill in the values through their indeces. Alternatively:

- with a comma separated list of values; accessed by index

```lua
days = {"mon", "tue", "wed"}
print(days[2]) -- wed
```

Remember 1-based indexing

- with a comma separated set of assignments

```lua
v = { a = 10, b = 20}
print(v["a"]) -- 10
print(v.b) -- 20
```

You can also combine the two previous approaches, keeping in mind that the index-based notation will kick in only for values without a key

```lua
complex = {
   temp=32,
   day="mon"
   {time = 8, temp = 30},
   {time = 10, temp = 34},
   {time = 12, temp = 36},
   {time = 14, temp = 28},
}

complex[1] -- { time = 8, temp = 30}
```

You can add fields with square brackets or dot notation. You can remove fields by assigning a value of `nil`

Finally, and with a more formal, general syntax, you can set up keys within square bracekts

```lua
a = {
   ["x"] = 0,
   ["y" .. 3] = 12
}

a.x -- 0
a.y3 -- 12
```

#### Arrays, lists and sequences

Use a table with integer keys. To know the length of these data structures use the `#` character, similarly to strings.

It works for _sequences_, which constitute list without holes, but it's unreliable when some of the keys have a value set to `nil`

If you need to work with list with holes, be sure to add a field to specify its length. A more stable solution.

#### Traversal

Lua offers the `pairs` iterator with the key value pairs of a table.

```lua
for k,v in pairs(table) do
   print(k, v)
end
```

You can use the numerical index, but this is reliable only with sequences.

```lua
for i in #table do
   print(table[i])
end
```

#### Safe navigation

This is a rather controversial topic, but when accessing nested values, you can emulate the syntax provided by #C to have the syntax not raise an error, but return `nil` instead

With the `or` operator and leveraging the fact that `table["missing-value]` returns `nil`

```lua
a = (register or {}).date
a = ((register or {}).date or {}).day
```

#### Table library

Handy functions

```lua
table.insert(t, i, v) -- insert v at position i, move every value after it
table.insert(t, v) -- insert v as the last element

table.remove(t, i) --remove item at position i, moving every value after it
table.remove(t) -- last item
```

There's also `table.move`, with a slightly more complex syntax.

```lua
table.move(t, i, j, p) -- considering the table t, move the items [i,j] to position p

table.move(t, i, j, p. {}) -- return copy
table.move(t, i, j, p. t2) -- add at the end of table t2
```

### Functions

Abstraction of statements and expressions.

- to carry out a task (sub-routine/procedure)

```lua
print(8 * 9)
```

- to return a value

```lua
a = math.sin(3)
```

For functions available in an object/library, the color operator allows to substitute the default syntax

```lua
string.upper(s)
s:upper()
```

You can also write functions in the `C` language, for better performance and functions like operating systems functions.

The conventional syntax starts with `function` and ends with the `end` statement.

```lua
function greet(name)
   print("Hello " .. name)
end
```

In more general terms

```lua
function functionName(parameter, parameter2)
   -- body with a list of statements
end
```

Considering the arguments, if you pass a different number Lua will try to adjust rather than raise errors.

- with less, variables will be read as `nil`

- with more, the excess will be disregarded

#### Multiple results

You can return multiple values. Consider for instance `string.find`, which returns the start and end position of tbe match.

Functions can also return multiple values separating the values with a comma.

```lua
return name, age
```

When using the function as an expression, you'll get the first item, or, alternatively:

With multiple assignments, you get the items in order, `nil` if not available

```lua
name, age, job = func
-- job: nil
```

#### Variadic functions

Variadic as in it can take a variable number of arguments.

Like print, or any function using the `...` syntax

```lua
function add(...)

end

```

The _extra arguments_ of the function are read as a list, and can be collected in a table: `{...}`

With `ipairs` you can then iterate through its key and value pairs.

```lua
function add(...)
   for _, v in ipairs({...}) do
      print(v)
   end
end
```

`_` since the key is not needed (it would be the index)-

`...` are a _vararg expression_ and it behaves like a function with multiple return values

They can be included after fixed arguments to collect additional ones.

```lua
function add(a, b, ...)

end
```

Beside collecting the items in a table, you can use `table.pack(...)` (5.2). Returns a new table with the arguments passed in parens.

```lua
arg = table.pack(...)
arg.n -- total number of arguments
```

Beside the manual approach and table.pack, you cna also use a `select` function. This one specifies which item to pick from a list of extra arguments.

```lua
-- select(n, ...)
print(select("#", "a", "b", "x"))
```

With an integer or the `#` character to get the last item.

#### table.unpack

Receives a table, returns a list of all elements. (the values)

```lua
table.unpack({ 3, 12, 5, 6, 10}) -- 3, 12, 5, 6, 10
table.unpack({ 3, 12, 5, 6, 10}, 1, 3) -- 3, 12, 5
```

#### Tails calls

???

### Filling Gaps

#### local variables and blocks

Define local variables with specific syntax

```lua
local i = 10
```

Variables are local to the block in which they are declared (body of a function, if statement, loop, or chunk).

You can delimit a block specifically using the `do ... end` syntax.

```lua
do
   local x = 2
end

```

It is a good programming practice to rely on local variables.

#### control structures

All control structures have an explicit terminator: `end` or `until` for repeat structures

- if

```lua
if a < 0 then

end


if a < 0 then

else

end

if a < 0 then

elseif a < 5 then

end
```

- while

```lua
local counter = 0
while counter < 5 do
   i = i + 1
end
```

- repeat

Does the test after the body

```lua
local i = 0
repeat
   i = i + 1
until i < 5
```

Local variables are available in the until condition

- numerical for

```lua
for start = x, end, step do
   -- body
end
```

The expressions are evaluated once.

The starting variable is local to the block.

Use a `break` statement to exit the loop earlier.

```lua

for start = x, end, step do
   -- body
end
```

- generic for

Traverses values returned by an iterator function.

```lua
for k, v in pairs({3, 5, 6})

end
```

With multiple variables that can be updated at each iteration

#### break return goto

Jump out of a block of a loop (break), a function (return).

`return` must be the last statement of a function.

`goto` jumps to a corresponding label.

```
::label::

goto(label)
```

With a few rules

- can't jump in a block
- can't jump out of functions
- can't jump in the scope of a local variable (::label:: local i = 20)

### Sidenote(s)

To iterate through a table, lua offers the `pairs` and `ipairs` functions.

The difference emerges when the table has keys

- pairs returns key-value pairs

- ipairs returns index-value pairs

The latter is mostly for numeric tables, it follows the index-based order and it ignores non-numeric keys.

[Reference](https://stackoverflow.com/questions/55108794/what-is-the-difference-of-pairs-vs-ipairs-in-lua/55109411)
