function sumOfThreeElements(...elements) {
    return new Promise((resolve, reject) => {
        if (elements.length > 3) {
            reject("Only three elements or less are allowed");
        } else {
            let sum = 0;
            let i = 0;
            while (i < elements.length) {
                sum += elements[i];
                i++;
            }
            resolve("Sum has been calculated: " + sum);
        }
    })
}

sumOfThreeElements(4, 5, 6)
    .then(result => console.log(result))
    .catch(error => console.log(error));

sumOfThreeElements(7, 0, 33, 41)
    .then(result => console.log(result))
    .catch(error => console.log(error));