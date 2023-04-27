# Introduction to JavaScript

# Part 1 : Quick Introduction..

```
function sumValues(n1,n2,add){
    if(add){
        var result = 0;
        result = n1 + n2;
        console.log('values added: ', result);
    } else return;
    console.log('final result: ', result);
}

sumValues(10,10,true);

```

1. What is printed by line 9? If the code returns an error, explain why. ^^^^^

No Error.
Printed: 'values added: 20'


2. What is printed by line 13? If the code returns an error, explain why. 

No Error.
Printed: 'final result: 20'


```
function sumValues(n1,n2,add){
    if(add){
        let result = 0;
        result = n1 + n2;
        console.log('values added: ', result);
    } else return;
    console.log('final result: ', result);
}

sumValues(10,10,true);

```

3. What is printed by line 9? If the code returns an error, explain why. ^^^^^

No error.
Printed: 'values added: 20'

4. What is printed by line 13? If the code returns an error, explain why. 

Error : result no defined.


```
function sumValues(n1,n2,add){
    if(add){
        let result = 0;
        result = n1 + n2;
        console.log('values added: ', result);
    } else return;
    console.log('final result: ', result);
}

sumValues(10,10,true);

```

5. What is printed by line 9? If the code returns an error, explain why. ^^^^^

Error : const can not be modified.

6. What is printed by line 13? If the code returns an error, explain why. 

Same


