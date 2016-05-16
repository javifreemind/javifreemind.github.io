function Fan(room, state) {
    return {

        room: room || undefined,
        on: state || false,

        turnOn: function() {
        	this.on = true;
        },
        turnOff: function() {
        	this.on = false;
        },
        changeRoom: function(newRoom) {
        	this.room = newRoom;
        }
    };
}

function dragDrop() {

	var drag = document.getElementsByClassName("thing");
	var drop = document.getElementsByClassName("dropzone");

	for (var i=0; i < drag.length; i++) {
		drag[i].setAttribute("draggable", "true");

		drag[i].ondragstart = function(ev) {
			//Guardamos el id del elemento para transferirlo al elemento drop
			//Contenido es una clave que nos permitirá acceder al valor asignado
			ev.dataTransfer.setData("contenido", ev.target.id);

			// Update box with a drop here style
			//dropzone.classList.add("dropzone");
			for (var j=0; j < drop.length; j++) {
				drop[j].classList.add("dropzonefocus");
			}
		}

		drag[i].ondragend = function(ev) {
			for (var j=0; j < drop.length; j++) {
				drop[j].classList.remove("dropzonefocus");
			}
		}
		drag[i].onclick = function(ev) {
			toggleDialog(false);
		}
	}

	for (var i=0; i < drop.length; i++) {
		drop[i].ondragover = function(ev) {
			//Cancelar el evento que impide que podamos soltar el elemento drag (permitir drop)
			ev.preventDefault();
		}

		drop[i].ondrop = function(ev) {
			//Obtenemos los datos a través de la clave contenido, en este caso el id
			var id = ev.dataTransfer.getData("contenido");
			ev.target.appendChild(document.getElementById(id));
		}
	}
}

initDialog = function() {
	var things = document.getElementsByClassName("thing");
	var dialog = document.getElementById("dialog");
	var button = document.getElementById("dialogButton");

	for (var i=0; i < things.length; i++) {
		things[i].onclick = function(e) { //A partir de aqui things[i] se convierte en this
			fillDialogData(dialog, this);
			dialog.style.visibility = "visible";
		}
	}

	button.onclick = function(e) {
		dialog.style.visibility = "hidden";
	}
};

fillDialogData = function(dialog, thing) {
	var dialogImg = document.getElementById("dialogImg");
	var dialogTitle = document.getElementById("dialogTitle");
	dialogImg.src = thing.src;
	dialogTitle.innerHTML = thing.id;
};

/*initDialog = function() {

	var thing = document.getElementsByClassName("thing");
	for (var i=0; i < thing.length; i++) {
		thing[i].addEventListener("click", toggleDialog(true)); //thing[i].onclick = toggleDialog(true);
	}

	//var body = document.getElementById("body");
	//body.onclick = toggleDialog(false);
	document.addEventListener("click", toggleDialog(true));

	document.getElementById("dialog").style.visibility = "hidden";
}*/


/*
 * [DEPRECATED]
 */
toggleDialog = function(show) {
	var dialog = document.getElementById("dialog");

	if (show) {
		dialog.style.visibility = "visible";
	}
	else {
		dialog.style.visibility = "hidden";
	}
};



window.onload = function() {
	dragDrop();
	initDialog();
};