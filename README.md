# README fizzbuzz-kit

![Logo](Icon.png)

## Description: All-in-one package for testing and running fizzbuzz

## **isFizzBuzz**

> To check if number can multiple by 15
> **Example usage:**

```JavaScript
console.log(isFizzBuzz(15)); // Return True
console.log(isFizzBuzz(3)); // Return False
console.log(isFizzBuzz(NaN)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **isBuzz**

> To check if number can multiple by 5
> **Example usage:**

```JavaScript
console.log(isBuzz(25)); // Return True
console.log(isBuzz(13)); // Return False
console.log(isBuzz(null)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **isFizz**

> To check if number can multiple by 3
> **Example usage:**

```JavaScript
console.log(isFizz(12)); // Return True
console.log(isFizz(5)); // Return False
console.log(isFizz(void 0)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **isNormal**

> To check if number can't multiple by 5 and 3
> **Example usage:**

```JavaScript
console.log(isNormal(1)); // Return True
console.log(isNormal(15)); // Return False
console.log(isNormal("Invalid Example")); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **FizzBuzzSet**

> Get multiple of 15
> **Example usage:**

```JavaScript
console.log(FizzBuzzSet(2)); // Return [15, 30]
console.log(FizzBuzzSet(null)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **FizzSet**

> Get multiple of 3
> **Example usage:**

```JavaScript
console.log(FizzSet(2)); // Return [3, 6]
console.log(FizzSet(void 0)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **BuzzSet**

> Get multiple of 3
> **Example usage:**

```JavaScript
console.log(BuzzSet(2)); // Return [5, 10]
console.log(BuzzSet(undefined)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **NormalEvenSet**

> Get multiple of 2
> **Example usage:**

```JavaScript
console.log(BuzzSet(2)); // Return [2, 4]
console.log(BuzzSet(NaN)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **SearchFizzBuzz**

> Identify if it is FizzBuzz/Fizz/Buzz/Normal with number
> **Example usage:**

```JavaScript
console.log(SearchFizzBuzz(15)); // Return FizzBuzz
console.log(SearchFizzBuzz(6)) //Return Fizz
console.log(SearchFizzBuzz("Invalid Example")); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **TotalFizzBuzz**

> Tell how much FizzBuzz in range of number
> **Example usage:**

```JavaScript
console.log(TotalFizzBuzz(15)); // Return 1
console.log(TotalFizzBuzz(30)); // Return 2
console.log(TotalFizzBuzz(null)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **TotalFizz**

> Tell how much Fizz in range of number
> **Example usage:**

```JavaScript
console.log(TotalFizz(6)); // Return 2
console.log(TotalFizz(3)); //Return 1
console.log(TotalFizz(NaN)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **TotalBuzz**

> Tell how much Buzz in range of number
> **Example usage:**

```JavaScript
console.log(TotalBuzz(10)); // Return 2
console.log(TotalBuzz(5)); //Return 1
console.log(TotalBuzz(undefined)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **TotalNormal**

> Tell how much Normal in range of number
> **Example usage:**

```JavaScript
console.log(TotalNormal(6)); // Return 2
console.log(ToalNormal(3)); //Return 1
console.log(TotalNormal(null)); // Return [ERROR]: Pamareter must be SafeInteger number
```

## **FindFizzBuzz**

> Tell if string contain "FizzBuzz"/"fizzbuzz"
> **Example usage:**

```JavaScript
console.log(FindFizzBuzz("FizzBuzz")); // Return true
console.log(FindFizzBuzz("fizzbuzzz")); //Return false
console.log(FindFizzBuzz(NaN)); // Return [ERROR]: Pamareter must be string
```

## **FindFizz**

> Tell if string contain "Fizz"/"fizz"
> **Example usage:**

```JavaScript
console.log(FindFizzBuzz("Fizz")); // Return true
console.log(FindFizzBuzz("fizzz")); //Return false
console.log(FindFizzBuzz(null)); // Return [ERROR]: Pamareter must be string
```

## **FindBuzz**

> Tell if string contain "Fizz"/"fizz"
> **Example usage:**

```JavaScript
console.log(FindBuzz("Buzz")); // Return true
console.log(FindBuzz("buzzz")); //Return false
console.log(FindBuzz(12)); // Return [ERROR]: Pamareter must be string
```

## **FindNormal**

> Tell if string contain "Normal"/"normal"
> **Example usage:**

```JavaScript
console.log(FindNormal("Normal")); // Return true
console.log(FindNormal("normall")); //Return false
console.log(FindNormal(null)); // Return [ERROR]: Pamareter must be string
```
