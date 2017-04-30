function validateForm(){
		    var nameReg = /^[A-Za-z]+$/;
		    var numberReg =  /^[0-9]+$/;
		    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		    var names = $('#username').val();
		    var passwords = $('#password').val();
		    var fnames = $('#fname').val();
		    var lnames = $('#lname').val();
		    var emails = $('#email').val();
		    var teles = $('#telephone').val();
		    var inputVal = new Array(names, passwords, fnames, lnames, emails, teles);
		    var inputMessage = new Array("username", "password", "first name", "last name", "email","telephone");
		     $('.error').hide();
		        if(inputVal[0] == ""){
		            $('#username').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
		        }
		        else if(!nameReg.test(names)){
		            $('#username').after('<span class="error"> Letters only</span>');
		        }
		        if(inputVal[1] == ""){
		            $('#password').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
		        }
		        else if(!numberReg.test(passwords)){
		            $('#password').after('<span class="error"> Number only</span>');
		        }
		        if(inputVal[2] == ""){
		            $('#fname').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
		        }
		        else if(!nameReg.test(fnames)){
		            $('#fname').after('<span class="error"> Please enter a valid email address</span>');
		        }
		        if(inputVal[3] == ""){
		            $('#lname').after('<span class="error"> Please enter your ' + inputMessage[3] + '</span>');
		        }
		        else if(!nameReg.test(lnames)){
		            $('#lname').after('<span class="error"> Letter only</span>');
		        }
		        if(inputVal[4] == ""){
		            $('#email').after('<span class="error"> Please enter your ' + inputMessage[4] + '</span>');
		        }
		        else if(!emailReg.test(emails)){
		            $('#email').after('<span class="error"> Please enter a valid email address </span>');
		        }
		        if(inputVal[5] == ""){
		            $('#telephone').after('<span class="error"> Please enter your ' + inputMessage[5] + '</span>');
		        }
		        else if(!numberReg.test(teles)){
		            $('#telephone').after('<span class="error">  </span>');
		        }
		}
