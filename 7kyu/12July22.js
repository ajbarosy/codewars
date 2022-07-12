// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

function checkExam(array1, array2) {
    //create new array to store the score
    let score = 0;
    //loop through the array1
    for (let i = 0; i < array1.length; i++) {
        //if the array1[i] is equal to the array2[i]
        if (array1[i] === array2[i]) {
            //push 4 to the score array
            score += 4
        } else if (array2[i] === '') {
            //push 0 to the score array
            score += 0;
        } else {
            //push -1 to the score array
            score -= 1;
        }
    }
        if(score < 0){
         return 0  
     }
    return score
  }