/*if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(showCurrentLocation);
}
else
{
	alert("Geolocation API not supported.");
}

function showCurrentLocation(position)
{
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var coords = new google.maps.LatLng(latitude, longitude);

	var mapOptions = {
		zoom: 15,
		center: coords,
		mapTypeControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	//create the map, and place it in the HTML map div
	map = new google.maps.Map(
		document.getElementById("map"), mapOptions
	);

	//place the initial marker
	var marker = new google.maps.Marker({
		position: coords,
		map: map,
		title: "Current location!"
	});
}*/


var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;  
}


/*$(function(){

    var data = {
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };


    var logic = {
        addNewNote: function(noteStr) {
            data.add({
                content: noteStr,
                date: Date.now()
            });
            view.render();
        },

        getNotes: function() {
            return data.getAllNotes().reverse();
        },

        init: function() {
            data.init();
            view.init();
        }
    };


    var view = {
        init: function() {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                logic.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            logic.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content + new Date(note.date).toString()
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

    logic.init();
});*/