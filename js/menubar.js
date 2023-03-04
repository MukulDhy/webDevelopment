let strip1 = document.getElementById('strip1');
        let strip3 = document.getElementById('strip3');
        let menuBar = document.getElementsByClassName('menubar');

        menuBar.addEventListener("click",myFunction);

        function myFunction(x){
            // x.style.padding="100px";
            x.classList.toggle("change");
            // menuBar.style.bakcground.color="red";
        }