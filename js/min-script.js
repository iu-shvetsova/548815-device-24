var modalForm=document.querySelector(".write-us"),modalMap=document.querySelector(".map"),openForm=document.querySelector(".contacts__more"),openMap=document.querySelector(".contacts__map"),form=modalForm.querySelector("form"),inputName=modalForm.querySelector("[name=name]"),inputEmail=modalForm.querySelector("[name=email]"),servicesButton=document.querySelectorAll(".services-nav__button"),servicesItem=document.querySelectorAll(".services__item"),popularButton=document.querySelectorAll(".popular-nav__item button"),popularRadio=document.querySelectorAll(".popular-nav__item"),popularItem=document.querySelectorAll(".popular-list__item");document.querySelectorAll(".modal__close").forEach(function(e){e.addEventListener("click",function(){e.closest(".modal").classList.remove("modal-show")})}),openForm.addEventListener("click",function(e){e.preventDefault(),modalForm.classList.add("modal-show"),modalForm.querySelector("[name=name]").value="",modalForm.querySelector("[name=email]").value="",inputName.focus()}),openMap.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.add("modal-show")}),form.addEventListener("submit",function(e){inputName.value&&inputEmail.value||(e.preventDefault(),inputName.value||inputName.classList.add("invalid"),inputEmail.value||inputEmail.classList.add("invalid"),modalForm.classList.remove("modal-error"),modalForm.offsetWidth=modalForm.offsetWidth,modalForm.classList.add("modal-error"))}),inputName.addEventListener("blur",function(e){""!=inputName.value&&inputName.classList.remove("invalid")}),inputEmail.addEventListener("blur",function(e){""!=inputEmail.value&&inputEmail.classList.remove("invalid")}),servicesButton.forEach(function(e,a){e.addEventListener("click",function(e){for(var t=0;t<servicesItem.length;t++)servicesItem[t].classList.remove("services__item--current"),servicesButton[t].classList.remove("services-nav__button--current");servicesItem[a].classList.add("services__item--current"),servicesButton[a].classList.add("services-nav__button--current")})}),popularButton.forEach(function(e,a){e.addEventListener("click",function(e){for(var t=0;t<popularItem.length;t++)popularItem[t].classList.add("popular-list__item--hidden"),popularRadio[t].classList.remove("popular-nav__item--current");popularItem[a].classList.remove("popular-list__item--hidden"),popularRadio[a].classList.add("popular-nav__item--current")})});