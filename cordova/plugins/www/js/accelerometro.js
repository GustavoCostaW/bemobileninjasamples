document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("deviceready", function () {

        function onSuccess(acceleration) {
            console.log('Acceleration X: ' + acceleration.x + '\n' +
                'Acceleration Y: ' + acceleration.y + '\n' +
                'Acceleration Z: ' + acceleration.z + '\n' +
                'Timestamp: ' + acceleration.timestamp + '\n');
        };

        function onError() {
            alert('onError!');
        };

        var options = {
            frequency: 100
        }; // Update every 3 seconds

        var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }, false);
})