* Part I. Getting Started
    -  How You Run Programs
* Part II. Types and Operations
    - Introducing Python Object Types
    - Numbers
    - The Dynamic Typing Interlude
    - Strings
    - Lists and Dictionaries
    - Tuples, Files, and Everything Else
* Part III. Statements and Syntax
    - Introducing Python Statements
    - Assignment, Expressions, and print
    - if Tests
    - while and for Loops
    - The Documentation Interlude
* Part IV. Functions
    - Function Basics
    - Scopes and Arguments
    - Advanced Function Topics
* Part V. Modules
    - Modules: The Big Picture
    - Module Coding Basics
    - Module Packages
    - Advanced Module Topics
* Part VI. Classes and OOP
    - OOP: The Big Picture
    - Class Coding Basics
    - Class Coding Details
    - Designing with Classes
    - Advanced Class Topics
* Part VII. Exceptions and Tools
    - Exception Basics
    - Exception Objects
    - Designing with Exceptions

#Part II. Types and Operations

##Chapter 4: Introducing Python Object Types

Why Use Built-in Types?

###Numbers

```python
 123 + 222
```

```python
 1.5 * 4
```

```python
 2 ** 100
```

```python
 3.1415 * 2
```

```python
 print 3.1415 * 2
```

```python
 import math
```

```python
 math.pi
```

```python
 math.sqrt(85)
```

```python
 import random
```

```python
 random.random( )
```

```python
 random.choice([1, 2, 3, 4])
```

###Strings

####Sequence Operations

```python
 S = 'Spam'
```

```python
 len(S)
```

```python
 S[0]
```

```python
 S[1]
```

```python
 S[-1]
```

```python
 S[-2]
```

```python
 S[-1]
```

```python
 S[len(S)-1]
```

```python
 S
```

```python
 S[1:3]
```

```python
 S[1:]
```

```python
 S
```

```python
 S[0:3]
```

```python
 S[:3]
```

```python
 S[:-1]
```

```python
 S[:]
```

```python
 S
```

```python
 S + 'xyz'
```

```python
 S
```

```python
 S * 8
```

####Immutability

```python
 S
```

```python
 S[0] = 'z'
```

```python
 S = 'z' + S[1:]
```

```python
 S
```

####Type-Speciﬁc Methods

```python
 S.find('pa')
```

```python
 S
```

```python
 S.replace('pa', 'XYZ')
```

```python
 S
```

```python
 line = 'aaa,bbb,ccccc,dd'
```

```python
 line.split(',')
```

72

##Chapter 4:
Introducing Python Object Types
```python
 S = 'spam'
```

```python
 S.upper( )
```

```python
 S.isalpha( )
```

```python
 line = 'aaa,bbb,ccccc,dd\n'
```

```python
 line = line.rstrip( )
```

```python
 line
```

Getting Help
```python
 dir(S)
```

Strings

73
```python
 help(S.index)
```

Other Ways to Code Strings
```python
 S = 'A\nB\tC'
```

```python
 len(S)
```

```python
 ord('\n')
```

```python
 S = 'A\0B\0C'
```

```python
 len(S)
```

```python
 msg = &quot;&quot;&quot;
```

74

##Chapter 4:
Introducing Python Object Types
```python
 msg
```

Pattern Matching
```python
 import re
```

```python
 match = re.match('Hello[ \t]*(.*)world', 'Hello    Python world')
```

```python
 match.group(1)
```

```python
 match = re.match('/(.*)/(.*)/(.*)', '/usr/home/lumberjack')
```

```python
 match.groups( )
```

Lists
Lists

75
Sequence Operations
```python
 L = [123, 'spam', 1.23]
```

```python
 len(L)
```

```python
 L[0]
```

```python
 L[:-1]
```

```python
 L + [4, 5, 6]
```

```python
 L
```

Type-Speciﬁc Operations
```python
 L.append('NI')
```

```python
 L
```

```python
 L.pop(2)
```

```python
 L
```

```python
 M = ['bb', 'aa', 'cc']
```

```python
 M.sort( )
```

```python
 M
```

76

##Chapter 4:
Introducing Python Object Types
```python
 M.reverse( )
```

```python
 M
```

Bounds Checking
```python
 L
```

```python
 L[99]
```

```python
 L[99] = 1
```

Nesting
```python
 M = [[1, 2, 3],
```

```python
 M
```

```python
 M[1]
```

```python
 M[1][2]
```

Lists

77
List Comprehensions
```python
 col2 = [row[1] for row in M]
```

```python
 col2
```

```python
 M
```

```python
 [row[1] + 1 for row in M]
```

```python
 [row[1] for row in M if row[1] % 2 == 0]
```

78

##Chapter 4:
Introducing Python Object Types
```python
 diag = [M[i][i] for i in [0, 1, 2]]
```

```python
 diag
```

```python
 doubles = [c * 2 for c in 'spam']
```

```python
 doubles
```

Dictionaries
Mapping Operations
```python
 D = {'food': 'Spam', 'quantity': 4, 'color': 'pink'}
```

```python
 D['food']
```

```python
 D['quantity'] += 1
```

```python
 D
```

Dictionaries

79
```python
 D = {}
```

```python
 D['name'] = 'Bob'
```

```python
 D['job']  = 'dev'
```

```python
 D['age']  = 40
```

```python
 D
```

```python
 print D['name']
```

Nesting Revisited
```python
 rec = {'name': {'first': 'Bob', 'last': 'Smith'},
```

```python
 rec['name']
```

```python
 rec['name']['last']
```

```python
 rec['job']
```

80

##Chapter 4:
Introducing Python Object Types
```python
 rec['job'][-1]
```

```python
 rec['job'].append('janitor')
```

```python
 rec
```

```python
 rec = 0
```

Sorting Keys: for Loops
Dictionaries

81
```python
 D = {'a': 1, 'b': 2, 'c': 3}
```

```python
 D
```

```python
 Ks = D.keys( )
```

```python
 Ks
```

```python
 Ks.sort( )
```

```python
 Ks
```

```python
 for key in Ks:
```

```python
 D
```

```python
 for key in sorted(D):
```

82

##Chapter 4:
Introducing Python Object Types
```python
 for c in 'spam':
```

Iteration and Optimization
```python
 squares = [x ** 2 for x in [1, 2, 3, 4, 5]]
```

```python
 squares
```

```python
 squares = []
```

```python
 for x in [1, 2, 3, 4, 5]:
```

```python
 squares
```

Dictionaries

83
Missing Keys: if Tests
```python
 D
```

```python
 D['e'] = 99
```

```python
 D
```

```python
 D['f']
```

```python
 D.has_key('f')
```

```python
 if not D.has_key('f'):
```

84

##Chapter 4:
Introducing Python Object Types
Tuples
```python
 T = (1, 2, 3, 4)
```

```python
 len(T)
```

```python
 T[0]
```

```python
 T[0] = 2
```

Why Tuples?
Files
```python
 f = open('data.txt', 'w')
```

```python
 f.write('Hello\n')
```

```python
 f.write('world\n')
```

```python
 f.close( )
```

Files

85
```python
 f = open('data.txt')
```

```python
 bytes = f.read( )
```

```python
 bytes
```

```python
 print bytes
```

```python
 bytes.split( )
```

```python
 dir(file)
```

```python
 help(file.seek)
```

Other File-Like Tools
86

##Chapter 4:
Introducing Python Object Types
Other Core Types
```python
 X = set('spam')
```

```python
 Y = set(['h', 'a', 'm'])
```

```python
 X, Y
```

```python
 X &amp; Y
```

```python
 X  Y
```

```python
 X – Y
```

```python
 import decimal
```

```python
 d = decimal.Decimal('3.141')
```

```python
 d + 1
```

```python
 1 &gt; 2, 1 &lt; 2
```

```python
 bool('spam')
```

```python
 X = None
```

```python
 print X
```

```python
 L = [None] * 100
```

```python
 L
```

```python
 type(L)
```

```python
 type(type(L))
```

Other Core Types

87
How to Break Your Code’s Flexibility
```python
 if type(L) == type([]):
```

```python
 if type(L) == list:
```

```python
 if isinstance(L, list):
```

User-Deﬁned Classes
```python
 class Worker:
```

88

##Chapter 4:
Introducing Python Object Types
```python
 bob = Worker('Bob Smith', 50000)
```

```python
 sue = Worker('Sue Jones', 60000)
```

```python
 bob.lastName( )
```

```python
 sue.lastName( )
```

```python
 sue.giveRaise(.10)
```

```python
 sue.pay
```

And Everything Else
Other Core Types

89
##Chapter Summary
90

##Chapter 4:
Introducing Python Object Types
##Chapter Quiz
Quiz Answers
##Chapter Quiz

91
92

##Chapter 4:
Introducing Python Object Types
CHAPTER 5
Numbers5
Python Numeric Types
93
Numeric Literals
Literal
Interpretation
94

##Chapter 5: Numbers
Built-in Numeric Tools and Extensions
Python Numeric Types

95
Python Expression Operators
Operators
Description
96

##Chapter 5: Numbers
Mixed Operators Follow Operator Precedence
Parentheses Group Subexpressions
Mixed Types Are Converted Up
Python Expression Operators

97
```python
 int(3.1415)
```

```python
 float(3)
```

```python
 long(4)
```

Preview: Operator Overloading
98

##Chapter 5: Numbers
Numbers in Action
Variables and Basic Expressions
```python
 a = 3
```

```python
 b = 4
```

```python
 a + 1, a - 1
```

```python
 b * 3, b / 2
```

```python
 a % 2, b ** 2
```

Numbers in Action

99
```python
 2 + 4.0, 2.0 ** b
```

```python
 c * 2
```

```python
 b / 2 + a
```

```python
 print b / (2.0 + a)
```

Numeric Display Formats
100

##Chapter 5: Numbers
```python
 b / (2.0 + a)
```

```python
 print b / (2.0 + a)
```

```python
 1 / 2.0
```

```python
 num = 1 / 3.0
```

```python
 num
```

```python
 print num
```

```python
 &quot;%e&quot; % num
```

```python
 &quot;%2.2f&quot; % num
```

str and repr Display Formats
```python
 repr(num)
```

```python
 str(num)
```

Numbers in Action

101
Division: Classic, Floor, and True
```python
 (5 / 2), (5 / 2.0), (5 / -2.0), (5 / -2)
```

```python
 (5 // 2), (5 // 2.0), (5 // -2.0), (5 // -2)
```

```python
 (9 / 3), (9.0 / 3), (9 // 3), (9 // 3.0)
```

```python
 from _ _future_ _ import division
```

```python
 (5 / 2), (5 / 2.0), (5 / -2.0), (5 / -2)
```

```python
 (5 // 2), (5 // 2.0), (5 // -2.0), (5 // -2)
```

102

##Chapter 5: Numbers
```python
 (9 / 3), (9.0 / 3), (9 // 3), (9 // 3.0)
```

Bitwise Operations
```python
 x = 1
```

```python
 x &lt;&lt; 2
```

```python
 x  2
```

```python
 x &amp; 1
```

Long Integers
```python
 9999999999999999999999999999999999999L + 1
```

Numbers in Action

103
```python
 9999999999999999999999999999999999999 + 1
```

```python
 2L ** 200
```

```python

```

```python
 2 ** 200
```

Complex Numbers
```python
 1j * 1J
```

```python
 2 + 1j * 3
```

```python
 (2 + 1j) * 3
```

104

##Chapter 5: Numbers
Hexadecimal and Octal Notation
```python
 01, 010, 0100
```

```python
 0x01, 0x10, 0xFF
```

```python
 oct(64), hex(64), hex(255)
```

```python
 int('0100'), int('0100', 8), int('0x40', 16)
```

```python
 eval('100'), eval('0100'), eval('0x40')
```

```python
 &quot;%o %x %X&quot; % (64, 64, 255)
```

Numbers in Action

105
Other Built-in Numeric Tools
```python
 import math
```

```python
 math.pi, math.e
```

```python
 math.sin(2 * math.pi / 180)
```

```python
 math.sqrt(144), math.sqrt(2)
```

```python
 abs(-42), 2**4, pow(2, 4)
```

```python
 int(2.567), round(2.567), round(2.567, 2)
```

```python
 import random
```

```python
 random.random( )
```

```python
 random.random( )
```

```python
 random.randint(1, 10)
```

```python
 random.randint(1, 10)
```

```python
 random.choice(['Life of Brian', 'Holy Grail', 'Meaning of Life'])
```

```python
 random.choice(['Life of Brian', 'Holy Grail', 'Meaning of Life'])
```

106

##Chapter 5: Numbers
Other Numeric Types
Decimal Numbers
```python
 0.1 + 0.1 + 0.1 - 0.3
```

 ```python
 print 0.1 + 0.1 + 0.1 - 0.3
```

```python
 from decimal import Decimal
```

```python
 Decimal('0.1') + Decimal('0.1') + Decimal('0.1') - Decimal('0.3')
```

Other Numeric Types

107
```python
 Decimal('0.1') + Decimal('0.10') + Decimal('0.10') - Decimal('0.30')
```

```python
 decimal.Decimal(1) / decimal.Decimal(7)
```

```python
 decimal.getcontext( ).prec = 4
```

```python
 decimal.Decimal(1) / decimal.Decimal(7)
```

Sets
```python
 x = set('abcde')
```

```python
 y = set('bdxyz')
```

```python
 x
```

```python
 'e' in x
```

```python
 x – y
```

```python
 x  y
```

```python
 x &amp; y
```

108

##Chapter 5: Numbers
```python
 engineers = set(['bob', 'sue', 'ann', 'vic'])
```

```python
 managers  = set(['tom', 'sue'])
```

```python

```

```python
 engineers &amp; managers
```

```python

```

```python
 engineers  managers
```

```python

```

```python
 engineers – managers
```

Booleans
Other Numeric Types

109
Third-#Party Extensions
##Chapter Summary
110

##Chapter 5: Numbers
##Chapter Quiz
Quiz Answers
##Chapter Quiz

111
CHAPTER 6
The Dynamic Typing Interlude
6
The Case of the Missing Declaration Statements
Variables, Objects, and References
112
```python
 a = 3
```

The Case of the Missing Declaration Statements

113
Types Live with Objects, Not Variables
```python
 a = 3
```

```python
 a = 'spam'
```

```python
 a = 1.23
```

114

##Chapter 6: The Dynamic Typing Interlude
Objects Are Garbage-Collected
```python
 a = 3
```

```python
 a = 'spam'
```

```python
 x = 42
```

```python
 x = 'shrubbery'
```

```python
 x = 3.1415
```

```python
 x = [1,2,3]
```

The Case of the Missing Declaration Statements

115
Shared References
```python
 a = 3
```

```python
 b = a
```

```python
 a = 3
```

```python
 b = a
```

```python
 a = 'spam'
```

116

##Chapter 6: The Dynamic Typing Interlude
```python
 a = 3
```

```python
 b = a
```

```python
 a = a + 2
```

Shared References

117
Shared References and In-Place Changes
```python
 L1 = [2, 3, 4]
```

```python
 L2 = L1
```

```python
 L1 = 24
```

