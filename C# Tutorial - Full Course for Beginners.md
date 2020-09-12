# [C# Tutorial - Full Course for Beginners](https://youtu.be/GhQdlIFylQ8)

```cs
// hello world
using System;

class MainClass {
  public static void Main (string[] args) {
    Console.WriteLine("Hello, World!");
  }
}
```

Always remember to add a semi-colon at the end of every line of instruction.

The code is executed in order, and starting from the `Main` method.

## Variables

- variables always need a type

  ```cs
  string name = "Gabrie";
  ```

- you can separate the declaration and assignment of a variable in two distinct expressions

  ```cs
  int number;
  number = 7;
  ```

- you can update variables as you go

  ```cs
  int number;
  number = 7;

  number = 12;
  ```

### Snippet

```cs
//  write information based on two variables
using System;

class MainClass {
  public static void Main (string[] args) {
    string name = "Gabrie";
    int number;
    number = 7;
    Console.WriteLine("Hello, World! I'm " + name + ", and I am partial to the number " + number + ".");

    number++;
    Console.WriteLine("On the other hand, today I like the number " + number + " better.");
  }
}
```

## Data Types

- `string`: plain text

- `char`: a single character

- `int`: a whole number

- `float`, `double` and `decimal`: decimal numbers, and in increasin order of precision

- `bool`: boolean, with two possible values `true` and `false`

### Snippet

Use double quotes `"` to describe a string.

Use single quotes `'` around a character.

```cs
// write information in different data types
using System;

class MainClass {
  public static void Main (string[] args) {
    bool isSunny = true;
    char letter = 'a';
    string word = "Asparagus";
    int roundNumber = 3;
    double doubleNumber = 3.14;

    Console.WriteLine("isSunny: " + isSunny);
    Console.WriteLine("letter: " + letter);
    Console.WriteLine("word: " + word);
    Console.WriteLine("roundNumber: " + roundNumber);
    Console.WriteLine("doubleNumber: " + doubleNumber);
  }
}
```

## Strings

Strings are wrapped in double quotation marks, `"`

To include double quotation marks, use a backslash to escape the character `\"`. A backlash character also introduces special characters, like `\n` to add a new line.

Concatenate strings with the plus sign `+`

Access individual characters on the basis of their index: `string[index]`. c-sharp is zero-based indexed.

Obtain the length of a string through the `Length` attribute: `string.Length`.

### Helpful methods

| string                      | Returns                                                                         |
| --------------------------- | ------------------------------------------------------------------------------- |
| `.ToUpper()`                | The input string in uppercase notation                                          |
| `.ToLower()`                | The input string in lowecase notation                                           |
| `.Contains(input)`          | A boolean based on the presence of the input string                             |
| `.IndexOf(input)`           | The index of the input string, or `-1`                                          |
| `.Substring(index)`         | A string starting at the specified index                                        |
| `.Substring(index, length)` | A string starting at the specified index, and ending after the specified length |

### Snippet

```cs
// use methods to work on an input string
using System;

class MainClass {
  public static void Main (string[] args) {
    string inputCode = "asADSFGHdsfgr-1234";
    Console.WriteLine("Input code:\n\t<<" + inputCode + ">>");

    string validCode = inputCode.ToUpper();
    Console.WriteLine("Valid code: \n\t<<" + validCode + ">>");

    int dashIndex = validCode.IndexOf("-");
    string numberCode = validCode.Substring(dashIndex + 1);
    Console.WriteLine("Number code:\n\t<<" + numberCode + ">>");
  }
}
```

## Numbers

Mathematical operations follow the standard convention of using the plus sign `+` for addition, dash character `-` for subtraction, forward slash for division `/`, asterisk for multiplication `*`.

Obtain the remainder of a division through the modulo operator, represented by the percentage sign `%`.

Change the order of operations with parenthesis `()`.

As a shorthand, it's possible to increment a number with two plus signs: `++`. Symmetrically, it's possible to decrement a number with two negative signs: `--`.

The `Math` modulo provides several helpful methods.

| Math.                 | Returns                                  |
| --------------------- | ---------------------------------------- |
| `Abs(num)`            | Absolute number                          |
| `Pow(base, exponent)` | The base number elevated to the exponent |
| `Sqrt(num)`           | Square root                              |
| `Max(num1, num2)`     | The larger between the input numbers     |
| `Round(num)`          | An integer rounding to the nearest digit |

### Snippet

The result of a mathematical operation is an integer only if both operators are integers.

```cs
// compute mathematical operations with numbers
using System;

class MainClass {
  public static void Main (string[] args) {
    int operand1 = 12;
    Console.WriteLine("The square root of " + operand1 + " is: " + Math.Sqrt(operand1));

    int operand2 = 7;
    Console.WriteLine(operand1 + " divided by " + operand2 + " is: " + operand1 / operand2 + ". Both numbers are integers.");

    double operand3 = 7.0;
    Console.WriteLine(operand1 + " divided by " + operand3 + " is: " + operand1 / operand3 + ". Only the first number is an integer.");
  }
}
```

