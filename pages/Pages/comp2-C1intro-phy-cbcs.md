---
layout: page
title: comp2
author: apjena
toc: true
entries_layout: grid
author_profile: true
hide: true
permalink: /:pages/
header:
  overlay_image: assets/img/header/headerbanner.jpg
---
# Learning C for CBCS Physics Hons.
## Preliminaries
Before we begin, about this platform **Google Colab**. This platform is Google's _give back_ contribution to the community, offering a Jupyter-like Python execution environment online, similar to Google Drive file. It provides a Unix console, numerous libraries and GPU access etc.. which is sufficient for our purposes even in the free version. It provides gnu compilers for C, C++, Fortran, Java out of the box. Text documentation supports Markdown. Thanks Google!

Unix commands are executed by prefixing them with `!`. C code files can be saved using the command `%%writefile filename.c`.
A file browser and a terminal are also provided. Please note that the emulated `content` folder ONLY retains files within the current notebook session.

Now, regarding the C language for CBCS: this section provides a straightforward and concise introduction to C, tailored to the syllabus requirements. For those seeking more in-depth knowledge, we highly recommend consulting standard textbooks and the abundant, excellent resources available online. The enduring popularity of `C` is undeniable.


```python
!echo "Unix commands can be invoked like this"
!ls
!ls sample_data
!gcc --version
```

    Unix commands can be invoked like this
    sample_data
    anscombe.json		      mnist_test.csv
    california_housing_test.csv   mnist_train_small.csv
    california_housing_train.csv  README.md
    gcc (Ubuntu 11.4.0-1ubuntu1~22.04.2) 11.4.0
    Copyright (C) 2021 Free Software Foundation, Inc.
    This is free software; see the source for copying conditions.  There is NO
    warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
    


## Introduction to C
BPCL (Basic Combined Programming Language) was developed in 1960 at Cambridge. Building upon BCPL, Ken Thompson developed the 'B' language at Bell Laboratories. In 1972, Dennis Ritchie, also at Bell Labs, improved 'B' to create 'C Language' for systems programming, including the UNIX operating system. In 1978, Brian Kernighan and Dennis Ritchie published the first widely available description of C, known as the K&R standard.
The language was later formalized in 1988 by the American National Standard Institute(ANSI). C source code is written as ASCII text files with a '.c' extension. C is a procedural language, distinct from publishing (e.g., LaTeX), scripting (e.g., BASH, awk), or markup languages (e.g., HTML). C++ was later developed by Bjarne Stroustrup (starting in the late 1970s, formally named C++ in 1983) to incorporate object-oriented programming concepts, enhancing data encapsulation and other features.

### Why C?
  * C is a powerful, efficient, and widely used programming language.
  * It provides low-level access to memory.
  * It is portable and suitable for system programming.
  * It has a concise set of 32 keywords and a rich set of operators. (**Keywords** are reserved words with special meanings in `C` that can not to be used as idetifiers.)

### Features of C:
  * C is a Procedure Oriented and Structure Oriented Programming Language.
  * C programs are typically structured as a collection of functions or modules. (Everything in C is a function)
  * Standard functions are included via header files.
  * Case Sensitive: C is case sensitive programming language.
  * The semicolon(`;`) is a statement terminator. Every statement ends with a semicolon.
  * Middle level, Portable.

### Glossary in C:
* A C program consists of various tokens: keywords, identifiers, constants, strings, or symbols.
* Comments are explanatory texts ignored by the compiler. They can be single-line (`//`) or multi-line (`/* ...*/`).
* An identifier names a variable, function, or any other user-defined item.
* Whitespace is used to separate tokens.
* A variable is a named memory location used to store data.

### Function Prelimnaries:
Every C program must contain a single `main()` function. A function has a return type, accepts an argument (if any) within parentheses `()`, and its body is defined within curly braces `{}`. Curly braces `{}` mark the beginning and end of any group of statements. For example, the `printf("Test")` statement displays the text within double quotes on the screen.
* **Input & Output functions**: Functions used to read and write data to the output screen are called input/output (I/O)functions.
  * **Formatted output**: `printf("format string",variable);`. It accepts
    * **Escape Sequences or backlash character constants** e.g., `\n` (new line), `\t` (tab), `\b` (backspace), `\a` (alert bell), `\"` (double quote), `\?` (question mark), `\\` (backslash).
    * **format specifier** e.g., `%d` for integer, `%c` for character, used for variables passed after the format string.
  * **Formatted input**: Function to read in data: `scanf("format specifier",&variable_name);` NOTE: The `&` (address-of operator) is crucial to provide the memory address where the input should be stored.
  * **Unformatted input/output**: Functions for characters and strings include `putchar(char), getchar(char), putch(char),getch(char), gets(string) (deprecated), and puts(string)`.

### Variable
A variable is a named storage location for data. Variable names must start with an alphabet (lowercase or uppercase) or an underscore _, and can be followed by letters, numbers, or underscores.

* **Data types** in C define the kind of data a variable can store and instruct the compiler to allocate memory for the variable.
* Types of data types in C:
    * **Primary (Basic) types**: interger(`int`, typically 2 or 4 bytes, specifier `%d`), character(`char`, 1 byte, specifier `%c`), single-precision floating point (`float`, 4 bytes, specifier `%f`), and double-precision floating point(`double`, 8 bytes, specifier `%lf`). Note: Memory sizes can vary based on the system architecture (e.g., 32-bit or 64-bit).
    * **Derived types**: arrays, pointers, structures, unions.
    * **Enumeration**: `enum`.
    * **Void type**: represents no value.
