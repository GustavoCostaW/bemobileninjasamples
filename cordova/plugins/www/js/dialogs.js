document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("deviceready", function () {
        function alertDismissed() {
            // do something
            navigator.notification.beep(5);
        }

        navigator.notification.alert(
            'You are the winner!', // message
            alertDismissed, // callback
            'Game Over', // title
            'Done' // buttonName
        );

    }, false);
})