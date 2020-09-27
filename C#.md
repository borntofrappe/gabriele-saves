## [C# documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)

### [Hello World](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/intro-to-csharp/hello-world)

## [C# Tutorial - Full Course for Beginners](https://youtu.be/GhQdlIFylQ8)

I've created a [REPL](https://repl.it/@borntofrappe/beginnerluck) to experiment with the code as well.

### Getting started

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

### Variables

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

#### Snippet

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

### Data Types

- `string`: plain text

- `char`: a single character

- `int`: a whole number

- `float`, `double` and `decimal`: decimal numbers, and in increasin order of precision

- `bool`: boolean, with two possible values `true` and `false`

#### Snippet

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

### Strings

Strings are wrapped in double quotation marks, `"`

To include double quotation marks, use a backslash to escape the character `\"`. A backlash character also introduces special characters, like `\n` to add a new line.

Concatenate strings with the plus sign `+`

Access individual characters on the basis of their index: `string[index]`. c-sharp is zero-based indexed.

Obtain the length of a string through the `Length` attribute: `string.Length`.

#### Helpful methods

| string                      | Returns                                                                         |
| --------------------------- | ------------------------------------------------------------------------------- |
| `.ToUpper()`                | The input string in uppercase notation                                          |
| `.ToLower()`                | The input string in lowecase notation                                           |
| `.Contains(input)`          | A boolean based on the presence of the input string                             |
| `.IndexOf(input)`           | The index of the input string, or `-1`                                          |
| `.Substring(index)`         | A string starting at the specified index                                        |
| `.Substring(index, length)` | A string starting at the specified index, and ending after the specified length |

#### Snippet

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

### Numbers

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

#### Snippet

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

### User input

`Console.ReadLine()` has the console wait for user input. The function then returns the input in the form of a string.

```cs
Console.Write("Enter your name");
string name = Console.ReadLine();
Console.WriteLine("Nice to meet you, " + name);
```

#### Snippet

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

### Demo — Calculator

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

### Arrays

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

#### Snippet

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

### Methods

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

#### Parameters

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

#### return

A method is able to return data using the `return` keyword. It is necessary to update the method definition by describing the type returned by the function.

```cs
static int Sum(int num1, int num2) {
  return num1 + num2;
}
```

In this instance, the function returns an integer, `int`. If a function doesn't return anything, use the `void` keyword.

#### Snippet

```cs
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

### if

Execute a block of code only if a condition results to `true`.

```cs
if(condition) {
 // do something
}
```

The `else` statement allows to provide an alternative.

```cs
if(condition) {
 // do something
} else {
  // do something else
}
```

To check for multiple conditions, follow up the `else` keyword with an additional `if` statement.

```cs
if(condition) {
 // do something
} else if(condition) {
  // do something else
}
```

Use conditional operators like `&&` and `||` to check multiple conditions.

Boolean logic respects the following rules.

With the double ampersand operator `&&`, check if both conditions are true.

| condition1 | condition2 | `&&`  |
| ---------- | ---------- | ----- |
| true       | true       | true  |
| true       | false      | false |
| false      | true       | false |
| false      | false      | false |

With the double vertical slash character `||`, check if at least one of the condition is true.

| condition1 | condition2 | `     |     | `   |
| ---------- | ---------- | ----- | --- | --- |
| true       | true       | true  |
| true       | false      | true  |
| false      | true       | true  |
| false      | false      | false |

### Demo — Calculator v1

Build a script which takes as input two operands, as well as an operator. Use `if` statements to compute the operation described by these elements.

```cs
// perform arithmetic based on user input
using System;

