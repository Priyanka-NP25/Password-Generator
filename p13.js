function generate(){
    let dictionary = "";
    if(document.getElementById("lowercaseCb").checked){
        dictionary += "abcdefghijklmnopqrstuvwxyz";
    }
    if(document.getElementById("uppercaseCb").checked){
        dictionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(document.getElementById("digitsCb").checked){
        dictionary += "1234567890";
    }
    if(document.getElementById("specialCb").checked){
        dictionary += "!@#$%^&*()_+-={}[];<>:";
    }
    const length = document.querySelector('input[type="range"]').value;
    if(length < 1 || dictionary.length === 0)
        {
            return;
        }
        let password = "";
        for(let i = 0;i < length;i++){
         const pos = Math.floor(Math.random() * dictionary.length);;
          password += dictionary[pos];  
        }
        document.querySelector('input[type="text"]').value = password;
} 
[...document.querySelectorAll('input[type = "checkbox"],button.generate'),].forEach((elem) =>{
    elem.addEventListener("click",generate);
});
document.querySelector('input[type = "range"]').addEventListener("input",(e) => {
    document.querySelector("div.range span").innerHTML = e.target.value;
    generate();
});