* **Syntax**: `datatype var1,var2;` Example:`int i,i2_w,e3`
* **Type definition**(typedef): Users can create aliases for existing data types. Syntax: `typedef float real;` Now `real v1;` can be used instead of `float v1;`.
* **Casting a variable**: If one needs to convert integer to float to make a division accurate: `x = (float) n1/n2;`  
* **Constant** are used to represent fixed data values that cannot be modified during program execution. Example: `const pi=3.141;`
* **Symbolic constants**(`#define`): These provide a way to assign a name to a constant value, instructing the preprocessor to replace all occurrences of the name with the value before compilation, potentially optimizing execution for certain control variables. Syntax: `#define PI 3.141`
* **Storage classes**: Storage classes define the scope, visibility, and lifetime of variables. They include:
  * `auto`: Local variables, visible only within their defining function. This is the default storage class.
  * `static`: Local variables that retain their value between function calls and exist throughout the program's execution, though still scoped locally.
  * `extern`: Global variables, accessible by all functions. Variables declared outside any function are implicitly `extern`.
  * `register`: Local variables that suggest to the compiler to store them in a CPU register for faster access(though the compiler may ignore the suggestion).

### Writing Program in C
* Use Comments to enhance code readability.
* Use Common conventions: lowercase for program code, uppercase for symbolic constants.
* Ensure proper use of curly braces `{}` for grouping statements in functions, loops, and other constructs.
* Steps:
  * a) Write the program in a `filename.c`
  * b) Compile and link the program to get an executable `gcc filename.c -lm -o filename`
  * c) Execute the executable `./filename`. By default, if no output filename is specified, `gcc` generates an executable `a.out` on Unix-like systems.


Let us write our first sample C code using `%%writefile codename.c` command. A C program typically includes the following sections commented in the program.


```python
%%writefile helloworld.c
/* My first program in C.
 * (1) Documentation section:
 *  Program heading may contain the aim, purpose and author names date and time.
 * Note: This is how multi-line comments are written.
 */
 // Double slash is used for single-line comment or inline comment.
 // It can start from anywhere in the line and ends at the end of the line.

/* (2) Link section: The header files required for the program are specified. */
#include<stdio.h> // Preprocessor directive for input output
#include<stdlib.h> // Provides system()

int x; // [Storage class]: By default, it is a global/extern variable.

/* (3) main() function: Every C program must have a single main function. */
int main(void)
{
/* (4) Declaration section: Variables are declared preferably here. */
  int num1,num2; // [Storage Class]: Local variables.
  //extern
  int result;  // [Storage class]: Defined Global variable

/* (5) Statements are written here. */
    system("clear"); // Clears the screen.
    printf("Hello World!!!\n");   // FORMATTED OUTPUT TO SCREEN
    printf("\nWelcome to \nThe Deptartment of Physics, \
    \nKharasrota Mahavidyalaya, \nSinghpur, Jajpur\n");
    printf("\tThis is my First C program!!!\n");
    printf("1\t 2\t 3\t 4\t");
    printf("\aHello world\b");

    printf("\nEnter the value of num1 & num2  : ");
    scanf("%d %d",&num1,&num2); // INPUT: Store-in data to Variables' address.
    result=num1+num2;           // Some Calculation
    printf("\nAddition : %d\n",result);

    return 0;  // Return statement.
}   // End of main function.
```

    Writing helloworld.c



