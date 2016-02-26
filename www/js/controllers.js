angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Posts) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Posts.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.savePerson = function(firstname, lastname) {

    var PeopleObject = Parse.Object.extend("PeopleObject");

    var person = new PeopleObject();

    person.set("firstname", firstname);

    person.set("lastname", lastname);

    person.save(null, {});

  };

  $scope.getPeople = function(params) {

    var PeopleObject = Parse.Object.extend("PeopleObject");

    var query = new Parse.Query(PeopleObject);

    if(params !== undefined) {

      if(params.lastname !== undefined) {

        query.equalTo("lastname", params.lastname);

      }

      if(params.firstname !== undefined) {

        query.equalTo("firstname", params.lastname);

      }

    }

    query.find({

      success: function(results) {

        alert("Successfully retrieved " + results.length + " people!");

        for (var i = 0; i < results.length; i++) {

          var object = results[i];

          console.log(object.id + ' - ' + object.get("firstname") + " " + object.get("lastname"));

        }

      },

      error: function(error) {

        alert("Error: " + error.code + " " + error.message);

      }

    });

  };

});
