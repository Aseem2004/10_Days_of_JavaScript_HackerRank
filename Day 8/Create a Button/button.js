window.onload=()=>{
    const button=document.getElementById('btn');
    button.addEventListener('click',(e)=>{
         const no_of_clicks=parseInt(e.currentTarget.innerText,0)+1;
         e.currentTarget.innerText=no_of_clicks;
    });  
}