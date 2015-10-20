var body = document.getElementsByTagName('body')[0];
var pass_word;
var user_name;
var github;
var current_user;
var gists_list;
var gist_id;
var gists;
var select_option;

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

       var submit_gist_files = document.createElement('button');
               submit_gist_files.type = 'submit';
               submit_gist_files.innerHTML = 'Files';
               body.appendChild(submit_gist_files);


        submit_login.addEventListener('click', function(){

            user_name = input_username.value;
//                    log(user_name);

            pass_word = input_password.value;


            github = new Github({
                username: user_name,
                password: pass_word,
                 auth: "basic"
            });

            current_user = github.getUser();
            log(current_user);

     current_user.userGists(user_name, function(err,res){

                    gists_list = res;
//                    log(gists_list[0]);

                    gist_id = gists_list[0].id;
//                        log(gist_id);

                        gists = github.getGist(gist_id);



                       var gists_read = gists.read(function(err,res){log(res)});

                       for (var i = 0; i < gists_list.length; i++){

                            select_option = document.createElement('option');
                            select_option.value = String(i);
                            select_option.innerHTML = String(i);
                            select_gist.appendChild(select_option);
                       }


                });

submit_select_gists.addEventListener('click', function(){
    log(gists_list[select_gist.value].id);
    select_gist_files.innerHTML = '';

    var gist_id = gists_list[select_gist.value].id;
//       log( gist_id);

       gist = github.getGist(gist_id);
            log(gist);

      var reading_rainbow = gist.read(function(err, res){log(res);});
            log(reading_rainbow.content());


});




        });





