(function () {

    function oneThroughTwenty() {
        const numbers = []

        // Your code goes below

        for (let counter = 1; counter <= 20; counter++) {
            numbers.push(counter)
        }

        return numbers;
    }

    console.log(oneThroughTwenty())








    function evensToTwenty() {
        const numbers = []

        // Your code goes below

        for (let i = 1; i <= 20; i++) {
            if (i % 2 === 0) {
                numbers.push(i)
            }

        }

        return numbers;
    }

    console.log(evensToTwenty())













    function oddsToTwenty() {
        const numbers = []

        // Your code goes below

        for (let i = 1; i <= 20; i++) {

            if (i % 2 !== 0) { numbers.push(i) }



        }

        return numbers;
    }

    console.log(oddsToTwenty())









    function multiplesOfFive() {
        const numbers = []

        // Your code goes below


        for (let i = 5; i <= 100; i = i + 5) {

            //
           // if (i % 5 === 0) 
                numbers.push(i)
            

    
        }    return numbers
    }


    console.log(multiplesOfFive())





    function squareNumbers() {
        const numbers = []

        // Your code goes below

        return numbers;
    }





    
    function countingBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }

    function evenNumbersBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }

    function oddNumbersBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }

    function multiplesOfFiveBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }

    function squareNumbersBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }


})();