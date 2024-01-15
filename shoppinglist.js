document.addEventListener('DOMContentLoaded', (event) => {
    const addItemButton = document.getElementById('button-addon2');
    const inputField = document.querySelector('.input-group input[type="text"]');
    const list = document.querySelector('.list-group');

    // Function to add a new item to the list
    function addItem() {
        const itemText = inputField.value.trim();
        if (itemText === '') {
            alert('Please enter an item.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        listItem.innerHTML = `
            <span>
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
            </span>
            ${itemText}
            <span class="badge badge-primary badge-pill">
                <button style="background-color: transparent; border: none; color: white;">X</button>
            </span>
        `;

        // Add event listener to the delete button
        listItem.querySelector('span.badge button').addEventListener('click', function() {
            listItem.remove();
        });

        list.appendChild(listItem);
        inputField.value = ''; // Clear the input field
    }

    // Event listener for adding an item
    addItemButton.addEventListener('click', addItem);

    // Add item on pressing enter key
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    });
});
