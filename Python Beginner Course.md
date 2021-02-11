# [Beginner's Course](https://youtu.be/rfscVS0vtbw)

## Getting started

```py
print('Hello world')
```

```py
print('    /|')
print('   / |')
print('  /  |')
print(' /   |')
print('/____|')
```

## Variables

```py
name = 'Gabriele'
latest_stack = 'python'
print('My name is ' + name + ' and I\'m getting started with ' + latest_stack)
```

Mutable.

```py
name = 'Gabriele'
latest_stack = 'python'
print('My name is ' + name + ' and I\'m getting started with ' + latest_stack)

name = 'borntofrappe'
print('I code with the name of ' + name + ' though')
```

Storing strings, numbers, booleans.

```py
fav_number = 7
print(fav_number + 3)
```

```py
fav_number = 7
is_ten = fav_number > 10
print(is_ten) # False
```

Take notice that booleans are capitalized: `True`, `False`.

To comment a line use the hash operator `#`.

```py
# commented out
```

## Strings

Special characters introduced with a backslash; `\n` for a new line, `\'` for a quote.

```py
s = 'Hello \nworld'
print(s)
        # Hello
        # here
```

Concatenation with the `+` operator.

```py
s = 'Hello' + ' ' + 'there'
print(s) # Hello there
```

Built-in functions for useful operations like changing capitalization.

```py
s = 'Hello' + ' ' + 'there'
print(s.upper()) # HELLO THERE
```

Length with the `len` function.

```py
s = 'Hello' + ' ' + 'there'
print(len(s)) # 11
```

Square brackets to access a particular character. Take notice that Python is a language with zero-baed indexing.

```py
s = 'Hello' + ' ' + 'there'
print(s[0]) # H
```

Index of a specific character with the `index` function (first instance or `-1` if not existing).

```py
s = 'Hello' + ' ' + 'there'
print(s.index('o')) # 4
```

Replaces every instance of the input string with the desired match through the `replace` function. Does not modify the original string, but returns a new one.

```py
s = 'Hello' + ' ' + 'there'
print(s.replace('e', 'a')) # Hallo thara
print(s) # Hello there
```

Re-assign the variable if need be.

```py
s = 'Hello' + ' ' + 'there'
s = s.replace('e', 'a')
print(s) # Hallo thara
```

## Numbers

Arithmetic through the traditional operators.

```py
print(3 - 5.5) # -2.5
print(2 ** 3) # 8
print(15 % 7) # 1
```

Parenthesis to modify the default order precedence `()`.

```py
print((3 - 5.5) * -2) # 5.0
```

`str()` to convert to a string.

```py
fav_num = 7.29
print('My favorite number is ' + str(fav_num) + ' and it has ' + len(str(fav_num)) + ' characters')
```

Concatenating a string and number would raise a error.

```bash
TypeError: can only concatenate str (not 'float') to str
```

Other common functions

- `abs(n)` to return the absolute number (always positive)

- `pow(base, exponent)` to elevate a specific base to the power of an exponent

- `max(n1, n2, n3)`, `min(n1, n2, n3)` to find the maximum, minimum value

- `round(n)` to round to the nearest integer

## Import

Additional functions are available in dedicated modules, not in the code python library. For instance and for numbers, the `math` module provides additional functions.

```py
from math import *
print(math.floor(3.5)) # 3
```

Import the entire module or a specific function.

```py
from math import floor
print(floor(3.5)) # 3
```

`floor` and `ceil` provide two different rounding mechanisms to `round`, always considering the nearest integer down and up (respectively).

The lack of the import statement would raise an error.

```bash
NameError: name 'floor' is not defined
```

## Input

`input` waits for input in the console.

```py
fav_num = input('Enter your favorite number: ')
print('So it is ' + fav_num)
```

The value returned by the function is a string.

```py
fav_num = input('Enter your favorite number: ')
print('Mine is ' + str(int(fav_num, 10) + 1) + '. Pretty close.')
```

## Calculator

