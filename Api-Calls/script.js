// Api stands for "Application Programming Interface" , It is the medium to client side with the server side for data Storage in DataBases

// RestFull Api's :-
        
// => RestFull Apis are those which uses the same API URL but uses API Methods in order to ccordinate with server / databases .


// Method to Call Api 
fetch("---Api URL----");//=> Method to call API

// We have to perform several actions on data with some commands from the API .
// Therefore , we use API Calls to make it easier  for us to coordinate with our server / database.
// There are four methods of API Calls ;

// 1- GET Method

// => GET Method is use to fetch data from the server to the Admin ,

fetch("----API URL-----",{
    method : "GET"
})

// If we don't give any method , GET will be treated as default call


// 2- POST Method 

// => POST Method is use to post data from the Admin to the server ;
fetch("----API URL-----",{
    method : "POST",
    body :{
        // body content
    }
})



// 3- PATCH/PUT Method 

// => PATCH Method is use to modify the exiting data on the server ;
// It requries some special identification of existing data for executing modification
fetch("----API URL/id-----",{
    method : "PATCH"
})



// 4- Delete Method

// => Delete Method is used to delete some existing data from the server
// It requries some special identification of existing data for executing deletation
fetch("----API URL/id-----",{
    method : "Delete"
})