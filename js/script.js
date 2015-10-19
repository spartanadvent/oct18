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
        error = error || 0;
        response = response || 0;
        log(response);
}

function github_token_created(token_value) {

        github_token = atob("NDRiNmEyMmRiMDg1NThiMDE3YjQzMzllMDgwNzc5OTFlMmQ4YWY1Zg==");
//    github_token = String(token_value);

}





function create_element(element_name) {
    current_element = document.createElement(element_name)
        document.body.appendChild(current_element);

}




function log(message){

  console.log(message);
  alert(message);

}


document.addEventListener('DOMContentLoaded', function(){


});

document.addEventListener('readystatechange',function(event){

    if(document.readyState === 'complete'){

        github_connection = new Github({
              token: github_token_created(),
              auth: "oauth"
            });

         current_user = github_connection.getUser();

    };

    log(current_user);

});