document.getElementById("text").value = getSavedValue("text");

function saveValue(e){
	var id=e.id;
	var val=e.value;
	localStorage.setItem(id, val);
}

function getSavedValue (v){
	if (!localStorage.getItem(v)) {
		return "";
	}
	return localStorage.getItem(v);
}
