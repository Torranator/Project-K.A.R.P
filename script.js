// K.A.R.P v0.2 array build unstable
const array_objects =[
  { name: "The New Balance C-ms574", description: "Salehe Bembury Shark Skin", image:"sneaker-big__img_NB_C_MS_574.png" },
  { name: "The New Balance C-ms574", description: "Salehe Bembury Shark Skin", image:"sneaker-big__img_NB_C_MS_574.png" },
  { name: "The New Balance C-ms574", description: "Salehe Bembury Shark Skin", image:"sneaker-big__img_NB_C_MS_574.png" },
];

const sneaker_container = document.querySelector("#sneakers")

function addCards(array){
  for (let i = 0; i<array.length;i+=1){
    let newElement = document.createElement("div");
    newElement.innerHTML=
    `
    <a href="Cross_n_1.html">
      <div class="sneaker sneaker_animation">
          <img src="${array[i].image}" class="sneaker__image" id="sneaker-image" alt="none">
          <div class="sneaker__info">
              <div class="sneaker__title">
                  ${array[i].name}
              </div>
              <div class="sneaker__description">
                  ${array[i].description}
              </div>
          </div>
      </div>
    </a>
    `;
    sneakers.appendChild(newElement);
    crossName.value = "";
    crossDescription.value = "";
    crossImage.value = "";
  }
}

function appendToArray(array){
  const crossName = document.querySelector("#crossName");
  const crossDescription = document.querySelector("#crossDescription");
  const crossImage = document.querySelector("#crossImage");

  let array_objects_additive = [crossName.value,crossDescription.value,crossImage.value ]

  array.push(array_objects_additive)

  addCards(array_objects)
}

const buttonAdd = document.getElementById("addButton");
buttonAdd.addEventListener("click", appendToArray(array_objects));//append values into main array
buttonAdd.addEventListener("click",alert("test broadcast message"))//why it displays only on startup and ignores pressing?