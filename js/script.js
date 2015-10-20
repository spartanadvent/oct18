var github_token;
var github_connection;
var repo;
var current_element;
var show_time;
var user_gists;
var reading_rainbow;
var gist;
//bota to encode
//atob to decode
var current_user;
//var current_user =  github_connection.getUser();
var object_id = "6385ac4d7b6b2c5b8c83"

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

   my_time = setTimeout(github_callback, 2000);
        log(my_time);
}




function create_element(element_name) {

   current_element = document.createElement(element_name)
        document.body.appendChild(current_element);

}

function show_information (username) {


        show_time = current_user.show(username,github_callback);
            log(show_time);
}


function notifications_to_read() {

    notify_me = current_user.notifications(github_callback);
            log(notify_me);
}

function read_it() {

   return reading_rainbow = gist.read(github_callback)

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
           log(github_connection.getUser());

         //grabing the user gists file as an object

//         user_gists = current_user.userGists('epscgeekwiseme',github_callback);
//                        log(user_gists);
//         //trying to grab objects out of gists and push them to the ordered list
//

           user_gist = current_user.gists(github_callback);

                time_out_ready();
         //able to get the gist to pull up but will not get the data
         gist = github_connection.getGist(object_id);
            log(gist);
//
          user_gist.read(github_callback());

                log(user_gist.read(github_callback()));


    };




});