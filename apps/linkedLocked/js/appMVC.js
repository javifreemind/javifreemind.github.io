////////////////////////////////////////////////////////////////////////////////  README
//
//  Implemetation of the app using the Model-View-Controller paradigm.


////////////////////////////////////////////////////////////////////////////////  DATA (MODEL)

var polesData = {
	"type": "FeatureCollection",
	"features":
  [
  {
		"type": "Feature",
		"properties": {
			"id": "marker-inmh5jdm7",
			"title": "Heineken experience",
			"description": "",
			"marker-size": "medium",
			"marker-color": "#7ec9b1",
			"marker-symbol": "parking"
		},
		"geometry": {
			"coordinates": [4.89171, 52.358055],
			"type": "Point"
		},
		"id": "0888f2b6f3f3ed41841191715b0837a4"
	},

  {
		"type": "Feature",
		"properties": {
			"id": "marker-inmgtncc0",
			"title": "Centraal Station",
			"description": "",
			"marker-size": "medium",
			"marker-color": "#7ec9b1",
			"marker-symbol": "parking"
		},
		"geometry": {
			"coordinates": [4.899982, 52.378024],
			"type": "Point"
		},
		"id": "239063d28255259bceeaab6e67668cce"
	},

  {
		"type": "Feature",
		"properties": {
			"id": "marker-inmh6a6f8",
			"title": "Vondelpark",
			"description": "",
			"marker-size": "medium",
			"marker-color": "#7ec9b1",
			"marker-symbol": "parking"
		},
		"geometry": {
			"coordinates": [4.881545, 52.36176],
			"type": "Point"
		},
		"id": "28d5227109e78050f574763bf73812ef"
	},

  {
		"type": "Feature",
		"properties": {
			"id": "marker-inmh26wo3",
			"title": "Spui",
			"description": "",
			"marker-size": "medium",
			"marker-color": "#7ec9b1",
			"marker-symbol": "parking"
		},
		"geometry": {
			"coordinates": [4.889122, 52.368668],
			"type": "Point"
		},
		"id": "395fffaf7f11cf3155d63b8341d1e18c"
	},

  {
		"type": "Feature",
		"properties": {
			"id": "marker-inmh2zyk4",
			"title": "HvA",
			"description": "",
			"marker-size": "medium",
			"marker-color": "#7ec9b1",
			"marker-symbol": "parking"
		},
		"geometry": {
			"coordinates": [4.908673, 52.359488],
			"type": "Point"
		},
		"id": "5615d92daef2302218033a9d8d26bf6c"
	},

  {
		"type": "Feature",
		"properties": {
			"id": "marker-inmgz9aw1",
			"title": "Dam",
			"description": "",
			"marker-size": "medium",
			"marker-color": "#7ec9b1",
			"marker-symbol": "parking"
		},
		"geometry": {
			"coordinates": [4.892971, 52.37326],
			"type": "Point"
		},
		"id": "5ddb4ad155841fe9fd6814e7adc36b7b"
	},

  {
		"type": "Feature",
		"properties": {
			"id": "marker-inmh4mjq6",
			"title": "Tropenmuseum",
			"description": "",
			"marker-size": "medium",
			"marker-color": "#7ec9b1",
			"marker-symbol": "parking"
		},
		"geometry": {
			"coordinates": [4.923092, 52.363031],
			"type": "Point"
		},
		"id": "6d78a84d23f1718ec81f103aacfdd163"
	},

  {
		"type": "Feature",
		"properties": {
			"id": "marker-inmh0e3r2",
			"title": "Nemo",
			"description": "",
			"marker-size": "medium",
			"marker-color": "#7ec9b1",
			"marker-symbol": "parking"
		},
		"geometry": {
			"coordinates": [4.912068, 52.371544],
			"type": "Point"
		},
		"id": "af5a0c2725e6713bdb208fa08ab064e8"
	},

  {
		"type": "Feature",
		"properties": {
			"id": "marker-inmh3vft5",
			"title": "Waterlooplein",
			"description": "",
			"marker-size": "medium",
			"marker-color": "#7ec9b1",
			"marker-symbol": "parking"
		},
		"geometry": {
			"coordinates": [4.902697, 52.367902],
			"type": "Point"
		},
		"id": "e83c5613144e76bf6d4ec778fb033a05"
	}
  ],
	"id": "franfdk17.00fpibd8"
};

var mapData = {
  otherApiKey: 'pk.eyJ1IjoiZGlnaXRhbGdsb2JlIiwiYSI6ImNpZnB2bWUzNDZoczlzaWtxMmd2bDc3ZHQifQ.AHiF6mR5aXL0rdI4eLz2dA',
  myApiKey: 'pk.eyJ1IjoiZnJhbmZkazE3IiwiYSI6ImNpbm02eXQ3bzAwYWJ3ZGtsOHR1Mm53a2kifQ.1e-0bI7EgqYYbBzGiCf4FA',
  location: "Amsterdam",
  coordinates: [52.37, 4.90], // Here is the swiped
  zoom: 14,
  styles: ['mapbox.streets', // Choose one
    'mapbox.light',
    'mapbox.dark',
    'mapbox.satellite',
    'mapbox.streets-satellite',
    'mapbox.wheatpaste',
    'mapbox.streets-basic',
    'mapbox.comic',
    'mapbox.outdoors',
    'mapbox.run-bike-hike',
    'mapbox.pencil',
    'mapbox.pirates',
    'mapbox.emerald',
    'mapbox.high-contrast']
};


////////////////////////////////////////////////////////////////////////////////  LOGIC (CONTROLLER)

var app = {

    init: function() {
        map.init();
        this.initMap();

        mapView.init();
    }
};

var map = {

    init: function () {
        L.mapbox.accessToken = mapData.myApiKey;
        var mapbox = L.mapbox.map('map', 'mapbox.streets')
            .setView(map.coordinates, map.zoom)
            .featureLayer.setGeoJSON(polesData);
    },

    get: function() {
        return mapData;
    },

    getLocation: function() {
        return mapData.location;
    }
};

var poles = {

    get: function() {
        return polesData;
    }
};


////////////////////////////////////////////////////////////////////////////////  LOOK (VIEW)

var cardView = {
    init: function() {
        this.cardElem = document.getElementById('card-location');
        this.cardLocationElem = document.getElementById('location');

        this.render();
    },

    render: function() {
        this.cardLocationElem.textContent = logic.getLocation();
    }
};

var mapView = {
  init: function() {
    var cardElem = document.getElementById("myList");
    // Create custom HTML element
    var MapElem = document.registerElement('map-basic');
    .appendChild(new MapElem());
  }
}


////////////////////////////////////////////////////////////////////////////////  INIT

// make it go!
app.init();


////////////////////////////////////////////////////////////////////////////////  OTHER STUFF

/*

// ======= Model ======= //

var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ]
};


// ======= Logic ======= //

var logic = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};



// ======= View ======= //

var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', logic.incrementCounter);

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = logic.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};


var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the logic
        var cats = logic.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    logic.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
logic.init();


////////////////////////////////////////////////////////////////////////////////  EXTRA

var Fan = function(location) {
  this.location = location;
}

Fan.prototype.turnOn = function (level) {
  return level;
};

vat dinningroomFan = new Fan(56);
dinningroomFan.turnOn()

*/
