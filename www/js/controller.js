// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter').controller("ExampleController", function($scope, $cordovaSQLite) {
    $scope.insert = function(firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute($scope.db, query, [firstname, lastname]).then(function(res) {
            var message = "INSERT ID -> " + res.insertId;
            console.log(message);
            alert(message);
        }, function (err) {
            console.error(err);
            alert(err);
        });
    }
 
    $scope.select = function(lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute($scope.db, query, [lastname]).then(function(res) {
            if(res.rows.length > 0) {
                var message = "SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname;
                alert(message);
                console.log(message);
            } else {
                alert("No results found");
                console.log("No results found");
            }
        }, function (err) {
            alert(err);
            console.error(err);
        });
    }
 
});
