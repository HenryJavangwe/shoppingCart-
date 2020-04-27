let addToCart = document.querySelectorAll('#addToCart');
let courses = [
    {
        name    : 'Become a Full Stack Web Developer ',
        tag     : 'webdeveloper',
        price   : 26000,
        inCart  : 0
    },
    {
        name    : 'Become a Front End Web Developer ',
        tag     : 'frontend-dev',
        price   : 9000,
        inCart  : 0
    },
    {
        name    : 'Become a Java Spring Boot Developer',
        tag     : 'spring-boot-dev',
        price   : 16000,
        inCart  : 0
    },
];
    // looping through the array of nodeList since querySelector all returns an array of all the instances where that selector is found.
for ( let i =0; i < addToCart.length; i++){
   addToCart[i].addEventListener('click', ($event)=>{
       $event.preventDefault();
       cartNumbers(courses[i]);
       totalCost(courses[i]);
   })
}
    // Created A function that will look at the local storage numbers and set the number on the basket icon to be exactly as the number in the local storage- in order to keep the number from disappearing when the page is refreshed.
   function cartNumberOnLoad(){
    let courseNumbers = localStorage.getItem('cartNumbers');//we are accessing the local storage and grabbing the contents.
    if(courseNumbers){
        document.querySelector('.basket span').textContent = courseNumbers;
    }
   }
    //Writing a function that will set localStorage numbers to the total number of times the buttons with eventListener are clicked.
   function cartNumbers(course){
       let courseNumbers = localStorage.getItem('cartNumbers');//we are accessing the local storage and grabbing the contents.
       courseNumbers = parseInt(courseNumbers); //Numbers from the localStorage come as strings so we have to convert them to integers hence the parseInt;  
       if(!courseNumbers){
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.basket span').textContent =1;
       } else{
        localStorage.setItem('cartNumbers', courseNumbers+ 1);
        document.querySelector('.basket span').textContent = courseNumbers+ 1;
       }
       setItems(course);
    }

    function setItems (course){
        let cartItems = localStorage.getItem('coursesInCart');
        cartItems = JSON.parse(cartItems);
        
        if (cartItems != null){ 
            if(cartItems[course.tag] == undefined){
                cartItems = {
                    ...cartItems,
                    [course.tag]: course
                }
            }
            cartItems[course.tag].inCart += 1; 
        }else {
            course.inCart =1;
            cartItems ={
                [course.tag]: course
            }
        } 
        localStorage.setItem("coursesInCart", JSON.stringify(cartItems));
        console.log('my cart items are', cartItems);
    };

    // creating a function that will calc the total cost of the products/ courses inside the cart

    function totalCost(course){
        // console.log("The course price is ", course.price);
        let cartCost = localStorage.getItem("totalCost");
        
        console.log("my cartCost is", cartCost );
        console.log(typeof cartCost);
        
        if(cartCost != null){
            cartCost=parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + course.price);
        }else {
            localStorage.setItem("totalCost", course.price );
        }
    }
// this function is not called above sp we call it here at the bottom, otherwise nothing will be executed when the page is refreshed on loaded.
cartNumberOnLoad();


// function displayCart(){
//     let cartItems = localStorage.getItem("coursesInCart");
//     cartItems = JSON.parse(cartItems);
//     let courseContainer = document.querySelector('.course-plug-in');

//     let cartCost = localStorage.getItem("totalCost");
//     console.log(cartItems);
//     if( cartItems && courseContainer){
//         // console.log('On the Cart page running'); this condition checks to see if we have items in the local storage and also if we're on the cart page, if the conditions are met then the function will run.
//         courseContainer.innerHTML = "";
//         Object.values(cartItems).map(item => {
//             courseContainer.innerHTML += `
//             <div class="course-plug-in">
//                 <ion-icon name="close-outline"></ion-icon>
//                 <img src="img/${item.tag}.png">
//                 <span> ${item.name}</span>
//             </div>

//             <div class="price"> R${item.price},00</div>

//             <div class="quantity">
//             <ion-icon name="chevron-back-circle-outline"></ion-icon>
//             <span>${item.inCart}</span>
//             <ion-icon name="chevron-forward-circle-outline"></ion-icon>
//             </div>

//             <div class="total"> R${item.inCart * item.price},00 </div>
//             `;
//         });

//         courseContainer.innerHTML += `
//         <div class="basketTotalContainer">
//         <h4 class="basketTotalTitle">
//         Basket Total
//         </h4>

//         <h4 class="basketTotal">
//         R${cartCost},00
//         </h4>
//         </div>
//         `

//     }
// }
// calling the onload function so that it runs.
// displayCart();