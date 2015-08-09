document.addEventListener("deviceready", function () {

    pushNotification = window.plugins.pushNotification;

    function successHandler(result) {
        console.log('result = ' + result);
    }

    function errorHandler(result) {
        console.log(result);
    }
    
    window.onNotification = function (e) {
        console.log(e);
    }
    pushNotification.register(
        successHandler,
        errorHandler, {
            "senderID": "1085663477694",
            "ecb": "onNotification"
        });


}, false);