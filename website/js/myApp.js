/**
 * Created by fabio on 26/02/16.
 */

function montaPost(aList){

    var post = '<div class="post-preview">';
            post += '<a href="post.html">';
            post += '<h2 class="post-title">';
            post +=  aList[0];
            post += '</h2>';
            post += '<img src="'+aList[2]+'"> ';
            post += '<h4 class="post-subtitle">';
            post += aList[1];
            post += '</h4>';
            post += '</a>';
            post += '<p class="post-meta">Posted by <a href="#">Fabio Rocha</a> on September 24, 2014</p>';
            post += '</div>';
            post + '<hr>';

    return post;
}

$(function() {

    Parse.$ = jQuery;

    // Initialize Parse with your Parse application javascript keys
    Parse.initialize("FCRTwu0U99mOPkW7K1w9SGSZpXiYWEKHeik3vxbn", "qbDQOBlvihSXUAG02ChGT9tNSAwRIuI5WDGH2fzB");
    var random_images_array = ["mike.png","max.png"];

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
                    face: 'img/'+random_images_array[num]+''});
                $("#listaPost").append(montaPost([object.get("firstname"),object.get("descricao"),'img/'+random_images_array[num]]));
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

    // Router
   /* var Workspace = Backbone.Router.extend({

        routes: {
            "home": "",    // #help
            "help": "help",    // #help
            "search/:query": "search"  // #search/kiwis
        },
        home: function () {
            //
            console.log("home");
        },
        help: function () {
            //
            console.log("help");
        },

        search: function (query, page) {
            //
            console.log("search query is " + query);
        }

    });
    this.Router = new Workspace();
    Backbone.history.start();*/
});