class MainClass {
  public static void Main (string[] args) {
    Console.Write("Operator: ");
    string @operator = Console.ReadLine();

    if(@operator == "+" || @operator == "-" || @operator == "*" || @operator == "/" || @operator == "%") {
      Console.Write("First operand: ");
      double operand1 = Convert.ToDouble(Console.ReadLine());

      Console.Write("Second operand: ");
      double operand2 = Convert.ToDouble(Console.ReadLine());

      double result = 0;
      if(@operator == "+") {
        result = operand1 + operand2;
      } else if(@operator == "-") {
        result = operand1 - operand2;
      } else if(@operator == "*") {
        result = operand1 * operand2;
      } else if(@operator == "/") {
        result = operand1 / operand2;
      } else if(@operator == "%") {
        result = operand1 % operand2;
      }
      Console.WriteLine(operand1 + " " + @operator + " " + operand2 + " = " + result);
    } else {
      Console.WriteLine(@operator + " is not a valid operator.");
    }
  }
}
```

It's important to note that in c-sharp `operator` has a specific meaning, and represents a reserved identifier. Following the suggestion found [in the Microsoft Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/), the `@` prefix allows to provide a valid alternative.

### switch

Execute the block of code where the input matches a specific value.

```cs
switch(input) {
  case v1:
    // do something
    break;
  case v2:
    // do something
    break;
  case default:
    // do something
    break;
}
```

The instructions specified in the `default` instance are run if no match is found earlier in the loop.

#### Snippet

```cs
// describe the percentage for letter grades
using System;

class MainClass {
  public static void Main (string[] args) {
    Console.Write("Letter grading: ");
    string grade = Console.ReadLine().ToUpper();

    switch(grade) {
      case "A":
        Console.WriteLine("Percentage: 90%-100%");
        break;
      case "B":
        Console.WriteLine("Percentage: 80%-89%");
        break;
      case "C":
        Console.WriteLine("Percentage: 70%-79%");
        break;
      case "D":
        Console.WriteLine("Percentage: 60%-69%");
        break;
      case "F":
        Console.WriteLine("Percentage: < 60%");
        break;
      default:
        Console.WriteLine("Letter doesn't match an available grade.");
        break;
    }
  }
}
```

### while

Execute a block of code as long as a condition resolves to `true`.

```cs
while(condition) {
  // do something;
}
```

#### do while

Execute a block of code at least once, and before checking for a `while` condition.

```cs
do {
  // do something;
} while(condition);
```

### Demo — Guessing game

Build a script which lets the user guess a number in a given range. Provide a fixed number of guesses, as well as hints regarding the number.

```cs
// describe the percentage for letter grades
using System;

class MainClass {
  public static void Main (string[] args) {
    int number = 15;
    int guessesLeft = 3;
    bool hasGuessed = false;

    Console.WriteLine("I am thinking of a number in the [0, 20] range.");

    do {
      if (guessesLeft == 1) {
        Console.WriteLine("One guess left. Make it count.");
      } else {
        Console.WriteLine(guessesLeft + " guesses left.");
      }
      int n = Convert.ToInt32(Console.ReadLine());

      if(n > number) {
        Console.WriteLine("I was thinking of a smaller number.");
        guessesLeft--;
      } else if(n < number) {
        Console.WriteLine("I was thinking of a bigger number.");
        guessesLeft--;
      } else {
        hasGuessed = true;
      }
    } while(!hasGuessed && guessesLeft > 0);

    if(hasGuessed) {
      Console.WriteLine("Correct, I was thinking of the number " + number + ".");
    } else {
      Console.WriteLine("Too bad. I guess it will remain a secret.");
    }
  }
}
```

### for

Execute a block of code for a determined number of times.

```cs
// initilization; loop condition; update
for(int i = 1; i < 5; i++) {

}
```

#### Snippet

```cs
// print half a pyramid with asterisk characters
using System;

