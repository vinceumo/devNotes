---
layout: post
post_type: snippet
title: C# - Practice
date: 2019-05-11T23:00:00.000+00:00
category: Dotnet
canonical: ''

---
## C# Sharp Basic Declarations and Expressions : Exercises, Practice, Solution

[Exercices link](https://www.w3resource.com/csharp-exercises/basic/index.php)

### Exercise 1

Write a C# Sharp program to print Hello and your name in a separate line.

Expected Output :

* Hello
* Alexandra Abramov

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.WriteLine("Hello");
    Console.WriteLine("Vince");
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-1)

### Exercise 2

Write a C# Sharp program to print the sum of two numbers

```cs
class Program
{
  static void Main(string[] args)
  {
    int a = 39;
    int b = 73;

    Console.WriteLine(a + b);
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-2)

### Exercise 3

Write a C# Sharp program to print the result of dividing two numbers.

```cs
class Program
{
  static void Main(string[] args)
  {
    double a = 43;
    double b = 2;

    Console.WriteLine(a / b);
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-3)

### Exercise 4

Write a C# Sharp program to print the result of the specified operations:

* -1 + 4 * 6
* ( 35+ 5 ) % 7
* 14 + -4 * 6 / 11
* 2 + 15 / 6 * 1 - 7 % 2

Expected Output:

* 23
* 5
* 12
* 3

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.WriteLine(-1 + 4 * 6);
    Console.WriteLine((35 + 5) % 7);
    Console.WriteLine(14 + -4 * 6 / 11);
    Console.WriteLine(2 + 15 / 6 * 1 - 7 % 2);
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-4)

### Exercise 5

Write a C# Sharp program to swap two numbers.

Test Data:

* Input the First Number : 5
* Input the Second Number : 6
* Expected Output:
* After Swapping :
* First Number : 6
* Second Number : 5

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input the First Number: ");
    double a = double.Parse(Console.ReadLine());
    Console.Write("Input the Second Number: ");
    double b = double.Parse(Console.ReadLine());
    Console.WriteLine("After Swapping: ");
    Console.WriteLine("First Number: " + b);
    Console.WriteLine("Second Number: " + a);
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-5)

### Exercise 6

Write a C# Sharp program to print the output of multiplication of three numbers which will be entered by the user.

Test Data:

* Input the first number to multiply: 2
* Input the second number to multiply: 3
* Input the third number to multiply: 6

Expected Output:

* 2 x 3 x 6 = 36

