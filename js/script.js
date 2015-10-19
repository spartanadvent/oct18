var github_token;
var github_connection;
var repo;
var current_element;
var user_gists;
//bota to encode
//atob to decode
var current_user;
//var current_user =  github_connection.getUser();

function github_callback(error, response) {
        //allow for optional parameters to fail gracefully
        //return parameter or return zero as stored value
        error = error || 0;
        response = response || 0;
        log(response);
}

function github_token_created(token_value) {

        //using btob to encode github api token
        //using atob to decode github api token
        github_token = atob("NDRiNmEyMmRiMDg1NThiMDE3YjQzMzllMDgwNzc5OTFlMmQ4YWY1Zg==");
}

function time_out_ready() {

   my_time = setTimeout(github_callback, 1000);

}




function create_element(element_name) {

  return  current_element = document.createElement(element_name)
        document.body.appendChild(current_element);

}




function log(message){

  console.log(message);
  alert(message);

}


document.addEventListener('DOMContentLoaded', function(){

    create_element('ol');
    current_element.id = "ordered_list";








});

document.addEventListener('readystatechange',function(event){

    //create the github_connection after the DOM is loaded
    //prevents error of creating object before it has access to its methods

    if(document.readyState === 'complete'){

        github_connection = new Github({
              token: github_token_created(),
              auth: "oauth"
            });

            //going into user github and grabing the user information

         current_user = github_connection.getUser();

         //grabing the user gists file as an object

         user_gists = current_user.userGists('epscgeekwiseme',github_callback);

         //trying to grab objects out of gists and push them to the ordered list

        current_element.innertext = user_gists.




    };





});