```py
x = int(input('First addendum: '), 10)
y = int(input('Second addendum: '), 10)
print(str(x) + ' ' + str(y) + ' is equal to ' + str(x + y))

# First addendum: 5
# Second addendum: 7
# 5 7 is equal to 12
```

`int` for integers, `float` for floats

```py
x = float(input('First addendum: '))
y = float(input('Second addendum: '))
print(str(x) + ' ' + str(y) + ' is equal to ' + str(x + y))

# First addendum: 5
# Second addendum: 7
# 5.0 7.0 is equal to 12.0
```

## Lists

A collection of items created with the `list()` function or through square brackets `[]`.

```py
todos = list('drink water', 'eat apple')
todos = ['drink water', 'eat apple']
```

Individual items are accessed on the basis of the index, similarly to strings.

```py
todos = ['drink water', 'eat apple']
print(todos[0]) # drink water
```

Collections of strings, numbers, booleans (not typed).

```py
todos = ['drink water', 'eat apple', True]
print(todos[0]) # drink water
```

The `len` function describes the length of the list.

```py
todos = ['drink water', 'eat apple']
print(todos[len(todos) - 1]) # eat apple
```

A negative integer means the item is picked from the end of the list.

```py
todos = ['drink water', 'eat apple']
print(todos[-1]) # eat apple
```

An error message is raised without specifying the index or specifying an index outside of the list's range.

```py
print(todos[]) # SyntaxError: invalid syntax
print(todos[len(todos)]) # IndexError: list index out of range
```

Slice the list from item to item and the colon operator `:`. With two arguments the collection is sectioned from the first index up to and not including the second index.

```py
nums = [1, 2, 3, 4, 5, 6, 7]
print(nums[2:4]) # [3, 4]
```

Omitting one index means the list considers the beginning or end.

```py
nums = [1, 2, 3, 4, 5, 6, 7]
print(nums[2:]) # [3, 4, 5, 6, 7]
print(nums[:3]) # [1, 2, 3]
```

Lists are mutable.

```py
nums = [1, 2, 3, 4, 5, 6, 7]
print(nums[2]) # 3
nums[2] = 'tangerine'
print(nums[2]) # tangerine
```

Built-in functions for useful operations:

- `list.extend(l)` to add a list at the end of the collection

- `list.append(v)` to add a value at the end of the list

- `list.insert(index, v)` to add a value at a specific index

- `list.remove(v)` to remove a value from the end of the list

- `list.clear()` to empty a list

- `list.pop(index)` to remove an item at a given position

- `list.index(v)` to find the position of a value. Raises a ValueError if not available

- `list.count(v)` to count the number of instances

- `list.sort()` to sort (by default in ascending order)

- `list.reverse()` to reverse the list

- `list.copy()` to return a shallow copy

## Tuples

Data structure similar to lists. Created with the `tuples()` function or with round brackets `()`.

```py
# coordinates = tuples(4, 5, 6)
coordinates = (4, 5, 6)
print(coordinates[0])
```

Immutable. Trying to modify a tuple would raise an error.

```py
coordinates = (4, 5, 6)
coordinates[0] = 1
print(coordinates[0]) # TypeError: 'tuple' object does not support item assignment
```

Immutable for efficiency's sake. Built-in functions exist similarly to list, for instance to describe the length of the collection.

```py
coordinates = (4, 5, 6)
print(len(coordinates)) # 3
```

Functions modify the collection are however not available (insert, append, extend).

## Functions

Reusable chunks of code.

Define a function with `def`, the function name followed by round brackets `()`, and the colon operator `:`.

```py
def function_name():
    print('Something else')
```

Call a function, executing its code, through the function name.

```py
function_name()
```

With arguments between round brackets `()`

```py
def function_name(name):
    print('Hello ' + name)


function_name('Gabriele')
```

Return a value with the `return` keyword.

```py
def sum(addendum_1, addendum_2):
    addition = addendum_1 + addendum_2
    print('The sum of ' + str(addendum_1) + ' and ' +
          str(addendum_2) + ' is ' + str(addition))
    return addition

print(sum(3, 5))
```

