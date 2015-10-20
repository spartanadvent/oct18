var body = document.getElementsByTagName('body')[0];
var pass_word;
var user_name;
var github;
var current_user;
var gists_list;
var gist_id;
var gists;
var select_option;
var current_gist;




function log(message){
        console.log(message);
        alert(message);
}


// this input is for github username
var input_username = document.createElement('input');
    input_username.type = 'text';
    input_username.placeholder = 'username';

    body.appendChild(input_username);



//this input is for your github password
 var input_password =  document.createElement('input');
     input_password.type = 'password';
     input_password.placeholder = 'password';

     body.appendChild(input_password);


//// login button for github
 var submit_login = document.createElement('button');
        submit_login.type = 'submit';
        submit_login.innerHTML = 'Submit';

      body.appendChild(submit_login);



//this will show you what gists the gist files you have
 var select_gist = document.createElement('select');
      body.appendChild(select_gist);


//tthe selection of the gists
  var submit_select_gists = document.createElement('button');
        submit_select_gists.type = 'submit';
        submit_select_gists.innerHTML = 'Gists';
        body.appendChild(submit_select_gists);


// this allows for the files to be selected in the gist
 var select_gist_files =   document.createElement('select');
        body.appendChild(select_gist_files);


//this will allow the file to display the file contents
var submit_gist_files = document.createElement('button');
               submit_gist_files.type = 'submit';
               submit_gist_files.innerHTML = 'Files';
                 body.appendChild(submit_gist_files);


//where the file will be applied to document
var gist_content = document.createElement('div');
        body.appendChild(gist_content);





///submit button functionality
submit_login.addEventListener('click', function(){

            user_name = input_username.value;


            pass_word = input_password.value;

//login to github

            github = new Github({
                username: user_name,
                password: pass_word,
                 auth: "basic"
            });

// obtain current user
            current_user = github.getUser();



//---------------------locate current user gist folders and list by name in dropdown
     current_user.userGists(user_name, function(err,res){
//
                    gists_list = res;
//                  ^this is the callback response

                    gist_id = gists_list[0].id;


                        gists = github.getGist(gist_id);


                       var gists_read = gists.read(function(err,res){
                                    
//  all callback responses are different and should be done manually not in a function
                       });


                        var i = 0;

                       for (obj in gists_list){

                            select_option = document.createElement('option');
                            select_option.value = String(i);
                            select_option.innerHTML = gists_list[i].description;
                            if(select_option.innerHTML ==='' ||  select_option.innerHTML === null){
                               select_option.innerHTML = 'no description';
                            }
                            select_gist.appendChild(select_option);
                             i += 1;
                       }


                });// end of gist finder


//-------------------- locate files in gist folder and list in dropdown by name
submit_select_gists.addEventListener('click', function(){

    select_gist_files.innerHTML = '';

        var gist_id = gists_list[select_gist.value].id;


            gist = github.getGist(gist_id);//obtains the gist id number which allow for access to gist


        gist.read(function(err, res){

           current_gist = res;

           var gist_files = current_gist.files;
           var i = 0;

           for (obj in gist_files){

                 select_option = document.createElement('option');
                     select_option.value = String(i);
                     select_option.innerHTML = obj;
                     select_gist_files.appendChild(select_option);
                    i += 1;
           }


      });

 });
 //end of file finder for file dropdown///////
    submit_gist_files.addEventListener('click',function() {

           var gist_file_keys = Object.keys(current_gist.files);
                    gist_content.innerHTML = current_gist.files[gist_file_keys[select_gist_files.value]].content;
                        // ^ loads the content on the document and displays data

    });



        });





