var modalForm = document.querySelector(".write-us");
var modalMap = document.querySelector(".map");
var close = document.querySelectorAll(".modal__close");
var openForm = document.querySelector(".contacts__more");
var openMap = document.querySelector(".contacts__map");
var form = modalForm.querySelector("form");

openForm.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalForm.classList.add("modal-show");
	modalForm.querySelector("[name=name]").value="";
	modalForm.querySelector("[name=email]").value="";
	modalForm.querySelector("[name=name]").focus();
});

openMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalMap.classList.add("modal-show");
});

close[0].addEventListener("click", function(evt) {
	evt.preventDefault();
	modalForm.classList.remove("modal-show");
});

close[1].addEventListener("click", function(evt) {
	evt.preventDefault();
	modalMap.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
	if (!modalForm.querySelector("[name=name]").value || !modalForm.querySelector("[name=password]").value) {
		evt.preventDefault();
		if (!modalForm.querySelector("[name=name]").value) {
			modalForm.querySelector("[name=name]").classList.add("invalid");
		}
		if (!modalForm.querySelector("[name=email]").value) {
			modalForm.querySelector("[name=email]").classList.add("invalid");
		}
	}
});

modalForm.querySelector("[name=name]").addEventListener("click", function(evt) {
	if (modalForm.querySelector("[name=name]").value != "") {
		modalForm.querySelector("[name=name]").classList.remove("invalid");
	}
});

modalForm.querySelector("[name=email]").addEventListener("click", function(evt) {
	if (modalForm.querySelector("[name=email]").value != "") {
		modalForm.querySelector("[name=email]").classList.remove("invalid");
	}
});