```cs
class Program
  {
    static void Main(string[] args)
    {
      Console.Write("Input the first number to multiply: ");
      double a = double.Parse(Console.ReadLine());
      Console.Write("Input the second number to multiply: ");
      double b = double.Parse(Console.ReadLine());
      Console.Write("Input the third number to multiply: ");
      double c = double.Parse(Console.ReadLine());
      Console.WriteLine($"{a} x {b} x {c} = {a * b * c}");
    }
  }
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-6)

### Exercise 7

Write a C# Sharp program to print on screen the output of adding, subtracting, multiplying and dividing of two numbers which will be entered by the user.

Test Data:

* Input the first number: 25
* Input the second number: 4

Expected Output:

* 25 + 4 = 29
* 25 - 4 = 21
* 25 x 4 = 100
* 25 / 4 = 6
* 25 mod 4 = 1

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input the first number to multiply: ");
    int a = int.Parse(Console.ReadLine());
    Console.Write("Input the second number to multiply: ");
    int b = int.Parse(Console.ReadLine());
    Console.WriteLine($"{a} + {b} = {a + b}");
    Console.WriteLine($"{a} - {b} = {a - b}");
    Console.WriteLine($"{a} x {b} = {a * b}");
    Console.WriteLine($"{a} / {b} = {a / b}");
    Console.WriteLine($"{a} mod {b} = {a % b}");
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-7)

### Exercise 8

Write a C# Sharp program that takes a number as input and print its multiplication table.

Test Data:

* Enter the number: 5

Expected Output:

* 5 * 0 = 0
* 5 * 1 = 5
* 5 * 2 = 10
* 5 * 3 = 15

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter the number: ");
    int a = int.Parse(Console.ReadLine());

    for (int i = 0; i <= 10; i++)
    {
      Console.WriteLine($"{a} x {i} = {a * i}");
    }
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-8)

### Exercise 9

Write a C# Sharp program that takes four numbers as input to calculate and print the average.

Test Data:

* Enter the First number: 10
* Enter the Second number: 15
* Enter the third number: 20
* Enter the four number: 30

Expected Output:

* The average of 10 , 15 , 20 , 30 is: 18

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter the first number: ");
    double a = double.Parse(Console.ReadLine());
    Console.Write("Enter the second number: ");
    double b = double.Parse(Console.ReadLine());
    Console.Write("Enter the third number: ");
    double c = double.Parse(Console.ReadLine());
    Console.Write("Enter the four number: ");
    double d = double.Parse(Console.ReadLine());
    double average = (a + b + c + d) / 4;
    Console.WriteLine($"The average of  {a}, {b}, {c}, {d} is: {average}");
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-9)

### Exercise 10

Write a C# Sharp program to that takes three numbers(x,y,z) as input and print the output of (x+y).z and x.y + y.z

Test Data:

* Enter first number - 5
* Enter second number - 6
* Enter third number - 7

Expected Output:

* Result of specified numbers 5, 6 and 7, (x+y).z is 77 and x.y + y.z is 72

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter the first number: ");
    double x = double.Parse(Console.ReadLine());
    Console.Write("Enter the second number: ");
    double y = double.Parse(Console.ReadLine());
    Console.Write("Enter the third number: ");
    double z = double.Parse(Console.ReadLine());
    double result1 = (x + y) * z;
    double result2 = x * y + y * z;
    Console.WriteLine($"Result of specified numbers {x}, {y} and {z}, (x+y).z is {result1} and x.y + y.z is {result2}");
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-10)

### Exercise 11

Write a C# Sharp program that takes an age (for example 20) as input and prints something as "You look older than 20"

Test Data:

* Enter your age - 25

Expected Output:

* You look older than 25

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter your age: ");
    int x = int.Parse(Console.ReadLine());
    Console.WriteLine($"You look older than {x}");
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-11)

### Exercise 12

Write a C# program to that takes a number as input and display it four times in a row (separated by blank spaces), and then four times in the next row, with no separation. You should do it two times: Use Console. Write and then use {0}.

Test Data:

* Enter a digit: 25

Expected Output:

* 25 25 25 25
* 25252525
* 25 25 25 25
* 25252525

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter a digit: ");
    int x = int.Parse(Console.ReadLine());

    for (int i = 0; i < 2; i++)
    {
      Console.WriteLine($"{x} {x} {x} {x}");
      Console.WriteLine($"{x}{x}{x}{x}");
    }
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-12)

### Exercise 13

Write a C# program that takes a number as input and then displays a rectangle of 3 columns wide and 5 rows tall using that digit.

Test Data:

* Enter a number: 5

Expected Output:

* 555
* 5 5
* 5 5
* 5 5
* 555

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter a digit: ");
    int x = int.Parse(Console.ReadLine());

    Console.WriteLine($"{x}{x}{x}");
    Console.WriteLine($"{x} {x}");
    Console.WriteLine($"{x} {x}");
    Console.WriteLine($"{x} {x}");
    Console.WriteLine($"{x}{x}{x}");
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-13)

### Exercise 14

Write a C# program to convert from celsius degrees to Kelvin and Fahrenheit.

Test Data:

* Enter the amount of celsius: 30

Expected Output:

* Kelvin = 303
* Fahrenheit = 86

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter the amount of celsius: ");
    double celsius = double.Parse(Console.ReadLine());
    double kelvin = celsius + 273.15;
    double fahrenheit = (celsius * 9 + (32 * 5)) / 5;

    Console.WriteLine($"Kelvin = {kelvin}");
    Console.WriteLine($"Fahrenheit = {fahrenheit}");
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-14)

### Exercise 15

Write a C# program remove specified a character from a non-empty string using index of a character.

Test Data:

* w3resource

Sample Output:

* wresource
* w3resourc
* 3resource

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter your word: ");
    string text = Console.ReadLine();

    for (int i = 0; i < 3; i++)
    {
      Console.WriteLine(RemoveRandomLetter(text));
    }
  }

  static string RemoveRandomLetter(string word)
  {
    int wordLength = word.Length;
    Random random = new Random();
    int indexToRemove = random.Next(0, wordLength - 1);

    return word.Remove(indexToRemove, 1);
  }
}
```

[Edit in repl](https://repl.it/@vinceumo/Exercise-15)

### Exercise 16

Write a C# program to create a new string from a given string where the first and last characters will change their positions.

Test Data:

* w3resource
* Python

Sample Output:

* e3resourcw
* nythoP
* x

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter your word: ");
    string text = Console.ReadLine();
    Console.WriteLine(SwitchFirstLastLetter(text));
  }

  static string SwitchFirstLastLetter(string word)
  {
    int wordLength = word.Length;
    char firstLetter = word[0];
    char lastLetter = word[wordLength - 1];
    char[] wordChars = word.ToCharArray();

    wordChars[0] = lastLetter;
    wordChars[wordLength - 1] = firstLetter;

    return new string(wordChars);
  }
}
```

Or other solution

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter your word: ");
    string text = Console.ReadLine();
    Console.WriteLine(SwitchFirstLastLetter(text));
  }

  static string SwitchFirstLastLetter(string word)
  {
    int wordLength = word.Length;

    return (wordLength > 1) ? word.Substring(wordLength - 1) + word.Substring(1, wordLength - 2) + word.Substring(0, 1) : word;
  }
}
```

### Exercise 17

