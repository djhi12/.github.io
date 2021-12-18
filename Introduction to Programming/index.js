
        // Defining Table

        /*

            Input: The user will enter any number

            Processing: The program will add up all the odd numbers between 1 and whatever the user input

            Output: Display the sum of all the odd numbers between 1 and user input

        */

            function sumOdds() {

                // 1. Get User input
    
                let targetNum = parseInt(document.getElementById("targetNum").value);
    
                // 2. Get all the odd numbers using REPETITION!
                let i;
                 let result;
                 if(targetNum < 1) {
                   return 0;
                 }
                 result = 0;
                 for(i = targetNum; i > 0; i--) {
                      if(i % 2 != 0) {
                         result = result + i;
                    }
                // 3. Display the sum of all odds to the user
                     }
                document.getElementById('output').innerHTML = result;
                }
            


/*************************** */