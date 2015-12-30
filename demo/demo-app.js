(function(){
    var app = angular.module( "demo-app", ["angular-github-repo-display"] );

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
