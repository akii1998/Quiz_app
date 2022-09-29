const quizData = [
    {
        q:"Q.1 National Animal of<br><dr> India?",
        option:["1.Lion","2.Tiger","3.Leopard","4.Puma"],
        answer:"2.Tiger",
    },
    {
        q:"Q.2 National Bird of<br><dr> India? ",
        option:["1.Eagle","2.Peacock","3.Parrot","4.KingFisher"],
        answer:"2.Peacock",
    },
    {
        q:"Q.3 National Fruits of India? ",
        option:["1.Mango","2.Apple","3.Litchi","4.Oranges"],
        answer:"1.Mango",
    },
    {
        q:"Q.4 What is the National Tree of India. ",
        option:["1.Tamarind Tree","2.Banyan Tree","3.Neem Tree","4.Peepal Tree"],
        answer:"2.Banyan Tree",
    },
    {
        q:"Q.5 What is the National Monument of India. ",
        option:["1.Charminar","2.Red Fort","3.India Gate","4.Gateway of India"],
        answer:"3.India Gate",
    },
    {
        q:"Q.6 What is the National  Heritage Animal. ",
        option:["1.Sheep","2.Cow","3.Deer","4.Elephant"],
        answer:"4.Elephant",
    },
    {
        q:"Q.7 What is the National  Aquatic Animal of India.",
        option:["1.Dolphin","2.Fish","3.Octopus","4.Whale"],
        answer:"1.Dolphin",
    },
    {
        q:"Q.8 What is the National Reptile of India.",
        option:["1.Crocodile","2.Earthwarm","3.Lizard","4.King Cobra"],
        answer:"4.King Cobra",
    },
    {
        q:"Q.9 Who designed Indian National Flag. ",
        option:["1.Dr. B.R. Ambedkat","2.Nehru","3.Dr. Sarvepalli Radhakrishnan","4.Pingali Venkayya"],
        answer:"4.Pingali Venkayya",
    },
    {
        q:"Q.10 The motto on National Emblem is_______________.",
        option:["1.Satyameva Jayate","2.Vruksho Rakshitha Rakshithaha","3.Vande mataram","4.Jai Hind"],
        answer:"4.Jai Hind",
    }
];

let landingPage = document.querySelector('#question-box');

landingPage.innerHTML = '<h1>Start Quiz</h1><br>Click on Next';
landingPage.style = "align-items: center;";


let nextBtn = document.getElementById('next-button');
nextBtn.innerHTML = "Start";
nextBtn.style = 'font-size:35px;';



let subBtn = document.getElementById('submit-button');

subBtn.innerHTML = '';
subBtn.style = 'all:unset;'

let score = 0;

function next(i){

    subBtn.innerHTML = "Submit";
    subBtn.style = 'all:set;'
  

    if(i<=quizData.length-1){
        nextBtn.textContent = 'Next';
        nextBtn.style = `all:set`;
    }
    
    let question = document.getElementById('question-box');

    let optionText = document.createElement('div')

    question.innerHTML = quizData[i].q;

    

    let optfrag = document.createDocumentFragment();

    for (let key of quizData[i].option) {
        
        let optNew = document.createElement('button');
        optNew.textContent = key;

        
        
        optNew.addEventListener('click',(e)=>{

            let ans =  quizData[i].answer;
    
            if( e.target.textContent == ans ){
                score++;
            }

            oncall();
            
        });
        optfrag.appendChild(optNew);
        optionText.appendChild(optfrag);
    }
    
    question.appendChild(optionText);
}

let k=0;

function oncall(){
    if(k<quizData.length){
        next(k);
    }
    if(k == quizData.length){

        let question = document.getElementById('question-box');
        question.innerHTML = "<h2>Congratulation</h2><br> <p>You Have Successfully Completed the QUIZ<h4><br>SUBMIT</h4><br> TO KNOW YOUR SCORE </p>";
        question.style.textAlign = 'center';

        
        nextBtn.innerHTML = "";
        nextBtn.style = `all:unset`;
        d=0;
        
    }    
    k++;
}



let d=0;
function submitBtn(){

    d++;

    let question = document.getElementById('question-box');

    let gifContainer = document.createElement('div');
    gifContainer.style = "width:100%; height:100%; align-items: center;"

    let emoji = document.createElement('img');
    
    question.innerHTML = "<h4><br><br>Your Score<br><h4>" +score+"/10";
    question.style.textAlign = 'center';
    

    if(score>=7){
        emoji.src = "clapping.gif";
        emoji.style = "width:50%; height:50%;";

    }else{
        emoji.src = "crying-emoji.gif";
        emoji.style = "width:50%; height:50%";
    }

    question.style.background = "white"
    gifContainer.appendChild(emoji);
    question.appendChild(gifContainer);

    
    subBtn.innerHTML = "Try Again";
    subBtn.style = ` background: #1E5128; color: #D8E9A8;`;
    if(d>1){
        question.style.background = "none"
        score = 0;
        k=0;
        d=0;
        oncall();
        starting();
    }   
}
