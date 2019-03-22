var modalForm = document.querySelector(".write-us");
var modalMap = document.querySelector(".map");
var openForm = document.querySelector(".contacts__more");
var openMap = document.querySelector(".contacts__map");
var form = modalForm.querySelector("form");
var inputName = modalForm.querySelector("[name=name]");
var inputEmail = modalForm.querySelector("[name=email]");

var servicesButton = document.querySelectorAll(".services-nav__button");
var servicesItem = document.querySelectorAll(".services__item");


document.querySelectorAll('.modal__close').forEach(function(closeBtn) {
	closeBtn.addEventListener('click', function() {
    	closeBtn.closest('.modal').classList.remove('modal-show');
	});
});

openForm.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalForm.classList.add("modal-show");
	modalForm.querySelector("[name=name]").value="";
	modalForm.querySelector("[name=email]").value="";
	inputName.focus();
});

openMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalMap.classList.add("modal-show");
});

form.addEventListener("submit", function(evt) {
	if (!inputName.value || !inputEmail.value) {
		evt.preventDefault();
		if (!inputName.value) {
			inputName.classList.add("invalid");
		}
		if (!inputEmail.value) {
			inputEmail.classList.add("invalid");
		}
		modalForm.classList.remove("modal-error");
		modalForm.offsetWidth = modalForm.offsetWidth;
		modalForm.classList.add("modal-error");
	}
});

inputName.addEventListener("blur", function(evt) {
	if (inputName.value != "") {
		inputName.classList.remove("invalid");
	}
});

inputEmail.addEventListener("blur", function(evt) {
	if (inputEmail.value != "") {
		inputEmail.classList.remove("invalid");
	}
});

var i;
var servicesLength = servicesItem.length;

for (i = 0; i < servicesLength; i++) {
	servicesButton[i].addEventListener("click", function(evt) {
		console.log(i);
	});

}