```python
 L1 = [2, 3, 4]
```

```python
 L2 = L1
```

```python
 L1[0] = 24
```

```python
 L1
```

```python
 L2
```

118

##Chapter 6: The Dynamic Typing Interlude
```python
 L1 = [2, 3, 4]
```

```python
 L2 = L1[:]
```

```python
 L1[0] = 24
```

```python
 L1
```

```python
 L2
```

Shared References and Equality
```python
 x = 42
```

```python
 x = 'shrubbery'
```

Shared References

119
```python
 L = [1, 2, 3]
```

```python
 M = L
```

```python
 L == M
```

```python
 L is M
```

```python
 L = [1, 2, 3]
```

```python
 M = [1, 2, 3]
```

```python
 L == M
```

```python
 L is M
```

```python
 X = 42
```

```python
 Y = 42
```

```python
 X == Y
```

```python
 X is Y
```

120

##Chapter 6: The Dynamic Typing Interlude
```python
 import sys
```

```python
 sys.getrefcount(1)
```

Dynamic Typing Is Everywhere
##Chapter Summary
##Chapter Summary

121
##Chapter Quiz
Quiz Answers
122

##Chapter 6: The Dynamic Typing Interlude
CHAPTER 7
Strings7
123
Operation
Interpretation
String Literals
124

##Chapter 7: Strings
Single- and Double-Quoted Strings Are the Same
```python
 'shrubbery', &quot;shrubbery&quot;
```

```python
 'knight&quot;s', &quot;knight's&quot;
```

```python
 title = &quot;Meaning &quot; 'of' &quot; Life&quot;
```

```python
 title
```

```python
 'knight\'s', &quot;knight\&quot;s&quot;
```

Escape Sequences Represent Special Bytes
```python
 s = 'a\nb\tc'
```

String Literals

125
```python
 s
```

```python
 print s
```

```python
 len(s)
```

Escape
Meaning
126

##Chapter 7: Strings
```python
 s = 'a\0b\0c'
```

```python
 s
```

```python
 len(s)
```

```python
 s = '\001\002\x03'
```

```python
 s
```

```python
 len(s)
```

```python
 x = &quot;C:\py\code&quot;
```

```python
 x
```

```python
 len(x)
```

Raw Strings Suppress Escapes
String Literals

127
```python
 path = r'C:\new\text.dat'
```

```python
 path
```

```python
 print path
```

```python
 len(path)
```

128

##Chapter 7: Strings
Triple Quotes Code Multiline Block Strings
```python
 mantra = &quot;&quot;&quot;Always look
```

```python

```

```python
 mantra
```

String Literals

129
Unicode Strings Encode Larger Character Sets
```python
 u'spam'
```

```python
 'ni' + u'spam'
```

```python
 str(u'spam')
```

```python
 unicode('spam')
```

130

##Chapter 7: Strings
```python
 u'ab\x20cd'
```

```python
 u'ab\u0020cd'
```

```python
 u'ab\U00000020cd'
```

String Literals

131
Strings in Action
Basic Operations
```python
 len('abc')
```

```python
 'abc' + 'def'
```

```python
 'Ni!' * 4
```

```python
 print '------- ...more... ---'
```

```python
 print '-'*80
```

132

##Chapter 7: Strings
```python
 myjob = &quot;hacker&quot;
```

```python
 for c in myjob: print c,
```

```python
 &quot;k&quot; in myjob
```

```python
 &quot;z&quot; in myjob
```

Indexing and Slicing
```python
 S = 'spam'
```

```python
 S[0], S[-2]
```

```python
 S[1:3], S[1:], S[:-1]
```

Strings in Action

133
134

##Chapter 7: Strings
Extended slicing: the third limit
```python
 S = 'abcdefghijklmnop'
```

```python
 S[1:10:2]
```

```python
 S[::2]
```

Strings in Action

135
```python
 S = 'hello'
```

```python
 S[::-1]
```

```python
 S = 'abcedfg'
```

```python
 S[5:1:-1]
```

String Conversion Tools
```python
 &quot;42&quot; + 1
```

```python
 int(&quot;42&quot;), str(42)
```

```python
 repr(42), `42`
```

136

##Chapter 7: Strings
Why You Will Care: Slices
```python
 S = &quot;42&quot;
```

```python
 I = 1
```

```python
 S + I
```

Strings in Action

137
```python
 int(S) + I
```

```python
 S + str(I)
```

```python
 str(3.1415), float(&quot;1.5&quot;)
```

```python
 text = &quot;1.234E-10&quot;
```

```python
 float(text)
```

Character code conversions
```python
 ord('s')
```

```python
 chr(115)
```

```python
 S = '5'
```

```python
 S = chr(ord(S) + 1)
```

```python
 S
```

```python
 S = chr(ord(S) + 1)
```

```python
 S
```

```python
 int('5')
```

```python
 ord('5') - ord('0')
```

138

##Chapter 7: Strings
```python
 B = '1101'
```

```python
 I = 0
```

```python
 while B:
```

```python
 I
```

Changing Strings
```python
 S = 'spam'
```

```python
 S[0] = &quot;x&quot;
```

```python
 S = S + 'SPAM!'
```

```python
 S
```

```python
 S = S[:4] + 'Burger' + S[-1]
```

```python
 S
```

```python
 S = 'splot'
```

```python
 S = S.replace('pl', 'pamal')
```

```python
 S
```

Strings in Action

139
```python
 'That is %d %s bird!' % (1, 'dead')
```

String Formatting
```python
 exclamation = &quot;Ni&quot;
```

```python
 &quot;The knights who say %s!&quot; % exclamation
```

```python
 &quot;%d %s %d you&quot; % (1, 'spam', 4)
```

```python
 &quot;%s -- %s -- %s&quot; % (42, 3.14159, [1, 2, 3])
```

140

##Chapter 7: Strings
Advanced String Formatting
Code
Meaning
String Formatting

141
```python
 x = 1234
```

```python
 res = &quot;integers: ...%d...%-6d...%06d&quot; % (x, x, x)
```

```python
 res
```

```python
 x = 1.23456789
```

```python
 x
```

```python
 '%e  %f  %g' % (x, x, x)
```

```python
 '%-6.2f  %05.2f  %+06.1f' % (x, x, x)
```

```python
 &quot;%s&quot; % x, str(x)
```

Dictionary-Based String Formatting
```python
 &quot;%(n)d %(x)s&quot; % {&quot;n&quot;:1, &quot;x&quot;:&quot;spam&quot;}
```

142

##Chapter 7: Strings
```python
 reply = &quot;&quot;&quot;
```

```python
 values = {'name': 'Bob', 'age': 40}
```

```python
 print reply % values
```

```python
 food = 'spam'
```

```python
 age = 40
```

```python
 vars( )
```

```python
 &quot;%(age)d %(food)s&quot; % vars( )
```

String Methods
String Methods

143
String Method Examples: Changing Strings
144

##Chapter 7: Strings
```python
 S = 'spammy'
```

```python
 S = S[:3] + 'xx' + S[5:]
```

```python
 S
```

```python
 S = 'spammy'
```

```python
 S = S.replace('mm', 'xx')
```

```python
 S
```

```python
 'aa$bb$cc$dd'.replace('$', 'SPAM')
```

```python
 S = 'xxxxSPAMxxxxSPAMxxxx'
```

```python
 where = S.find('SPAM')
```

```python
 where
```

```python
 S = S[:where] + 'EGGS' + S[(where+4):]
```

```python
 S
```

```python
 S = 'xxxxSPAMxxxxSPAMxxxx'
```

```python
 S.replace('SPAM', 'EGGS')
```

```python
 S.replace('SPAM', 'EGGS', 1)
```

String Methods

145
```python
 S = 'spammy'
```

```python
 L = list(S)
```

```python
 L
```

```python
 L[3] = 'x'
```

```python
 L[4] = 'x'
```

```python
 L
```

```python
 S = ''.join(L)
```

```python
 S
```

```python
 'SPAM'.join(['eggs', 'sausage', 'ham', 'toast'])
```

String Method Examples: Parsing Text
```python
 line = 'aaa bbb ccc'
```

```python
 col1 = line[0:3]
```

```python
 col3 = line[8:]
```

```python
 col1
```

```python
 col3
```

146

##Chapter 7: Strings
```python
 line = 'aaa bbb  ccc'
```

```python
 cols = line.split( )
```

```python
 cols
```

```python
 line = 'bob,hacker,40'
```

```python
 line.split(',')
```

```python
 line = &quot;i'mSPAMaSPAMlumberjack&quot;
```

```python
 line.split(&quot;SPAM&quot;)
```

Other Common String Methods in Action
```python
 line = &quot;The knights who sy Ni!\n&quot;
```

```python
 line.rstrip( )
```

```python
 line.upper( )
```

```python
 line.isalpha( )
```

```python
 line.endswith('Ni!\n')
```

```python
 line
```

```python
 line.find('Ni') != -1
```

String Methods

147
```python
 'Ni' in line
```

```python
 sub = 'Ni!\n'
```

```python
 line.endswith(sub)
```

```python
 line[-len(sub):] == sub
```

The Original string Module
```python
 S = 'a+b+c+'
```

```python
 x = S.replace('+', 'spam')
```

148

##Chapter 7: Strings
```python
 x
```

```python
 import string
```

```python
 y = string.replace(S, '+', 'spam')
```

```python
 y
```

General Type Categories
Types Share Operation Sets by Categories
General Type Categories

149
Mutable Types Can Be Changed In-Place
##Chapter Summary
150

##Chapter 7: Strings
##Chapter Quiz
Quiz Answers
##Chapter Quiz

151
CHAPTER 8
Lists and Dictionaries
8
Lists
152
Operation
Interpretation
Lists

153
Operation
Interpretation
Lists in Action
Basic List Operations
154

##Chapter 8: Lists and Dictionaries
```python
 len([1, 2, 3])
```

```python
 [1, 2, 3] + [4, 5, 6]
```

```python
 ['Ni!'] * 4
```

```python
 3 in [1, 2, 3]
```

```python
 for x in [1, 2, 3]: print x,
```

```python
 str([1, 2]) + &quot;34&quot;
```

```python
 [1, 2] + list(&quot;34&quot;)
```

Indexing, Slicing, and Matrixes
```python
 L = ['spam', 'Spam', 'SPAM!']
```

```python
 L[2]
```

```python
 L[-2]
```

```python
 L[1:]
```

Lists in Action

155
```python
 matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

```python
 matrix[1]
```

```python
 matrix[1][1]
```

```python
 matrix[2][0]
