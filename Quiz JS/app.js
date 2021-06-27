const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

// checking answers

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,];

    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

// showing result
    scrollTo(0,0)
    result.classList.remove('d-none');
    

// animating score
    let output = 0;
    const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++
        }
    },10);


});

// setTimeout(()=>{
//     document.write('Hello World once');
// },3000);

// setInterval(()=>{
//     document.write('😊Hello world!');
// },1000);

