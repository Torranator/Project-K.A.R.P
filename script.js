// K.A.R.P v0.1 unstable
function addCard() {
  const crossName = document.querySelector("#crossName");
  const crossDescription = document.querySelector("#crossDescription");
  const crossImage = document.querySelector("#crossImage");

  if (crossName.value && crossDescription.value) {
    let newElement = document.createElement("div");

    newElement.innerHTML = `<div class="sneaker sneaker_animation">
    <img src="${crossImage.value}" class="sneaker__image" id="sneaker-image" alt="${crossName.value + crossDescription.value}">
      <div class="sneaker__info" id="sneaker-info">
            <div class="sneaker__title">${crossName.value}</div>
            <div class="sneaker__description">${crossDescription.value}</div>
        </div>
        </div>`;
    sneakers.appendChild(newElement);
    crossName.value = "";
    crossDescription.value = "";
    crossImage.value = "";
  }
}

const button = document.querySelector("#addButton");
button.addEventListener("click", addCard);
