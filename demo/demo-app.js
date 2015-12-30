(function(){
    var app = angular.module( "demo-app", ["ngRoute"] );

    app.config ( function( $routeProvider ) {
        $routeProvider.when ( "/", {
            templateUrl: "home.html"
        })
    });
})();
