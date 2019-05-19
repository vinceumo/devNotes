+++
canonical = ""
category = "Dotnet"
date = "2019-05-15T23:00:00+00:00"
post_type = "note"
showtableofcontents = true
title = "C# - Practice | katas"
type = "post"

+++
## Decode the Morse code

[Codewars](https://www.codewars.com/kata/54b724efac3d5402db00065e)

> In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
> 
>The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

> NOTE: Extra spaces before or after the code have no meaning and should be ignored.

> In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

> Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

> For example:

```cs
MorseCodeDecoder.Decode(".... . -.--   .--- ..- -.. .")
//should return "HEY JUDE"
```

> NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.
> 
> The Morse code table is preloaded for you as a dictionary, feel free to use it:
> C#: MorseCode.Get(".--") (returns string)
> 
> All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.
>
> Good luck!
>
> After you complete this kata, you may try yourself at Decode the Morse code, advanced.

### Solution

```cs
using System;
using System.Collections.Generic;
using System.Linq;

namespace test
{
  class MorseCodeDecoder
  {
    static void Main(string[] args)
    {
      Console.WriteLine(Decode(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")); 
      Console.WriteLine(Decode(".... . -.--   .--- ..- -.. .")); 
      Console.WriteLine(Decode("... --- ...")); 
      Console.WriteLine(Decode("- .... .   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.")); 

    }
    public static string Decode(string morseCode)
    {
      string[] morseCodeWords = morseCode.Split("   ");
      string output = "";

      foreach(string morseWord in morseCodeWords)
      {
        string[] morseLetters = morseWord.Split(" ");
        string outputWord = "";

        foreach(string morseLetter in morseLetters)
        {
          outputWord += morse.FirstOrDefault(x => x.Value == morseLetter).Key;
          // outputWord += MorseCode.Get(morseLetter); for codewars
        }

        output += (output == "") ? outputWord : " " + outputWord;
      }

      return output;
    }
    static Dictionary<char, String> morse = new Dictionary<char, String>()
    {
      {'A' , ".-"},
      {'B' , "-..."},
      {'C' , "-.-."},
      {'D' , "-.."},
      {'E' , "."},
      {'F' , "..-."},
      {'G' , "--."},
      {'H' , "...."},
      {'I' , ".."},
      {'J' , ".---"},
      {'K' , "-.-"},
      {'L' , ".-.."},
      {'M' , "--"},
      {'N' , "-."},
      {'O' , "---"},
      {'P' , ".--."},
      {'Q' , "--.-"},
      {'R' , ".-."},
      {'S' , "..."},
      {'T' , "-"},
      {'U' , "..-"},
      {'V' , "...-"},
      {'W' , ".--"},
      {'X' , "-..-"},
      {'Y' , "-.--"},
      {'Z' , "--.."},
      {'0' , "-----"},
      {'1' , ".----"},
      {'2' , "..---"},
      {'3' , "...--"},
      {'4' , "....-"},
      {'5' , "....."},
      {'6' , "-...."},
      {'7' , "--..."},
      {'8' , "---.."},
      {'9' , "----."},
    };
  }
}
```

[Edit on repl](https://repl.it/@vinceumo/Kata-or-Decode-the-Morse-code)

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