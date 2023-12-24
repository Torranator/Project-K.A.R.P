// задача - составить функцию
// способную принимать
// информацию пользователя
// и на её основе создавать карточку
// 1 - выудить значения из ячеек ввода
// 2 - записать значение куда нибудь
// 3 - выписать значение на карточку откуда нибудь
// 4 - создать карточку

function addCard() {
  const crossName = document.querySelector("#crossName");
  const crossDescription = document.querySelector("#crossDescription");
  const crossImage = document.querySelector("#crossImage");

  if (crossName.value && crossDescription.value) {
    let newElement = document.createElement("div");

    newElement.innerHTML = `<div class="sneaker">
        <img alt="${crossName.value + crossDescription.value}" src="${
      crossImage.value
    }" class="sneaker-image" />
        <div id="sneaker-info" class="sneaker-info">
            <h3 id="h3Stone">${crossName.value}</h3>
            <p id="stoneSage">${crossDescription.value}</p>
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