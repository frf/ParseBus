angular.module('starter.services', [])
    .factory('Posts', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
      }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
      }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
      }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
      }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
      }];
        var random_images_array = ["mike.png", "perry.png","adam.jpg","max.png","ben.png"];

        var posts = [];
        var PeopleObject = Parse.Object.extend("PeopleObject");
        var query = new Parse.Query(PeopleObject);
        //if(params !== undefined) {
        //  if(params.lastname !== undefined) {
        //    query.equalTo("lastname", params.lastname);
        //  }
        //  if(params.firstname !== undefined) {
        //    query.equalTo("firstname", params.lastname);
        //  }
        //}

        query.find({
          success: function(results) {
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              var num = Math.floor( Math.random() * random_images_array.length );
              posts.push({'id':object.id,
                          'name':object.get("firstname"),
                          'lastname':object.get("lastname"),
                          face: 'img/'+random_images_array[num]+''})
            }
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });

      return {
        all: function() {
          return posts;
        },
        remove: function(chat) {
          chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
          for (var i = 0; i < chats.length; i++) {
            if (chats[i].id === parseInt(chatId)) {
              return chats[i];
            }
          }
          return null;
        }
      };
    })
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
