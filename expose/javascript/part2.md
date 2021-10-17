# JavaScript Part 2 Answers

## Question 1 
3   
`var` is defined across the function, and when i reaches `prices.length` (3), it breaks for loop and is logged to the console. 

## Question 2 
 150  
When `i`=2, `discountedPrice`=300*0.5=150. It's kept after for loop ends. 

## Question 3 
150  
When `i`=2, `finalPrice`=(150*100)/100=150.

## Question 4 
[50, 100, 150]  
For each price, discount it by 0.5 and push to discounted array.

## Question 5 
Error  
`let i` is not defined outside for loop. 

## Question 6 
Error   
`let discountedPrice` is not defined outside for loop. 

## Question 7 
150  
When `i`=2, `finalPrice`=(150*100)/100=150.

## Question 8
[50, 100, 150]  
For each price, discount it by 0.5 and push to discounted array.

## Question 9 
Error  
`let i` is not defined outside for loop. 

## Question 10 
3  
`length` is always `prices.length` which is 3, and has never been changed. 

## Question 11 
[50, 100, 150]  
For each price, discount it by 0.5 and push to discounted array.  
We can push elements to a `const` array and there won't be any error. (The array variable itself is not changed.)

## Question 12 
A. student.name  
B. student['Grad Year']  
C. student.greeting  
D. student['Favorite Teacher'].name  
E. student.courseLoad[0]

## Question 13 
A. '3' + 2 = '3' + '2' = '32'  
B. '3' - 2 = 3 - 2 = 1  
C. 3 + null = 3 + 0 = 3  
D. '3' + null = '3' + 'null' = '3null'  
E. true + 3 = 1 + 3 = 4  
F. false + null = 0 + 0 = 0  
G. '3' + undefined = '3' + 'undefined' = '3undefined'  
H. '3' - undefined = 3 - NaN = NaN  

## Question 14 
A. '2' > 1 :arrow_right: 2 > 1 :arrow_right: true   
B. '2' < '12' :arrow_right: '2' < '1' :arrow_right: false  
C. 2 == '2' :arrow_right: 2 == 2 :arrow_right: true   
D. 2 === '2' :arrow_right: number === string :arrow_right: false  
E. true == '2' :arrow_right: 1 == 2 :arrow_right: false
F. true === Boolean(2) :arrow_right: true === true :arrow_right: true

## Question 15 
== does type conversion.  
=== doesn't do type conversion, so variables with different types will yield `false` directly.  

## Question 16 
(See file `part2-question16.js`)

## Question 17 
The code will return [2,4,6].  
In `modifyArray`, each entries of `array` runs line 4, which is running the callback function and pushing the result to `newArr`. The callback function is `doSomething`, so every entries of `array` is multipled by 2 and pushed onto `newArr`, and this array is returned. 

## Question 18 
(See file `part2-question18.js`.)

## Question 19 
1   
4  
3  
2  



