import ygApi from './yg-api.js'

export default function toHTML(card) {
  return `
    <li>
      <span class="name">${card.name}</span>
      <span class="type">${card.type} ${card.level != undefined ? 'Level-' + card.level : ''}</span>
      <img class="level-${card.level}" style="${levelBorder(card)}"src="https://images.ygoprodeck.com/images/cards_cropped/${card.id}.jpg" alt="card">
    </li>
  ` 
}

function levelBorder(card) {
  if(card.level == undefined) {
    return 'border-color: #b5b5b5;';
  }

  if(card.level >= 1 && card.level <= 4) {
    return 'border-color: #95969a;';
  }

  if(card.level > 4 && card.level <= 6) {
    return 'border-color: #cc9d05;';
  }

  if (card.level > 6) {
    return 'border-color: #d30d0d;';
  }
}
const cardsElement = document.getElementById('cards');

const clearBtn = document.getElementById('btn-clear');

clearBtn.addEventListener("click", () => cardsElement.innerHTML = '');

const openPack = document.getElementById('btn-gen');

openPack.addEventListener("click", () => ygApi.getCards());


