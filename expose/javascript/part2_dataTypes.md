# Part 2 : Little More of Challenge...

```
function discountPrices(prices,discount){
    var discounted = [];
    var finalPrice = 0;

    for(var i = 0; i < prices.length; i++){
        var discountedPrice = prices[i] * (1-discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }

    console.log(i);
    console.log(discountedPrice);
    console.log(finalPrice);

    return discounted;
}

discountPrices([100,200,300],0.5)

```

1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

No Error.
Printed: '3'

2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

No Error.
Printed: '150'

3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^

No Error.
Printed: '150'

4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^

This function will return the discounted prices of the list given. (discount: 50%)


```
function discountPrices(prices,discount){
    let discounted = [];
    let finalPrice = 0;

    for(let i = 0; i < prices.length; i++){
        let discountedPrice = prices[i] * (1-discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }

    console.log(i);
    console.log(discountedPrice);
    console.log(finalPrice);

    return discounted;
}

discountPrices([100,200,300],0.5)

```

5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

Error: i is not defined.


6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

Error: discountedPrice is not defined.

7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^

No Error.
Printed: '150'

8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

This function will return the discounted prices of the list given. (discount: 50%)


```
function discountPrices(prices,discount){
    const discounted = [];
    const length = prices.length;

    for(let i = 0; i < prices.length; i++){
        const discountedPrice = prices[i] * (1-discount);
        discounted.push(discountedPrice);
    }

    console.log(i);
    console.log(length);

    return discounted;
}

discountPrices([100,200,300],0.5)

```

9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^

Error: i is not defined

10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

No Error.
Printed: '3'

11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

This function will return the discounted prices of the list given. (discount: 50%)



## Data Types

```
let student={
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function(){console.log('Hello!');},
    'Favorite Teacher':{
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110','CSE 134','VIS 41']
};

```

12. Given the above Object, write the notation for:  (These should be in your part2.md)
    1. Accessing the value of the name property in the student object

        student.name

    2. Accessing the value of the Grad Year property in the student object

        student['Grad Year']

    3. Calling the function for the greeting property in the student object

        student.greetin()

    4. Accessing the name property of the object in the Favorite Teacher property in student

        student['Favorite Teacher'].name

    5. Access index zero in the array of the courseLoad property of the student object

        student.courseLoad[0]
    


## Basic Operators & Type Conversion

13. Arithmetic
    1. '3' + 2 = 32
    2. '3' - 2 = 1
    3. 3 + null = 3
    4. '3' + null = 3null
    5. true + 3 = 4
    6. false + null = 0
    7. '3' + undefined = 3undifined
    8. '3' - undefined = NaN

14. Comparaison
    1.  '2' > 1 = true
    2.  '2' < '12' = false
    3.  2 == '2' = true
    4.  2 === '2' = false
    5.  true == 2 = false
    6.  true === Boolean(2) = true

15. == operation will compare two values while converting one of them to the same type
    === will compare two values without the convertion part (strict compararison)



## Loops

```

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

```

16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)



## Functions

```
function modifyArray(array,callback){
    const newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }
    return newArr;
};

function doSomething(num){
    return num * 2;
};

modifyArray([1,2,3],doSomething);

```
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 

The result will be [2,4,6].
callback is used as a parameter of the function modifyArray. Thus, in line 4 : callback(array[i]) is determined by this parameter.
In this example, we are using doSomething. Then, it will execute doSomething(array[i]).

```
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);

```

18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)

```

function printNums(){
    console.log(1);
    setTimeout(function(){console.log(2);},1000);
    setTimeout(function(){console.log(3);},0);
    console.log(4);
}
printNums();

```

19. What is the output of the above code? (This should be in your part2.md)

Ouput : 1 4 3 2