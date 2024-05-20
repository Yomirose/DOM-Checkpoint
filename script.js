// use DOMContendLoaded as external framework to update the total price of the item
document.addEventListener('DOMContentLoaded', () => {
    const updateTotalPrice = () => {
        let total = 0;
        // use parseFloat() method to convert the price into floating-point numbers.
        document.querySelectorAll('.card-body').forEach(item => {
            const price = parseFloat(item.querySelector('.unit-price').textContent.replace(' $', ''));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        document.querySelector('.total').textContent = `${total.toFixed(2)} $`;
    };

    document.querySelectorAll('.fa-heart').forEach(heart => {
        heart.addEventListener('click', () => {
            heart.classList.toggle('liked');
        });
    });

    document.querySelectorAll('.fa-plus-circle').forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = ++quantity;
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.fa-minus-circle').forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantityElement.textContent = --quantity;
                updateTotalPrice();
            }
        });
    });

    document.querySelectorAll('.fa-trash-alt').forEach(button => {
        button.addEventListener('click', () => {
            const cardBody = button.closest('.card-body');
            cardBody.remove();
            updateTotalPrice();
        });
    });

    // Initial calculation of total price
    updateTotalPrice();
});
