function searchProducts() {
    // Get the input value
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all product cards
    var products = document.querySelectorAll('.card');
    
    // Loop through each product card
    products.forEach(function(product) {
        // Get the product name
        var productName = product.querySelector('.card-info p:first-child').textContent.toLowerCase();
        
        // Check if the product name contains the search text
        if (productName.includes(searchText)) {
            // If yes, show the product card
            product.style.display = 'block';
        } else {
            // If not, hide the product card
            product.style.display = 'none';
        }
    });
}
