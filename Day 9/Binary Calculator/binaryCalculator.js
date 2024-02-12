window.onload=()=>{
    let inputs=[];
    let operator='';
        
    const Res=()=>{
        const res=document.getElementById('res');
        let x=inputs[0];
        let y=inputs[1]===undefined ? '':inputs[1];
        res.innerText = `${x}${operator}${y}`;
    };
        
    const Oper=op=>{
        if (inputs[1]===undefined) {
             operator=op;
        }
        Res();
    };
        
    const Values=num=>{
        if (inputs.length===0) {
             inputs[0]=num;
        } else if (inputs.length===1 && operator.length===0) {
             inputs[0] += num;
        } else if (inputs.length===1 && operator.length>0) {
             inputs[1]=num;
        } else if (inputs.length===2 && operator.length>0) {
             inputs[1]+=num;
        }
        Res();
    };
        
    const btn0=document.getElementById('btn0');
    btn0.addEventListener('click',()=>{
        Values('0');
    });
        
    const btn1=document.getElementById('btn1');
    btn1.addEventListener('click',()=>{
        Values('1');
    });
        
    const btnSum=document.getElementById('btnSum');
    btnSum.addEventListener('click',()=>{
        Oper('+');
    });
        
    const btnSub=document.getElementById('btnSub');
    btnSub.addEventListener('click',()=>{
        Oper('-');
    });
        
    const btnMul=document.getElementById('btnMul');
    btnMul.addEventListener('click',()=>{
        Oper('*');
    });
        
    const btnDiv=document.getElementById('btnDiv');
    btnDiv.addEventListener('click',()=>{
        Oper('/');
    });
        
    const btnClr=document.getElementById('btnClr');
    btnClr.addEventListener('click',()=>{
        inputs = [''];
        operator = '';
        Res();
    });
        
    const btnEql=document.getElementById('btnEql');
    btnEql.addEventListener('click',()=>{
        if (inputs.length===2 && operator.length>0) {
            
             let a=parseInt(inputs[0],2);
             let b=parseInt(inputs[1],2);
            
             switch(operator) {
                  case '+':
                       inputs=[(a+b).toString(2)];
                  break;
                  case '-':
                       inputs=[(a-b).toString(2)];
                  break;
                  case '*':
                       inputs=[parseInt(a*b,0).toString(2)];
                  break;
                  case '/':
                       inputs=[parseInt(a/b,0).toString(2)];
                  break;
             }
            
             operator = '';
             Res();
        }
    });
  };