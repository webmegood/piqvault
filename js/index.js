var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        // ...

        /* 1) Add a click handler for your button */
        document.getElementById('launch-editor').addEventListener('click', this.launchEditor, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        // ...
    },

    /* 2) Make a helper function to launch the Image Editor */
    launchEditor: function() {

    	/* 2.a) Prep work for calling `.edit()` */
        function success(newUrl) {
            console.log("Success!", newUrl);
        }

        function error(error) {
            console.log("Error!", error);
        }

        var imageUrl = "../images/ernie.jpg";

        var options = {
            outputType: CSDKImageEditor.OutputType.JPEG,
            tools: [
                CSDKImageEditor.ToolType.EFFECTS,
                CSDKImageEditor.ToolType.CROP
            ],
            quality: 50
        };

        /* 2.b) Launch the Image Editor */
        CSDKImageEditor.edit(success, error, imageUrl, options);
    }
};