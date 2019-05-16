+++
canonical = ""
category = "Dotnet"
date = "2019-05-15T23:00:00+00:00"
post_type = "note"
title = "C# - practice | katas"
type = "post"

+++
## Square Every Digit

[Codewars](https://www.codewars.com/kata/546e2562b03326a88e000020/train/csharp)

> Welcome. In this kata, you are asked to square every digit of a number.
> 
> For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
> 
> Note: The function accepts an integer and returns an integer

### Solution

```cs
using System;

namespace test
{
  class Kata
  {
    static void Main(string[] args)
    {
      int number = 9119;
      Console.WriteLine(SquareDigits(number));
    }
    static int SquareDigits(int n)
    {
      string output = "";
      
      foreach (char num in n.ToString())
      {
        double numSquare = Math.Pow((int)(num - '0'), 2);
        output += numSquare.ToString();
      }
      return int.Parse(string.Join("", output));
    }
  }
}
```

[Edit on repl](https://repl.it/@vinceumo/Kata-or-Square-Every-Digit)
