// Write a program to print 1-100 prime numbers.
let count;
let i, j
for (i = 1; i <= 100; i++) {
    count = 0
    for (j = 1; j <= i; j++) {
        if (i % j == 0) {
            count++  }
    }
    if (count == 2)
        console.log(i)
}