## If statements

Introduced by the `if` keyword, based on indentation similarly to functions.

```py
age = 28
if age > 18:
  print('You can vote! In some countries, that is.')
```

`else` statement to execute code not matching the condition.

```py
age = 5
if age > 18:
    print('You can vote!')
else:
    print('You\'ll be able to vote in ' + str(18 - age) + ' years.')
```

The condition is a boolean, often based on comparison operators, `and` and `or`

`elif` for an alternative condition.

```py
age = 17
if age > 18:
    print('You can vote!')
elif age >= 17:
  print('Getting closer to vote. Only one year.')
else:
    print('You\'ll be able to vote in ' + str(18 - age) + ' years.')
```

## Calculator v2

Create a function which considers three inputs from the user (number, operator, number), and returns the result of the operation.

```py
def math():
    num_1 = float(input('First number: '))
    operator = input('Operator: ')
    num_2 = float(input('Second number: '))

    result = 0

    if operator == '+':
        result = num_1 + num_2
    elif operator == '-':
        result = num_1 - num_2
    elif operator == '*':
        result = num_1 * num_2
    elif operator == '/':
        result = num_1 / num_2
    else:
        result = 'Invalid operator'

    if(type(result) == 'float'):
        print(str(num_1) + operator + str(num_2) + ' = ' + str(result))
    else:
        print(result)

math()
```

- `type` provides the type of the input variable

## Dictionary

Data structure with key-value pairs. Created with the `dict()` function or curly brackets `{}`

```py
monthDictionary = {
  'Jan': 'January',
  'Feb': 'February'
}
print(monthDictionary) # {'Jan': 'January', 'Feb': 'February'}
```

Keys must be unique. Values are accessible with bracket notation, or with the `get` function. `get` provides a fallback in case the key doesn't exist.

```py
print(monthDictionary['Jan']) # January
print(monthDictionary.get('Jul', 'Invalid key')) # Invalid key
```

## While

Execute until a condition is no longer true.

```py
n = 0
while n < 5:
  n += 1
  print(str(n)) # 1 2 3 4 5
```

`break` allows to break out of the loop.

```py
n = 0
while n < 5:
  n += 1
  if n == 3:
      break
  print(str(n)) # 1 2
```

`continue` to move to the next iteration.

```py
n = 0
while n < 5:
  n += 1
  if n == 3:
      continue
  print(str(n)) # 1 2 4 5
```

## Guessing game

Allow to input a number until a guess is correct

```py
number = '5'
attempts = 3

while attempts > 0:
    print(str(attempts) + ' attempts left')
    guess = input('Give me a number between 2 and 7: ')
    if guess == number:
        break
    print('\n')
    attempts -= 1
```

## for loops

Loop through iterables with the `in` operator. For strings.

```py
for letter in 'something':
    print(letter)
```

Lists.

```py
for item in ['apples', 'oranges', 'grapes']:
    print(item)
```

The `range()` function returns a list of incrementing numbers.

```py
for index in range(4, 8):
    print(index)
```

Create a function to return a power considering the input base and exponent. This is trivial, as python provides an operator for exponentiation with two consecutive asterisks `**`, but it's helpful to describe a loop and the range function with one argument (a stopping value).

```py
def power(base, exponent):
    solution = 1
    for index in range(exponent):
        solution *= base
    return solution


print(power(3, 4))
```

## 2D list and nested loops

A list can contain lists.

```py
list = [
    [1, 2, 3],
    [4, 5, 6]
]

print(list[0][1])
```

Nest a for loop to access individual items.

```py
list = [
    [1, 2, 3],
    [4, 5, 6]
]

for row in list:
    for item in row:
        print(item)
```

## Translator

Function which returns a modified version of the input string. Loop and concatenation.

```py
def translator(word):
    translation = ''
    for letter in word:
        if letter == 'e':
            translation += 'a'
        else:
            translation += letter
    return translation


print(translator('Hello there')) # Hallo thara
```

