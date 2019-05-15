+++
canonical = ""
category = "Dotnet"
date = "2019-05-14T23:00:00+00:00"
post_type = "note"
title = "C# - 101 cheat sheet"
type = "post"

+++
## Introduction

C# is an [objected oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) language that runs on Microsoft's **.NET Framework**, C# can as well be run on other frameworks (E.g. [Unity](https://unity3d.com/learning-c-sharp-in-unity-for-beginners))

.NET is an open source platform to develop application

## Set up dotnet core

### Install

In this article, I will use .NET core 2.2 but you can use the latest version if available. .NET core can be run on Windows, Linux and macOS.

You can install the dotnet core SDK from [Microsoft](https://dotnet.microsoft.com/download)

Once .NET core is installed you can run this one using the CLI

Run:

```bash
dotnet --version
```

Output:

```bash
2.2.202
```

### Create an app

Create a new project called **myConsolApp**. Open the folder in your terminal and run:

```bash
dotnet new console
```

.NET core will create a basic program in the **myConsolApp** folder. You should have the two following files:

- **Program.cs**: This file contains the basic default program, that will print "Hello world!"
- **myConsolApp.csproj**: This file has the information needed to build and run our program

**Program.cs**:

- **Namespace**: declare a scope that contains a set of related objects | [Microsoft - docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace)
- **Class**: In object oriented programming, a class is a blueprint / template for data types. It encapsulates variables, methods and other types. | [Microsoft - docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)
- **Method**: A method is a code block that contains a series of statements. `static void` means that the `Main` method is not a return method | [Microsoft - docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)

```cs
using System; // Include `System` namespace in the program

namespace myConsolApp // Namespace declaration
{
    class Program // Class declaration
    {
        static void Main(string[] args) // `Main` method declaration
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

Let's try to run our program:

```bash
dotnet run
```

Output:

```bash
Hello World!
```

When running `dotnet run`, by default .NET will look for the method `Main()`. This `Main()` method is the entry point of our console application. If we rename this one, the program will break.

```cs
//Program.cs

using System;

namespace myConsolApp
{
    class Program
    {
        static void MainTest(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

Run:

```bash
dotnet run
```

Output:

```bash
CSC : error CS5001: Program does not contain a static 'Main' method suitable for an entry point [C:\myConsolApp\myConsolApp.csproj]

The build failed. Please fix the build errors and run again.
```

Let's revert this last change 😬.

We have now a basic project where we are going to be able to experiment with C#.

## Comments

In C# you can declare 2 kinds of comments:

```cs
// One line comment

/* Multiple
lines
comments */
```

## Variables, constants and data types

### Types

C# is a strongly-typed language. Every variable and constant has a type.

When declaring a variable we need to set its type:

```cs
int a = 5; // variable a of type integer
string b = "hello"; // variable b of type string
bool c = true; // variable c of type boolean
```

When performing an operation with variables of different types, you need to be careful of their types, or you might get unexpected behaviour.

```cs
int a = 5;
string b = "hello";
bool c = true;
Console.WriteLine(a + 6); // 11
Console.WriteLine(a + b); // 5hello
Console.WriteLine(a + c); // error CS0019: Operator '+' cannot be applied to operands of type 'int' and 'bool'
```

Here are the default value types available by default in C#

| Type                                                                                          | Represents                                                   | Range                                                   |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| [bool](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/bool)       | Boolean value                                                | True or False                                           |
| [byte](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/byte)       | 8-bit unsigned integer                                       | 0 to 255                                                |
| [char](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/char)       | 16-bit Unicode character                                     | U +0000 to U +ffff                                      |
| [decimal](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/decimal) | 128-bit precise decimal values with 28-29 significant digits | (-7.9 x 1028 to 7.9 x 1028) / 100to 28                  |
| [double](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/double)   | 64-bit double-precision floating point type                  | (+/-)5.0 x 10-324 to (+/-)1.7 x 10308                   |
| [float](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/float)     | 32-bit single-precision floating point type                  | -3.4 x 1038 to + 3.4 x 1038                             |
| [int](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int)         | 32-bit signed integer type                                   | -2,147,483,648 to 2,147,483,647                         |
| [long](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/long)       | 64-bit signed integer type                                   | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| [sbyte](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sbyte)     | 8-bit signed integer type                                    | -128 to 127                                             |
| [short](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/short)     | 16-bit signed integer type                                   | -32,768 to 32,767                                       |
| [string](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/string)   | Sequence of zero or more Unicode characters                  |                                                         |
| [uint](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/uint)       | 32-bit unsigned integer type                                 | 0 to 4,294,967,295                                      |
| [ulong](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ulong)     | 64-bit unsigned integer type                                 | 0 to 18,446,744,073,709,551,615                         |
| [ushort](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ushort)   | 16-bit unsigned integer type                                 | 0 to 65,535                                             |

> [Reference tables for types (C# Reference) | Microsoft docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-tables-for-types)

### `var` keyword

Variables of anonymous types can be declared using the `var` keyboard.

```cs
var test1 = 5; // Will be compiled as int
var test2 = 'd'; // Will be compiled as char
var test3 = "test"; // Will be compiled as string
```

### `const` keyword

`const` is used de declare a constant, it can't be modified.

```cs
const double pi = 3.14;
const string productName = "My product";

```

## Arrays

An array can store multiple variables of the same type. An array has a fixed size.

`type[] myArray`

### Single dimensional arrays

```cs
// Declare a single-dimensional array of length 5 of type int
int[] array1 = new int[5];

// Declare and set array element values
int[] array2 = new int[] { 1, 3, 5, 7, 9 };

// Alternative syntax
int[] array3 = { 1, 2, 3, 4, 5, 6 };
```

You can access the value of an array item using its index:

```cs
int[] array = new int[] { 1, 3, 5, 7, 9 };

Console.WriteLine(array[0]); // 1
Console.WriteLine(array[3]); // 7
Console.WriteLine(array[2]); // 5
```

### Multidimensional  arrays

Array can have multiple dimensions, each array in the multidimensional arrays have the same length.

```cs
// Declare a two dimensional array of length 2 and sub array of length 3
int[,] multiDimensionalArray1 = new int[2, 3]; 

// Declare and set array element values
int[,] multiDimensionalArray2 = { { 1, 2, 3 }, { 4, 5, 6 } };

Console.WriteLine(multiDimensionalArray2[0][1]); // 2
```

### Jagged Arrays

Jagged arrays are similar to multidimensional ones, but all elements of this array can have different dimensions and sizes.

```cs
// Declare a jagged array
int[][] jaggedArray = new int[6][];

// Set the values of the first array in the jagged array structure
jaggedArray[0] = new int[4] { 1, 2, 3, 4 };
```

## Lists

*Namespace:
System.Collections.Generic*

A list represents a strongly typed list of objects that can be accessed by index. It is less performant than an array.  It doesn't have a fixed size.

`List<type> myList`

```cs
List<string> foods = new List<string>();

foods.Add("Pizza");
foods.Add("Pasta");
foods.Add("Bread");
foods.Add("Tomatoes");
foods.Add("Olives");

Console.WriteLine(foods[1]); // Pasta

foreach(string food in foods)
{
    Console.WriteLine(food);
}

// Output
//
// Pizza
// Pasta
// Bread
// ...
```

## Methods

A method refers to a block of code, It executes a series of instruction.

A method in C# can be declared in a `class` or a `struct`. Methods follow the following structure:

```cs
static private void MyMethod(string arg)
{
    Console.WriteLine(arr);
}
```

----

```cs
<Static Modifier> <Access Specifier> <Return Type> <Method Name> (Parameters)
{
    <Method Body>
}
```
- **Static modifier** is optional, a static method or variable is not associated with the instance (class or struct).
- **Access Specifier** specifies how the method can be accessed from another class
  - *public*: No access restrictions, the method can be accessed from other classes.
  - *private*: Access restricted, the method can be accessed only from the class it has been declared in.
- **Return Type**, methods can return a value, if it is the case you need to specify the data type that the method will return (E.g. `string[]`, `int`, `bool`...) and you will need a `return` keyword in the method body. If the method does not return a value, then you can use the `void` keyword.
- **Method Name**: Unique method name.
- **Parameters**, pass data to the method.
- **Method Body** contains the set of instructions needed if it is a return method you will need to `return` a value.

### Method example 1 - private void

```cs
using System;

namespace test
{
  class Program
  {
    static void Main(string[] args)
    {
      // As PrintReverseText is not static we create an instance of Program
      Program program = new Program();

      // Call PrintReverseText
      program.PrintReverseText("Hello World!");
    }

    // Init PrintReverseText
    private void PrintReverseText(string text)
    {
      char[] arr = text.ToCharArray();
      Array.Reverse(arr);
      Console.WriteLine(new string(arr));
    }
  }
}
```

[Edit on repl](https://repl.it/@vinceumo/Method-example-1-private-void)


### Method example 2 - static private void

```cs
using System;

namespace test
{
  class Program
  {
    static void Main(string[] args)
    {
      // Call PrintReverseText
      PrintReverseText("Hello World!");
    }

    // Init PrintReverseText
    static private void PrintReverseText(string text)
    {
      char[] arr = text.ToCharArray();
      Array.Reverse(arr);
      Console.WriteLine(new string(arr));
    }
  }
}
```

[Edit on repl](https://repl.it/@vinceumo/Method-example-3-static-public-string)


### Method example 3 - static public string

```cs
using System;

namespace test
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine(Program2.ReverseText("Hello World!"));
    }
    
  }

  class Program2
  {
    static public string ReverseText(string text)
    {
      char[] arr = text.ToCharArray();
      Array.Reverse(arr);
      return new string(arr);
    }
  }
}
```

[Edit on repl](https://repl.it/@vinceumo/Method-example-3-static-public-string)

## Statements examples

C# has different statements available:

### if else

```cs
int number = 5;
bool condition = number > 10;
bool condition2 = number < 10 && number > 3; 

if (condition)
{
    Console.WriteLine("Number is greater than 10");
}
else if (condition2) {
  Console.WriteLine("Number is between 4 and 10"); // In this case this line will be printed
}
else
{
    Console.WriteLine("Number is not smaller than 3");
}
```

### switch

```cs
int number = 1;
      
switch (number)
{
    case 1:
        Console.WriteLine("Case 1"); // In this case this line will be printed
        break;
    case 2:
        Console.WriteLine("Case 2"); 
        break;
    default:
        Console.WriteLine("Default case");
        break;
}
```

### for

```cs
int[] numbers = new int[] { 3, 14, 15, 92, 6 };

for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]); // Will print each numbers in new lines
}
```

### foreach

```cs
int[] numbers = new int[] { 3, 14, 15, 92, 6 };

foreach (int number in numbers)
{
    Console.Write($"{number} "); // Will print each numbers
}
```

### do

The do statements get executed at least once, as the expression is evaluated after each execution of the loop.

```cs
int[] numbers = new int[] { 3, 14, 15, 92, 6 };
int n = 0;
do 
{
    Console.WriteLine(numbers[n]);
    n++;
} while (n < numbers.Length);
```

### while

```cs
int[] numbers = new int[] { 3, 14, 15, 92, 6 };
int n = 0;
while (n < numbers.Length)
{
  Console.WriteLine(numbers[n]);
  n++;
}
```

## Resources

- [C# Tutorial - Full Course for Beginners 📺 - FreeCodeCamp](https://www.youtube.com/watch?v=GhQdlIFylQ8&t=5522s)
- [C# Guide - Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/)
