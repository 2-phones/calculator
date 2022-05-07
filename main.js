
const mainbtn = document.querySelector('.container__btn'); // 계산기 버튼 전체 부모태그
const display = document.querySelector('.main__screen'); // 계산기 화면 자식 태그
let previousKey, firstNum, secondNum, oper;


function activate(num1,operator,num2){ //  num1은 첫번쨰숫자  , oper연산자 , 연산자후 num2 두번째숫자 계산 할수있록하는 함수
    let result = 0 ;
    if(operator === '+'){ 
        result = Number(num1) + Number(num2);
    }if(operator === '-'){
        result = Number(num1) - Number(num2);
    }if(operator === '*'){
        result = Number(num1) * Number(num2);
    }if(operator === '÷'){
        result = Number(num1) / Number(num2);
    }
    return String(result);
}

mainbtn.addEventListener('click',function(event){
    const target = event.target;         // 이벤트 속성으로 타켓을 지정할 변수 
    const name = target.classList[0];    // 버튼클릭 한 타켓의 클래스 속성 확인용 변수
    const btnContent = target.textContent; // 버튼클릭 한 타겟의 텍스트 속성확인용 변수
    let  print = console.log(`${btnContent} 버튼`); // <- 클릭시 타켓이름 출력할건데 넘많아서 변수로 만듬

if (target.matches('button')){
        
   if (name === 'number'){
       if(display.textContent === '0' || previousKey === 'operator'){
           display.textContent = btnContent;
        } else {
            display.textContent += btnContent;
        }
        
        previousKey = 'number';
        print

    }
    if (name === 'operator'){
       
        if('operator' === '%'){
            btnContent = display.textContent;
        }
        oper = btnContent;
        firstNum = display.textContent;
        previousKey = 'operator';
        print
    }

     if (name === 'point'){
        display.textContent = display.textContent + btnContent;
        
        print
     }

     if (name === 'clear'){
         display.textContent = '0';
         firstNum = undefined;
         secondNum = undefined;
         oper = undefined;
         previousKey = 'clear'
     }
     
     if (name === 'equal'){ 
        if('operator' === '.') {
            display.textContent = activate(firstNum,oper,secondNum).toFixed();
        }
        secondNum = display.textContent;
        display.textContent = activate(firstNum,oper,secondNum);
        previousKey = 'equal';
        print
     }
}
    
    
    
    
});

