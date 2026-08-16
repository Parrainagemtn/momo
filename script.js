'use strict';

const faqSection = document.querySelector('.faq-sec');

faqSection.addEventListener('click', (e) => {

  const head = e.target.closest('.question-head');
  if (!head) return;

  const card = head.closest('.faq-card');
  card.classList.toggle('faqCardActive');
});

//animation des titres

const headers = document.querySelectorAll("section h2");

const cards = document.querySelectorAll(".card");


function showElements(array_elts, elts_class){

    array_elts.forEach( (elt) => {
        const screenHeight = window.innerHeight;
        const elementHeight = elt.getBoundingClientRect().top;
        if(elementHeight < screenHeight * 0.85){
            elt.classList.add(elts_class)
        }else{
            elt.classList.remove(elts_class)
        }
    });

}
showElements(headers, "titleActive");
showElements(cards, "cardActive");

document.addEventListener('scroll', () =>{
    showElements(headers, "titleActive");
    showElements(cards, "cardActive");
})

document.addEventListener('resize', () =>{
    showElements(headers, "titleActive");
    showElements(cards, "cardActive");
})

document.addEventListener('DOMContentLoaded', () =>{
    showElements(headers, "titleActive");
    showElements(cards, "cardActive");
})

//validation du numero

function isValidNumber(){
    const phoneNumber = document.querySelector("#inputNumber");
    const sendNumber = document.querySelector("#send-number");

    const regexNumber = /^6(?:7\d|5[0-4]|8[0-4])\d{6}$/;
    const valid = regexNumber.test(phoneNumber.value.trim());

    sendNumber.disabled = !valid;
    
    sendNumber.style.opacity = valid ? '1' : '0.5';
    return valid;
}

function initFormSendNumber(){

    const phoneNumber = document.querySelector("#inputNumber");
    const sendNumber = document.querySelector("#send-number");
    const msgSucces = document.querySelector(".msg-succes");
    const msgError = document.querySelector(".msg-error");

    sendNumber.disabled = true;
    sendNumber.style.opacity = '0.5';

    phoneNumber.addEventListener("input", () =>{
        

        isValidNumber();


            if( phoneNumber.classList.contains("inputInvalid") ) phoneNumber.classList.remove("inputInvalid")
            if( msgError.classList.contains("showMsg") ) msgError.classList.remove("showMsg")
            if( phoneNumber.classList.contains("inputValid") ) phoneNumber.classList.remove("inputValid")
            if( msgSucces.classList.contains("showMsg") ) msgSucces.classList.remove("showMsg")
                
        if(phoneNumber.value.trim().length === 9){

            const valid = isValidNumber();

            if( valid ){

              if( phoneNumber.classList.contains("inputInvalid") ) phoneNumber.classList.remove("inputInvalid")
            if( msgError.classList.contains("showMsg") ) msgError.classList.remove("showMsg")
              phoneNumber.classList.add("inputValid");
              msgSucces.classList.add("showMsg");


            }else{


                if( phoneNumber.classList.contains("inputValid") ) phoneNumber.classList.remove("inputValid")
                if( msgSucces.classList.contains("showMsg") ) msgSucces.classList.remove("showMsg")
                phoneNumber.classList.add("inputInvalid");
                msgError.classList.add("showMsg");


            }
        }

    })
}

initFormSendNumber()


//envoyer le formulaire

const formulaire = document.querySelector(".formulaire");

formulaire.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    setTimeout(()=>{
        formulaire.submit();
    },3000)

    const loader = document.createElement("div");
    loader.classList.add("loader");

    const sendNumber = document.querySelector("#send-number");

    sendNumber.style.width = sendNumber.offsetWidth + 'px';
    sendNumber.style.height = sendNumber.offsetHeight + 'px';

    sendNumber.textContent = '';
    sendNumber.appendChild(loader);
    sendNumber.disabled = true
    sendNumber.style.opacity = '0.5' 
})