```

```python
 matrix = [[1, 2, 3],
```

```python
 matrix[1][1]
```

Changing Lists In-Place
Index and slice assignments
```python
 L = ['spam', 'Spam', 'SPAM!']
```

```python
 L[1] = 'eggs'
```

```python
 L
```

```python
 L[0:2] = ['eat', 'more']
```

```python
 L
```

156

##Chapter 8: Lists and Dictionaries
List method calls
```python
 L.append('please')
```

```python
 L
```

```python
 L.sort( )
```

```python
 L
```

Lists in Action

157
```python
 L = [1, 2]
```

```python
 L.extend([3,4,5])
```

```python
 L
```

```python
 L.pop( )
```

```python
 L
```

```python
 L.reverse( )
```

```python
 L
```

158

##Chapter 8: Lists and Dictionaries
```python
 L = []
```

```python
 L.append(1)
```

```python
 L.append(2)
```

```python
 L
```

```python
 L.pop( )
```

```python
 L
```

Other common list operations
```python
 L
```

```python
 del L[0]
```

```python
 L
```

```python
 del L[1:]
```

```python
 L
```

```python
 L = ['Already', 'got', 'one']
```

```python
 L[1:] = []
```

```python
 L
```

```python
 L[0] = []
```

```python
 L
```

Lists in Action

159
Dictionaries
160

##Chapter 8: Lists and Dictionaries
Operation
Interpretation
Dictionaries in Action
Dictionaries in Action

161
Basic Dictionary Operations
```python
 d2 = {'spam': 2, 'ham': 1, 'eggs': 3}
```

```python
 d2['spam']
```

```python
 d2
```

```python
 len(d2)
```

```python
 d2.has_key('ham')
```

```python
 'ham' in d2
```

```python
 d2.keys( )
```

162

##Chapter 8: Lists and Dictionaries
Changing Dictionaries In-Place
```python
 d2['ham'] = ['grill', 'bake', 'fry']
```

```python
 d2
```

```python
 del d2['eggs']
```

```python
 d2
```

```python
 d2['brunch'] = 'Bacon'
```

```python
 d2
```

More Dictionary Methods
```python
 d2 = {'spam': 2, 'ham': 1, 'eggs': 3}
```

```python
 d2.values( )
```

```python
 d2.items( )
```

Dictionaries in Action

163
```python
 d2.get('spam')
```

```python
 d2.get('toast')
```

```python
 d2.get('toast', 88)
```

```python
 d2
```

```python
 d3 = {'toast':4, 'muffin':5}
```

```python
 d2.update(d3)
```

```python
 d2
```

```python
 d2
```

```python
 d2.pop('muffin')
```

```python
 d2.pop('toast')
```

```python
 d2
```

```python
 L = ['aa', 'bb', 'cc', 'dd']
```

```python
 L.pop( )
```

```python
 L
```

```python
 L.pop(1)
```

```python
 L
```

164

##Chapter 8: Lists and Dictionaries
A Languages Table
```python
 table = {'Python':  'Guido van Rossum',
```

```python
 language = 'Python'
```

```python
 creator  = table[language]
```

```python
 creator
```

```python
 for lang in table.keys( ):
```

Dictionaries in Action

165
Dictionary Usage Notes
Using dictionaries to simulate ﬂexible lists
```python
 L = []
```

```python
 L[99] = 'spam'
```

```python
 D = {}
```

```python
 D[99] = 'spam'
```

```python
 D[99]
```

```python
 D
```

166

##Chapter 8: Lists and Dictionaries
Using dictionaries for sparse data structures
```python
 Matrix = {}
```

```python
 Matrix[(2, 3, 4)] = 88
```

```python
 Matrix[(7, 8, 9)] = 99
```

```python

```

```python
 X = 2; Y = 3; Z = 4
```

```python
 Matrix[(X, Y, Z)]
```

```python
 Matrix
```

```python
 Matrix[(2,3,6)]
```

Avoiding missing-key errors
```python
 if Matrix.has_key((2,3,6)):
```

Dictionaries in Action

167
```python
 try:
```

```python
 Matrix.get((2,3,4), 0)
```

```python
 Matrix.get((2,3,6), 0)
```

Using dictionaries as “records”
```python
 rec = {}
```

```python
 rec['name'] = 'mel'
```

```python
 rec['age']  = 45
```

```python
 rec['job']  = 'trainer/writer'
```

```python

```

```python
 print rec['name']
```

```python
 mel = {'name': 'Mark',
```

```python
 mel['name']
```

```python
 mel['jobs']
```

```python
 mel['jobs'][1]
```

```python
 mel['home']['zip']
```

168

##Chapter 8: Lists and Dictionaries
Other ways to make dictionaries
Why You Will Care: Dictionary Inter faces
Dictionaries in Action

169
```python
 dict.fromkeys(['a', 'b'], 0)
```

##Chapter Summary
170

##Chapter 8: Lists and Dictionaries
##Chapter Quiz
Quiz Answers
##Chapter Quiz

171
CHAPTER 9
Tuples, Files, and Everything Else
9
Tuples
172
Operation
Interpretation
Tuples in Action
```python
 (1, 2) + (3, 4)
```

```python
 (1, 2) * 4
```

Tuples

173
```python
 T = (1, 2, 3, 4)
```

```python
 T[0], T[1:3]
```

Tuple syntax peculiarities: commas and parentheses
```python
 x = (40)
```

```python
 x
```

```python
 y = (40,)
```

```python
 y
```

Conversions and immutability
```python
 T = ('cc', 'aa', 'dd', 'bb')
```

```python
 tmp = list(T)
```

```python
 tmp.sort( )
```

```python
 tmp
```

174

##Chapter 9: Tuples, Files, and Everything Else
```python
 T = tuple(tmp)
```

```python
 T
```

```python
 T = (1, 2, 3, 4, 5)
```

```python
 L = [x + 20 for x in T]
```

```python
 L
```

```python
 T = (1, [2, 3], 4)
```

```python
 T[1] = 'spam'
```

```python
 T[1][0] = 'spam'
```

```python
 T
```

Why Lists and Tuples?
Tuples

175
Files
Opening Files
Operation
Interpretation
176

##Chapter 9: Tuples, Files, and Everything Else
Operation
Interpretation
Using Files
Files

177
Files in Action
```python
 myfile = open('myfile', 'w')
```

```python
 myfile.write('hello text file\n')
```

```python
 myfile.close( )
```

```python
 myfile = open('myfile')
```

```python
 myfile.readline( )
```

```python
 myfile.readline( )
```

Storing and parsing Python objects in ﬁles
```python
 X, Y, Z = 43, 44, 45
```

```python
 S = 'Spam'
```

```python
 D = {'a': 1, 'b': 2}
```

```python
 L = [1, 2, 3]
```

```python

```

```python
 F = open('datafile.txt', 'w')
```

```python
 F.write(S + '\n')
```

178

##Chapter 9: Tuples, Files, and Everything Else
```python
 F.write('%s,%s,%s\n' % (X, Y, Z))
```

```python
 F.write(str(L) + '$' + str(D) + '\n')
```

```python
 F.close( )
```

```python
 bytes = open('datafile.txt').read( )
```

```python
 bytes
```

```python
 print bytes
```

```python
 F = open('datafile.txt')
```

```python
 line = F.readline( )
```

```python
 line
```

```python
 line.rstrip( )
```

```python
 line = F.readline( )
```

```python
 line
```

```python
 parts = line.split(',')
```

```python
 parts
```

```python
 int(parts[1])
```

```python
 numbers = [int(P) for P in parts]
```

```python
 numbers
```

Files

179
```python
 line = F.readline( )
```

```python
 line
```

```python
 parts = line.split('$')
```

```python
 parts
```

```python
 eval(parts[0])
```

```python
 objects = [eval(P) for P in parts]
```

```python
 objects
```

Storing native Python objects with pickle
```python
 F = open('datafile.txt', 'w')
```

```python
 import pickle
```

```python
 pickle.dump(D, F)
```

```python
 F.close( )
```

```python
 F = open('datafile.txt')
```

```python
 E = pickle.load(F)
```

```python
 E
```

180

##Chapter 9: Tuples, Files, and Everything Else
```python
 open('datafile.txt').read( )
```

Storing and parsing packed binary data in ﬁles
```python
 F = open('data.bin', 'wb')
```

```python
 import struct
```

```python
 bytes = struct.pack('&gt;i4sh', 7, 'spam', 8)
```

```python
 bytes
```

```python
 F.write(bytes)
```

```python
 F.close( )
```

```python
 F = open('data.bin', 'rb')
```

```python
 data = F.read( )
```

```python
 data
```

```python
 values = struct.unpack('&gt;i4sh', data)
```

```python
 values
```

Files

181
Other File Tools
Type Categories Revisited
182

##Chapter 9: Tuples, Files, and Everything Else
Why You Will Care: Operator Overloading
Object type
Category
Mutable?
Object Flexibility
Object Flexibility

183
```python
 L = ['abc', [(1, 2), ([3], 4)], 5]
```

```python
 L[1]
```

```python
 L[1][1]
```

```python
 L[1][1][0]
```

```python
 L[1][1][0][0]
```

References Versus Copies
184

##Chapter 9: Tuples, Files, and Everything Else
```python
 X = [1, 2, 3]
```

```python
 L = ['a', X, 'b']
```

```python
 D = {'x':X, 'y':2}
```

```python
 X[1] = 'surprise'
```

```python
 L
```

```python
 D
```

References Versus Copies

185
```python
 L = [1,2,3]
```

```python
 D = {'a':1, 'b':2}
```

```python
 A = L[:]
```

```python
 B = D.copy( )
```

```python
 A[1] = 'Ni'
```

```python
 B['c'] = 'spam'
```

```python

```

```python
 L, D
```

```python
 A, B
```

```python
 X = [1, 2, 3]
```

```python
 L = ['a', X[:], 'b']
```

```python
 D = {'x':X[:], 'y':2}
```

Comparisons, Equality, and Truth
186

##Chapter 9: Tuples, Files, and Everything Else
```python
 L1 = [1, ('a', 3)]
```

```python
 L2 = [1, ('a', 3)]
```

```python
 L1 == L2, L1 is L2
```

```python
 S1 = 'spam'
```

```python
 S2 = 'spam'
```

```python
 S1 == S2, S1 is S2
```

```python
 S1 = 'a longer string'
```

```python
 S2 = 'a longer string'
```

```python
 S1 == S2, S1 is S2
```

```python
 L1 = [1, ('a', 3)]
```

```python
 L2 = [1, ('a', 2)]
```

```python
 L1 &lt; L2, L1 == L2, L1 &gt; L2
```

Comparisons, Equality, and Truth

187
The Meaning of True and False in Python
Object
Value
188

##Chapter 9: Tuples, Files, and Everything Else
```python
 L = [None] * 100
```

```python

```

```python
 L
```

Python’s Type Hierarchies
Python’s Type Hierarchies

189
190

##Chapter 9: Tuples, Files, and Everything Else
Other Types in Python
Built-in Type Gotchas
Assignment Creates References, Not Copies
```python
 L = [1, 2, 3]
```

```python
 M = ['X', L, 'Y']
```

```python
 M
```

```python
 L[1] = 0
```

```python
 M
```

Built-in Type Gotchas

191
```python
 L = [1, 2, 3]
```

```python
 M = ['X', L[:], 'Y']
```

```python
 L[1] = 0
```

```python
 L
```

```python
 M
```

Repetition Adds One Level Deep
```python
 L = [4, 5, 6]
```

```python
 X = L * 4
```

```python
 Y = [L] * 4
```

```python
 X
```

```python
 Y
```

```python
 L[1] = 0
```

```python
 X
```

```python
 Y
```

192

##Chapter 9: Tuples, Files, and Everything Else
Beware of Cyclic Data Structures
```python
 L = ['grail']
```

```python
 L.append(L)
```

```python
 L
```

Immutable Types Can’t Be Changed In-Place
##Chapter Summary
##Chapter Summary

193
194

##Chapter 9: Tuples, Files, and Everything Else
##Chapter Quiz
Quiz Answers
##Chapter Quiz

195
#Part II Exercises
196

##Chapter 9: Tuples, Files, and Everything Else
```python
 X = 'spam'
```

    ```python
 Y = 'eggs'
```

    ```python
 X, Y = Y, X
```

```python
 D = {}
```

    ```python
 D[1] = 'a'
```

    ```python
 D[2] = 'b'
```

```python
 D[(1, 2, 3)] = 'c'
```

    ```python
 D
```

#Part II Exercises

197
198

##Chapter 9: Tuples, Files, and Everything Else
PART III
III.Statements and Syntax
CHAPTER 10
Introducing Python Statements10
Python Program Structure Revisited
201
Python’s Statements
Statement
Role
Example
202

##Chapter 10:
Introducing Python Statements
Statement
Role
Example
A Tale of Two ifs
A Tale of Two ifs

203
What Python Adds
What Python Removes
Parentheses are optional
End of line is end of statement
204

##Chapter 10:
Introducing Python Statements
End of indentation is end of block
A Tale of Two ifs

205
Why Indentation Syntax?
206

##Chapter 10:
Introducing Python Statements
A Tale of Two ifs

207
A Few Special Cases
Statement rule special cases
208

##Chapter 10:
Introducing Python Statements
Block rule special case
A Tale of Two ifs

209
A Quick Example: Interactive Loops
A Simple Interactive Loop
210

##Chapter 10:
Introducing Python Statements
Doing Math on User Inputs
```python
 reply = '20'
```

```python
 reply ** 2
```

```python
 int(reply) ** 2
```

A Quick Example: Interactive Loops

211
Handling Errors by Testing Inputs
```python
 S = '123'
```

```python
 T = 'xxx'
```

```python
 S.isdigit( ), T.isdigit( )
```

212

##Chapter 10:
Introducing Python Statements
Handling Errors with try Statements
A Quick Example: Interactive Loops

213
Nesting Code Three Levels Deep
214

##Chapter 10:
Introducing Python Statements
##Chapter Summary
##Chapter Summary

215
##Chapter Quiz
Quiz Answers
216

##Chapter 10:
Introducing Python Statements
CHAPTER 11
Assignment, Expressions, and print11
Assignment Statements
217
Assignment Statement Forms
Operation
Interpretation
218

##Chapter 11: Assignment, Expressions, and print
Sequence Assignments
```python
 nudge = 1
```

```python
 wink  = 2
```

```python
 A, B = nudge, wink
```

```python
 A, B
```

```python
 [C, D] = [nudge, wink]
```

```python
 C, D
```

```python
 nudge = 1
```

```python
 wink  = 2
```

```python
 nudge, wink = wink, nudge
```

```python
 nudge, wink
```

Assignment Statements

219
```python
 [a, b, c] = (1, 2, 3)
```

```python
 a, c
```

```python
 (a, b, c) = &quot;ABC&quot;
```

```python
 a, c
```

Advanced sequence assignment patterns
```python
 string = 'SPAM'
```

```python
 a, b, c, d = string
```

```python
 a, d
```

```python
 a, b, c = string
```

```python
 a, b, c = string[0], string[1], string[2:]
```

```python
 a, b, c
```

```python
 a, b, c = list(string[:2]) + [string[2:]]
```

```python
 a, b, c
```

```python
 a, b = string[:2]
```

```python
 c = string[2:]
```

```python
 a, b, c
```

```python
 (a, b), c = string[:2], string[2:]
```

```python
 a, b, c
```

220

##Chapter 11: Assignment, Expressions, and print
```python
 ((a, b), c) = ('SP', 'AM')
```

```python
 a, b, c
```

```python
 red, green, blue = range(3)
```

```python
 red, blue
```

```python
 range(3)
```

```python
 L = [1, 2, 3, 4]
```

```python
 while L:
```

Assignment Statements

221
Multiple-Target Assignments
```python
 a = b = c = 'spam'
```

```python
 a, b, c
```

```python
 c = 'spam'
```

```python
 b = c
```

```python
 a = b
```

Multiple-target assignment and shared references
```python
 a = b = 0
```

```python
 b = b + 1
```

```python
 a, b
```

```python
 a = b = []
```

```python
 b.append(42)
```

```python
 a, b
```

222

##Chapter 11: Assignment, Expressions, and print
```python
 a = []
```

```python
 b = []
```

```python
 b.append(42)
```

```python
 a, b
```

Augmented Assignments
```python
 x = 1
```

```python
 x = x + 1
```

```python
 x
```

```python
 x += 1
```

```python
 x
```

```python
 S = &quot;spam&quot;
```

```python
 S += &quot;SPAM&quot;
```

```python
 S
```

Assignment Statements

223
```python
 L = [1, 2]
```

```python
 L = L + [3]
```

```python
 L
```

```python
 L.append(4)
```

```python
 L
```

```python
 L = L + [5, 6]
```

```python
 L
```

```python
 L.extend([7, 8])
```

```python
 L
```

224

##Chapter 11: Assignment, Expressions, and print
```python
 L += [9, 10]
```

```python
 L
```

Augmented assignment and shared references
```python
 L = [1, 2]
```

```python
 M = L
```

```python
 L = L + [3, 4]
```

```python
 L, M
```

```python
 L = [1, 2]
```

```python
 M = L
```

```python
 L += [3, 4]
```

```python
 L, M
```

Variable Name Rules
Assignment Statements

225
226

##Chapter 11: Assignment, Expressions, and print
Naming conventions
Names have no type, but objects do
```python
 x = 0
```

```python
 x = &quot;Hello&quot;
```

```python
 x = [1, 2, 3]
```

Assignment Statements

227
Expression Statements
Operation
Interpretation
228

##Chapter 11: Assignment, Expressions, and print
Expression Statements and In-Place Changes
```python
 L = [1, 2]
```

```python
 L.append(3)
```

```python
 L
```

```python
 L = L.append(4)
```

```python
 print L
```

print Statements
print Statements

229
Operation
Interpretation
```python
 x = 'a'
```

```python
 y = 'b'
```

```python
 print x, y
```

```python
 print x + y
```

```python
 print '%s...%s' % (x, y)
```

The Python “Hello World” Program
```python
 print 'hello world'
```

```python
 'hello world'
```

```python
 import sys
```

```python
 sys.stdout.write('hello world\n')
```

230

##Chapter 11: Assignment, Expressions, and print
Redirecting the Output Stream
print Statements

231
The print &gt;&gt; ﬁle Extension
```python
 import sys
```

```python
 temp = sys.stdout
```

```python
 sys.stdout = open('log.txt', 'a')
```

```python
 print 'spam'
```

```python
 print 1, 2, 3
```

```python
 sys.stdout.close( )
```

```python
 sys.stdout = temp
```

```python
 print 'back here'
```

```python
 print open('log.txt').read( )
```

```python
 log = open('log.txt', 'w')
```

```python
 print &gt;&gt; log, 1, 2, 3
```

```python
 print &gt;&gt; log, 4, 5, 6
```

```python
 log.close( )
```

```python
 print 7, 8, 9
```

```python
 print open('log.txt').read( )
```

232

##Chapter 11: Assignment, Expressions, and print
```python
 import sys
```

```python
 sys.stderr.write(('Bad!' * 8) + '\n')
```

```python
 print &gt;&gt; sys.stderr, 'Bad!' * 8
```

Why You Will Care: print and stdout
print Statements

233
##Chapter Summary
234

##Chapter 11: Assignment, Expressions, and print
##Chapter Quiz
Quiz Answers
##Chapter Quiz

235
CHAPTER 12
if Tests
12
if Statements
General Format
236
Basic Examples
```python
 if 1:
```

```python
 if not 1:
```

Multiway Branching
```python
 x = 'killer rabbit'
```

```python
 if x == 'roger':
```

if Statements

237
```python
 choice = 'ham'
```

```python
 print {'spam':  1.25,
```

```python
 if choice == 'spam':
```

```python
 branch = {'spam': 1.25,
```

```python
 print branch.get('spam', 'Bad choice')
```

```python
 print branch.get('bacon', 'Bad choice')
```

238

##Chapter 12:
if Tests
Python Syntax Rules
Python Syntax Rules

239
Block Delimiters
240

##Chapter 12:
if Tests
Statement Delimiters
Python Syntax Rules

241
A Few Special Cases
242

##Chapter 12:
if Tests
Truth Tests
```python
 2 &lt; 3, 3 &lt; 2
```

```python
 2 or 3, 3 or 2
```

Truth Tests

243
```python
 [ ] or 3
```

```python
 [ ] or { }
```

```python
 2 and 3, 3 and 2
```

```python
 [ ] and { }
```

```python
 3 and [ ]
```

The if/else Ternary Expression
244

##Chapter 12:
if Tests
```python
 A = 't' if 'spam' else 'f'
```

```python
 A
```

```python
 A = 't' if '' else 'f'
```

```python
 A
```

```python
 ['f', 't'][bool('')]
```

```python
 ['f', 't'][bool('spam')]
```

Truth Tests

245
Why You Will Care: Booleans
##Chapter Summary
246

##Chapter 12:
if Tests
##Chapter Quiz
Quiz Answers
##Chapter Quiz

247
CHAPTER 13
while and for Loops
13
while Loops
248
General Format
Examples
```python
 while True:
```

```python
 x = 'spam'
```

```python
 while x:
```

```python
 a=0; b=10
```

```python
 while a &lt; b:
```

while Loops

249
break, continue, pass, and the Loop else
General Loop Format
250

##Chapter 13: while and for Loops
Examples
pass
continue
break, continue, pass, and the Loop else

251
break
```python
 while 1:
```

else
252

##Chapter 13: while and for Loops
More on the loop else clause
break, continue, pass, and the Loop else

253
for Loops
General Format
254

##Chapter 13: while and for Loops
Why You Will Care: Emulating C while Loops
for Loops

255
Examples
Basic usage
```python
 for x in [&quot;spam&quot;, &quot;eggs&quot;, &quot;ham&quot;]:
```

```python
 sum = 0
```

```python
 for x in [1, 2, 3, 4]:
```

```python
 sum
```

```python
 prod = 1
```

```python
 for item in [1, 2, 3, 4]: prod *= item
```

```python
 prod
```

Other data types
```python
 S = &quot;lumberjack&quot;
```

```python
 T = (&quot;and&quot;, &quot;I'm&quot;, &quot;okay&quot;)
```

```python
 for x in S: print x,
```

```python
 for x in T: print x,
```

256

##Chapter 13: while and for Loops
Tuple assignment in for
```python
 T = [(1, 2), (3, 4), (5, 6)]
```

```python
 for (a, b) in T:
```

Nested for loops
```python
 items = [&quot;aaa&quot;, 111, (4, 5), 2.01]
```

```python
 tests = [(4, 5), 3.14]
```

```python

```

```python
 for key in tests:
```

for Loops

257
```python
 for key in tests:
```

```python
 seq1 = &quot;spam&quot;
```

```python
 seq2 = &quot;scam&quot;
```

```python

```

```python
 res = []
```

```python
 for x in seq1:
```

```python
 res
```

Iterators: A First Look
```python
 for x in [1, 2, 3, 4]: print x ** 2,
```

```python
 for x in (1, 2, 3, 4): print x ** 3,
```

```python
 for x in 'spam': print x * 2,
```

258

##Chapter 13: while and for Loops
Why You Will Care: File Scanners
Iterators: A First Look

259
File Iterators
```python
 f = open('script1.py')
```

```python
 f.readline( )
```

```python
 f.readline( )
```

```python
 f.readline( )
```

```python
 f.readline( )
```

```python
 f.readline( )
```

```python
 f = open('script1.py')
```

```python
 f.next( )
```

260

##Chapter 13: while and for Loops
```python
 f.next( )
```

```python
 f.next( )
```

```python
 f.next( )
```

```python
 f.next( )
```

```python
 for line in open('script1.py'):
```

```python
 for line in open('script1.py').readlines( ):
```

Iterators: A First Look

261
```python
 f = open('script1.py')
```

```python
 while True:
```

Other Built-in Type Iterators
```python
 L = [1, 2, 3]
```

```python
 I = iter(L)
```

```python
 I.next( )
```

```python
 I.next( )
```

```python
 I.next( )
```

```python
 I.next( )
```

```python
 D = {'a':1, 'b':2, 'c':3}
```

```python
 for key in D.keys( ):
```

262

##Chapter 13: while and for Loops
```python
 for key in D:
```

Other Iteration Contexts
```python
 for line in open('script1.py'):
```

```python
 uppers = [line.upper( ) for line in open('script1.py')]
```

```python
 uppers
```

```python
 map(str.upper, open('script1.py'))
```

```python
 'y = 2\n' in open('script1.py')
```

```python
 'x = 2\n' in open('script1.py')
```

```python
 sorted(open('script1.py'))
```

Iterators: A First Look

263
```python
 sorted([3, 2, 4, 1, 5, 0])
```

```python
 sum([3, 2, 4, 1, 5, 0])
```

```python
 any(['spam', '', 'ni'])
```

```python
 all(['spam', '', 'ni'])
```

```python
 list(open('script1.py'))
```

```python
 tuple(open('script1.py'))
```

```python
 '&amp;&amp;'.join(open('script1.py'))
```

```python
 a, b, c, d = open('script1.py')
```

```python
 a, d
```

User-Deﬁned Iterators
264

##Chapter 13: while and for Loops
Loop Coding Techniques
Counter Loops: while and range
```python
 range(5), range(2, 5), range(0, 10, 2)
```

```python
 range(-5, 5)
```

```python
 range(5, -5, -1)
```

Loop Coding Techniques

265
```python
 for i in range(3):
```

```python
 X = 'spam'
```

```python
 for item in X: print item,
```

```python
 i = 0
```

```python
 while i &lt; len(X):
```

```python
 X
```

```python
 len(X)
```

```python
 range(len(X))
```

```python

```

```python
 for i in range(len(X)): print X[i],
```

Nonexhaustive Traversals: range
266

##Chapter 13: while and for Loops
```python
 for item in X: print item,
```

```python
 S = 'abcdefghijk'
```

```python
 range(0, len(S), 2)
```

```python
 for i in range(0, len(S), 2): print S[i],
```

```python
 for x in S[::2]: print x
```

Changing Lists: range
```python
 L = [1, 2, 3, 4, 5]
```

```python
 for x in L:
```

```python
 L
```

```python
 x
```

Loop Coding Techniques

267
```python
 L = [1, 2, 3, 4, 5]
```

```python
 for i in range(len(L)):
```

```python
 L
```

```python
 i = 0
```

```python
 while i &lt; len(L):
```

```python
 L
```

Parallel Traversals: zip and map
```python
 L1 = [1,2,3,4]
```

```python
 L2 = [5,6,7,8]
```

```python
 zip(L1,L2)
```

268

##Chapter 13: while and for Loops
```python
 for (x, y) in zip(L1, L2):
```

```python
 T1, T2, T3 = (1,2,3), (4,5,6), (7,8,9)
```

```python
 T3
```

```python
 zip(T1,T2,T3)
```

```python
 S1 = 'abc'
```

```python
 S2 = 'xyz123'
```

```python

```

```python
 zip(S1, S2)
```

```python
 map(None, S1, S2)
```

Loop Coding Techniques

269
Dictionary construction with zip
```python
 D1 = {'spam':1, 'eggs':3, 'toast':5}
```

```python
 D1
```

```python
 D1 = {}
```

```python
 D1['spam']  = 1
```

```python
 D1['eggs']  = 3
```

```python
 D1['toast'] = 5
```

```python
 keys = ['spam', 'eggs', 'toast']
```

```python
 vals = [1, 3, 5]
```

```python
 zip(keys, vals)
```

```python
 D2 = {}
```

```python
 for (k, v) in zip(keys, vals): D2[k] = v
```

```python
 D2
```

```python
 keys = ['spam', 'eggs', 'toast']
```

```python
 vals = [1, 3, 5]
```

```python
 D3 = dict(zip(keys, vals))
```

```python
 D3
```

270

##Chapter 13: while and for Loops
Generating Both Offsets and Items: enumerate
```python
 S = 'spam'
```

```python
 offset = 0
```

```python
 for item in S:
```

```python
 S = 'spam'
```

```python
 for (offset, item) in enumerate(S):
```

```python
 E = enumerate(S)
```

```python
 E.next( )
```

```python
 E.next( )
```

```python
 [c * i for (i, c) in enumerate(S)]
```

Loop Coding Techniques

271
List Comprehensions: A First Look
```python
 L = [1, 2, 3, 4, 5]
```

```python
 for i in range(len(L)):
```

```python
 L
```

```python
 L = [x + 10 for x in L]
```

```python
 L
```

List Comprehension Basics
272

##Chapter 13: while and for Loops
```python
 res = []
```

```python
 for x in L:
```

```python
 res
```

Using List Comprehensions on Files
```python
 f = open('script1.py')
```

```python
 lines = f.readlines( )
```

```python
 lines
```

```python
 lines = [line.rstrip( ) for line in lines]
```

```python
 lines
```

List Comprehensions: A First Look

273
```python
 lines = [line.rstrip( ) for line in open('script1.py')]
```

```python
 lines
```

Extended List Comprehension Syntax
```python
 lines = [line.rstrip( ) for line in open('script1.py') if line[0] == 'p']
```

```python
 lines
```

```python
 res = []
```

```python
 for line in open('script1.py'):
```

```python
 res
```

274

##Chapter 13: while and for Loops
```python
 [x + y for x in 'abc' for y in 'lmn']
```

```python
 res = []
```

```python
 for x in 'abc':
```

```python
 res
```

##Chapter Summary
##Chapter Summary

275
##Chapter Quiz
Quiz Answers
276

##Chapter 13: while and for Loops
##Chapter Quiz

277
CHAPTER 14
The Documentation Interlude
14
Python Documentation Sources
278
Form
Role
# Comments
The dir Function
```python
 import sys
```

```python
 dir(sys)
```

Python Documentation Sources

279
```python
 dir([])
```

```python
 dir('')
```

```python
 dir(str) == dir('')
```

```python
 dir(list) == dir([])
```

Docstrings: _ _doc_ _
280

##Chapter 14: The Documentation Interlude
User-deﬁned docstrings
```python
 import docstrings
```

```python
 print docstrings._ _doc_ _
```

```python
 print docstrings.square._ _doc_ _
```

```python
 print docstrings.employee._ _doc_ _
```

Python Documentation Sources

281
Docstring standards
Built-in docstrings
```python
 import sys
```

```python
 print sys._ _doc_ _
```

```python
 print sys.getrefcount._ _doc_ _
```

282

##Chapter 14: The Documentation Interlude
```python
 print int._ _doc_ _
```

```python
 print open._ _doc_ _
```

PyDoc: The help Function
```python
 import sys
```

```python
 help(sys.getrefcount)
```

```python
 help(sys)
```

Python Documentation Sources

283
```python
 help(dict)
```

```python
 help(str.replace)
```

```python
 help(ord)
```

284

##Chapter 14: The Documentation Interlude
```python
 help(docstrings.square)
```

```python
 help(docstrings.employee)
```

```python
 help(docstrings)
```

PyDoc: HTML Reports
Python Documentation Sources

285
286

##Chapter 14: The Documentation Interlude
Python Documentation Sources

287
288

##Chapter 14: The Documentation Interlude
Standard Manual Set
Web Resources
Python Documentation Sources

289
Published Books
290

##Chapter 14: The Documentation Interlude
Common Coding Gotchas
Common Coding Gotchas

291
292

##Chapter 14: The Documentation Interlude
##Chapter Summary
##Chapter Summary

293
##Chapter Quiz
Quiz Answers
294

##Chapter 14: The Documentation Interlude
#Part III Exercises
#Part III Exercises

295
296

##Chapter 14: The Documentation Interlude
PART IV
IV.Functions
CHAPTER 15
Function Basics15
Statement
Examples
299
Why Use Functions?
Coding Functions
300

##Chapter 15: Function Basics
Coding Functions

301
def Statements
302

##Chapter 15: Function Basics
def Executes at Runtime
A First Example: Deﬁnitions and Calls
A First Example: Definitions and Calls

303
Deﬁnition
```python
 def times(x, y):
```

Calls
```python
 times(2, 4)
```

```python
 x = times(3.14, 4)
```

```python
 x
```

```python
 times('Ni', 4)
```

304

##Chapter 15: Function Basics
Polymorphism in Python
A First Example: Definitions and Calls

305
A Second Example: Intersecting Sequences
Deﬁnition
Calls
306

##Chapter 15: Function Basics
```python
 s1 = &quot;SPAM&quot;
```

```python
 s2 = &quot;SCAM&quot;
```

```python
 intersect(s1, s2)
```

Polymorphism Revisited
```python
 x = intersect([1, 2, 3], (1, 4))
```

```python
 x
```

A Second Example: Intersecting Sequences

307
Local Variables
##Chapter Summary
308

##Chapter 15: Function Basics
##Chapter Quiz
Quiz Answers
##Chapter Quiz

309
CHAPTER 16
Scopes and Arguments
16
Scope Rules
310
Python Scope Basics
Scope Rules

311
Name Resolution: The LEGB Rule
312

##Chapter 16: Scopes and Arguments
Scope Rules

313
Scope Example
The Built-in Scope
314

##Chapter 16: Scopes and Arguments
```python
 import _ _builtin_ _
```

```python
 dir(_ _builtin_ _)
```

```python
 zip
```

```python
 import _ _builtin_ _
```

```python
 _ _builtin_ _.zip
```

Scope Rules

315
The global Statement
316

##Chapter 16: Scopes and Arguments
Minimize Global Variables
The global Statement

317
Minimize Cross-File Changes
318

##Chapter 16: Scopes and Arguments
Other Ways to Access Globals
The global Statement

319
```python
 import thismod
```

```python
 thismod.test( )
```

```python
 thismod.var
```

Scopes and Nested Functions
Nested Scope Details
320

##Chapter 16: Scopes and Arguments
Nested Scope Examples
Factory functions
Scopes and Nested Functions

321
```python
 def maker(N):
```

```python
 f = maker(2)
```

```python
 f
```

```python
 f(3)
```

```python
 f(4)
```

```python
 g = maker(3)
```

```python
 g(3)
```

```python
 f(3)
```

322

##Chapter 16: Scopes and Arguments
Retaining enclosing scopes’ state with defaults
```python
 def f1( ):
```

```python
 def f2(x):
```

```python
 f1( )
```

Scopes and Nested Functions

323
Nested scopes and lambdas
Scopes versus defaults with loop variables
324

##Chapter 16: Scopes and Arguments
```python
 def makeActions( ):
```

```python
 acts = makeActions( )
```

```python
 acts[0]
```

```python
 acts[0](2)
```

```python
 acts[2](2)
```

```python
 acts[4](2)
```

```python
 def makeActions( ):
```

```python
 acts = makeActions( )
```

```python
 acts[0](2)
```

```python
 acts[2](2)
```

```python
 acts[4](2)
```

Scopes and Nested Functions

325
Arbitrary scope nesting
```python
 def f1( ):
```

```python
 f1( )
```

Passing Arguments
326

##Chapter 16: Scopes and Arguments
Arguments and Shared References
```python
 def changer(a, b):
```

```python
 X = 1
```

```python
 L = [1, 2]
```

```python
 changer(X, L)
```

```python
 X, L
```

Passing Arguments

327
```python
 X = 1
```

```python
 a = X
```

```python
 a = 2
```

```python
 print X
```

```python
 L = [1, 2]
```

```python
 b = L
```

```python
 b[0] = 'spam'
```

```python
 print L
```

328

##Chapter 16: Scopes and Arguments
Avoiding Mutable Argument Changes
Simulating Output Parameters
Passing Arguments

329
```python
 def multiple(x, y):
```

```python
 X = 1
```

```python
 L = [1, 2]
```

```python
 X, L = multiple(X, L)
```

```python
 X, L
```

Special Argument-Matching Modes
330

##Chapter 16: Scopes and Arguments
Syntax
Location
Interpretation
Special Argument-Matching Modes

331
Keyword and Default Examples
```python
 def f(a, b, c): print a, b, c
```

```python
 f(1, 2, 3)
```

Keywords
```python
 f(c=3, b=2, a=1)
```

```python
 f(1, c=3, b=2)
```

332

##Chapter 16: Scopes and Arguments
Defaults
```python
 def f(a, b=2, c=3): print a, b, c
```

```python
 f(1)
```

```python
 f(a=1)
```

```python
 f(1, 4)
```

```python
 f(1, 4, 5)
```

```python
 f(1, c=6)
```

Arbitrary Arguments Examples
Special Argument-Matching Modes

333
Collecting arguments
```python
 def f(*args): print args
```

```python
 f( )
```

```python
 f(1)
```

```python
 f(1,2,3,4)
```

```python
 def f(**args): print args
```

```python
 f( )
```

```python
 f(a=1, b=2)
```

```python
 def f(a, *pargs, **kargs): print a, pargs, kargs
```

```python
 f(1, 2, 3, x=1, y=2)
```

Unpacking arguments
```python
 def func(a, b, c, d): print a, b, c, d
```

```python
 args = (1, 2)
```

```python
 args += (3, 4)
```

334

##Chapter 16: Scopes and Arguments
```python
 func(*args)
```

```python
 args = {'a': 1, 'b': 2, 'c': 3}
```

```python
 args['d'] = 4
```

```python
 func(**args)
```

```python
 func(*(1, 2), **{'d': 4, 'c': 4})
```

```python
 func(1, *(2, 3), **{'d': 4})
```

```python
 func(1, c=3, *(2,), **{'d': 4})
```

Combining Keywords and Defaults
Special Argument-Matching Modes

335
The min Wakeup Call
Full credit
336

##Chapter 16: Scopes and Arguments
Bonus points
Special Argument-Matching Modes

337
The punch line
A More Useful Example: General Set Functions
338

##Chapter 16: Scopes and Arguments
```python
 from inter2 import intersect, union
```

```python
 s1, s2, s3 = &quot;SPAM&quot;, &quot;SCAM&quot;, &quot;SLAM&quot;
```

```python
 intersect(s1, s2), union(s1, s2)
```

```python
 intersect([1,2,3], (1,4))
```

```python
 intersect(s1, s2, s3)
```

```python
 union(s1, s2, s3)
```

Argument Matching: The Gritty Details
Special Argument-Matching Modes

339
Why You Will Care: Keyword Arguments
##Chapter Summary
340

##Chapter 16: Scopes and Arguments
##Chapter Summary

341
##Chapter Quiz
```python
 X = 'Spam'
```

```python
 def func( ):
```

```python
 func( )
```

```python
 X = 'Spam'
```

```python
 def func( ):
```

```python
 func( )
```

```python
 print X
```

```python
 X = 'Spam'
```

```python
 def func( ):
```

```python
 func( )
```

```python
 print X
```

```python
 X = 'Spam'
```

```python
 def func( ):
```

```python
 func( )
```

```python
 print X
```

```python
 X = 'Spam'
```

```python
 def func( ):
```

```python
 func( )
```

```python
 X
```

```python
 def func(a, b, c=3, d=4): print a, b, c, d
```

```python
 func(1, *(5,6))
```

342

##Chapter 16: Scopes and Arguments
Quiz Answers
##Chapter Quiz

343
CHAPTER 17
Advanced Function Topics
17
Anonymous Functions: lambda
lambda Expressions
344
```python
 def func(x, y, z): return x + y + z
```

```python
 func(2, 3, 4)
```

```python
 f = lambda x, y, z: x + y + z
```

```python
 f(2, 3, 4)
```

```python
 x = (lambda a=&quot;fee&quot;, b=&quot;fie&quot;, c=&quot;foe&quot;: a + b + c)
```

```python
 x(&quot;wee&quot;)
```

```python
 def knights( ):
```

Anonymous Functions: lambda

345
```python
 act = knights( )
```

```python
 act('robin')
```

Why Use lambda?
```python
 key = 'got'
```

```python
 {'already': (lambda: 2 + 2),
```

346

##Chapter 17: Advanced Function Topics
How (Not) to Obfuscate Your Python Code
Anonymous Functions: lambda

347
```python
 lower = (lambda x, y: x if x &lt; y else y)
```

```python
 lower('bb', 'aa')
```

```python
 lower('aa', 'bb')
```

```python
 import sys
```

```python
 showall = (lambda x: map(sys.stdout.write, x))
```

```python
 t = showall(['spam\n', 'toast\n', 'eggs\n'])
```

```python
 showall = lambda x: [sys.stdout.write(line) for line in x]
```

```python
 t = showall(('bright\n', 'side\n', 'of\n', 'life\n'))
```

Nested lambdas and Scopes
```python
 def action(x):
```

```python
 act = action(99)
```

```python
 act
```

```python
 act(2)
```

348

##Chapter 17: Advanced Function Topics
```python
 action = (lambda x: (lambda y: x + y))
```

```python
 act = action(99)
```

```python
 act(3)
```

```python
 ((lambda x: (lambda y: x + y))(99))(4)
```

Why You Will Care: Callbacks
Anonymous Functions: lambda

349
Applying Functions to Arguments
The apply Built-in
```python
 def func(x, y, z): return x + y + z
```

```python
 apply(func, (2, 3, 4))
```

```python
 f = lambda x, y, z: x + y + z
```

```python
 apply(f, (2, 3, 4))
```

350

##Chapter 17: Advanced Function Topics
```python
 args = (2,3) + (4,)
```

```python
 args
```

```python
 apply(func, args)
```

Passing keyword arguments
```python
 def echo(*args, **kwargs): print args, kwargs
```

```python
 echo(1, 2, a=3, b=4)
```

```python
 pargs = (1, 2)
```

```python
 kargs = {'a':3, 'b':4}
```

```python
 apply(echo, pargs, kargs)
```

apply-Like Call Syntax
```python
 apply(func, args)
```

```python
 func(*args)
```

```python
 echo(*pargs, **kargs)
```

```python
 echo(0, *pargs, **kargs)
```

Applying Functions to Arguments

351
Mapping Functions over Sequences: map
```python
 counters = [1, 2, 3, 4]
```

```python

```

```python
 updated = []
```

```python
 for x in counters:
```

```python
 updated
```

```python
 def inc(x): return x + 10
```

```python
 map(inc, counters)
```

```python
 map((lambda x: x + 3), counters)
```

```python
 def mymap(func, seq):
```

```python
 map(inc, [1, 2, 3])
```

```python
 mymap(inc, [1, 2, 3])
```

352

##Chapter 17: Advanced Function Topics
```python
 pow(3, 4)
```

```python
 map(pow, [1, 2, 3], [2, 3, 4])
```

Functional Programming Tools: ﬁlter and reduce
```python
 range(-5, 5)
```

```python
 filter((lambda x: x &gt; 0), range(-5, 5))
```

Functional Programming Tools: filter and reduce

353
```python
 res = [  ]
```

```python
 for x in range(-5, 5):
```

```python
 res
```

```python
 reduce((lambda x, y: x + y), [1, 2, 3, 4])
```

```python
 reduce((lambda x, y: x * y), [1, 2, 3, 4])
```

```python
 L = [1,2,3,4]
```

```python
 res = L[0]
```

```python
 for x in L[1:]:
```

```python
 res
```

```python
 def myreduce(function, sequence):
```

```python
 myreduce((lambda x, y: x + y), [1, 2, 3, 4, 5])
```

```python
 myreduce((lambda x, y: x * y), [1, 2, 3, 4, 5])
```

```python
 import operator
```

```python
 reduce(operator.add, [2, 4, 6])
```

```python
 reduce((lambda x, y: x + y), [2, 4, 6])
```

354

##Chapter 17: Advanced Function Topics
List Comprehensions Revisited: Mappings
List Comprehension Basics
```python
 ord('s')
```

```python
 res = []
```

```python
 for x in 'spam':
```

```python
 res
```

```python
 res = map(ord, 'spam')
```

```python
 res
```

```python
 res = [ord(x) for x in 'spam']
```

```python
 res
```

List Comprehensions Revisited: Mappings

355
```python
 [x ** 2 for x in range(10)]
```

```python
 map((lambda x: x ** 2), range(10))
```

Adding Tests and Nested Loops
```python
 [x for x in range(5) if x % 2 == 0]
```

```python
 filter((lambda x: x % 2 == 0), range(5))
```

```python
 res = [  ]
```

```python
 for x in range(5):
```

356

##Chapter 17: Advanced Function Topics
```python
 res
```

```python
 [x ** 2 for x in range(10) if x % 2 == 0]
```

```python
 map((lambda x: x**2), filter((lambda x: x % 2 == 0), range(10)))
```

```python
 res = [x + y for x in [0, 1, 2] for y in [100, 200, 300]]
```

```python
 res
```

```python
 res = []
```

```python
 for x in [0, 1, 2]:
```

```python
 res
```

```python
 [x + y for x in 'spam' for y in 'SPAM']
```

List Comprehensions Revisited: Mappings

357
```python
 [(x, y) for x in range(5) if x % 2 == 0 for y in range(5) if y % 2 == 1]
```

```python
 res = []
```

```python
 for x in range(5):
```

```python
 res
```

List Comprehensions and Matrixes
```python
 M = [[1, 2, 3],
```

```python
 N = [[2, 2, 2],
```

```python
 M[1]
```

```python
 M[1][2]
```

358

##Chapter 17: Advanced Function Topics
```python
 [row[1] for row in M]
```

```python
 [M[row][1] for row in (0, 1, 2)]
```

```python
 [M[i][i] for i in range(len(M))]
```

```python
 [M[row][col] * N[row][col] for row in range(3) for col in range(3)]
```

```python
 [[M[row][col] * N[row][col] for col in range(3)] for row in range(3)]
```

```python
 res = []
```

```python
 for row in range(3):
```

```python
 res
```

List Comprehensions Revisited: Mappings

359
Comprehending List Comprehensions
Iterators Revisited: Generators
360

##Chapter 17: Advanced Function Topics
Why You Will Care: List Comprehensions and map
```python
 open('myfile').readlines( )
```

```python
 [line.rstrip( ) for line in open('myfile').readlines( )]
```

```python
 [line.rstrip( ) for line in open('myfile')]
```

```python
 map((lambda line: line.rstrip( )), open('myfile'))
```

```python
 [age for (name, age, job) in listoftuple]
```

```python
 map((lambda (name, age, job): age), listoftuple)
```

Iterators Revisited: Generators

361
Generator Function Example
```python
 def gensquares(N):
```

```python
 for i in gensquares(5):
```

```python

```

362

##Chapter 17: Advanced Function Topics
```python
 x = gensquares(4)
```

```python
 x
```

```python
 x.next( )
```

```python
 x.next( )
```

```python
 x.next( )
```

```python
 x.next( )
```

```python
 x.next( )
```

```python
 def buildsquares(n):
```

```python
 for x in buildsquares(5): print x, ':',
```

```python
 for x in [n**2 for n in range(5)]:
```

```python
 for x in map((lambda x:x**2), range(5)):
```

Iterators Revisited: Generators

363
Extended Generator Function Protocol: send Versus next
Iterators and Built-in Types
```python
 D = {'a':1, 'b':2, 'c':3}
```

```python
 x = iter(D)
```

```python
 x.next( )
```

```python
 x.next( )
```

364

##Chapter 17: Advanced Function Topics
```python
 for key in D:
```

```python
 for line in open('temp.txt'):
```

Generator Expressions: Iterators Meet List Comprehensions
```python
 [x ** 2 for x in range(4)]
```

```python
 (x ** 2 for x in range(4))
```

```python
 G = (x ** 2 for x in range(4))
```

```python
 G.next( )
```

```python
 G.next( )
```

```python
 G.next( )
```

```python
 G.next( )
```

```python
 G.next( )
```

Iterators Revisited: Generators

365
```python
 for num in (x ** 2 for x in range(4)):
```

```python
 sum(x ** 2 for x in range(4))
```

```python
 sorted(x ** 2 for x in range(4))
```

```python
 sorted((x ** 2 for x in range(4)), reverse=True)
```

```python
 import math
```

```python
 map(math.sqrt, (x ** 2 for x in range(4)))
```

Timing Iteration Alternatives
366

##Chapter 17: Advanced Function Topics
Timing Iteration Alternatives

367
368

##Chapter 17: Advanced Function Topics
Function Design Concepts
Function Design Concepts

369
Inputs
Outputs
Functions Are Objects: Indirect Calls
370

##Chapter 17: Advanced Function Topics
```python
 def echo(message):
```

```python
 x = echo
```

```python
 x('Hello world!')
```

```python
 def indirect(func, arg):
```

```python
 indirect(echo, 'Hello jello!')
```

```python
 schedule = [ (echo, 'Spam!'), (echo, 'Ham!') ]
```

```python
 for (func, arg) in schedule:
```

Function Gotchas
Function Gotchas

371
Local Names Are Detected Statically
```python
 X = 99
```

```python
 def selector( ):
```

```python
 selector( )
```

```python
 def selector( ):
```

```python
 selector( )
```

```python
 def selector( ):
```

372

##Chapter 17: Advanced Function Topics
```python
 selector( )
```

```python
 X = 99
```

```python
 def selector( ):
```

```python
 selector( )
```

Defaults and Mutable Objects
```python
 def saver(x=[]):
```

```python
 saver([2])
```

```python
 saver( )
```

```python
 saver( )
```

Function Gotchas

373
```python
 saver( )
```

```python
 def saver(x=None):
```

```python
 saver([2])
```

```python
 saver( )
```

```python
 saver( )
```

374

##Chapter 17: Advanced Function Topics
Functions Without returns
```python
 def proc(x):
```

```python
 x = proc('testing 123...')
```

```python
 print x
```

```python
 list = [1, 2, 3]
```

```python
 list = list.append(4)
```

```python
 print list
```

Enclosing Scope Loop Variables
##Chapter Summary
##Chapter Summary

375
376

##Chapter 17: Advanced Function Topics
##Chapter Quiz
Quiz Answers
##Chapter Quiz

377
378

##Chapter 17: Advanced Function Topics
#Part IV Exercises
#Part IV Exercises

379
```python
 f1(1, 2)
```

    ```python
 f1(b=2, a=1)
```

    ```python
 f2(1, 2, 3)
```

    ```python
 f3(1, x=2, y=3)
```

    ```python
 f4(1, 2, 3, x=2, y=3)
```

    ```python
 f5(1)
```

    ```python
 f5(1, 4)
```

    ```python
 f6(1)
```

    ```python
 f6(1, 3, 4)
```

380

##Chapter 17: Advanced Function Topics
#Part IV Exercises

381
PART V
V.Modules
CHAPTER 18
Modules: The Big Picture18
Why Use Modules?
385
Python Program Architecture
386

##Chapter 18: Modules: The Big Picture
How to Structure a Program
Imports and Attributes
Python Program Architecture

387
388

##Chapter 18: Modules: The Big Picture
Standard Library Modules
How Imports Work
How Imports Work

389
1. Find It
The module search path
390

##Chapter 18: Modules: The Big Picture
How Imports Work

391
The sys.path list
392

##Chapter 18: Modules: The Big Picture
Module ﬁle selection
Advanced module selection concepts
How Imports Work

393
2. Compile It (Maybe)
3. Run It
394

##Chapter 18: Modules: The Big Picture
Third-#Party Software: distutils
##Chapter Summary
##Chapter Summary

395
396

##Chapter 18: Modules: The Big Picture
##Chapter Quiz
Quiz Answers
##Chapter Quiz

397
CHAPTER 19
Module Coding Basics
19
Module Creation
398
Module Usage
The import Statement
```python
 import module1
```

```python
 module1.printer('Hello world!')
```

Module Usage

399
The from statement
```python
 from module1 import printer
```

```python
 printer('Hello world!')
```

The from * Statement
```python
 from module1 import *
```

```python
 printer('Hello world!')
```

Imports Happen Only Once
400

##Chapter 19: Module Coding Basics
```python
 import simple
```

```python
 simple.spam
```

```python
 simple.spam = 2
```

```python
 import simple
```

```python
 simple.spam
```

import and from Are Assignments
```python
 from small import x, y
```

```python
 x = 42
```

```python
 y[0] = 42
```

Module Usage

401
```python
 import small
```

```python
 small.x
```

```python
 small.y
```

Cross-File Name Changes
```python
 from small import x, y
```

```python
 x = 42
```

```python
 import small
```

```python
 small.x = 42
```

import and from Equivalence
402

##Chapter 19: Module Coding Basics
Potential Pitfalls of the from Statement
Module Usage

403
When import is required
Module Namespaces
404

##Chapter 19: Module Coding Basics
Files Generate Namespaces
Module Namespaces

405
```python
 import module2
```

```python
 module2.sys
```

```python
 module2.name
```

```python
 module2.func
```

```python
 module2.klass
```

```python
 module2._ _dict_ _.keys( )
```

Attribute Name Qualiﬁcation
406

##Chapter 19: Module Coding Basics
Imports Versus Scopes
Module Namespaces

407
Namespace Nesting
408

##Chapter 19: Module Coding Basics
Reloading Modules
Reloading Modules

409
reload Basics
410

##Chapter 19: Module Coding Basics
reload Example
```python
 import changer
```

```python
 changer.printer( )
```

```python
 import changer
```

```python
 changer.printer( )
```

Reloading Modules

411
```python
 reload(changer)
```

```python
 changer.printer( )
```

Why You Will Care: Module Reloads
##Chapter Summary
412

##Chapter 19: Module Coding Basics
##Chapter Summary

413
##Chapter Quiz
Quiz Answers
414

##Chapter 19: Module Coding Basics
CHAPTER 20
Module Packages20
Package Import Basics
415
Packages and Search Path Settings
Package _ _init_ _.py Files
416

##Chapter 20: Module Packages
Package Import Basics

417
Package Import Example
```python
 import dir1.dir2.mod
```

```python

```

418

##Chapter 20: Module Packages
```python
 import dir1.dir2.mod
```

```python

```

```python
 reload(dir1)
```

```python

```

```python
 reload(dir1.dir2)
```

```python
 dir1
```

```python
 dir1.dir2
```

```python
 dir1.dir2.mod
```

```python
 dir1.x
```

```python
 dir1.dir2.y
```

```python
 dir1.dir2.mod.z
```

from Versus import with Packages
```python
 dir2.mod
```

```python
 mod.z
```

Package Import Example

419
```python
 from dir1.dir2 import mod
```

```python
 mod.z
```

```python
 from dir1.dir2.mod import z
```

```python
 z
```

```python
 import dir1.dir2.mod as mod
```

```python
 mod.z
```

Why Use Package Imports?
420

##Chapter 20: Module Packages
A Tale of Three Systems
Why Use Package Imports?

421
422

##Chapter 20: Module Packages
Why You Will Care: Module Packages
Why Use Package Imports?

423
##Chapter Summary
424

##Chapter 20: Module Packages
##Chapter Quiz
Quiz Answers
##Chapter Quiz

425
CHAPTER 21
Advanced Module Topics
21
Data Hiding in Modules
Minimizing from * Damage: _X and _ _all_ _
426
Enabling Future Language Features
Enabling Future Language Features

427
Mixed Usage Modes: _ _name_ _ and _ _main_ _
```python
 import runme
```

```python
 runme.tester( )
```

428

##Chapter 21: Advanced Module Topics
Unit Tests with _ _name_ _
Mixed Usage Modes: _ _name_ _ and _ _main_ _

429
```python
 import min
```

```python
 min.minmax(min.lessthan, 's', 'p', 'a', 'm')
```

Changing the Module Search Path
```python
 import sys
```

```python
 sys.path
```

```python
 sys.path.append('C:\\sourcedir')
```

```python
 import string
```

```python
 sys.path = [r'd:\temp']
```

```python
 sys.path.append('c:\\lp3e\\examples')
```

```python
 sys.path
```

```python
 import string
```

430

##Chapter 21: Advanced Module Topics
The import as Extension
Relative Import Syntax
Relative Import Syntax

431
Why Relative Imports?
432

##Chapter 21: Advanced Module Topics
Relative Import Syntax

433
Module Design Concepts
434

##Chapter 21: Advanced Module Topics
Modules
Other modules
Other modules
Modules Are Objects: Metaprograms
Module Design Concepts

435
436

##Chapter 21: Advanced Module Topics
Module Gotchas
Statement Order Matters in Top-Level Code
Module Gotchas

437
Importing Modules by Name String
```python
 import &quot;string&quot;
```

438

##Chapter 21: Advanced Module Topics
```python
 modname = &quot;string&quot;
```

```python
 exec &quot;import &quot; + modname
```

```python
 string
```

```python
 modname = &quot;string&quot;
```

```python
 string = _ _import_ _(modname)
```

```python
 string
```

from Copies Names but Doesn’t Link
Module Gotchas

439
from * Can Obscure the Meaning of Variables
```python
 from module1 import *
```

```python
 from module2 import *
```

```python
 from module3 import *
```

```python
 . . .
```

```python
 func( )
```

reload May Not Impact from Imports
440

##Chapter 21: Advanced Module Topics
reload, from, and Interactive Testing
Module Gotchas

441
reload Isn’t Applied Transitively
```python
 . . .
```

```python
 reload(A)
```

442

##Chapter 21: Advanced Module Topics
Recursive from Imports May Not Work
Module Gotchas

443
```python
 import recur1
```

##Chapter Summary
444

##Chapter 21: Advanced Module Topics
##Chapter Quiz
Quiz Answers
##Chapter Quiz

445
#Part V Exercises
446

##Chapter 21: Advanced Module Topics
#Part V Exercises

447
PART VI
VI.Classes and OOP
CHAPTER 22
OOP: The Big Picture22
451
Why Use Classes?
452

##Chapter 22: OOP: The Big Picture
OOP from 30,000 Feet
Attribute Inheritance Search
OOP from 30,000 Feet

453
C2
I1
C1
C3
I2
454

##Chapter 22: OOP: The Big Picture
Classes and Instances
OOP from 30,000 Feet

455
Class Method Calls
Coding Class Trees
456

##Chapter 22: OOP: The Big Picture
OOP from 30,000 Feet

457
458

##Chapter 22: OOP: The Big Picture
OOP Is About Code Reuse
OOP from 30,000 Feet

459
460

##Chapter 22: OOP: The Big Picture
OOP from 30,000 Feet

461
##Chapter Summary
462

##Chapter 22: OOP: The Big Picture
##Chapter Quiz
Quiz Answers
##Chapter Quiz

463
464

##Chapter 22: OOP: The Big Picture
CHAPTER 23
Class Coding Basics23
Classes Generate Multiple Instance Objects
465
Class Objects Provide Default Behavior
Instance Objects Are Concrete Items
466

##Chapter 23: Class Coding Basics
A First Example
```python
 class FirstClass:
```

```python
 x = FirstClass( )
```

```python
 y = FirstClass( )
```

```python
 x.setdata(&quot;King Arthur&quot;)
```

```python
 y.setdata(3.14159)
```

Classes Generate Multiple Instance Objects

467
```python
 x.display( )
```

```python
 y.display( )
```

```python
 x.data = &quot;New value&quot;
```

```python
 x.display( )
```

468

##Chapter 23: Class Coding Basics
```python
 x.anothername = &quot;spam&quot;
```

Classes Are Customized by Inheritance
Classes Are Customized by Inheritance

469
A Second Example
```python
 class SecondClass(FirstClass):
```

```python
 z = SecondClass( )
```

```python
 z.setdata(42)
```

```python
 z.display( )
```

```python
 x.display( )
```

470

##Chapter 23: Class Coding Basics
Classes Are Attributes in Modules
Classes Are Customized by Inheritance

471
Classes Can Intercept Python Operators
472

##Chapter 23: Class Coding Basics
Classes Can Intercept Python Operators

473
A Third Example
```python
 class ThirdClass(SecondClass):
```

```python
 a = ThirdClass(&quot;abc&quot;)
```

```python
 a.display( )
```

```python
 b = a + 'xyz'
```

```python
 b.display( )
```

```python
 a * 3
```

```python
 a.display( )
```

474

##Chapter 23: Class Coding Basics
Why Use Operator Overloading?
Classes Can Intercept Python Operators

475
The World’s Simplest Python Class
```python
 class rec: pass
```

```python
 rec.name = 'Bob'
```

```python
 rec.age  = 40
```

```python
 print rec.name
```

```python
 x = rec( )
```

```python
 y = rec( )
```

```python
 x.name, y.name
```

476

##Chapter 23: Class Coding Basics
```python
 x.name = 'Sue'
```

```python
 rec.name, x.name, y.name
```

```python
 rec._ _dict_ _.keys( )
```

```python
 x._ _dict_ _.keys( )
```

```python
 y._ _dict_ _.keys( )
```

```python
 x._ _class_ _
```

```python
 def upperName(self):
```

The World’s Simplest Python Class

477
```python
 rec.method = upperName
```

```python
 x.method( )
```

```python
 y.method( )
```

```python
 rec.method(x)
```

##Chapter Summary
478

##Chapter 23: Class Coding Basics
##Chapter Quiz
Quiz Answers
##Chapter Quiz

479
480

##Chapter 23: Class Coding Basics
CHAPTER 24
Class Coding Details24
The class Statement
General Form
481
Example
```python
 class SharedData:
```

```python
 x = SharedData( )
```

```python
 y = SharedData( )
```

```python
 x.spam, y.spam
```

482

##Chapter 24: Class Coding Details
```python
 SharedData.spam = 99
```

```python
 x.spam, y.spam, SharedData.spam
```

```python
 x.spam = 88
```

```python
 x.spam, y.spam, SharedData.spam
```

```python
 x = MixedNames(1)
```

```python
 y = MixedNames(2)
```

```python
 x.display( ); y.display( )
```

The class Statement

483
Methods
484

##Chapter 24: Class Coding Details
Example
```python
 x = NextClass( )
```

```python
 x.printer('instance call')
```

```python
 x.message
```

```python
 NextClass.printer(x, 'class call')
```

```python
 x.message
```

```python
 NextClass.printer('bad call')
```

Methods

485
Calling Superclass Constructors
Other Method Call Possibilities
Inheritance
486

##Chapter 24: Class Coding Details
Attribute Tree Construction
Inheritance

487
Specializing Inherited Methods
```python
 class Super:
```

```python
 class Sub(Super):
```

```python
 x = Super( )
```

```python
 x.method( )
```

```python
 x = Sub( )
```

```python
 x.method( )
```

488

##Chapter 24: Class Coding Details
Class Inter face Techniques
Inheritance

489
Abstract Superclasses
490

##Chapter 24: Class Coding Details
Operator Overloading
```python
 from number import Number
```

```python
 X = Number(5)
```

```python
 Y = X - 2
```

```python
 Y.data
```

Operator Overloading

491
Common Operator Overloading Methods
Method
Overloads
Called for
492

##Chapter 24: Class Coding Details
_ _getitem_ _ Intercepts Index References
```python
 class indexer:
```

```python
 X = indexer( )
```

```python
 X[2]
```

```python
 for i in range(5):
```

_ _getitem_ _ and _ _iter_ _ Implement Iteration
```python
 class stepper:
```

```python
 X = stepper( )
```

```python
 X.data = &quot;Spam&quot;
```

```python

```

```python
 X[1]
```

```python
 for item in X:
```

Operator Overloading

493
```python
 'p' in X
```

```python
 [c for c in X]
```

```python
 map(None, X)
```

```python
 (a, b, c, d) = X
```

```python
 a, c, d
```

```python
 list(X), tuple(X), ''.join(X)
```

```python
 X
```

User-Deﬁned Iterators
494

##Chapter 24: Class Coding Details
```python
 from iters import Squares
```

```python
 for i in Squares(1, 5):
```

```python
 X = Squares(1, 5)
```

```python
 X[1]
```

```python
 X = Squares(1, 5)
```

```python
 [n for n in X]
```

```python
 [n for n in X]
```

```python
 [n for n in Squares(1, 5)]
```

```python
 list(Squares(1, 3))
```

Operator Overloading

495
```python
 from _ _future_ _ import generators
```

```python

```

```python
 def gsquares(start, stop):
```

```python
 for i in gsquares(1, 5):
```

```python
 [x ** 2 for x in range(1, 6)]
```

Multiple iterators on one object
```python
 S = 'ace'
```

```python
 for x in S:
```

496

##Chapter 24: Class Coding Details
```python
 S = 'abcdef'
```

```python
 for x in S[::2]:
```

Operator Overloading

497
```python
 S = 'abcdef'
```

```python
 S = S[::2]
```

```python
 S
```

```python
 for x in S:
```

_ _getattr_ _ and _ _setattr_ _ Catch Attribute References
```python
 class empty:
```

```python
 X = empty( )
```

```python
 X.age
```

```python
 X.name
```

498

##Chapter 24: Class Coding Details
```python
 class accesscontrol:
```

```python
 X = accesscontrol( )
```

```python
 X.age = 40
```

```python
 X.age
```

```python
 X.name = 'mel'
```

Emulating Privacy for Instance Attributes
Operator Overloading

499
_ _repr_ _ and _ _str_ _ Return String Representations
```python
 class adder:
```

500

##Chapter 24: Class Coding Details
```python
 class addrepr(adder):
```

```python
 x = addrepr(2)
```

```python
 x + 1
```

```python
 x
```

```python
 print x
```

```python
 str(x), repr(x)
```

```python
 class addstr(adder):
```

```python
 x = addstr(3)
```

```python
 x + 1
```

```python
 x
```

```python
 print x
```

```python
 str(x), repr(x)
```

```python
 class addboth(adder):
```

```python
 x = addboth(4)
```

```python
 x + 1
```

```python
 x
```

```python
 print x
```

```python
 str(x), repr(x)
```

Operator Overloading

501
_ _radd_ _ Handles Right-Side Addition
```python
 class Commuter:
```

```python
 x = Commuter(88)
```

```python
 y = Commuter(99)
```

```python
 x + 1
```

```python
 1 + y
```

```python
 x + y
```

_ _call_ _ Intercepts Calls
502

##Chapter 24: Class Coding Details
```python
 class Prod:
```

```python
 x = Prod(2)
```

```python
 x(3)
```

```python
 x(4)
```

```python
 class Prod:
```

```python
 x = Prod(3)
```

```python
 x.comp(3)
```

```python
 x.comp(4)
```

Function Inter faces and Callback-Based Code
Operator Overloading

503
504

##Chapter 24: Class Coding Details
_ _del_ _ Is a Destructor
```python
 class Life:
```

```python
 brian = Life('Brian')
```

```python
 brian = 'loretta'
```

Operator Overloading

505
Namespaces: The Whole Story
Simple Names: Global Unless Assigned
Attribute Names: Object Namespaces
The “Zen” of Python Namespaces: Assignments Classify Names
506

##Chapter 24: Class Coding Details
Namespaces: The Whole Story

507
Namespace Dictionaries
508

##Chapter 24: Class Coding Details
```python
 class super:
```

```python
 class sub(super):
```

```python
 X = sub( )
```

```python
 X._ _dict_ _
```

```python
 X._ _class_ _
```

```python
 sub._ _bases_ _
```

```python
 super._ _bases_ _
```

```python
 Y = sub( )
```

```python
 X.hello( )
```

```python
 X._ _dict_ _
```

```python
 X.hola( )
```

```python
 X._ _dict_ _
```

```python
 sub._ _dict_ _
```

Namespaces: The Whole Story

509
```python
 super._ _dict_ _
```

```python
 sub.__dict__.keys( ), super._ _dict_ _.keys( )
```

```python
 Y._ _dict_ _
```

```python
 X.data1, X._ _dict_ _['data1']
```

```python
 X.data3 = 'toast'
```

```python
 X._ _dict_ _
```

```python
 X._ _dict_ _['data3'] = 'ham'
```

```python
 X.data3
```

510

##Chapter 24: Class Coding Details
```python
 X._ _dict_ _
```

```python
 X._ _dict_ _.keys( )
```

```python
&gt; dir(X)
```

```python
 dir(sub)
```

```python
 dir(super)
```

Namespace Links
Namespaces: The Whole Story

511
```python
 class Emp: pass
```

```python
 class Person(Emp): pass
```

```python
 bob = Person( )
```

```python
 import classtree
```

```python
 classtree.instancetree(bob)
```

A More Realistic Example
512

##Chapter 24: Class Coding Details
A More Realistic Example

513
```python
 from person import Person
```

```python
 ann = Person('Ann Smith', 45)
```

```python
 ann.lastName( )
```

```python
 ann.birthDay( )
```

```python
 ann.age
```

```python
 print ann
```

514

##Chapter 24: Class Coding Details
##Chapter Summary
##Chapter Summary

515
##Chapter Quiz
Quiz Answers
516

##Chapter 24: Class Coding Details
##Chapter Quiz

517
CHAPTER 25
Designing with Classes
25
Python and OOP
518
Overloading by Call Signatures (or Not)
Classes As Records
```python
 rec = {}
```

```python
 rec['name'] = 'mel'
```

```python
 rec['age']  = 40
```

```python
 rec['job']  = 'trainer/writer'
```

```python

```

```python
 print rec['name']
```

Classes As Records

519
```python
 class rec: pass
```

```python
 rec.name = 'mel'
```

```python
 rec.age  = 40
```

```python
 rec.job  = 'trainer/writer'
```

```python

```

```python
 print rec.age
```

```python
 class rec: pass
```

```python
 pers1 = rec( )
```

```python
 pers1.name = 'mel'
```

```python
 pers1.job  = 'trainer'
```

```python
 pers1.age   = 40
```

```python

```

```python
 pers2 = rec( )
```

```python
 pers2.name = 'dave'
```

```python
 pers2.job  = 'developer'
```

```python

```

```python
 pers1.name, pers2.name
```

```python
 class Person:
```

520

##Chapter 25: Designing with Classes
```python
 mark = Person('ml', 'trainer')
```

```python
 dave = Person('da', 'developer')
```

```python

```

```python
 mark.job, dave.info( )
```

OOP and Inheritance: “Is-a” Relationships
OOP and Inheritance: “Is-a” Relationships

521
522

##Chapter 25: Designing with Classes
OOP and Composition: “Has-a” Relationships
OOP and Composition: “Has-a” Relationships

523
Stream Processors Revisited
524

##Chapter 25: Designing with Classes
OOP and Composition: “Has-a” Relationships

525
```python
 import converters
```

```python
 prog = converters.Uppercase(open('spam.txt'), open('spamup.txt', 'w'))
```

```python
 prog.process( )
```

```python
 from converters import Uppercase
```

```python

```

```python
 class HTMLize:
```

```python
 Uppercase(open('spam.txt'), HTMLize( )).process( )
```

526

##Chapter 25: Designing with Classes
Why You Will Care: Classes and Persistence
OOP and Delegation
OOP and Delegation

527
```python
 from trace import wrapper
```

```python
 x = wrapper([1,2,3])
```

```python
 x.append(4)
```

```python
 x.wrapped
```

```python
 x = wrapper({&quot;a&quot;: 1, &quot;b&quot;: 2})
```

```python
 x.keys( )
```

528

##Chapter 25: Designing with Classes
Multiple Inheritance
```python
 class Spam:
```

```python
 X = Spam( )
```

```python
 print X
```

Multiple Inheritance

529
```python
 from mytools import Lister
```

```python
 class Spam(Lister):
```

```python
 x = Spam( )
```

```python
 x
```

530

##Chapter 25: Designing with Classes
```python
 from mytools import Lister
```

```python
 class x(Lister):
```

```python
 t = x( )
```

```python
 t.a = 1; t.b = 2; t.c = 3
```

```python
 t
```

Multiple Inheritance

531
Classes Are Objects: Generic Object Factories
532

##Chapter 25: Designing with Classes
Why Factories?
Classes Are Objects: Generic Object Factories

533
Methods Are Objects: Bound or Unbound
534

##Chapter 25: Designing with Classes
Documentation Strings Revisited
Documentation Strings Revisited

535
Why You Will Care: Bound Methods and Callbacks
```python
 import docstr
```

```python
 docstr._ _doc_ _
```

```python
 docstr.spam._ _doc_ _
```

```python
 docstr.spam.method._ _doc_ _
```

536

##Chapter 25: Designing with Classes
```python
 docstr.func._ _doc_ _
```

Classes Versus Modules
##Chapter Summary
##Chapter Summary

537
##Chapter Quiz
Quiz Answers
538

##Chapter 25: Designing with Classes
CHAPTER 26
Advanced Class Topics26
Extending Built-in Types
539
Extending Types by Embedding
Extending Types by Subclassing
540

##Chapter 26: Advanced Class Topics
Extending Built-in Types

541
542

##Chapter 26: Advanced Class Topics
Pseudoprivate Class Attributes
Name Mangling Overview
Pseudoprivate Class Attributes

543
Why Use Pseudoprivate Attributes?
544

##Chapter 26: Advanced Class Topics
New-Style Classes
New-Style Classes

545
Diamond Inheritance Change
546

##Chapter 26: Advanced Class Topics
Diamond inheritance example
```python
 class A:      attr = 1
```

```python
 class B(A):   pass
```

```python
 class C(A):   attr = 2
```

```python
 class D(B,C): pass
```

```python
 x = D( )
```

```python
 x.attr
```

```python
 class A(object): attr = 1
```

```python
 class B(A):      pass
```

```python
 class C(A):      attr = 2
```

```python
 class D(B,C):    pass
```

```python
 x = D( )
```

```python
 x.attr
```

Explicit conﬂict resolution
```python
 class A:      attr = 1
```

```python
 class B(A):   pass
```

```python
 class C(A):   attr = 2
```

```python
 class D(B,C): attr = C.attr
```

```python
 x = D( )
```

```python
 x.attr
```

New-Style Classes

547
```python
 class A(object): attr = 1
```

```python
 class B(A):      pass
```

```python
 class C(A):      attr = 2
```

```python
 class D(B,C):    attr = B.attr
```

```python
 x = D( )
```

```python
 x.attr
```

```python
 class A:
```

```python
 class C(A):
```

```python
 class B(A):
```

```python
 class D(B,C): pass
```

```python
 x = D( )
```

```python
 x.meth( )
```

```python
 class D(B,C): meth = C.meth
```

```python
 x = D( )
```

```python
 x.meth( )
```

```python
 class D(B,C): meth = B.meth
```

```python
 x = D( )
```

```python
 x.meth( )
```

548

##Chapter 26: Advanced Class Topics
Other New-Style Class Extensions
Static and class methods
Instance slots
```python
 class limiter(object):
```

New-Style Classes

549
```python
 x = limiter( )
```

```python
 x.age
```

```python
 x.age = 40
```

```python
 x.age
```

```python
 x.ape = 1000
```

Class properties
```python
 class classic:
```

550

##Chapter 26: Advanced Class Topics
```python
 x = classic( )
```

```python
 x.age
```

```python
 x.name
```

```python
 class newprops(object):
```

```python
 x = newprops( )
```

```python
 x.age
```

```python
 x.name
```

```python
 class newprops(object):
```

```python
 x = newprops( )
```

```python
 x.age
```

```python
 x.age = 42
```

```python
 x._age
```

```python
 x.job = 'trainer'
```

```python
 x.job
```

```python
 class classic:
```

New-Style Classes

551
```python
 x = classic( )
```

```python
 x.age
```

```python
 x.age = 41
```

```python
 x._age
```

```python
 x.job = 'trainer'
```

```python
 x.job
```

New _ _getattribute_ _ overloading method
Static and Class Methods
552

##Chapter 26: Advanced Class Topics
```python
 from spam import *
```

```python
 a = Spam( )
```

```python
 b = Spam( )
```

```python
 c = Spam( )
```

```python
 Spam.printNumInstances( )
```

```python
 import spam
```

```python
 a = spam.Spam( )
```

```python
 b = spam.Spam( )
```

```python
 c = spam.Spam( )
```

Static and Class Methods

553
```python
 spam.printNumInstances( )
```

```python
 spam.Spam.numInstances
```

```python
 from spam import Spam
```

```python
 a, b, c = Spam(), Spam( ), Spam( )
```

```python
 a.printNumInstances( )
```

```python
 b.printNumInstances( )
```

```python
 Spam( ).printNumInstances( )
```

Using Static and Class Methods
554

##Chapter 26: Advanced Class Topics
```python
 obj = Multi( )
```

```python
 obj.imeth(1)
```

```python
 Multi.imeth(obj, 2)
```

```python
 Multi.smeth(3)
```

```python
 obj.smeth(4)
```

```python
 Multi.cmeth(5)
```

```python
 obj.cmeth(6)
```

Static and Class Methods

555
```python
 a = Spam( )
```

```python
 b = Spam( )
```

```python
 c = Spam( )
```

```python
 Spam.printNumInstances( )
```

```python
 a.printNumInstances( )
```

Function Decorators
556

##Chapter 26: Advanced Class Topics
Function Decorators

557
Decorator Example
558

##Chapter 26: Advanced Class Topics
Class Gotchas
Changing Class Attributes Can Have Side Effects
```python
 class X:
```

```python
 I = X( )
```

```python
 I.a
```

```python
 X.a
```

```python
 X.a = 2
```

```python
 I.a
```

```python
 J = X( )
```

```python
 J.a
```

Class Gotchas

559
Multiple Inheritance: Order Matters
560

##Chapter 26: Advanced Class Topics
Methods, Classes, and Nested Scopes
Class Gotchas

561
562

##Chapter 26: Advanced Class Topics
“Overwrapping-itis”
Class Gotchas

563
##Chapter Summary
564

##Chapter 26: Advanced Class Topics
##Chapter Quiz
Quiz Answers
##Chapter Quiz

565
#Part VI Exercises
566

##Chapter 26: Advanced Class Topics
#Part VI Exercises

567
568

##Chapter 26: Advanced Class Topics
    ```python
 from zoo import Cat, Hacker
```

    ```python
 spot = Cat( )
```

    ```python
 spot.reply( )
```

    ```python
 data = Hacker( )
```

    ```python
 data.reply( )
```

#Part VI Exercises

569
    ```python
 import parrot
```

    ```python
 parrot.Scene( ).action( )
```

570

##Chapter 26: Advanced Class Topics
Why You Will Care: OOP by the Masters
#Part VI Exercises

571
572

##Chapter 26: Advanced Class Topics
PART VII
VII.Exceptions and Tools
CHAPTER 27
Exception Basics27
575
Why Use Exceptions?
Exception Roles
576

##Chapter 27: Exception Basics
Exception Handling: The Short Story
```python
 def fetcher(obj, index):
```

```python
 x = 'spam'
```

```python
 fetcher(x, 3)
```

Exception Handling: The Short Story

577
```python
 fetcher(x, 4)
```

```python
 try:
```

```python

```

```python
 def catcher( ):
```

```python
 catcher( )
```

```python

```

578

##Chapter 27: Exception Basics
```python
 bad = 'bad'
```

```python
 try:
```

```python
 raise bad
```

```python
 class Bad(Exception): pass
```

```python
 def doomed( ): raise Bad( )
```

```python
 try:
```

```python

```

```python
 try:
```

Exception Handling: The Short Story

579
```python
 def after( ):
```

```python
 after( )
```

```python
 def after( ):
```

```python
 after( )
```

```python

```

580

##Chapter 27: Exception Basics
The try/except/else Statement
The try/except/else Statement

581
try Statement Clauses
582

##Chapter 27: Exception Basics
Clause form
Interpretation
The try/except/else Statement

583
584

##Chapter 27: Exception Basics
The try/else Clause
Example: Default Behavior
The try/except/else Statement

585
Example: Catching Built-in Exceptions
586

##Chapter 27: Exception Basics
The try/ﬁnally Statement
The try/finally Statement

587
Example: Coding Termination Actions with try/ﬁnally
588

##Chapter 27: Exception Basics
Uniﬁed try/except/ﬁnally
Unified try/except/finally

589
Combining ﬁnally and except by Nesting
590

##Chapter 27: Exception Basics
Uniﬁed try Example
Unified try/except/finally

591
The raise Statement
592

##Chapter 27: Exception Basics
Example: Raising and Catching User-Deﬁned Exceptions
Example: Passing Extra Data with raise
The raise Statement

593
```python
 from raisedata import *
```

```python
 tryer(raiser1)
```

```python
 tryer(raiser2)
```

Example: Propagating Exceptions with raise
```python
 try:
```

594

##Chapter 27: Exception Basics
The assert Statement
Example: Trapping Constraints (but Not Errors)
```python
 import asserter
```

```python
 asserter.f(1)
```

The assert Statement

595
with/as Context Managers
Basic Usage
596

##Chapter 27: Exception Basics
with/as Context Managers

597
The Context Management Protocol
598

##Chapter 27: Exception Basics
Why You Will Care: Error Checks
with/as Context Managers

599
##Chapter Summary
600

##Chapter 27: Exception Basics
##Chapter Quiz
Quiz Answers
##Chapter Quiz

601
CHAPTER 28
Exception Objects
28
602
String-Based Exceptions
```python
 myexc = &quot;My exception string&quot;
```

```python
 try:
```

```python
 raise myexc
```

String Exceptions Are Right Out!
```python
 myexc = 'My exception string'
```

```python
 try:
```

String-Based Exceptions

603
Class-Based Exceptions
Class Exception Example
604

##Chapter 28: Exception Objects
Class-Based Exceptions

605
Why Class Exceptions?
606

##Chapter 28: Exception Objects
Class-Based Exceptions

607
608

##Chapter 28: Exception Objects
Built-in Exception Classes
```python
 import exceptions
```

```python
 help(exceptions)
```

Class-Based Exceptions

609
Specifying Exception Text
```python
 class MyBad: pass
```

```python
 raise MyBad( )
```

```python
 class MyBad:
```

```python
 raise MyBad( )
```

610

##Chapter 28: Exception Objects
```python
 class MyBad(Exception): pass
```

```python
 raise MyBad( )
```

```python
 class MyBad(Exception): pass
```

```python
 raise MyBad('the', 'bright', 'side', 'of', 'life')
```

Sending Extra Data and Behavior in Instances
Example: Extra data with classes and strings
```python
 class FormatError:
```

Class-Based Exceptions

611
```python
 def parser( ):
```

```python
 try:
```

```python
 formatError = 'formatError'
```

```python
 def parser( ):
```

```python
 try:
```

612

##Chapter 28: Exception Objects
General raise Statement Forms
General raise Statement Forms

613
614

##Chapter 28: Exception Objects
##Chapter Summary
##Chapter Summary

615
##Chapter Quiz
Quiz Answers
616

##Chapter 28: Exception Objects
CHAPTER 29
Designing with Exceptions29
Nesting Exception Handlers
617
618

##Chapter 29: Designing with Exceptions
Example: Control-Flow Nesting
Example: Syntactic Nesting
Nesting Exception Handlers

619
```python
 try:
```

620

##Chapter 29: Designing with Exceptions
Exception Idioms
Exceptions Aren’t Always Errors
Exception Idioms

621
Functions Signal Conditions with raise
Debugging with Outer try Statements
622

##Chapter 29: Designing with Exceptions
Running In-Process Tests
Exception Idioms

623
More on sys.exc_info
Exception Design Tips
What Should Be Wrapped
624

##Chapter 29: Designing with Exceptions
Catching Too Much: Avoid Empty excepts
Exception Design Tips

625
626

##Chapter 29: Designing with Exceptions
Catching Too Little: Use Class-Based Categories
Exception Gotchas
Exception Gotchas

627
String Exceptions Match by Identity, Not by Value
```python
 ex1 = 'The Spanish Inquisition'
```

```python
 ex2 = 'The Spanish Inquisition'
```

```python
 ex1 == ex2, ex1 is ex2
```

```python
 try:
```

```python
 try:
```

```python
 try:
```

628

##Chapter 29: Designing with Exceptions
```python
 try:
```

Catching the Wrong Thing
Core Language Summary
Core Language Summary

629
The Python Toolset
Category
Examples
630

##Chapter 29: Designing with Exceptions
Development Tools for Larger Projects
Core Language Summary

631
632

##Chapter 29: Designing with Exceptions
Core Language Summary

633
##Chapter Summary
634

##Chapter 29: Designing with Exceptions
##Chapter Quiz
Quiz Answers
##Chapter Quiz

635
#Part VII Exercises
636

##Chapter 29: Designing with Exceptions
PART VIII
VIII.Appendixes
APPENDIX A
Installation and Conﬁguration1
Installing the Python Interpreter
Is Python Already Present?
Where to Fetch Python
639
Installation Steps
640

Appendix A:
Installation and Configuration
Conﬁguring Python
Configuring Python

641
The Python 2.5 MSI Installer on Windows Vista
Python Environment Variables
Variable
Role
642

Appendix A:
Installation and Configuration
Configuring Python

643
Getting Tkinter (and IDLE) GUI Support on Linux
How to Set Conﬁguration Options
Unix/Linux shell variables
DOS variables (Windows)
644

Appendix A:
Installation and Configuration
Other Windows options
Path ﬁles
Configuring Python

645
APPENDIX B
Solutions to End-of-#Part Exercises
2
#Part I, Getting Started
```python
 &quot;Hello World!&quot;
```

```python

```

```python
 import module1
```

```python

```

646
```python
 1 / 0
```

```python

```

```python
 x
```

#Part I, Getting Started

647
#Part II, Types and Operations
```python
 2 ** 16
```

```python
 2 / 5, 2 / 5.0
```

```python
 &quot;spam&quot; + &quot;eggs&quot;
```

648

Appendix B: Solutions to End-of-#Part Exercises
```python
 S = &quot;ham&quot;
```

```python
 &quot;eggs &quot; + S
```

```python
 S * 5
```

```python
 S[:0]
```

```python
 &quot;green %s and %s&quot; % (&quot;eggs&quot;, S) # Formatting
```

```python
 ('x',)[0]
```

```python
 ('x', 'y')[1]
```

```python
 L = [1,2,3] + [4,5,6]
```

```python
 L, L[:], L[:0], L[-2], L[-2:]
```

```python
 ([1,2,3]+[4,5,6])[2:4]
```

```python
 [L[2], L[3]]
```

```python
 L.reverse( ); L
```

```python
 L.sort( ); L
```

```python
 L.index(4)
```

```python
 {'a':1, 'b':2}['b']
```

```python
 D = {'x':1, 'y':2, 'z':3}
```

```python
 D['w'] = 0
```

```python
 D['x'] + D['w']
```

```python
 D[(1,2,3)] = 4
```

```python
 D
```

```python
 D.keys( ), D.values( ), D.has_key((1,2,3))    # Methods
```

```python
 [[]], [&quot;&quot;,[],( ),{},None]
```

#Part II, Types and Operations

649
```python
 L = [1, 2, 3, 4]
```

```python
 L[4]
```

```python
 L[-1000:100]
```

```python
 L[3:1]
```

```python
 L
```

```python
 L[3:1] = ['?']
```

```python
 L
```

```python
 L = [1,2,3,4]
```

```python
 L[2] = []
```

```python
 L
```

```python
 L[2:3] = []
```

```python
 L
```

```python
 del L[0]
```

```python
 L
```

```python
 del L[1:]
```

```python
 L
```

```python
 L[1:2] = 1
```

650

Appendix B: Solutions to End-of-#Part Exercises
```python
 X = 'spam'
```

```python
 Y = 'eggs'
```

```python
 X, Y = Y, X
```

```python
 X
```

```python
 Y
```

```python
 D = {}
```

```python
 D[1] = 'a'
```

```python
 D[2] = 'b'
```

```python
 D[(1, 2, 3)] = 'c'
```

```python
 D
```

```python
 D = {'a':1, 'b':2, 'c':3}
```

```python
 D['a']
```

```python
 D['d']
```

```python
 D['d'] = 4
```

```python
 D
```

```python

```

```python
 L = [0, 1]
```

```python
 L[2]
```

```python
 L[2] = 3
```

#Part II, Types and Operations

651
```python
 &quot;x&quot; + 1
```

```python

```

```python
 {} + {}
```

```python

```

```python
 [].append(9)
```

```python
 &quot;&quot;.append('s')
```

```python

```

```python
 {}.keys( )
```

```python
 [].keys( )
```

```python

```

```python
 [][:]
```

```python
 &quot;&quot;[:]
```

```python
 S = &quot;spam&quot;
```

```python
 S[0][0][0][0][0]
```

```python
 L = ['s', 'p']
```

```python
 L[0][0][0]
```

652

Appendix B: Solutions to End-of-#Part Exercises
```python
 S = &quot;spam&quot;
```

```python
 S = S[0] + 'l' + S[2:]
```

```python
 S
```

```python
 S = S[0] + 'l' + S[2] + S[3]
```

```python
 S
```

```python
 me = {'name':('mark', 'e', 'lutz'), 'age':'?', 'job':'engineer'}
```

```python
 me['job']
```

```python
 me['name'][2]
```

```python
 []._ _methods_ _
```

```python
 dir([])
```

#Part II, Types and Operations

653
#Part III, Statements and Syntax
```python
 S = 'spam'
```

```python
 for c in S:
```

```python
 x = 0
```

```python
 for c in S: x += ord(c)
```

```python
 x
```

```python
 x = []
```

```python
 for c in S: x.append(ord(c))
```

```python
 x
```

```python
 map(ord, S)
```

```python
 D = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7}
```

```python
 D
```

```python

```

```python
 keys = D.keys( )
```

```python
 keys.sort( )
```

```python
 for key in keys:
```

654

Appendix B: Solutions to End-of-#Part Exercises
```python
 for key in sorted(D):
```

#Part III, Statements and Syntax

655
#Part IV, Functions
```python
 def func(x): print x
```

```python
 func(&quot;spam&quot;)
```

```python
 func(42)
```

```python
 func([1, 2, 3])
```

```python
 func({'food': 'spam'})
```

656

Appendix B: Solutions to End-of-#Part Exercises
#Part IV, Functions

657
```python
 from dicts import *
```

```python
 d = {1: 1, 2: 2}
```

```python
 e = copyDict(d)
```

```python
 d[2] = '?'
```

```python
 d
```

```python
 e
```

```python
 x = {1: 1}
```

```python
 y = {2: 2}
```

```python
 z = addDict(x, y)
```

```python
 z
```

658

Appendix B: Solutions to End-of-#Part Exercises
```python
 f1(1, 2)
```

```python
 f1(b=2, a=1)
```

```python
 f2(1, 2, 3)
```

```python
 f3(1, x=2, y=3)
```

```python
 f4(1, 2, 3, x=2, y=3)
```

```python
 f5(1)
```

```python
 f5(1, 4)
```

```python
 f6(1)
```

```python
 f6(1, 3, 4)
```

#Part IV, Functions

659
```python
 values = [2, 4, 9, 16, 25]
```

```python
 import math
```

```python
 res = []
```

```python
 for x in values: res.append(math.sqrt(x))
```

660

Appendix B: Solutions to End-of-#Part Exercises
```python
 res
```

```python
 map(math.sqrt, values)
```

```python
 [math.sqrt(x) for x in values]
```

#Part V, Modules
```python
 import mymod
```

```python
 mymod.test('mymod.py')
```

#Part V, Modules

661
```python
 import mymod2
```

```python
 mymod2.test(&quot;mymod2.py&quot;)
```

```python
 from mymod import *
```

```python
 countChars(&quot;mymod.py&quot;)
```

662

Appendix B: Solutions to End-of-#Part Exercises
```python
 from collector import somename
```

#Part V, Modules

663
```python
 import mypkg.mymod
```

```python
 mypkg.mymod.countLines('mypkg\mymod.py')
```

```python
 from mypkg.mymod import countChars
```

```python
 countChars('mypkg\mymod.py')
```

#Part VI, Classes and OOP
664

Appendix B: Solutions to End-of-#Part Exercises
```python
 from adder import *
```

```python
 x = Adder( )
```

```python
 x.add(1, 2)
```

```python
 x = ListAdder( )
```

```python
 x.add([1], [2])
```

```python
 x = DictAdder( )
```

```python
 x.add({1:1}, {2:2})
```

```python
 x = Adder([1])
```

```python
 x + [2]
```

```python

```

```python
 x = ListAdder([1])
```

```python
 x + [2]
```

```python
 [2] + x
```

#Part VI, Classes and OOP

665
666

Appendix B: Solutions to End-of-#Part Exercises
```python
 class Meta:
```

#Part VI, Classes and OOP

667
```python
 x = Meta( )
```

```python
 x.append
```

```python
 x.spam = &quot;pork&quot;
```

```python

```

```python
 x + 2
```

```python

```

```python
 x[1]
```

```python
 x[1:5]
```

```python
 from setwrapper import Set
```

```python
 x = Set([1, 2, 3, 4])
```

```python
 y = Set([3, 4, 5])
```

```python
 x &amp; y
```

```python
 x  y
```

```python
 z = Set(&quot;hello&quot;)
```

```python
 z[0], z[-1]
```

```python
 for c in z: print c,
```

```python
 len(z), z
```

```python
 z &amp; &quot;mello&quot;, z  &quot;mello&quot;
```

668

Appendix B: Solutions to End-of-#Part Exercises
```python
 from multiset import *
```

```python
 x = MultiSet([1,2,3,4])
```

```python
 y = MultiSet([3,4,5])
```

```python
 z = MultiSet([0,1,2])
```

```python
 x &amp; y, x  y
```

```python
 x.intersect(y, z)
```

```python
 x.union(y, z)
```

#Part VI, Classes and OOP

669
```python
 x.intersect([1,2,3], [2,3,4], [1,2,3])
```

```python
 x.union(range(10))
```

670

Appendix B: Solutions to End-of-#Part Exercises
#Part VI, Classes and OOP

671
#Part VII, Exceptions and Tools
672

Appendix B: Solutions to End-of-#Part Exercises
#Part VII, Exceptions and Tools

673
674

Appendix B: Solutions to End-of-#Part Exercises
#Part VII, Exceptions and Tools

675
676

Appendix B: Solutions to End-of-#Part Exercises
#Part VII, Exceptions and Tools

677
678

Appendix B: Solutions to End-of-#Part Exercises
#Part VII, Exceptions and Tools

679
680

Appendix B: Solutions to End-of-#Part Exercises
Index
Symbols
```python
 input prompt, 35, 37
```

A
681
B
682

Index
C
Index

683
684

Index
D
E
Index

685
686

Index
F
Index

687
688

Index
G
H
I
Index

689
690

Index
J
K
L
Index

691
M
692

Index
N
O
Index

693
694

Index
P
Index

695
Q
R
696

Index
S
Index

697
T
698

Index
U
Index

699
X
Y
Z
V
W
700

Index
About the Author
Colophon
