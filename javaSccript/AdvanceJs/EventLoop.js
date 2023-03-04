

const fun2 =  () => {
    console.log("Fucntion 2 is strating");
    setTimeout(() => {
        console.log("Function 2 time out messeage of 3 second delay");
    }, 3000);
    
    console.log("Fucntion 2 is ending");
}

const fun1 =  () => {
    console.log("Fucntion 1 is strating");
    setTimeout(() => {
        console.log("Function 1 time out messeage of 6 second delay");
    }, 6000);

    fun2();

    console.log("Fucntion 1 is ending");
}

fun1();
