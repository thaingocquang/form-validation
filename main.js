function Validator(options) {

    var formElement = document.querySelector(options.form);

    if(formElement) {
        
        options.rules.forEach(function(rule) {
            console.log(rule);
        });

    }

}

// Định nghĩa rules

Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function() {

        }
    };
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function() {

        }
    };
}