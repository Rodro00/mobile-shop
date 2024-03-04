const loadData = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    // console.log(data)
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones);
}
const displayPhones = (phones) =>{

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    console.log(phones)
    phones.forEach(element => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img class="p-3" src="${element.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${element.phone_name}</h2>
                      <p>${element.slug}</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-accent">Order Now</button>
                      </div>
                    </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}

const searchMobile = () =>{
    // console.log('added done')
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
    loadData(searchText);
}

