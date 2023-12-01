function fizzBuzz(n) {
	
	let result = []; // Declare an array to store the results

	
	for (let i = 1; i <= n; ++i) // Loop from 1 to n (inclusive)

    {
	
    if (i % 3 === 0 && i % 5 === 0) {result.push("FizzBuzz");}
	else if (i % 3 === 0) {result.push("Fizz");}
    else if (i % 5 === 0) {result.push("Buzz");}
	else {result.push(i.toString());}  // Add the current number as a string to the result array

			
	}

    return result;
}

// Driver code
let n = 20;

// Call the fizzBuzz function to get the result
let result = fizzBuzz(n);

// Print the result
console.log(result.join(' '));
