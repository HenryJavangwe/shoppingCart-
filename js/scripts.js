console.log (" the script is connected and running");
let addToCart = document.querySelectorAll('#add-to-inquiry');

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
for ( let i =0; i< addToCart.length; i++){
   addToCart[i].addEventListener('click', ($event)=>{
       $event.preventDefault();
       cartNumbers();
   })
//Writing a function that will set localStorage numbers to the total number of times the buttons with eventListener are clicked.
   function cartNumbers(){
       let courseNumbers= localStorage.getItem('cartNumbers');//we are accessing the local storage and grabbing the contents.
       courseNumbers = parseInt(courseNumbers); //Numbers from the localStorage come as strings so we have to convert them to integers hence the parseInt;  
       localStorage.setItem ('cartNumbers', 1);
   }
};