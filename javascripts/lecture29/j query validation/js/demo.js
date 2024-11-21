$("#myForm").validate({
    rules : {
        name : {
            required : true,
            minlength : 3,
        },
        email : {
            required : true,
        }
    },
    messages : {
        name : {
            required : "please enter your name",
            minlength : "please enter a 3 character"
        },
        email : {
            required : 'please enter youur valid email id.'
        }
    }
});