let cashier = 0 //keeps track fo the average score for our cashier
let c_tot = 0 //keeps track of the total score of our cashier
let c_num = 0 //keeps track of the number of ratings the cashier has received

let overall = 0 //keeps track fo the average score for our cashier
let o_tot = 0 //keeps track of the total score of our cashier
let o_num = 0 //keeps track of the number of ratings the cashier has received

let cashierScore = document.getElementById('cashierScore')
let overallScore = document.getElementById('overallScore')

//make a loop to go over the buttons instead of having individual event listeners
cashierScoreBtn1 = document.getElementById('cashier-1')
cashierScoreBtn2 = document.getElementById('cashier-2')
cashierScoreBtn3 = document.getElementById('cashier-3')
cashierScoreBtn4 = document.getElementById('cashier-4')

//create a list of iterable cashier score buttons to be accessed via a for loop to give event listeners
const cashierBtnList = [
    cashierScoreBtn1, 
    cashierScoreBtn2, 
    cashierScoreBtn3, 
    cashierScoreBtn4
]

//this list of button values is agnostic re: cashier/overall score, since both are 1-4 ratinigs, and thus can be referenced by both the cashier loop and overall loop
const buttonsValues = [
    1,
    2,
    3,
    4
]

//add event listener to each button using a for loop
for(let i = 0; i < cashierBtnList.length; i++) {
    cashierBtnList[i].addEventListener('click', function(e){
        c_tot = c_tot + buttonsValues[i]
        c_num = c_num + 1
        cashier = c_tot / c_num
    })
}

// overall score buttons
overallScoreBtn1 = document.getElementById('overall-1')
overallScoreBtn2 = document.getElementById('overall-2')
overallScoreBtn3 = document.getElementById('overall-3')
overallScoreBtn4 = document.getElementById('overall-4')

//create a list of iterable overall score buttons to be accessed via a for loop to give event listeners
const overallBtnList = [
    overallScoreBtn1,
    overallScoreBtn2,
    overallScoreBtn3,
    overallScoreBtn4
]

//add event listener for each overall score button using a for loop
for(let i = 0; i <overallBtnList.length; i++) {
    overallBtnList[i].addEventListener('click', function(e){
        o_tot = o_tot + buttonsValues[i]
        o_num = o_num + 1
        overall = o_tot / o_num
    })
}

//display ratings
let showHide = document.getElementById('show-hide')
showHide.addEventListener('click', function(e){
    let scoresDiv = document.getElementById('show-scores')

    cashierScore.textContent = cashier //variable cashier as calculated by the above loop
    overallScore.textContent = overall //variable overall as calculated by the above loop
    
    let btnText = showHide.textContent
    if(btnText == 'Display Ratings') {
        scoresDiv.style.display = 'block'
        showHide.innerHTML = 'Hide Ratings'
    } else {
        scoresDiv.style.display = 'none'
        showHide.innerHTML = "Display Ratings"
    }
})





// // // overall button 1 access and function
// overallScoreBtn1 = document.getElementById('overall-1')
// overallScoreBtn1.addEventListener('click', function(e){
//     o_tot = o_tot + 1 //adding 1 to the score
//     o_num = o_num + 1 //adding 1 to the number of ratings
//     overall = o_tot / o_num
//     console.log(overall)
// })

// //overall button two
// overallScoreBtn2 = document.getElementById('overall-2')
// overallScoreBtn2.addEventListener('click', function(e){
//     o_tot = o_tot + 2 //adding 2 to the score
//     o_num = o_num + 1 //adding 1 to the number of ratings
//     overall = o_tot / o_num
//     console.log(overall)
// })

// //overall button 3
// overallScoreBtn3 = document.getElementById('overall-3')
// overallScoreBtn3.addEventListener('click', function(e){
//     o_tot = o_tot + 3 //adding 3 to the score
//     o_num = o_num + 1 //adding 1 to the number of ratings
//     overall = o_tot / o_num
//     console.log(overall)
// })

// //overall button 4
// overallScoreBtn4 = document.getElementById('overall-4')
// overallScoreBtn4.addEventListener('click', function(e){
//     o_tot = o_tot + 4 //adding 4 to the score
//     o_num = o_num + 1 //adding 1 to the number of ratings
//     overall = o_tot / o_num
//     console.log(overall)
// })