class MainClass {
  public static void Main (string[] args) {
    Console.WriteLine("An integer for the base of your half-pyramid.");
    Console.WriteLine("Accepted values in the [1, 10] range: ");

    int @base = Convert.ToInt32(Console.ReadLine());
    if(@base > 0 && @base <= 10) {
      for(int i = @base; i > 0; i--) {
        for(int j = @base - i + 1; j > 0; j--) {
          Console.Write("*");
        }
        Console.WriteLine("");
      }
    } else {
      Console.WriteLine("Value out of range.");
    }
  }
}
```

### 2D Arrays

Initialize multidimensional arrays adding a comma `,` in the square brackets.

```cs
int[,] grid = {
  {2, 1},
  {4, 5},
  {6, 7}
};
```

When the values are not known in advance, initialize the array with the `new` keyword, and detailing the size of the array.

```cs
int[,] grid = new int[2, 3];
```

To access individual values, use multiple index values.

```cs
int[,] grid = {
  {2, 1},
  {4, 5},
  {6, 7}
};

grid[1, 0]; // 4
```

#### Snippet

`Length` provides the length of the array in terms of the number of items it contains. To find the length of a nested array, use `GetLength()` and specify the dimension in between parenthesis.

```cs
// print out the contents of a 2D array
using System;

class MainClass {
  public static void Main (string[] args) {
    int[,] grid = {
      {1, 2, 3},
      {4, 5, 6},
      {7, 8, 8}
    };

    for(int row = 0; row < grid.GetLength(0); row ++) {
      for(int column = 0; column < grid.GetLength(1); column ++) {
        Console.Write(grid[row, column]);
        if(column < grid.GetLength(1) - 1) {
          Console.Write("\t")
        }
      }
      Console.WriteLine("");
    }
  }
}
```

### Comments

Text that is not executed by the compiler.

```cs
// inline comment

/*
  multi
  line
  comment
*/
```

### Exception handling

Consider errors before they happen, so to prevent the program from stopping altogether.

```cs
try {
  // do something
} catch {
  // if an error happens
}
```

The `catch` statement provides information connected to the error.

```cs
catch(Exception e) {
  // e.Message details the error message
}
```

In between parenthesis, it is also possible to consider a specific exception — and only the specific exception.

```cs
catch(DivideByZeroException e) {

}
```

Following the `catch` block, it is finally possoble to add code that runs after the `try`, `catch` statement.

```cs
try {

}
catch {

}
finally {

}
```

#### Snippet

```cs
// attempt to divide an integer
using System;

class MainClass {
  public static void Main (string[] args) {
    int operand1 = 248;
    int result = 0;
    int remainder = 0;
    try {
      Console.Write("Let's try to divide " + operand1 + " by: ");
      int operand2 = Convert.ToInt32(Console.ReadLine());
      result = operand1 / operand2;
      remainder = operand1 % operand2;
    }
    catch (DivideByZeroException e) {
      Console.WriteLine(e.Message);
    }
    catch (FormatException e) {
      Console.WriteLine(e.Message);
    }
    finally {
        if(result != 0) {
            Console.WriteLine("Result: " + result);
            Console.WriteLine("Remainder: " + remainder);
        } else {
            Console.WriteLine("Division aborted.");
        }
    }
  }
}
```

### Classes and objects

Through classes the c-sharp language essentially allows to create a new type of value.

Define a class, specifying its attributes.

```cs
class Character {
  public string name;
  public bool isEnemy;
  public int hp;
}
```

Create an object, an instance of the class.

```cs
Main() {
  Character slime = new Character();
  slime.name = "Blue slime";
  slime.isEnemy = true;
  slime.hp = 5;
}
```

#### Snippet

```cs
// build a classs and highlight the attributes of an object
using System;

class MainClass {
  public static void Main (string[] args) {
    Character slime = new Character();
    slime.name = "Blue slime";
    slime.isEnemy = true;
    slime.hp = 5;

    Console.WriteLine("HP: " + slime.hp);
    slime.hp--;
    Console.WriteLine("HP left: " + slime.hp);
  }
}

