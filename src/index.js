import "./style.scss";

let typing = false;

const input = document.querySelector(".component__sity-list input");
const cityList = document.querySelector(".component__list-hint");

input.value = "Введите город";

input.addEventListener("focus", (event) => {
    cityList.innerHTML = "";
   input.value == "Введите город" ? input.value="" : input.value;
});

input.addEventListener("blur", (event) => {
    input.value = "Введите город";
});

input.addEventListener("input", event=>{
    if (typing) {
        return;
    } else {
        typing = true;
        setTimeout(() => {
            // cityList.innerHTML = "";
            const name = input.value;
            fetch(`http://localhost:3000/address/city/${name}`)
                .then((data) => data.json())
                .then((res) => {
                    cityList.innerHTML = "";
                    res.cities.forEach(el => {
                        const newEl = document.createElement('li');
                        newEl.textContent = el;
                        cityList.appendChild(newEl);
                    });
                });
            typing = false;
        }, 500);
    }
});

cityList.addEventListener('click', (event)=>{
    if ( event.target.innerHTML.indexOf("li") == -1) {
        input.value = event.target.innerHTML;
        cityList.innerHTML = "";
    }
    
})
