// Wait for the DOM to be ready
$(function() {
    
    $("#register-form").validate({
      // Specify validation rules
      errorElement: 'div',
      rules: {
     
        name: {
            required : true,
            minlength : 3
        },
        username : {
            required : true,
            minlength : 3
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        password2 : {
            required: true,
            minlength: 5,
            equalTo: '#password'

        }
      },
      // Specify validation error messages
      messages: {
        name: {
            required : "Enter your name",
            minlength : "Your name must be at least 3 characters long"
        },  
        username: {
            required : "Enter your username",
            minlength : "Your username must be at least 3 characters long"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        password2: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long",
            equalTo: 'Should be equal to password'
          },
       
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });

    $("#login-form").validate({
        // Specify validation rules
        errorElement: 'div',
        rules: {
       
          username : {
              required : true,
              minlength : 3
          },
          
          password: {
            required: true,
            minlength: 5
          }
        },
        // Specify validation error messages
        messages: {
         
          username: {
              required : "Enter your username",
              minlength : "Your username must be at least 3 characters long"
          },
          password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
          },
       
        },
   
        submitHandler: function(form) {
          form.submit();
        }
      });
  });