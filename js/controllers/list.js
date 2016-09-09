/*global angular*/

(function() {
    
    angular
        .module("turtleFacts")
        .controller("listCtrl", listController);
        
        function listController() {
            var vm = this;
            vm.data = turtlesData;
        }
        
        var turtlesData = [
            { type: "Green Turtle",
              image_url: "http://www.what-do-turtles-eat.com/wp-content/uploads.2014/10/Sea-Turtles-Habitat.jpg",
              locations: "Tropical and subtropical oceans worldwide",
              size: "Up to 1.5m and up to 300kg",
              lifespan: "Over 80 years",
              diet: "Herbivore",
              description: "kdajfigjigjkfidfjlifdjfkdfjigjafjafkjaidfjdkgaifjaifjakfjgiajfkdfjifjajflkfj"
            },
            { type: "Purple Turtle",
              image_url: "http://www.what-do-turtles-eat.com/wp-content/uploads.2014/10/Sea-Turtles-Habitat.jpg",
              locations: "Tropical and subtropical oceans worldwide",
              size: "Up to 1.5m and up to 300kg",
              lifespan: "Over 80 years",
              diet: "Herbivore",
              description: "kdajfigjigjkfidfjlifdjfkdfjigjafjafkjaidfjdkgaifjaifjakfjgiajfkdfjifjajflkfj"
            },
            { type: "Pink Turtle",
              image_url: "http://www.what-do-turtles-eat.com/wp-content/uploads.2014/10/Sea-Turtles-Habitat.jpg",
              locations: "Tropical and subtropical oceans worldwide",
              size: "Up to 1.5m and up to 300kg",
              lifespan: "Over 80 years",
              diet: "Herbivore",
              description: "kdajfigjigjkfidfjlifdjfkdfjigjafjafkjaidfjdkgaifjaifjakfjgiajfkdfjifjajflkfj"
            },
            { type: "Brown Turtle",
              image_url: "http://www.what-do-turtles-eat.com/wp-content/uploads.2014/10/Sea-Turtles-Habitat.jpg",
              locations: "Tropical and subtropical oceans worldwide",
              size: "Up to 1.5m and up to 300kg",
              lifespan: "Over 80 years",
              diet: "Herbivore",
              description: "kdajfigjigjkfidfjlifdjfkdfjigjafjafkjaidfjdkgaifjaifjakfjgiajfkdfjifjajflkfj"
            },
            ];
        
})();