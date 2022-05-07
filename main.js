
const mainbtn = document.querySelector('.container__btn');
const display = document.querySelector('.main__screen');
let previousKey;

mainbtn.addEventListener('click',function(event){
    const target = event.target;
    const name = target.classList[0];  
    const btnContent = target.textContent;
    let  print = console.log(`${btnContent} 버튼`); // <- 클릭시 타켓이름 출력할건데 넘많아서 변수로 만듬

    if (target.matches('button')){
        
   if (name === 'number'){
       if(display.textContent === '0' || previousKey === 'operator'){
           display.textContent = btnContent;
        } else {
            display.textContent += btnContent;
        }
        print
    }
    if (name === 'operator'){
        print
        previousKey = 'operator';
    }

     if (name === 'point'){
        display.textContent = display.textContent + btnContent;
        print
     }
     
     if (name === 'equal'){
         print
     }
}
    
    
    
    
});