class Character {
    public string name;
    public bool isEnemy;
    public int hp;
}
```

### Constructor

Instead of specifying the attributes line by line, a constructor methods allows to build an object by passing arguments in between parenthesis.

```cs
Main() {
  Character slime = new Character("Blue slime", true, 5);
}
```

In the definition of the class, build the constructor method by using the same name of the class.

```cs
class Character {
  public string name;
  public bool isEnemy;
  public int hp;

  public Character(string argName, bool argIsEnemy, int argHp) {
    name = argName;
    isEnemy = argIsEnemy;
    hp = argHp;
  }
}
```

Conveniently, it's possible to describe different constructor methods.

```cs
public Character() {
    // no args
}

public Character(string name, bool isEnemy, int hp) {
    // args
}
```

In this manner it's possible to create an instance with different calls. In the specific instance by specifying zero or three arguments.

#### Snippet

```cs
// build a classs with a constructor method
using System;

class MainClass {
  public static void Main (string[] args) {
    Character slime = new Character("Blue slime", true, 5);

    Console.WriteLine("HP: " + slime.hp);
    slime.hp--;
    Console.WriteLine("HP left: " + slime.hp);
  }
}

class Character {
    public string name;
    public bool isEnemy;
    public int hp;

    public Character(string argName, bool argIsEnemy, int argHp) {
      name = argName;
      isEnemy = argIsEnemy;
      hp = argHp;
    }
}
```

### Object methods

A class is able to define variables, but also its own functions.

```cs
public bool IsAlive() {
  return hp > 0;
}
```

In the body of the `Main` class then, the method is called directly from the object.

```cs
slime.IsAlive();
```

#### Snippet

```cs
// add methods to the Character class
using System;

class MainClass {
  public static void Main (string[] args) {
    Character slime = new Character("Blue slime", true, 5);

    Console.WriteLine("HP: " + slime.hp);
    while(slime.IsAlive()) {
      slime.hit(2);
    }
    Console.WriteLine("HP left: " + slime.hp);
  }
}

class Character {
    public string name;
    public bool isEnemy;
    public int hp;

    public Character(string argName, bool argIsEnemy, int argHp) {
      name = argName;
      isEnemy = argIsEnemy;
      hp = argHp;
    }

    public bool IsAlive() {
      return hp > 0;
    }

    public void hit(int damage) {
      if(hp > 0) {
        hp = Math.Max(hp - damage, 0);
      }
    }
}
```

### Getters and setters

Control access to the attributes of a class.

With the `public` keyword, the attributes of a class are accessible from everywhere, including the body of the `Main` class. With the `private` keyword, on the other hand, the attributes are available only in the body of the individual class.

```cs
private int exp;
```

In this context, getters and setters methods are the only way to retrieve and set the value. These are defined in the scope of a property.

```cs
public int Exp {
  get {
    return exp;
  }

  set {
    if(exp > 0) {
      exp = value;
    } else {
      exp  = 0;
    }
  }
}
```

You then set the attribute using `Exp` instead of `exp`.

```cs
public Character(string argName, bool argIsEnemy, int argHp, int argExp) {
  Exp = argExp;
}
```

With this setup, it is possible to set the value from the constructor, and in this instance the value is set following the rules described in the property's setter method.

```cs
Character slime = new Character("Blue slime", true, 5, -10);
Console.WriteLine(slime.Exp); // 10
```

And to retrieve the value use the property with the capital initial.

#### Snippet

```cs
// experiment with a property with setter and getter methods
using System;

class MainClass {
  public static void Main (string[] args) {
    Character slime = new Character("Blue slime", true, 5, -10);
    Character metalSlime = new Character("Blue slime", true, 5, 1000);

    Console.WriteLine(slime.Exp);
    Console.WriteLine(metalSlime.Exp);
  }
}

class Character {
  public string name;
  public bool isEnemy;
  public int hp;
  private int exp;

  public Character(string argName, bool argIsEnemy, int argHp, int argExp) {
    name = argName;
    isEnemy = argIsEnemy;
    hp = argHp;
    Exp = argExp;
  }