```python
!gcc helloworld.c
!./a.out
```

    [H[2JHello World!!!
    
    Welcome to 
    The Deptartment of Physics,     
    Kharasrota Mahavidyalaya, 
    Singhpur, Jajpur
    	This is my First C program!!!
    1	 2	 3	 4	Hello world
    Enter the value of num1 & num2  : 2 4
    
    Addition : 6


## Basic Mathematics in C
Basic arithmetic operations like addition (+), subtraction (-), multiplication (*), and division (/) do not require any special header file inclusions. However, advanced mathematical functions such as `pow()` for power calculations and `log()` for logarithms are defined in the `math.h` header file and are part of the math libraries.

A library is a collection of standard functions made available for specific programming tasks. Compilers typically do not link all available libraries by default during compilation. This selective linking helps save memory and improve execution speed, as libraries are only included when explicitly required. When a specific library is needed, it must be explicitly linked during compilation. For example, math libraries are included using the compiler flag **-lm** with gcc, as in `gcc program_name.c -lm`. This process is known as *dynamic linking*. In contrast, *static linking* involves compiling all library files directly into the executable, resulting in a larger but self-sufficient program.

*   **Mathematical Libraries**: Some notable open-source or commercial libraries include:
    *   Gnu Scientific Library (GSL)
    *   BLAS (Basic Linear Algebra Subprograms)
    *   LAPACK (Linear Algebra PACKage, Fortran-based, providing stable, trusted, and fast linear algebra routines callable from C, used in popular packages like MATLAB and SciLab)
    *   NAG (Numerical Algorithms Group)
    *   Numerical Recipes
    *   Eigen (a template-based library for C++)


```python
%%writefile squared_triangular_number.c
/* The sum of the cubes of the first n natural numbers
* (1^3 + 2^3 +...+ n^3)  is known as a squared triangular number
* and can be calculated using the formula: [n(n+1)/2]^2
*/
#include<stdio.h>
#include<math.h>

int main()
{
  int n=15, sum=0;
 	for(int i=1;i<=n;i++) sum=sum+pow(i,3);
	printf("Squared Triangular Number for n=%d is %d\n",n,sum);
 }
```

    Writing squared_triangular_number.c



```python
!gcc squared_triangular_number.c -lm
!./a.out
```

    Squared Triangular Number for n=15 is 14400


## Operators
Operators: Operators are special symbols that are used to perform specific mathematical or logical manipulations or define the relationship between two variables. Operators in C follow a specific precedence.
Types Of Operator :   
* Arithematic Operator : `-,+,%,/,*` in low to high precedence.
* Increment/Decrement Operator :`++,--` ++m is m++ is m=m+1 is m+=1. ++m increases first then assigns whereas m++ assigns first then increases.
* Assignment Operator : `=` Assigns a value to a variable. Shorthand assignments: `a=a+1;` as `a+=1;`, `a=a/100;` as `a/=100;` etc.
* Logical Operator : `&&` AND, `||` OR, `!` NOT
* Relational Operator : Checks is `==` Equal, `!=` Not equal, `>` Greater, `<` Smaller, `>=`,`<=`
* Conditional/Ternory Operator: When the program is executed according to conditions, they are called Conditional Operator. `y=((x%2=0)?even=1:even=0)` If Condition is true ? Then value is X : Otherwise value is Y. Exp: `x=(a>b)?a:b;` x is greatest of a and b.
* Bitwise Operator : Bitwise AND: &, OR: |, XOR ^, Shift left <<, shift right >>, one's complement ~.
* Special Operator : Comma, Dot, sizeof, pointer(& and *).
  * Comma to link expressions together: val=(x=5, y=10, x+y); val is 15.
  * Dot to select Structure member: var.qual1
  * sizeof to find memory size of a variable. Used to know size of array by dividing total memory with data amount per type.


```python
%%writefile operators.c
# include<stdio.h>
int main()
{
  int n1,n2, nsum, nsub, nmult, nRemainder;
  float ndiv;
  n1=8;
  n2=3;
  nsum=n1+n2; nsub=n1-n2; nmult=n1*n2;
  ndiv= (float) n1/n2;
  /* The above typing is called casting of int to float, else
     it would be integer division and the result would be 2.000 */
  nRemainder=n1%n2; // Remainder of n1/n2
  printf("\nThe numbers taken are %d and %d",n1,n2);
  printf("\n%d + %d = %d \t%d - %d = %d \t%d x %d = %d \t%d / %d = %f \t%d  %d = %d",
n1,n2,nsum, n1,n2,nsub, n1,n2,nmult, n1,n2,ndiv, n1,n2,nRemainder);

/* As the compiler is free to evaluate the order of the argument of function,
multiple operations inside the argument must be avoided. The following operator
uses may result undefined behavior as the variable is modified multiple times.
SO AVOID THIS KIND OF OVERUSE! */
  printf("\nn1= %d,\tn1++= %d,\tn1--= %d,\t++n1= %d,\t--n1= %d,\tn1= %d",
  n1, n1++, n1--, ++n1, --n1, n1);
  printf("\nWe use separate functions for a well-defined output.");
  printf("\nn1= %d ", n1);
  printf("\nn1++ first prints then increases, So n1++=%d now n1=%d", n1++,n1);
  printf("\nn1-- first prints then decreases, So n1--=%d now n1=%d", n1--,n1);
  printf("\n++n1 first increase then print: %d", ++n1);
  printf("\n--n1 first decrease then print: %d", --n1);
  printf("\nFinally n1 = %d", n1);
  return 0;
}
```

    Writing operators.c



```python
!gcc operators.c
!./a.out
```

    
    The numbers taken are 8 and 3
    8 + 3 = 11 	8 - 3 = 5 	8 x 3 = 24 	8 / 3 = 2.666667 	8  3 = 2
    n1= 8,	n1++= 7,	n1--= 8,	++n1= 8,	--n1= 8,	n1= 8
    We use separate functions for a well-defined output.
    n1= 8 
    n1++ first prints then increases, So n1++=8 now n1=9
    n1-- first prints then decreases, So n1--=9 now n1=8
    ++n1 first increase then print: 9
    --n1 first decrease then print: 8
    Finally n1 = 8

## Control Flow Statement
Decision Making:
* Only If: Syntax `if(condition) { true_statements; }`
* If Else: Syntax ` if(condition) { true_statements;} else { false_statements; }`
* Nested if: When if is written inside if, it is called nested if. Syntax : `if (condition1) { if(condition2) { true_statements; } }`
* Nested if...else: When another if else statement is written inside an if else statement, it is called a nested if...else statement.
* **go to** statement is resource intensive fortran 77 language practice and is usually advised to be avoided.
* switch case: Just as we check multiple conditions using nested if else, we check multiple cases using switch case. Switch case statement is used to check equality in multiple cases of (*integers and characters only*) and in the choice given by the user. `break` is optional, without it all the cases will be checked
Syntax :
```C
switch(choice or expression)
  {
    case value-1 : block 1;break;
    case value-2 : block 2;break;
           :
           :
    case value-n : block n;break;
    default : invalid block;
  }
  ```


```python
%%writefile control.c
#include<stdio.h>
/* This program is to illustrate some conditional examples */
void main()
{
   int num;

  // INPUT
  printf("\nEnter the number:  ");
  scanf("%d",&num);

  // ONLY IF: Only check if the number is even?
  if (num%2 == 0) printf("Number %d is Even",num);
  // Single statement after condition doesn't require {}.
  printf("\nONLY IF EXAMPLE FINISHED");

  // IF ELSE Example: Check Even or Odd.
  if (num%2==0){
      printf("\nNumber %d is Even", num);
  }
  else {
      printf("\nNumber %d is Odd", num);
  }
  printf("\nIF ELSE EXAMPLE FINISHED");

  // NESTED IS EXAMPLE
  if (num<=30) printf("\nGRADE F for %d < 30", num);
  else if (num<=60) printf("\nGRADE C for %d < 60", num);
  else if (num<=80) printf("\nGRADE B for %d < 80", num);
  else if (num<=90) printf("\nGRADE A for %d < 90", num);
  else printf("\nGRADE A+ for %d > 90", num);

  // Example of Switch Case
  switch(num%2) {
    case 0: printf("\n%d is Even", num); break;
    case 1: printf("\n%d is Odd", num); break;
    default: printf("\nInvalid but Why!!!");
    }
  printf("\nSWITCH CASE EXAMPLE FINISHED");
}
```

    Writing control.c



```python
!gcc control.c
!./a.out
```

    
    Enter the number:  92
    Number 92 is Even
    ONLY IF EXAMPLE FINISHED
    Number 92 is Even
    IF ELSE EXAMPLE FINISHED
    GRADE A+ for 92 > 90
    92 is Even
    SWITCH CASE EXAMPLE FINISHED

## Loop:  
If in a program, a set of instructions has to be executed multiple times, a **loop** is used for that.

Types of Loop:
1. while loop/Pretested loop/Entry control loop :
2. for loop/Pretested loop/Entry control loop :
3. do while loop/Post tested loop/Exit control loop :
4. nested for loop

* Break: Execution of a loop in C can be broken using a **break** statement. It only exits a single loop (the innermost loop in case of nesting of loops).
* Continue:  It stops the present iteration from the **continue** statement and continues to the next iteration. The loop is not terminated.


```python
%%writefile loop.c
#include<stdio.h>
void main()
{
  int i, k, max=3;

  /* WHILE LOOP:
  Iterates the code until condition is false.
  Use: If the number of iterations is not known already.
  Syntax :
    initialization;
    while(condition) {
     statement;
     increment/decrement;
    }
  */
  i=0;
  while (i<=max) {
       printf("\nWhile loop %d <= %d",i, max);
       i=i+1;
  }

  /* FOR LOOP:
  Iterates the code until the counter condition is false.
  Use: If the number of iterations is known already.
  Syntax :
    for(counter_initialization;condition;counter_increment/decrement) {
       statement block;
    }
  */

  for (i=1; i<=max; i++) {
      printf("\nIn for loop at %d.",i);
  }
// for extensions . INSIDE 'FOR' GROUP OF SENTENCES CAN BE USED.
  for (i=1; i<max; printf("\nIn for1: %d",i++));
  // multiple counters in for by using comma operator.
  for (i=1, k=5; i<max;i++, k--)
       printf("\nIn for2: i=%d and k=%d",i,k);

  /* DO WHILE LOOP:
  It iterates the code until the condition is false.
  Condition is given after the code.
  So at least once code is executed and then the condition checked.
  Syntax :
    initialization;
    do {
     statement;
     increment/decrement;
    }while(condition);
  */
  i=1;
  printf("\nPrint %d to %d numbers.\t", i, max);
  do {
    printf("%d\t",i);
    i++;
  } while(i<=max);

 /* NESTED FOR LOOP:
 Syntax :
  for(initialization;condition;increment/decrement)
  {
    for(initialization;condition;increment/decrement)
    {
      statement block;
    }
  }
  */
  printf("\nPrint triangle using nested for loop : \n");
  for(i=1;i<=max;i++) {
    for(int j=1;j<=i;j++) { // Note counter can be initialized here!
      printf("%d ",j);
    }
   printf("\n");
  }

}
```

    Writing loop.c



```python
!gcc loop.c
!./a.out
```

    
    While loop 0 <= 3
    While loop 1 <= 3
    While loop 2 <= 3
    While loop 3 <= 3
    In for loop at 1.
    In for loop at 2.
    In for loop at 3.
    In for1: 1
    In for1: 2
    In for2: i=1 and k=5
    In for2: i=2 and k=4
    Print 1 to 3 numbers.	1	2	3	
    Print triangle using nested for loop : 
    1 
    1 2 
    1 2 3 



```python
%%writefile breakcontinue.c
/* Break and continue example:
* Write a program to find and write total n numbers divisible by 3.
*/
#include <stdio.h>
void main()
{
  int number=0,count=1, n=5;
  printf("The numbers are:\t");

  while (1) { // never ending loop.
    if (count>n) break; // exit from loop.
    number +=1;
    if (number%3!=0) continue; // Ignore not divisible number.
    printf("\t%d",number);
    count=count+1;
  }
}
```

    Writing breakcontinue.c



```python
!gcc breakcontinue.c
!./a.out
```

    The numbers are:		3	6	9	12	15

## Arrays
An array is a set of values of the same data type saved in linear manner to a single variable. Array has a contiguous memory location. Array is a derived data type.
* Arrays can be one dimensional two dimensional or multi-dimensional. Array declaration:
Syntax: `datatype array_name[size_of_arrays];`
`datatype array_name[size_of_rows][size_of_columns];`
For e.g. : `int a[10]; float b[5]`
* In C, array index starts from 0. `a[3]` array has elements `a[0], a[1] and a[2]`.
* Array Initialization: `int a[5]={2,4,34,3,4};` `int b[3][2]={{11,12},{21,22},{31,32}};` NOTE: This initialization can not take array size as an initialized variable as compiler wouldn't know the size to allocate. So, only `#define SIZE 3` COMPILER TIME CONSTANT WOULD WORK.



```python
%%writefile array.c
#define SIZE 3 // COMPILER-TIME CONSTANT Defined
#include<stdio.h>
void main(void)
{
  int i,j;

  int a1d1[SIZE];             // Only Declaration
  int a1d2[SIZE]={20, 22, 2}; // Declaration and Initialization

  a1d2[2]= 25;                // Array element assignment
  printf("Enter the %d array element : \n", SIZE);
  for(i=0;i<SIZE;i++) {       // Traversal of array
    scanf("%d",&a1d1[i]);
  }

  printf("[Array Index] \t[Initialized Array Element] \t[Given Elements]\
  \t[Square]\n");
  for(i=0;i<SIZE;i++) {
    printf("%d \t\t%d \t\t%d \t\t%d \n",i, a1d1[i], a1d2[i], a1d2[i]*a1d2[i]);
  }

  int row=2,col=2;
  int a2d[row][col];
  printf("\nTwo dimensional Identity matrix: \n");
  for(i=0;i<row;i++) {
    for(j=0;j<col;j++) {
      a2d[i][j]=0;
      if (i==j) a2d[i][j]=1;
    }
  }

  for (i=0;i<row;i++) {
    for(j=0;j<col;j++) {
      printf("%d ",a2d[i][j]);
     }
     printf("\n");
  }

  printf("Printing serially:\n");
  for (i=0;i<row;i++) {
    for(j=0;j<col;j++) {
      printf("arr[%d][%d]=%d \n",i,j,a2d[i][j]);
     }
  }
  }
```

    Writing array.c



```python
!gcc array.c
!./a.out
```

    Enter the 3 array element : 
    3 5 9
    [Array Index] 	[Initialized Array Element] 	[Given Elements]  	[Square]
    0 		3 		20 		400 
    1 		5 		22 		484 
    2 		9 		25 		625 
    
    Two dimensional Identity matrix: 
    1 0 
    0 1 
    Printing serially:
    arr[0][0]=1 
    arr[0][1]=0 
    arr[1][0]=0 
    arr[1][1]=1 


## String
In C, **string** is an array of characters terminated by `\0'(NULL Character). Its like a word or sentence in plain english. It is the covenient alternative of array of chracters as there exist many string functions for easy handling.
* String is always declared in double quotation marks.
* String is a one-dimensional character array and is always terminated automatically by a NULL character '\0'.  
* String can be accepted without using a loop by using format specifier %s.
* Syntax : `datatype stringname[size_of_string];` Exp: `char vowel[6];`
* Initialization of String Variable : `char vowel[6]="aeiou";`,`char vowel[6]={'a','e','i','o','u','\0'}`.
* Size is not mandatory to be declared for the Declaration of string(NULL is added by the compiler): `char vowel[]="aeiou"`.
* Read the String: `scanf("%s",city);` No need of (&) address of operator for string.
* C library provides ready made string functions in a header file called string.h.
* NOTE: STRING DECLARED BY *CHARACTER ARRAY* CAN BE MODIFIED BUT *STRING LITERAL* CAN NOT BE CHANGED.


```python
%%writefile char.c
#include<stdio.h>
void main(void)
{
  char name;
  printf("Enter one character : ");
  name=getchar();
  printf("You entered the character %c\n",name);
  putchar(name);

  char Name[10];
  printf("\nEnter a Name: ");
  scanf("%s",Name);

  for (int i = 0; i<2; i++)
     printf("%d] Name is %s\n",i, Name);
}
```

    Writing char.c



```python
!gcc char.c
!./a.out
```

    Enter one character : T
    You entered the character T
    T
    Enter a Name: Test
    0] Name is Test
    1] Name is Test



```python
%%writefile string.c
#include<stdio.h>
#include<string.h>

void main(void)
{
  char vowel1[6]={'a','e','i','o','u','\0'};
  char vowel2[6]="aeiou";
  char vowel3[100];
  char * str;
  int len;

  printf("Enter a string: \n");
  scanf("%s", vowel3);

  printf("\nCharacter array");
  printf("\nReading in the string by scanf: Enter the string:\n");
  scanf("%s",vowel3);
  printf("\nThe String entered: %s \n",vowel3);

  printf("\nReading in the string by gets: Enter the string:\n");
  // gets(vowel3); Being very insecure, gets is deprecated in C.
  fgets(vowel3, sizeof(vowel3), stdin);
  puts(vowel3);

  printf("\nString operations by string.h functions.\n");
  len=strlen(vowel2); //Count and return the length of a given string.
  printf("String Length of %s: %d\n",vowel2, len);
// Finding length of a string directly.
  for(len = 0; vowel2[len] != '\0'; ++len);
  printf("\nLength(by loop) of the given string: %d\n", len);

  strcpy(vowel3, vowel1); // Copies string strcpy(target,source);
  printf("Copied String to vowel3: %s\n",vowel3);

  strcat(vowel3,vowel1); //String Concatenation/Joining: strcat(target,source);
  printf("Concate String : %s\n",vowel3);

  if (strcmp(vowel1,vowel2)==0) // compare two strings
     printf("Both Strings are equal");
  else if(strcmp(vowel1,vowel2)>0)
     printf("1st string is greatest");
  else
     printf("2nd string is greatest");

  //strrev(), strupr() and strlwr() are non standard in place functions.
}
```

    Overwriting string.c



```python
!gcc string.c
!./a.out
```

    Enter a string: 
    ABC
    
    Character array
    Reading in the string by scanf: Enter the string:
    ABCDEF
    
    The String entered: ABCDEF 
    
    Reading in the string by gets: Enter the string:
    
    
    
    String operations by string.h functions.
    String Length of aeiou: 5
    
    Length(by loop) of the given string: 5
    Copied String to vowel3: aeiou
    Concate String : aeiouaeiou
    Both Strings are equal


```python
%%writefile stringreverse.c
#include <stdio.h>
#include <string.h>

int main()
{
   char s[100], r[100];
   int i, j, c= 0;

   printf("Input a string\n");
   scanf("%s",s);

   while (s[c] != '\0') c++;  // Calculating string length
   j = c- 1;
   for (i = 0; i<c; i++) {
      r[i] = s[j];
      j--;
   }
   r[i] = '\0';

   printf("%s\n", r);
   return 0;
}
```

    Overwriting stringreverse.c



```python
!gcc stringreverse.c
!./a.out
```

    Input a string
    Test the string.
    tseT


## Structure
In C, users can define their own datatypes using the `structure` keyword, called the derived data type, with custom behaviour that can hold different type of elements. Each element of a structure is called a *member*. Declaraction Syntax :
```C
     struct structure_name
      {
           data_type1 member1;
           data_type2 member 2;
           data_type3 member3;
      }objectname;
```
There are two ways to access structure member:
1. By . (member or dot operator)
2. By-> (structure point operator for referenced data)

##### Advanced:
* Structure variables can be passed as an argument in a function.
* A structure can also be defined inside another structure, if needed.
* **Union** is another derived data type with memory optimization. Its form is exactly equivalent to that of a structure. But, it doesn't occupy the sum of all members' sizes. It reserves the memory of the largest member only. That memory block is shared by all the members of the union one at a time and other at other time. It can store data in one member only. Syntax:
```
union union_name
{
data_type member1;
data_type member2;
data_type memeberN;
};
```


```python
%%writefile structure1.c
/* This program demonstrates Structure concept in C.
* Data encapsulation.
* A structure data type is defined with specific properties.
* More properties can not be added latter.
*/
#include<stdio.h>
#include<string.h>

struct book // Structure Declaration, keyword=struct, tag name=book
{
   char title[20]; // members
   int pages;
   float price;
} b1,b2;
// Fixed number of Structure Variables defined with struct Definition.
// If variables are not known already, only struct can be defined here
// and variables are defined latter.

void main()
{
    printf("Enter the book title,pages,price : ");
// To access Structure Variables, we use dot(.) operator.
// Data type of the structure variable is as declared in the structure.
    scanf("%s %d %f", b1.title, &b1.pages, &b1.price);
    printf("Title : %s\n",b1.title);
    printf("Pages : %d\n",b1.pages);
    printf("Price : %f\n",b1.price);

    //printf(b1); is meaningless.
    b2=b1; // Copy b1 to b2 Allowed
    b2.price=200; // Change the price of b2
    printf("Title : %s\n",b2.title);
    printf("Pages : %d\n",b2.pages);
    printf("Price : %f\n",b2.price);

// Arrays of structure: can be defined like any other data type.
// Arrays are always stored in contiguous memory locations.OPTIMIZATION
struct book b[2]; //DEclaration of struct variables inside function.
for(int i=0;i<2;i++)
  {
    printf("Enter the book title,pages,price for BOOK %d: ",i+1);
    scanf("%s %d %f",b[i].title,&b[i].pages,&b[i].price);
  }
for(int i=0;i<2;i++)
   printf("Title: %s\t Pages: %d\t Price: %f\n",b[i].title, b[i].pages, b[i].price);
}
```

    Writing structure1.c



```python
!gcc structure1.c
!./a.out
```

    Enter the book title,pages,price : T1 12 1.5
    Title : T1
    Pages : 12
    Price : 1.500000
    Title : T1
    Pages : 12
    Price : 200.000000
    Enter the book title,pages,price for BOOK 1: T1 15 1.9
    Enter the book title,pages,price for BOOK 2: T2 25 2.9
    Title: T1	 Pages: 15	 Price: 1.900000
    Title: T2	 Pages: 25	 Price: 2.900000



```python

%%writefile union.c
#include <stdio.h>
#include <string.h>
union employee {
int id;
char name[50];
}el;   //declaring el variable for union
int main()
{
//store first employee information
el.id=50;
//printing employee information
printf("Id is assigned, not name:\n");
printf("Employee id : %d\n", el.id);
printf("Employee name(should be garbage) : %s\n", el.name);

printf("Name is asigned to enum now.\n");
strcpy(el.name, "Physics CBCS"); //copying string into char array
//printing employee information
printf("Employee id(should be garbage) : %d\n", el.id);
printf("Employee name : %s\n", el.name);
printf("\nThe enum el contains only one member at a time.\n");
return 0;
}
```

    Writing union.c



```python
!gcc union.c
!./a.out
```

    Id is assigned, not name:
    Employee id : 50
    Employee name(should be garbage) : 2
    Name is asigned to enum now.
    Employee id(should be garbage) : 1937336400
    Employee name : Physics CBCS
    
    The enum el contains only one member at a time.


## Functions
Like pre-existing functions, a particular type of tasks can be combined in a *user-defined function* in C. A function is a self contained block of code to perform a specific task. It provides modularity, code reusability and code optimization.
* Function Declaration : `returntype  functionname(argumentlist);`
* Function Calling : `funtion_name(argumentlist);`
* Function Defination :
```return_type  function_name(argumentlist with datatypes)
              {
                Function definition;
              }
```
* If nothing is returned or passed, `void` must be mentioned.
* NOTE: C-compiler reads till main() function in the program. If user-defined function is defined before main(), compiler considers that. If it is defined after the main function, *user-defined function declaration* must be done before the main() to let the compiler know to search the function details latter in the file.
* Above discussion shows function calling by value. C also allows function calling by reference to memory. This is discussed in advanced memory management in C by pointers. In this case function is called by address of argument(&arg) and defined by pointer of the argument(*arg).
* **Recursive Function**: A special ability function that calls itself repeatedly within its own definition.


```python
%%writefile func_by_value.c
/* Function call by value. Argument value is passed to the function.
* Original Passing variable value is not modified.
* Inside called function, local variable changes in current function only.
* You may assign same variable inside called function as in calling function.
* But FOR THE COMPILER THEY ARE TWO DIFFERENT VARIABLES WITH DIFFERENT SCOPES.
*/
#include <stdio.h>

// Before main() declared function.
void func_before(int x, int y1) {
  printf("\nIn func_before:x=%d, y1=%d",x,y1);
  x=x/2; y1=y1/2;
  printf("\nIn func_before Now halved:x=%d, y1=%d",x,y1);
}

// function declaration needed for after function:
void func_after(int, int);

int main()
{
  int x=100, y=200;

  printf("\nInside main Function before func_before call: x=%d, y=%d",x,y);
  func_before(x,y); //Function defined before main () does not need declaration!
  printf("\nInside main Function after func_before call: x=%d, y=%d",x,y);
  printf("\nNothing changed in main(). Now exactly same function again\n");

  printf("\nInside main Function before func_after call: x=%d, y=%d",x,y);
  func_after(x,y); //Function defined before main () does not need declaration!
  printf("\nInside main Function after func_after call: x=%d, y=%d",x,y);
}

// After main() declared function.
void func_after(int x, int y1) {
  printf("\nIn func_after:x=%d, y1=%d",x,y1);
  x=x/2; y1=y1/2;
  printf("\nIn func_after, Now halved:x=%d, y1=%d",x,y1);
}
```

    Overwriting func_by_value.c



```python
!gcc func_by_value.c
!./a.out
```

    
    Inside main Function before func_before call: x=100, y=200
    In func_before:x=100, y1=200
    In func_before Now halved:x=50, y1=100
    Inside main Function after func_before call: x=100, y=200
    Nothing changed in main(). Now exactly same function again
    
    Inside main Function before func_after call: x=100, y=200
    In func_after:x=100, y1=200
    In func_after, Now halved:x=50, y1=100
    Inside main Function after func_after call: x=100, y=200


```python
%%writefile func_by_reference.c
/* Function call by reference.
* Argument address, instead of value, is passed to the function.
* Both in the calling and called function value is changed as
* they share share the same memory location.
* Example is given here for completeness shake. Refer to advance topic of
* DYNAMIC MEMORY AND POINTERS IN C for detailed understanding.
*/
#include <stdio.h>

void func(int * x, int y) {
  printf("\nIn func: x=%d, y=%d",*x,y);
  *x = *x/2; y=y/2;
  printf("\nIn func: Now halved:x=%d, y=%d",*x,y);
}

int main()
{
  int x=100, y=200;

  printf("\nInside main Function before func call: x=%d, y=%d",x,y);
  func(&x,y); // Pointer variable address is passed.
  printf("\nInside main Function after func call: x=%d, y=%d",x,y);
  printf("\nx has changed, NOT y!!!\n");
}
```

    Overwriting func_by_reference.c



```python
!gcc func_by_reference.c
!./a.out
```

    
    Inside main Function before func call: x=100, y=200
    In func: x=100, y=200
    In func: Now halved:x=50, y=100
    Inside main Function after func call: x=50, y=200
    x has changed, NOT y!!!



```python
%%writefile funcexp1.c
#include<stdio.h>

//Function Declarations:
void table(int); // Returns nothing, takes one integer argument.
int square(int); // Returns integer, takes one integer argument.


int i,j,k;
void main()
{
   int ch=3;
   printf("\nCalling the square function for 3: ");
   k=square(ch);
   printf("\nSquare of %d is %d.",ch, k);

   printf("\nCalling the table function:\n ");
   table(ch);
   printf("\nControl is now returned to main function. Thank you.");
}

void table(int a) // Function Definition
{
  printf("\nIn table() function: Table of %d:\n",a);
  for (int i=1;i<=10;i++)
    printf("%d x %d = %d\n",a,i,a*i);
  // No return statement needed as void function.
}

int square(int a)
{
    return a*a;
}
```

    Overwriting funcexp1.c



```python
!gcc funcexp1.c
!./a.out
```

    
    Calling the square function for 3: 
    Square of 3 is 9.
    Calling the table function:
     
    In table() function: Table of 3:
    3 x 1 = 3
    3 x 2 = 6
    3 x 3 = 9
    3 x 4 = 12
    3 x 5 = 15
    3 x 6 = 18
    3 x 7 = 21
    3 x 8 = 24
    3 x 9 = 27
    3 x 10 = 30
    
    Control is now returned to main function. Thank you.


```python
%%writefile funcrecursive.c
/* A very classic program to calculate the factorial of
* given number using recursive function. */
#include <stdio.h>

// Defining a function before main() doesn't need function declaration.
long int factorial(long int i) { // 'long' is a larger integer data type.
   if (i <= 1) return 1;
   return i * factorial(i - 1);
}
/* NOTE: The clever compiler generates factorial by multiplying the
previous numbers upto 1 and then stops there. */

void main()
{
    long int i;
    printf("Enter the number : ");
    scanf("%ld",&i);
    printf("Factorial of %ld is %ld", i, factorial(i));
}
```

    Writing funcrecursive.c



```python
!gcc funcrecursive.c
!./a.out
```

    Enter the number : 23
    Factorial of 23 is 8128291617894825984

## Programming Archietecture
* The executable can be executed several times. Sometimes we may provide the option to repeat execution untill the user opts for it. This is usually done using while loop.
* exit(0) provided by stdlib.h is used in this case to stop the execution. If user opts anything outside the selected option, the program stops executing.


```python
%%writefile menuprog.c
#include<stdio.h>
#include<stdlib.h>

void add1();
void add2(int,int);
int add3();
int add4(int,int);
int a,b,c;
void main()
{
  int ch;
  while(1)
  {
    printf("\t\t\tMenu Driven\n");
    printf("1 : No Pass No Return\n");
    printf("2 : Pass But No Return\n");
    printf("3 : No Pass But Return\n");
    printf("4 : Pass & Return\n");
    printf("Default : Exit\n");
    printf("Enter your choice : ");
    scanf("%d",&ch);
    switch(ch)
      {
      case 1 : add1();break;
      case 2 :  printf("Enter the two numbers : ");
                scanf("%d %d",&a,&b);
                add2(a,b);break;
      case 3 : c=add3();
               printf("Addition3 : %d\n",c);break;
      case 4 : printf("Enter the two numbers : ");
               scanf("%d%d",&a,&b);
               c=add4(a,b);
               printf("Addition3 : %d\n",c);break;
      default : printf("Exit\n"); exit(0);
      }
  }

}

void add1()
{
  printf("Enter the two numbers : ");
  scanf("%d%d",&a,&b);
  c=a+b;
  printf("Addition1 : %d\n",c);
}
void add2(int a,int b)
{
  c=a+b;
  printf("Addition2 : %d\n",c);
}
int add3()
{
  printf("Enter the two numbers : ");
  scanf("%d%d",&a,&b);
  c=a+b;
  return c;
}
int add4(int a,int b)
{
  c=a+b;
  return c;
}
```

    Writing menuprog.c



```python
!gcc menuprog.c
!./a.out
```


```python
%%writefile menuprog2.c
/* An interactive program to find investment ineterests for a period*/
#include<stdio.h>
void main()
{
  int year, period;
  float amount,interest_rate, value;
  printf("Input amount, interest rate and period :\n ");
  scanf("%f%f%d",&amount,&interest_rate,&period);
  printf("\n"); year=1;
  while (year!=period)
  {
    value=amount+(amount*interest_rate*0.01);
    printf("%d\t%f\n",year,value);
    amount=value;
    year++;
  }
}
```

    Writing menuprog2.c



```python
!gcc menuprog2.c
!./a.out
```

    Input amount, interest rate and period :
     2 3 1
    



```python
%%writefile testfortran.f90
program testfortran
print*,"Hello World!!!"
do i=1,10,2
print*,"Yes...",i
enddo
end program
```

    Writing testfortran.f90



```python
!gfortran testfortran.f90
!./a.out
```

     Hello World!!!
     Yes...           1
     Yes...           3
     Yes...           5
     Yes...           7
     Yes...           9

