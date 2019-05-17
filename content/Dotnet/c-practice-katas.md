+++
canonical = ""
category = "Dotnet"
date = "2019-05-15T23:00:00+00:00"
post_type = "note"
showtableofcontents = true
title = "C# - Practice | katas"
type = "post"

+++
## Write Number in Expanded Form

[Codewars](https://www.codewars.com/kata/write-number-in-expanded-form)

> You will be given a number and you will need to return it as a string in Expanded Form. For example:

```cs
Kata.ExpandedForm(12); # Should return "10 + 2"
Kata.ExpandedForm(42); # Should return "40 + 2"
Kata.ExpandedForm(70304); # Should return "70000 + 300 + 4"
```

### Solution

```cs
using System;

namespace test
{
  class Kata
  {
    static void Main(string[] args)
    {
      Console.WriteLine(ExpandedForm(12));
      Console.WriteLine(ExpandedForm(42));
      Console.WriteLine(ExpandedForm(70304));
      Console.WriteLine(ExpandedForm(700301080));
    }
    public static string ExpandedForm(long num)
    {
      string str = num.ToString();
      string outputStr = "";

      for (int i = 0; i < str.Length; i++)
      {
        if (str[i] != '0')
        {
          string numStr = str[i] + new string('0', str.Length - 1 - i);
          outputStr += (outputStr == "") ? numStr : " + " + numStr;
        }
      }

      return outputStr;
    }
  }
}
```

[Edit on repl](https://repl.it/@vinceumo/Kata-or-Write-Number-in-Expanded-Form)

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

## Isograms

[Codewars](https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/csharp)

> An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

```cs
isIsogram "Dermatoglyphics" == true
isIsogram "moose" == false
isIsogram "aba" == false
```

### Solution

```cs
using System;

namespace test
{
  class Kata
  {
    static void Main(string[] args)
    {
      Console.WriteLine(IsIsogram("Dermatoglyphics"));
      Console.WriteLine(IsIsogram("moose"));
      Console.WriteLine(IsIsogram("aba"));
    }
    public static bool IsIsogram(string str)
    {
      char[] strChars = str.ToLower().ToCharArray();
      Array.Sort(strChars);
      int i = 0;
      bool isIsogram = true;
      while (isIsogram && i < strChars.Length - 1)
      {
        if (strChars[i] == strChars[i + 1]) isIsogram = false;
        i++;
      }

      return isIsogram;
    }
  }
}
```

[Edit on repl](https://repl.it/@vinceumo/Kata-or-Isograms)