Write a C# program to create a new string from a given string (length 1 or more ) with the first character added at the front and back.

Sample Output:

* Input a string : The quick brown fox jumps over the lazy dog.
* TThe quick brown fox jumps over the lazy dog.T

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input a string : ");
    string text = Console.ReadLine();

    if (text.Length > 0)
    {
      Console.WriteLine(text.Substring(0, 1) + text + text.Substring(0, 1));
    }
  }
}
```

### Exercise 18

Write a C# program to check two given integers and return true if one is negative and one is positive

Sample Output:

* Input first integer: -5
* Input second integer: 25
* Check if one is negative and one is positive: True

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input first integer: ");
    int x = int.Parse(Console.ReadLine());
    Console.Write("Input second integer: ");
    int y = int.Parse(Console.ReadLine());
    bool test = (y < 0 && x >= 0) || (x < 0 && y >= 0);

    Console.WriteLine($"Check if one is negative and one is positive: {test}");
  }
}
```

### Exercise 19

Write a C# program to compute the sum of two given integers, if two values are equal then return the triple of their sum.

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input first integer: ");
    int x = int.Parse(Console.ReadLine());
    Console.Write("Input second integer: ");
    int y = int.Parse(Console.ReadLine());
    int result = (x == y) ? (x + y) * 3 : x + y;

    Console.WriteLine($"Result: {result}");
  }
}
```

### Exercise 20

Write a C# program to get the absolute value of the difference between two given numbers. Return double the absolute value of the difference if the first number is greater than second number.

```cs
class Program
  {
    static void Main(string[] args)
    {
      Console.Write("Input first integer: ");
      int x = int.Parse(Console.ReadLine());
      Console.Write("Input second integer: ");
      int y = int.Parse(Console.ReadLine());
      int result = (x > y) ? (x - y) * 2 : x - y;

      Console.WriteLine($"Result: {result}");
    }
  }
```

### Exercise 21

Write a C# program to check the sum of the two given integers and return true if one of the integer is 20 or if their sum is 20

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input first integer: ");
    int x = int.Parse(Console.ReadLine());
    Console.Write("Input second integer: ");
    int y = int.Parse(Console.ReadLine());
    bool test = x == 20 || y == 20 || x + y == 20;

    Console.WriteLine($"Result: {test}");
  }
}
```

### Exercise 22

Write a C# program to check if an given integer is within 20 of 100 or 200. (Means 100+-10 or 200+-10)

Sample Output:

* Input an integer: 25
* False

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input integer: ");
    int x = int.Parse(Console.ReadLine());
    bool test = (Math.Abs(x - 100) <= 10 || Math.Abs(x - 200) <= 10);

    Console.WriteLine($"Result: {test}");
  }
}
```

### Exercise 23

Write a C# program to convert a given string into lowercase.

Sample Output:

* write a c# sharp program to display the following pattern using the alphabet.

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input string: ");
    string text = Console.ReadLine();

    Console.WriteLine(text.ToLower());
  }
}
```

### Exercise 24

Write a C# program to find the longest word in a string.

Test Data:

* Write a C# Sharp Program to display the following pattern using the alphabet.

Sample Output:

* following

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input string: ");
    string text = Console.ReadLine();
    string[] words = text.Split();
    string longestWord = "";

    foreach (string word in words)
    {
      if (word.Length > longestWord.Length)
      {
        longestWord = word;
      }
    }

    Console.WriteLine(longestWord);
  }
}
```

or shorter solution using `OrderBy` (`System.Linq`)

```cs
// using System.Linq;

class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input string: ");
    string text = Console.ReadLine();
    string longestWord = text.Split(' ').OrderBy(x => x.Length).Last();

    Console.WriteLine(longestWord);
  }
}
```

### Exercise 25

Write a C# program to print the odd numbers from 1 to 99. Prints one number per line.

```cs
class Program
{
  static void Main(string[] args)
  {
    for (int i = 0; i < 100; i++)
    {
      if (i % 2 != 0)
      {
        Console.WriteLine(i);
      }
    }
  }
}
```

or by increasing by 2

```cs
class Program
{
  static void Main(string[] args)
  {
    for (int i = 1; i < 100; i += 2)
    {
      Console.WriteLine(i);
    }
  }
}
```

### Exercise 26

Write a C# program to compute the sum of the first 500 prime numbers.

Sample Output:

* Sum of the first 500 prime numbers:
* 3682913

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter max number: ");
    int maxNumber = int.Parse(Console.ReadLine());
    int total = 0;
    int primeCounter = 0;
    int i = 0;

    while (primeCounter < maxNumber)
    {
      if (IsPrime(i))
      {
        total += i;
        primeCounter++;
      }
      i++;
    }

    Console.WriteLine($"Sum of the first {maxNumber} prime numbers: {total}");
  }

  static bool IsPrime(int number)
  {
    if (number <= 1) return false;
    if (number == 2) return true;
    if (number % 2 == 0) return false;

    var boundary = (int)Math.Floor(Math.Sqrt(number));

    for (int i = 3; i <= boundary; i += 2)
      if (number % i == 0)
        return false;

    return true;
  }
}
```

