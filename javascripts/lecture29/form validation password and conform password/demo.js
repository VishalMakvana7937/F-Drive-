$("#myForm").validate({
    rules : {
        pass : {
            required : true,
        },
        cpass : {
            required : true,
            equalTo : '#pass'
        }
    },
    messages : {
        pass : {
            required : ' * enter your password'
        },
        cpass : {
            required : ' * enter your Conform password',
            equalTo : ' * please enter the same value again'
        }
    }
});