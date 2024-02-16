const cardContainer = document.getElementsByClassName('cardContainer')[0];


for (let index = 0; index < 16 * 16; index++) {
    const card = document.createElement('div');                                             
    card.className = 'card';

    card.dataset.isSelected = "no";

    card.addEventListener('click', () => {

        if(card.dataset.isSelected == 'no') {
            card.style.backgroundColor = '#cbcfd4';
            card.dataset.isSelected = 'yes';
        } else {
            card.dataset.isSelected = 'no';
            card.style.backgroundColor = '#0d1117';
        }
    })

    card.addEventListener('mouseover', () => {
        if(card.dataset.isSelected == 'no') {
            card.style.backgroundColor = '#cbcfd4';
        }
    })

    card.addEventListener('mouseout', () => {
        if(card.dataset.isSelected == 'no') {
            setTimeout(() => {
                card.style.backgroundColor = '#0d1117';
            }, 200)
        }
    })


    cardContainer.appendChild(card);
}