### Exercise 27

Write a C# program and compute the sum of the digits of an integer.

Sample Output:

* Input a number(integer): 12
* Sum of the digits of the said integer: 3

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input a number(integer): ");
    string numbers = Console.ReadLine();
    int total = 0;

    foreach (char number in numbers)
    {
      total += int.Parse(number.ToString());
    }

    Console.WriteLine($"Sum of the digits of the {numbers} integer: {total}");
  }
}
```

### Exercise 28

Write a C# program to reverse the words of a sentence

Sample Output:

* Original String: Display the pattern like pyramid using the alphabet.
* Reverse String: alphabet. the using pyramid like pattern the Display

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Enter a string: ");
    string text = Console.ReadLine();

    Console.WriteLine($"Reverse string: {ReverseStringWords(text)}");
  }

  static string ReverseStringWords(string text)
  {
    string[] words = text.Split(' ');
    Array.Reverse(words);
    return string.Join(" ", words);
  }
}
```

### Exercise 29

Write a C# program to find the size of a specified file in bytes.

Sample Output:

* Size of a file: 31

```cs
// using System.IO;

class Program
{
  static void Main(string[] args)
  {
    double fileSizeBytes = new FileInfo("testFile.txt").Length;

    Console.WriteLine($"File size: {fileSizeBytes}");
  }
}
```

### Exercise 30

Write a C# program to convert a hexadecimal number to decimal number.

Sample Output:

* Hexadecimal number: 4B0
* Decimal number: 1200

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Hexadecimal number: ");
    string hexNumber = Console.ReadLine();
    int decimalNumber = Convert.ToInt32(hexNumber, 16);

    Console.WriteLine($"Decimal number: {decimalNumber}");
  }
}
```

### Exercise 31

Write a C# program to multiply corresponding elements of two arrays of integers.

Sample Output:

* Array1: \[1, 3, -5, 4\]
* Array2: \[1, 4, -5, -2\]
* Multiply corresponding elements of two arrays: 1 12 25 -8

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] array1 = { 1, 3, -5, 4 };
    int[] array2 = { 1, 4, -5, -2 };
    int shortestArrLength = (array1.Length > array2.Length) ? array2.Length : array1.Length;
    int[] multiplyArr = new int[shortestArrLength];

    for (int i = 0; i < shortestArrLength; i++)
    {
      multiplyArr[i] = array1[i] * array2[i];
    }

    string result = string.Join(", ", multiplyArr);

    Console.WriteLine($"Multiply corresponding elements of two arraysDecimal number: {result}");
  }
}
```

### Exercise 32

Write a C# program to create a new string of four copies, taking last four characters from a given string. If the length of the given string is less than 4 return the original one

Sample Output:

* Input a string : The quick brown fox jumps over the lazy dog.
* dog.dog.dog.dog.

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input a string: ");
    string text = Console.ReadLine();
    string last4Chars = (text.Length > 4) ? text.Substring(text.Length - 4) : text;

    Console.WriteLine($"{last4Chars}{last4Chars}{last4Chars}{last4Chars}");
  }
}
```

### Exercise 33

Write a C# program to check if a given positive number is a multiple of 3 or a multiple of 7.

Sample Output:

* Input first integer:
* 15
* True

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input integer: ");
    int number = int.Parse(Console.ReadLine());

    bool test = (number % 3 == 0 || number % 7 == 0) ? true : false;

    Console.WriteLine(test);
  }
}
```

### Exercise 34

Write a C# program to check if a string starts with a specified word

* Note: Suppose the sentence starts with "Hello"
* Sample Data: string1 = "Hello how are you?"
* Result: Hello.

Sample Output:

* Input a string : Hello how are you?
* True

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input a string: ");
    string text = Console.ReadLine();
    string[] words = text.Split(" ");

    Console.Write("Word to check: ");
    string wordToCheck = Console.ReadLine();

    Console.WriteLine((wordToCheck == words[0]));
  }
}
```

### Exercise 35

Write a C# program to check two given numbers where one is less than 100 and other is greater than 200.

Sample Output:

* Input a first number(<100): 75
* Input a second number(>100): 250
* True

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = new int[2];
    Console.Write("Input a first number(<100): ");
    numbers[0] = int.Parse(Console.ReadLine());
    Console.Write("Input a second number(>100): ");
    numbers[1] = int.Parse(Console.ReadLine());

    Console.WriteLine((numbers[0] < 100 && numbers[1] > 100));
  }
}
```

### Exercise 36

Write a C# program to check if an integer (from the two given integers) is in the range -10 to 10.

Sample Output:

