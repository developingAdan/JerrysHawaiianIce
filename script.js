// Main Section modals

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('item-modal');
    const modalImage = document.getElementById('modal-image');
    const modalName = document.getElementById('modal-name');
    const modalPrice = document.getElementById('modal-price');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.snack-item').forEach(item => {
        item.addEventListener('click', () => {
            // Get item details
            const name = item.getAttribute('data-name');
            const price = item.getAttribute('data-price');
            const image = item.getAttribute('data-image');

            // Set modal content
            modalName.textContent = name;
            // modalPrice.textContent = price;
            modalImage.src = image;

            // Show the modal
            modal.style.display = 'block';
        });
    });

    // Close the modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


// Nav bar modals
document.addEventListener('DOMContentLoaded', () => {
    const mainButton = document.getElementById('mainButton');
    const combosButton = document.getElementById('combosButton');
    const options = document.getElementById('options');
    const comboOptions = document.getElementById('comboOptions')
    const regularFlavors = document.getElementById('option1');
    const specialFlavors = document.getElementById('option2');

    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const modal3 = document.getElementById('modal3');
    const closeModal1 = document.getElementById('closeModal1');
    const closeModal2 = document.getElementById('closeModal2');
    const closeModal3 = document.getElementById('closeModal3');
    const modal1Content = document.getElementById('modal1-content');
    const modal2Content = document.getElementById('modal2-content');
    const modal3Content = document.getElementById('modal3-content');

    // Toggle options display
    mainButton.addEventListener('click', () => {
        options.classList.toggle('hidden');
        
    });

    combosButton.addEventListener('click', () => {
        comboOptions.classList.toggle('hidden');
    });

    // Show Combos modal
    combosButton.addEventListener('click', () => {
    // modal1Content.innerHTML = `<h1>Regular Flavors</h1>`;
    modal3Content.innerHTML = `
        <h1>Combos</h1>
        <div>
            <h3>Combo #1</h3>
            <p>XS Elote, Small Raspa, Small Fruta</p>
        </div>
        <div>
            <h3>Combo #2</h3>
            <p>Small Pepihuates, Small Raspa, Small Nachos</p>
        </div>
        <div>
            <h3>Combo #3</h3>
            <p>Small Raspa, Small Fresas con Crema, Small Hot Cheetos</p>
        </div>
        <div>
            <h3>Combo #4</h3>
            <p>Small Raspa, Small Revoltura, XS Pepino con Rajas</p>
        </div>
        `;
    modal3.style.display = 'block';
    options.classList.add('hidden'); // Hide options when modal is shown

     // Remove border from the last combo element
     const lastCombo = modal3Content.lastElementChild; // Get the last child
     if (lastCombo) {
         lastCombo.style.border = 'none'; // Remove the border
     }
});


   

    // Show Regular Flavors modal
    regularFlavors.addEventListener('click', () => {
        // modal1Content.innerHTML = `<h1>Regular Flavors</h1>`;
        modal1Content.innerHTML = `
            <h1>Regular Flavors</h1>

            <h3>Strawberry</h3>
            <h3>Banana</h3>
            <h3>Cherry</h3>
            <h3>Coconut White</h3>
            <h3>Watermelon</h3>
            <h3>Bubble Gum Pink</h3>
            <h3>Canteloupe</h3>
            <h3>Lemon Lime</h3>
            <h3>Green Apple</h3>
            <h3>Vanilla</h3>
            <h3>Bahama Mama</h3>
            <h3>Tigers Blood</h3>
            <h3>Grape</h3>
            <h3>Pineapple</h3>
            <h3>Blueberry</h3>
            <h3>Cotton Candy</h3>
            <h3>Bubble Gum Blue</h3>
            <h3>Coconut Blue</h3>
            <h3>Nectar</h3>
            <h3>Hawaiian</h3>
            <h3>Golden Apple</h3>
            <h3>Cotton Candy</h3>
            <h3>Tutty Fruity</h3>
            <h3>Raspberry</h3>`;
        modal1.style.display = 'block';
        // modal1.style.textAlign = 'center';
        options.classList.add('hidden'); // Hide options when modal is shown
    });

    specialFlavors.addEventListener('click', () => {
        modal1Content.innerHTML = `
            <h1>Special Flavors</h1>

            <h3>Diablito</h3>
            <h3>Angelito</h3>
            <h3>Bumble Bee</h3>
            <h3>Vampire</h3>
            <h3>Lemon Twist</h3>
            <h3>Pickle Dilly</h3>
            <h3>Red Devil</h3>
            <h3>Avatar</h3>
            <h3>Hulk</h3>
            <h3>Chupacabras</h3>
            <h3>Leche</h3>
            <h3>Pina Colada Blanca</h3>
            <h3>Rompope</h3>
            <h3>Charlie Brown</h3>
            <h3>Pina Colada Amarilla</h3>
            <h3>Pink Panther</h3>
            <h3>Tres Leches</h3>
            <h3>Picosita</h3>
            <h3>Tres Limones</h3>
        `;
        modal1.style.display = 'block';
        options.classList.add('hidden'); // Hide options when modal is shown
    });


    // Close Modal 1
    closeModal1.addEventListener('click', () => {
        modal1.style.display = 'none';
    });

    // Close Modal 2
    closeModal2.addEventListener('click', () => {
        modal2.style.display = 'none';
    });

    closeModal3.addEventListener('click', () => {
        modal3.style.display = 'none';
    });

    // Close modals when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal1) {
            modal1.style.display = 'none';
        }
        if (event.target === modal2) {
            modal2.style.display = 'none';
        }
    });
});
