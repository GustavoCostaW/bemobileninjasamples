document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("deviceready", function () {

        function onSuccess(imageData) {
            var image = document.getElementById('image');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }

        document.getElementById('nome').addEventListener('click', function () {
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 90,
                destinationType: Camera.DestinationType.DATA_URL,
                targetWidth: 300
            });
        });
    }, false);
})