* Input a first number: -5
* Input a second number: 8
* True

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = new int[2];
    Console.Write("Input a first number: ");
    numbers[0] = int.Parse(Console.ReadLine());
    Console.Write("Input a second number: ");
    numbers[1] = int.Parse(Console.ReadLine());

    Console.WriteLine((Math.Abs(numbers[0]) <= 10 || Math.Abs(numbers[1]) <= 10));
  }
}
```

### Exercise 37

Write a C# program to check if "HP" appears at second position in a string and returns the string without "HP".

* Test Data: PHP Tutorial

  Sample Output:
* P Tutorial

```cs
class Program
{
  static void Main(string[] args)
  {
    string text = "PHP Tutorial";

    Console.WriteLine((text.Substring(1, 2) == "HP") ? text.Remove(1, 2) : text);
  }
}
```

### Exercise 38

Write a C# program to get a new string of two characters from a given string. The first and second character of the given string must be "P" and "H", so PHP will be "PH".

Test Data:

* PHP

Sample Output:

* PH

```cs
class Program
{
  static void Main(string[] args)
  {
    string text = "PHP Tutorial";
    string firstLetters = text.Substring(0, 2);

    if (firstLetters == "PH")
    {
      Console.WriteLine(firstLetters);
    }
  }
}
```

### Exercise 39

Write a C# program to find the largest and lowest values from three integer values.

Test Data:

* Input first integer: 15
* Input second integer: 25
* Input third integer: 30

Sample Output

* Largest of three: 30
* Lowest of three: 15

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = new int[3];
    Console.Write("Input first integer: ");
    numbers[0] = int.Parse(Console.ReadLine());
    Console.Write("Input second integer: ");
    numbers[1] = int.Parse(Console.ReadLine());
    Console.Write("Input third integer: ");
    numbers[2] = int.Parse(Console.ReadLine());

    Array.Sort(numbers);

    Console.WriteLine($"Largest of three: {numbers[2]}");
    Console.WriteLine($"Lowest of three: {numbers[0]}");
  }
}
```

### Exercise 40

Write a C# program to check the nearest value of 20 of two given integers and return 0 if two numbers are same.

Test Data:

* Input first integer: 15
* Input second integer: 12

Sample Output

* 15

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = new int[2];
    int numberToCompare = 20;

    Console.Write("Input first integer: ");
    numbers[0] = int.Parse(Console.ReadLine());
    Console.Write("Input second integer: ");
    numbers[1] = int.Parse(Console.ReadLine());

    int[] difference = { Math.Abs(numberToCompare - numbers[0]), Math.Abs(numberToCompare - numbers[1]) };

    int closestNumber = (difference[0] == difference[1]) ? 0 : (difference[0] > difference[1]) ? numbers[1] : numbers[0];

    Console.WriteLine(closestNumber);
  }
}
```

### Exercise 41

Write a C# program to check if a given string contains ‘w’ character between 1 and 3 times.

Test Data:

* Input a string (contains at least one 'w' char) : w3resource
* Test the string contains 'w' character between 1 and 3 times:

Sample Output:

* True

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input a string (contains at least one 'w' char): ");
    string text = Console.ReadLine();
    int count = 0;
    char letterToCheck = 'w';

    foreach (char letter in text.ToCharArray())
    {
      if (letter == letterToCheck) count++;
    }

    Console.WriteLine(count >= 1 && count <= 3);
  }
}
```

Or using `Linq`

```cs
// using System.Linq;

class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input a string (contains at least one 'w' char): ");
    string text = Console.ReadLine();
    char letterToCheck = 'w';
    int count = text.Count(letter => letter == letterToCheck);

    Console.WriteLine(count >= 1 && count <= 3);
  }
}
```

### Exercise 42

Write a C# program to create a new string where the first 4 characters will be in lower case. If the string is less than 4 characters then make the whole string in upper case.

Test Data:

* Input a string: w3r

Sample Output

* W3R

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input a string: ");
    string text = Console.ReadLine();
    string newString;

    if (text.Length <= 4)
    {
      newString = text.ToUpper();
    }
    else
    {
      newString = text.Substring(0, 4).ToLower() + text.Substring(4);
    }

    Console.WriteLine(newString);
  }
}
```

### Exercise 43

Write a C# program to check if a given string starts with "w" and immediately followed by two "ww".

Test Data:

* Input a string : www

Sample Output

* True

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input a string: ");
    string text = Console.ReadLine();
    string testString = "www";
    Console.WriteLine(text.Substring(0, 3) == testString);
  }
}
```

### Exercise 44

Write a C# program to create a new string of every other character (odd position) from the first position of a given string.

Test Data:

* Input a string : w3resource

Sample Output