  public int Exp {
    get {
      return exp;
    }

    set {
      if(value > 0) {
        exp = value;
      } else {
        exp  = 0;
      }
    }
  }
}
```

### Static attributes

The `static` keyword allows to define variables on the class instead of its instances.

```cs
class Character {
  public static string author = "Gabriele";
}
```

Not available on the instances of the class, but only the class itself (Although you can create a getter method to return the same information from the class)

```cs
Character.author; // "Gabriele"
```

### Static methods

Similarly to static attributes, static methods are available on the class instead of its objects. One example comes from the `Math` class, introduced earlier; here, `Math.Sqrt(144)` is a static method.

```cs
class Character {
  public static void Credits() {
    Console.WriteLine("Gabriele — September 2020");
  }
}
```

### Static class

A static class is a which cannot create instances. Once again, the `Math` class provides an example; here, it's not possible to create an instance as in `new Math()`.

```cs
static class Game {
  public static void ShowInfo() {
    Console.WriteLine("A class describing a game-to-be. Or just a static class.");
  }
}
```

#### Snippet

```cs
// experiment with the static keyword
using System;

class MainClass {
  public static void Main (string[] args) {
    Character slime = new Character("Blue slime", true, 5);

    Console.WriteLine(slime.name + ", created by " + Character.author);
    Character.ShowCredits();

    Game.ShowInfo();
  }
}

class Character {
    public static string author = "Gabriele";

    public string name;
    public bool isEnemy;
    public int hp;

    public Character(string argName, bool argIsEnemy, int argHp) {
      name = argName;
      isEnemy = argIsEnemy;
      hp = argHp;
    }

    public static void ShowCredits() {
      Console.WriteLine("Gabriele — September 2020");
    }
}

static class Game {
  public static void ShowInfo() {
    Console.WriteLine("A class describing a game-to-be. Or just a static class.");
  }
}
```

### Inheritance

Inherit the functionality of a class in the definition of a separate class.

```cs
class Hero : Character {
  public Hero(string argName, bool argIsEnemy, int argHp) : base(argName, argIsEnemy, argHp) {
  }

}
```

Any attribute/method available on the inherited class is then available on the inheriting entity.

```cs
Hero hero = new Hero("Timothy", false, 20);
```

#### Override

To override the attributes/methods of a class, it's necessary to include two keywords.

- in the inherited class, describe the attributes/methods as `virtual`

  ```cs
  public virtual void SaySomething() {
    Console.WriteLine("I'm a simple character.");
  }
  ```

- in the inheriting class, override on the values with `override`

  ```cs
  public override void SaySomething() {
    Console.WriteLine("I'm a hero to-be.");
  }
  ```

#### Snippet

```cs
// experiment with inheritance
using System;

class MainClass {
  public static void Main (string[] args) {
    Character slime = new Character("Blue slime", true, 5);
    Hero hero = new Hero("Timothy", false, 20);

    slime.SaySomething();
    Console.WriteLine(hero.name);
    hero.SaySomething();
  }
}

class Character {
    public static string author = "Gabriele";

    public string name;
    public bool isEnemy;
    public int hp;

    public Character(string argName, bool argIsEnemy, int argHp) {
      name = argName;
      isEnemy = argIsEnemy;
      hp = argHp;
    }

    public bool IsAlive() {
      return hp > 0;
    }

    public void hit(int damage) {
      if(hp > 0) {
        hp = Math.Max(hp - damage, 0);
      }
    }

    public virtual void SaySomething() {
      Console.WriteLine("I'm a simple character.");
    }
}

class Hero : Character {
  public Hero(string argName, bool argIsEnemy, int argHp) : base(argName, argIsEnemy, argHp) {
  }

  public override void SaySomething() {
    Console.WriteLine("I'm a hero to-be.");
  }
}
```
