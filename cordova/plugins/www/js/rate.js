document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("deviceready", function () {

        var customLocale = {};
        customLocale.title = "Rate";
        customLocale.message = "uma mensagem";
        customLocale.cancelButtonLabel = "No, Thanks";
        customLocale.laterButtonLabel = "Remind Me Later";
        customLocale.rateButtonLabel = "Rate It Now";

        AppRate.preferences.customLocale = customLocale;
        AppRate.preferences.storeAppURL.android = 'market://details?id=com.facebook.katana';
        AppRate.promptForRating(true);


    })
});