* wrsuc

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Input a string: ");
    string text = Console.ReadLine();
    string textResult = "";

    for (int i = 0; i < text.Length; i += 2)
    {
      textResult += text[i];
    }

    Console.WriteLine(textResult);
  }
}
```

### Exercise 45

Write a C# program to count a specified number in a given array of integers.

Test Data:

* Input an integer: 5

Sample Output

* Number of 5 present in the said array: 2

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = { 1, 2, 3, 5, 5, 5, 3, 2 };
    Console.Write("Input an integer: ");
    int numToCount = int.Parse(Console.ReadLine());
    int count = 0;

    foreach (int num in numbers)
    {
      if (num == numToCount) count++;
    }

    Console.WriteLine($"Number of {numToCount} present in the said array: {count}");
  }
}
```

Or using `Linq`

```cs
// using System.Linq;

class Program
{
  static void Main(string[] args)
  {
    int[] numbers = { 1, 2, 3, 5, 5, 5, 3, 2 };
    Console.Write("Input an integer: ");
    int numToCount = int.Parse(Console.ReadLine());
    int count = numbers.Count(num => num == numToCount);

    Console.WriteLine($"Number of {numToCount} present in the said array: {count}");
  }
}
```

### Exercise 46

Write a C# program to check if a number appears as either the first or last element of an array of integers and the length is 1 or more.

Test Data:

* Input an integer: 25

Sample Output

* False

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = { 1, 2, 3, 5, 5, 5, 3, 2 };
    Console.Write("Input an integer: ");
    int numToTest = int.Parse(Console.ReadLine());
    bool test = (numbers.Length > 0) ? (numbers[0] == numToTest || numbers[numbers.Length - 1] == numToTest) : false;

    Console.WriteLine(test);
  }
}
```

### Exercise 47

Write a C# program to compute the sum of all the elements of an array of integers.

Test Data:

* Array1: \[1, 2, 2, 3, 3, 4, 5, 6, 5, 7, 7, 7, 8, 8, 1\]

Sample Output

* Sum: 69

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = { 1, 2, 2, 3, 3, 4, 5, 6, 5, 7, 7, 7, 8, 8, 1 };
    int sum = 0;

    foreach (int num in numbers) sum += num;

    Console.WriteLine(sum);
  }
}
```

Or using `Linq`

```cs
// using System.Linq;
class Program
  {
    static void Main(string[] args)
    {
      int[] numbers = { 1, 2, 2, 3, 3, 4, 5, 6, 5, 7, 7, 7, 8, 8, 1 };

      Console.WriteLine(numbers.Sum());
    }
  }
```

### Exercise 48

Write a C# program to check if the first element and the last element are equal of an array of integers and the length is 1 or more.

Test Data:

* Array1: \[1, 2, 2, 3, 3, 4, 5, 6, 5, 7, 7, 7, 8, 8, 1\]

Sample Output

* True

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = { 1, 2, 2, 3, 3, 4, 5, 6, 5, 7, 7, 7, 8, 8, 1 };
    bool test = (numbers.Length > 0) ? (numbers[0] == numbers[numbers.Length - 1]) : false;

    Console.WriteLine(test);
  }
}
```

### Exercise 49

Write a C# program to check if the first element or the last element of the two arrays ( length 1 or more) are equal.

Test Data:

* Array1: \[1, 2, 2, 3, 3, 4, 5, 6, 5, 7, 7, 7, 8, 8, 1\]
* Array2: \[1, 2, 2, 3, 3, 4, 5, 6, 5, 7, 7, 7, 8, 8, 5\]
* Check if the first element or the last element of the two arrays ( leng th 1 or more) are equal.

Sample Output:

* True

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers1 = { 1, 2, 2, 3, 3, 4, 5, 6, 5, 7, 7, 7, 8, 8, 1 };
    int[] numbers2 = { 1, 2, 2, 3, 3, 4, 5, 6, 5, 7, 7, 7, 8, 8, 5 };
    bool test = (numbers1.Length > 0 && numbers2.Length > 0) ? (numbers1[0].Equals(numbers2[0]) || numbers1[numbers1.Length - 1].Equals(numbers2[numbers2.Length - 1])) : false;

    Console.WriteLine(test);
  }
}
```

### Exercise 50

Write a C# program to rotate an array (length 3) of integers in left direction.

Test Data:

* Array1: \[1, 2, 8\]
* After rotating array becomes: \[2, 8, 1\]

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = { 1, 2, 2, 3, 3, 4, 5, 6, 5, 7, 7, 7, 8, 8, 1 };
    int[] newNumbers = new int[numbers.Length];

    for (int i = 0; i < numbers.Length; i++)
    {
      int index = (i - 1 == -1) ? numbers.Length - 1 : i - 1;
      newNumbers[index] = numbers[i];
    }

    Console.WriteLine($"After rotating array becomes: [{string.Join(", ", newNumbers)}]");
  }
}
```

### Exercise 51

Write a C# program to get the larger value between first and last element of an array (length 3) of integers.

Test Data:

* Array1: \[1, 2, 5, 7, 8\]
* Highest value between first and last values of the said array: 8

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = { 1, 2, 5, 7, 8 };
    int result = (numbers[0] > numbers[numbers.Length - 1]) ? numbers[0] : numbers[numbers.Length - 1];

    Console.WriteLine($"Highest value between first and last values of the said array: {result}");
  }
}
```

