window.addEventListener('load', function(){

    var textElements = [...document.getElementsByTagName('input')];
    var listen = function(item, index) {
      item.addEventListener('keyup', function(ev){
        if (event.target.validity.valid) {
            item.style.border = "solid light green 2px";
            item.style.boxShadow = "10 10 4px light green";
        } else {
            item.style.border = "solid red 2px";
            item.style.boxShadow = "10 10 4px orange";

        }
      })
    }
    textElements.forEach(listen);



    let emailInput = document.getElementById('form-email');
    emailInput.addEventListener('invalid', ()=>{

        this.alert('Invalid email, please make sure it is spelled correctly! (');
    })



})
