// K.A.R.P v0.2 array build unstable
const array_objects =[
  { name: "The New Balance C-ms574", description: "Salehe Bembury Shark Skin", image:"sneaker-big__img_NB_C_MS_574.png" },
  { name: "Converse Chunk 70 High", description: "Comme des Garcons PLAY Black", image:"Converse Chuck 70 High.png" },
  { name: "adidas Yeezy Foam RNNR", description: "Stone Sage", image:"adidas Yeezy Foam RNNR.png" },
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

const addButton = document.querySelector('.addButton');

const inputFieldName = document.querySelector('.crossName');
const inputFieldcrossDescription = document.querySelector('.crossDescription');
const inputFieldNamecrossImage = document.querySelector('.crossImage');

function AddingValToArray() {
  const inputValueName = inputFieldName.value;
  const inputValuecrossDescription = inputFieldcrossDescription.value;
  const inputValueNamecrossImage = inputFieldNamecrossImage.value;
  
  const newObject = {
    name: inputValueName,
    description:inputValuecrossDescription,
    image:inputValueNamecrossImage,
  };
  array_objects.push(newObject);
  inputFieldName.value = '';
  inputFieldcrossDescription.value = '';
  inputFieldNamecrossImage.value = '';
}
addButton.addEventListener('click',AddingValToArray)
addCards(array_objects)

addButton.addEventListener('click', function() {
  innerHTML=""
  addCards(array_objects)
});

const sneakersDiv = document.getElementById('sneakers');
addButton.addEventListener('click', function() {
  sneakersDiv.innerHTML = '';
  addCards(array_objects)
});