### Exercise 52

Write a C# program to create a new array of length containing the middle elements of three arrays (each length 3) of integers.

Test Data:

* Array1: \[1, 2, 5\]
* Array2: \[0, 3, 8\]
* Array3: \[-1, 0, 2\]
* New array: \[2, 3, 0\]

```cs
//using System.Collections.Generic;

class Program
{
  static void Main(string[] args)
  {
    int[] numbers1 = { 1, 2, 5 };
    int[] numbers2 = { 0, 3, 8 };
    int[] numbers3 = { -1, 0, 2 };
    List<int[]> numbersList = new List<int[]>
    {
      numbers1, numbers2, numbers3
    };
    int[] medianValues = new int[numbersList.Count];

    for (int i = 0; i < numbersList.Count; i++)
    {
      int medianIndex = (numbersList[i].Length - 1) / 2;
      medianValues[i] = numbersList[i][medianIndex];
    }

    Console.WriteLine($"New array: [{string.Join(", ", medianValues)}]");
  }
}
```

### Exercise 53

Write a C# program to check if an array contains an odd number.

Test Data:

* Original array: \[2, 4, 7, 8, 6\]
* Check if an array contains an odd number? True

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = { 2, 4, 1, 8, 6 };
    bool hasOddNum = false;
    int i = 0;
    while (i < numbers.Length && !hasOddNum)
    {
      if (numbers[i] % 2 != 0) hasOddNum = true;
      i++;
    }
    Console.WriteLine($"Check if an array contains an odd number? {hasOddNum}");
  }
}
```

### Exercise 54

Write a C# program to get the century from a year.

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.Write("Year: ");
    int year = int.Parse(Console.ReadLine());
    int century = (year - 1) / 100 + 1;

    Console.WriteLine((year < 1) ? "Please enter starting from 1 AD" : $"Century: {century}");
  }
}
```

### Exercise 55

Write a C# program to find the pair of adjacent elements that has the largest product of an given array.

Test Data:

* Original array: \[ 0, -1, -1, -2 \]
* Biggest pair product: 2;
* Original array: \[ 6, 1, 12, 3, 1, 4 \]
* Biggest pair product: 36;

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.WriteLine(BiggestPairProduct(new int[] { 2, 4, 2, 6, 9, 3 }));
    Console.WriteLine(BiggestPairProduct(new int[] { 0, -1, -1, -2 }));
    Console.WriteLine(BiggestPairProduct(new int[] { 6, 1, 12, 3, 1, 4 }));
    Console.WriteLine(BiggestPairProduct(new int[] { 1, 4, 3, 0 }));
  }

  static int BiggestPairProduct(int[] args)
  {
    int totalProduct = 0;

    for (int i = 0; i < args.Length - 1; i++)
    {
      int pairProduct = args[i] * args[i + 1];
      if (pairProduct > totalProduct) totalProduct = pairProduct;
    }

    return totalProduct;
  }
}
```

### Exercise 56

Write a C# program to check if a given string is a palindrome or not.

Sample Example:

* For 'aaa' the output should be true
* For 'abcd' the output should be false
* 'A car, a man, a maraca' should be true
* 'A but tuba' should be true

http://www.palindromelist.net/

```cs
// using System.Text.RegularExpressions;

class Program
{
  static void Main(string[] args)
  {
    Console.Write("Text: ");
    string text = Console.ReadLine();

    Console.WriteLine(IsPalindrome(text));
  }
  static bool IsPalindrome(string text)
  {
    string letters = Regex.Replace(text.ToLower(), @"[^A-Za-z0-9]+", String.Empty);
    char[] chars = letters.ToCharArray();
    Array.Reverse(chars);

    return (letters.Equals(new string(chars)));
  }
}
```

### Exercise 57

(Same as 55)

Write a C# program to find the pair of adjacent elements that has the highest product of an given array of integers

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.WriteLine(BiggestPairProduct(new int[] { 2, 4, 2, 6, 9, 3 }));
    Console.WriteLine(BiggestPairProduct(new int[] { 0, -1, -1, -2 }));
    Console.WriteLine(BiggestPairProduct(new int[] { 6, 1, 12, 3, 1, 4 }));
    Console.WriteLine(BiggestPairProduct(new int[] { 1, 4, 3, 0 }));
  }

  static int BiggestPairProduct(int[] args)
  {
    int totalProduct = 0;

    for (int i = 0; i < args.Length - 1; i++)
    {
      int pairProduct = args[i] * args[i + 1];
      if (pairProduct > totalProduct) totalProduct = pairProduct;
    }

    return totalProduct;
  }
}
```

### Exercise 58

Write a C# program which will accept a list of integers and checks how many integers are needed to complete the range.

Sample Example \[1, 3, 4, 7, 9\], between 1-9 -> 2, 5, 6, 8 are not present in the list. So output will be 4.

