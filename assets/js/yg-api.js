import toHTML from './main.js'  

const ygApi = {};

ygApi.getCards = async () => {
  try {
    const url = `https://db.ygoprodeck.com/api/v7/randomcard.php`;
    const response = await fetch(url);
    
    const card = await response.json();
    const cardsElement = document.getElementById('cards');
    
    cardsElement.insertAdjacentHTML("afterbegin", toHTML(card));
  } catch (error) {
    console.error(error);
  }
};

export default ygApi;