## User input

`Console.ReadLine()` has the console wait for user input. The function then returns the input in the form of a string.

```cs
Console.Write("Enter your name");
string name = Console.ReadLine();
Console.WriteLine("Nice to meet you, " + name);
```

### Snippet

`Convert` provides helper functions to coerce a value into a different type. In the specific snippet, `ToInt32` converts the input string into an integer.

```cs
// accept user input
using System;

class MainClass {
  public static void Main (string[] args) {
    Console.Write("Name: ");
    string name = Console.ReadLine();
    Console.Write("Number: ");
    int number = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Nice to meet you, " + name + ". Personally, I am partial to the number" + number / 2 + ".");
  }
}
```

## Demo — Calculator

Build a script which takes two numbers from the user and returns their sum, subtraction, multiplication, division and remainder.

```cs
// compute arithmetic on two input numbers
using System;

class MainClass {
  public static void Main (string[] args) {
    Console.Write("First operand: ");
    double operand1 = Convert.ToDouble(Console.ReadLine());
    Console.Write("Second operand: ");
    double operand2 = Convert.ToDouble(Console.ReadLine());

    double sum = operand1 + operand2
    Console.WriteLine(operand1 + "+" + operand2 + "= " + (operand1 + operand2));
    Console.WriteLine(operand1 + "-" + operand2 + "= " + (operand1 - operand2));
    Console.WriteLine(operand1 + "*" + operand2 + "= " + (operand1 * operand2));
    Console.WriteLine(operand1 + "/" + operand2 + "= " + (operand1 / operand2));
    Console.WriteLine(operand1 + "%" + operand2 + "= " + (operand1 % operand2));
  }
}
```

Interestingly, it's necessary to wrap in parenthesis only the second expression:

```diff
-operand1 - operand2
+(operand1 - operand2)
```

Without parenthesis, the console displays the following error:

```bash
error CS0019: Operator `-' cannot be applied to operands of type `string' and `double'
```

## Arrays

Store multiple values in curly brackets.

Access on the basis of the array index, once more starting at zero.

```cs
int [] numbers = {1, 2, 3, 4};
numbers[0];
```

Values in an array can be modified.

```cs
int [] numbers = {1, 2, 3, 4};
numbers[1] = 12;
```

It's possible to initialize an array without specifying its values, but it's always necessary to specify the number of values stored in the array. c-sharp needs to know how much memory to allocate to the data structure.

```cs
int [] numbers = new int[10];
```

### Snippet

```cs
// collect three integers in an array
using System;

class MainClass {
  public static void Main (string[] args) {
    int [] numbers = new int[3];

    Console.Write("Favorite number: ");
    numbers[0] = Convert.ToInt32(Console.ReadLine());

    Console.Write("Second favorite: ");
    numbers[1] = Convert.ToInt32(Console.ReadLine());

    Console.Write("Third favorite: ");
    numbers[2] = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Your numbers:\n1.\t" + numbers[0] + "\n2.\t" + numbers[1] + "\n3.\t" + numbers[2]);
  }
}
```

## Methods

Following the `Main` method, define methods to create reusable chunks of code.

```cs
public static void Main (string[] args) {

}

static void SayHi() {
  Console.WriteLine("Hello, World!");
}
```

In the body of `Main`, call the methods to have the program go through the methods' instructions.

```cs
public static void Main (string[] args) {
  SayHi();
}
```

### Parameters

A method is able to accept input in the form of arguments.

```cs
public static void Main (string[] args) {
  SayHi("Timothy");
}
```

In the definition of the method, describe the type of input by detailing the methods' parameter(s)

```cs
static void SayHi(string name) {
  Console.WriteLine("Hello, " + name + "!");
}
```

### return

A method is able to return data using the `return` keyword. It is necessary to update the method definition by describing the type returned by the function.

```cs
static int Sum(int num1, int num2) {
  return num1 + num2;
}
```

In this instance, the function returns an integer, `int`. If a function doesn't return anything, use the `void` keyword.

### Snippet

```
// define and use a couple of methods
using System;

class MainClass {
  public static void Main (string[] args) {
    Console.Write("Name: ");
    string name = Console.ReadLine();
    ShoutHello(name);

    Console.WriteLine("I am thinking of a number between in the [1,3] range.");
    Console.Write("Care to give a guess: ");
    int number = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine(IsTwo(number) + ". I was thinking of the number 2.");
  }

  static void ShoutHello(string name) {
    string hello = "Hello there " + name + ".";
    Console.WriteLine(hello.ToUpper());
  }

  static bool IsTwo(int n) {
    return n == 2;
  }
}
```