```cs
class Program
{
  static void Main(string[] args)
  {
    int[] numbers = { 1, 3, 4, 7, 99 };
    Array.Sort(numbers);
    int rangeLength = numbers[numbers.Length - 1] - numbers[0] + 1;

    Console.WriteLine($"{rangeLength - numbers.Length} integers are missing to complete the list");
  }
}
```

### Exercise 59

Write a C# program to check whether it is possible to create a strictly increasing sequence from a given sequence of integers as an array.

```cs
class Program
{
  static void Main(string[] args)
  {
    Console.WriteLine(IsIncreasingSequence(new int[] { 1, 2, 3, 8, 6, 9 }));
    Console.WriteLine(IsIncreasingSequence(new int[] { 0, 2, 10 }));
    Console.WriteLine(IsIncreasingSequence(new int[] { 1, 8, 1, 3 }));
    Console.WriteLine(IsIncreasingSequence(new int[] { 1, 2, 3 }));
  }
  static bool IsIncreasingSequence(int[] args)
  {
    bool isIncreasing = true;
    int i = 0;

    while (i < args.Length - 1 && isIncreasing)
    {
      if (args[i] > args[i + 1]) isIncreasing = false;
      i++;
    }

    return isIncreasing;
  }
}
```

Or using `SequenceEqual` (`System.Linq`)

```cs
//using System.Linq;
class Program
{
  static void Main(string[] args)
  {
    Console.WriteLine(IsIncreasingSequence(new int[] { 1, 2, 3, 8, 6, 9 }));
    Console.WriteLine(IsIncreasingSequence(new int[] { 0, 2, 10 }));
    Console.WriteLine(IsIncreasingSequence(new int[] { 1, 8, 1, 3 }));
    Console.WriteLine(IsIncreasingSequence(new int[] { 1, 2, 3 }));
  }
  static bool IsIncreasingSequence(int[] args)
  {
    int[] sortArgs = (int[])args.Clone();
    Array.Sort(sortArgs);
    return (args.SequenceEqual(sortArgs));
  }
}
```

### Exercise 60

Write a C# program to calculate the sum of all the integers of a rectangular matrix except those integers which are located below an integer of value 0.

Sample Example:

* matrix = \[\[0, 2, 3, 2\], \[0, 6, 0, 1\], \[4, 0, 3, 0\]\]
* Eligible integers which will be participated to calculate the sum -
* matrix = \[\[X, 2, 3, 2\], \[X, 6, X, 1\], \[X, X, X, X\]\]
* Therefore sum will be: 2 + 3 + 2 + 6 + 1 = 14

```cs
class Program
{
  static void Main(string[] args)
  {
    int[][] numbers =
    {
      new int[] { 0, 2, 3, 2 },
      new int[] { 0, 6, 0, 1 },
      new int[] { 4, 0, 3, 0 },
    };

    Console.WriteLine(SumMatrix(numbers));
  }

  static int SumMatrix(int[][] args)
  {
    bool[] template = new bool[args[0].Length];
    template = Array.ConvertAll<bool, bool>(template, b => b = true);
    int sum = 0;

    foreach (int[] row in args)
    {
      for (int i = 0; i < row.Length; i++)
      {
        if (template[i])
        {
          if (row[i] == 0)
          {
            template[i] = false;
          }
          else
          {
            sum += row[i];
          }
        }
      }
    }

    return sum;
  }
}
```

### Exercise 61

Write a C# program to sort the integers in ascending order without moving the number -5.

```cs
// using System.Linq;
class Program
{
  static void Main(string[] args)
  {
    int[] arr = sortArrWithException(new int[] { 1, 77, -5, 0, -99, 4, -5, 3 }, -5);
    Console.WriteLine(string.Join(", ", arr));
  }
  static int[] sortArrWithException(int[] args, int exception)
  {
    int[] numbers = args.Where(x => x != exception).OrderBy(x => x).ToArray();
    int i = 0;

    return args.Select(x => x != exception ? numbers[i++] : exception).ToArray();
  }
}
```

### Exercise 62

Write a C# program to reverse the strings contained in each pair of matching parentheses in a given string and also remove the parentheses within the given string.

```cs
class Program
{
  static void Main(string[] args)
  {
    string text = "the quick (brown (test)) fox (jumps over) the lazy dog";

    while (text.LastIndexOf("(") >= 0)
    {
      int openParenIndex = text.LastIndexOf("(");
      int closeParenIndex = text.IndexOf(")", openParenIndex);

      string textFirst = text.Substring(0, openParenIndex);
      string textLast = text.Substring(closeParenIndex + 1);
      string textInParen = text.Substring(openParenIndex + 1, closeParenIndex - openParenIndex - 1);
      char[] textInParenReverse = textInParen.ToCharArray();
      Array.Reverse(textInParenReverse);

      text = textFirst + new string(textInParenReverse) + textLast;
    }

    Console.WriteLine(text);
  }
}
```