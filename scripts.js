
// set initial variables

var selectedOrigin = "DCA";
// ??? how do I make this into a prompt for the initial variable? 

var allRoutes = /routes.json;
// ??? how do I pull in the database from open flights? API?


// filter using a for

function filter (routes, selectedOrigin){
    var directDestinations =[]
    for (i = 0; i < routes.length; i++) {
        if (routes.origin == selectedOrigin) {
            directDestinations.push(routes.destination);
        };
    }
    return directDestinations;
}
// ??? what is the correct syntax to take the destination value and put it in the array (line 17)?
