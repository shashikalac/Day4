function game(x) { 
    if (x % 3 === 0 && x % 5 !== 0)
        return "Fizz";
    if (x % 5 === 0 && x % 3 !== 0)
        return "Buzz";
    if (x % 5 === 0 && x % 3 === 0)
        return "FizzBuzz";
    else
        return x;
}

for (let i = 0; i <= 188; i++) {
    console.log(game(i));
}