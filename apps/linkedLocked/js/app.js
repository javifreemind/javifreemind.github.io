////////////////////////////////////////////////////////////////////////////////  CONSTANTS

const API_KEY = "pk.eyJ1IjoiZnJhbmZkazE3IiwiYSI6ImNpbm02eXQ3bzAwYWJ3ZGtsOHR1Mm53a2kifQ.1e-0bI7EgqYYbBzGiCf4FA";
const MAP_HTML_ID = "map";
const MAP_STYLE = "mapbox.streets";

////////////////////////////////////////////////////////////////////////////////  DATA

L.mapbox.accessToken = API_KEY;

var poles = {
	"type": "FeatureCollection",
	"features": [
    PoleMark([4.899982, 52.378024], "Centraal Station", "100 poles here."),
    PoleMark([4.892971, 52.373260], "Dam"),
    PoleMark([4.889122, 52.368668], "Spui"),
    PoleMark([4.902697, 52.367902], "Waterlooplein"),
    PoleMark([4.912068, 52.371544], "Nemo"),
    PoleMark([4.881545, 52.361760], "Vondelpark"),
    PoleMark([4.891710, 52.358055], "Heineken experience"),
    PoleMark([4.908673, 52.359488], "HvA"),
    PoleMark([4.923092, 52.363031], "Tropenmuseum")
  ]
};

var bikeMarker = L.marker([-73, 40], {
  icon: L.mapbox.marker.icon({
    'marker-color': '#f86767',
    'marker-symbol': 'bicycle'
  })
});

var map = Map([52.37, 4.90], 14);

bikeMarker.addTo(map);

////////////////////////////////////////////////////////////////////////////////  LOGIC

function PoleMark(coordinates, title, description) {
  return {
		type: "Feature",
		properties: {
			title: title,
			description: description || "",
			"marker-size": "medium",
			"marker-color": "#7ec9b1",
			"marker-symbol": "parking"
		},
		geometry: {
			coordinates: coordinates,
			type: "Point"
		},
	};
}

function Map(coordinates, zoom) {
  return L.mapbox.map(MAP_HTML_ID, MAP_STYLE)
          .setView(coordinates, zoom)
          .featureLayer.setGeoJSON(poles);
}

////////////////////////////////////////////////////////////////////////////////  LOOK

var DOM = {
  body: {
    header: {

    },
    main: {
      firstCard: {
      },
      secondCard: {
        map: {
          elem: document.getElementById('location'),
          setText: function(text){this.elem.textContent = text;},
          setListener: null
        }
      }
    }
  }
};

////////////////////////////////////////////////////////////////////////////////  MAIN

function addLockLocation () {
  var coordinates = [52.37, 4.90]
  bikeMarker.setLatLng(coordinates);
}

(function main() {
  DOM.body.main.secondCard.map.setText(map.coordinates);
  var lockElem = document.getElementById('lockBtn');
  lockElem.addEventListener('click', addLockLocation());
})();
