// let myFriends = [ "Mukul" , "Aarti" , "Pooja" , "Sakshi" , "Aarti"];
debugger;
// console.log( myFriends.indexOf(("Aarti",(myFriends.indexOf("Aarti")))));
// console.log( myFriends.indexOf(("Aarti",(myFriends.indexOf("Aarti")+1))));

// console.log(myFriends.indexOf("Aarti",3))



// let myFriends = [ "Mukul" , "Aarti" , "Pooja" , "Sakshi" , "Aarti"];


// const NewmyFriends = myFriends.splice(1,1,"Papu");

// console.log(NewmyFriends);
// console.log(myFriends);


// let arr = [25,36,49,64,81];

// let sqrtArr = arr.map((currElement, index ,arr) => {
//     return (currElement**(0.5)); 
// }) ;

// console.log(sqrtArr);

// let arr = [2,3,4,6,8];

// let newArr = arr.map((currElement, index ,arr) => {
    //     return currElement*2;
    // }).filter((currElement, index ,arr) => {
        //     return currElement > 10;
        // });
        
        // console.log(newArr);
        
        // (accumulator) = sum karne
        
        // let arr = [2,3,4,6,8]

        // let newArr = arr.reduce((accumulator,currElement ,index , array) => {
        //     debugger;
        //     accumulator +=currElement;

        //     return accumulator;
        // });

        // console.log(newArr);



        const arr = [
        ['zone_1', 'zone_2'],
        ['zone_3', 'zone_4'],
        ['zone_5', 'zone_6'],
        ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
    ];

    // console.log(arr[1][1]);

    // console.log(arr[3][1][1][1]);  /* zone_8 */

    const flatarr =  arr.reduce((accum,currElement,index,arr) => {
        accum = accum.concat(currElement);
        return accum;
    })  

    console.log(flatarr);
    

