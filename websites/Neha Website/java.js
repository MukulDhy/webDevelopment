let menu_bar=document.getElementById('menu-bars');
let Head_section=document.querySelector('header');

menu_bar.addEventListener('click',function1);

function function1(){
    // if(Head_section.style.display='none'){
    //     Head_section.style.display='initial';
    // }
    // else{
    //     Head_section.style.display='none';
    // }
    menu_bar.classList.toggle('fa-times');
    Head_section.classList.toggle('active');
    // Head_section.classList.toggle('againactive');
    // section.classList.toggle('active'); 
}


let section=document.getElementById('home');



// NavBar.addEventListener('click',function2);
// function function2()
// {
    //     Head_section.classList.toggle('notactive');
    //     function3();
    //     // Head_section.classList.toggle('active');
//     // alert("hello");
//     // Head_section.style.width="initial";
// }
// function function3(){
    
    //     Head_section.classList.toggle('againactive');
    //  }
    
    let NavBar1=document.getElementById('Nav-bar21');
    let NavBar2=document.getElementById('Nav-bar22');
    let NavBar3=document.getElementById('Nav-bar23');
    let NavBar4=document.getElementById('Nav-bar24');
    // let NavBar5=document.getElementById('Nav-bar2');
    
    NavBar1.addEventListener('click',function2);
    NavBar2.addEventListener('click',function2);
    NavBar3.addEventListener('click',function2);
    NavBar4.addEventListener('click',function2);
    // NavBar1.addEventListener('click',function2);
    
    function function2(){
        Head_section.style.visibility="hidden";
        // function1();
        // Head_section.style.visibility="visible";
        
    }
    let body=document.getElementById('topBtn');
    body.addEventListener('click',function3);
    
    function function3(){
        // Head_section.classList.toggle('notactive');
        Head_section.style.visibility="visible";
        
    }
    
   
    

