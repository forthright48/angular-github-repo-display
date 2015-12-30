(function(){
    var app = angular.module( "demo-app", ["f48.AGRD"] );

    app.config ( function( $routeProvider ) {
        $routeProvider.when ( "/", {
            templateUrl: "home.html",
            controller: "main",
            controllerAs: "main"
        })
        // :filePath* is important
        .when ( "/someExampleRoute/:filePath*", {
            templateUrl: "mymod.html"
        })
        .otherwise( {
            redirectTo: "/"
        })
    });

    app.controller ( "main", function() {
        var vm = this;
    });
})();