## Comments

Inline with the hash character `#`.

```py
# inline
```

Multiple line in between three sets of apostrophes `'`.

```py
'''
multiline
comment
'''
```

## Try except lock

Error handling.

```py
number = input('Give us a number: ')
try:
    twice = int(number) * 2
    print('Twice ' + number + ' is ' + str(twice))
except:
    print('That was not a number')
```

If the operation is not possible, the code in the `except` block will run.

Specify the error covered by the `except` call for more accurate error handling.

```py
number = input('Give us a number: ')
try:
    twice = int(number) * 2
    print('Twice ' + number + ' is ' + str(twice))
except ValueError:
    print('That was not a number')
```

The error message is provided as a label following the `as` operator.

```py
number = input('Give us a number: ')
try:
    twice = int(number) * 2
    print('Twice ' + number + ' is ' + str(twice))
except ValueError as err:
    print(err)
```

## Reading files

Considering a makeshift `.txt` file.

```txt
Gabriele - 28
Timothy - 27
Thessa - 31
```

`open(filePath, mode)` returns a handle for a specific file. The mode depends on the project needs.

- `r` to read

- `w` to write

- `a` to append

- `r+` to read and write

```py
handle = open('./text.txt', 'r')
```

`handle.close()` to close the file explicitly.

```py
handle = open('./text.txt', 'r')

handle.close()
```

`handle.read()` to read the entire file as a string

```py
handle = open('./text.txt', 'r')
print(handle.read())
handle.close()
```

`readline()` to read individual lines

```py
handle = open('./text.txt', 'r')
print(handle.readline())
print(handle.readline())
handle.close()
```

`readlines` to create an iterable with every line

```py
handle = open('./text.txt', 'r')
lines = handle.readlines()
for line in lines:
    print(line)
handle.close()
```

In append mode python adds content at the end of the file.

```py
handle = open('./text.txt', 'a')
handle.write('\rEliza - 29')
handle.close()
```

In write mode the existing content is overwritten.

```py
handle = open('./text.txt', 'w')
handle.write('Overwritten')
handle.close()
```

## Modules

Create a separate file, for instance `utils.py`

```py
fav_num = 42


def twice(num):
    return num * 2
```

Import similarly to modules provided by python.

```py
import utils

print(utils.fav_num)
print(utils.twice(7.5))

```

## Classes and objects

Create a class with the `class` keyword.

```py
class Client:
```

Initialize the class with the `__init__` function, specifying possible arguments.

```py
class Client:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

Create instances (objects) calling the class similarly to a function.

```py
client = Client('Eliza', 29)
print('Hello ' + client.name)
```

## Multiple choice quiz

Create an `Quiz` class with a question and answer.

```py
class Quiz:
    def __init__(self, question, answer):
        self.question = question
        self.answer = answer
```

Ask for user input to solve a series of questions.

```py
triviaNight = [
    Quiz('3 + 2', 5),
    Quiz('3 * 12', 36),
    Quiz('45 / 10 + 5', 9.5)
]


score = 0
for quiz in triviaNight:
    answer = input(quiz.question)
    if answer == str(quiz.answer):
        score += 1

print(str(score) + ' out of ' + str(len(triviaNight)))
```

## Class functions

Beside the initialization function, a class is able to have its own methods.

```py
class Quiz:
    def __init__(self, question, answer):
        self.question = question
        self.answer = answer

    def isEasy(self):
        if(self.answer < 15):
            return True
        else:
            return False

print(triviaNight[0].isEasy()) # True
print(triviaNight[1].isEasy()) # False
```

## Inheritance

Class inherit from other classes referencing the construct in between round brackets `()`

```py
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hi(self):
        print('Hi, my name is ' + self.name + ' and I am ' + str(self.age) + ' years young')


class Student(Person):
    def say_more(self):
        print('I\', m also a student')

student = Student('Eliza', 29)
print(student.say_hi())
print(student.say_more())
```
