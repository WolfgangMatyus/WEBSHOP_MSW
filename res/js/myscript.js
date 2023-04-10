$("#formValidation").validate({
    rules:{
        Anrede:{
            required: true,
            maxlength: 4
        },
        Vorname:{
            required: true,
            minlength: 2
        },
        Nachname:{
            required: true,
            minlength: 2
        },
        Strasse:{
            required: true,
        },
        PLZ:{
            required: true,
            digits: true
        },
        ORT:{
            required: true,
            minlength: 2
        },
        email:{
            required: true,
            email:true
        },
        Passwort:{
            required: true,

        },
        Passwort2:{
            required: true,
            
        },
    },
    messages:{
        Vorname:{
            required:"Please enter your name",
            minlength:"Name at least 2 characters"
        },
        email:{
            email:"Please enter your email"
        },
        Adress:{
            required:"Please enter your Adress"
        }
    },
    
    submitHandler: function(form) {
      form.submit();
    }
   });