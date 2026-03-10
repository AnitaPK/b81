inputElement = document.getElementById('inputPAra')
outputElement = document.querySelector('#output')

vowels = 'aeiouAEIOU'

function countVowels(){
    inputValue = inputElement.value 

    countVowels = 0
    len1 = inputValue.length
    for(i=0; i< len1; i++){
        if(vowels.includes(inputValue.charAt(i))){
            countVowels++
        }
    outputElement.innerHTML = 'Vowels in parapgraph : ' + countVowels
    }
}


function PalindromeCheck(){
    inputValue = inputElement.value 
    revSTR = ''
    len1 = inputValue.length

    for(let i = len1-1; i>=0; i--){
        ch = inputValue.charAt(i)
        revSTR += ch
        // console.log(revSTR)
    }
    if(inputValue == revSTR){
            outputElement.innerHTML = "It's Palindrome"
    }else{
            outputElement.innerHTML = "Given string is not Palindrome"

    }


}