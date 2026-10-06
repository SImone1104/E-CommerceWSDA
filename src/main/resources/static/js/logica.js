/* Funzioni richiamate dagli eventi HTML: click, change, submit e load. */

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Inserisci username e password.");
        return false;
    }
    return true;
}

function registerUser() {
    var password = document.getElementById("regPassword").value;
    var confirmPassword = document.getElementById("confermaPassword").value;

    if (password !== confirmPassword) {
        alert("Le password non coincidono.");
        return false;
    }
    alert("Registrazione completata.");
    return true;
}

function searchProducts() {
    var searchText = document.getElementById("searchInput").value;

    if (searchText === "") {
        alert("Inserisci un testo da cercare.");
        return false;
    }
    return true;
}

function toggleAccount() {
    var accountBox = document.getElementById("accountBox");

    if (accountBox.style.display === "block") {
        accountBox.style.display = "none";
    } else {
        accountBox.style.display = "block";
    }
}

function showElement(elementId) {
    document.getElementById(elementId).style.display = "block";
}

function hideElement(elementId) {
    document.getElementById(elementId).style.display = "none";
}

function showCartMessage(productName) {
    document.getElementById("cartModalText").innerHTML = productName + " è stato aggiunto al carrello.";
    showElement("cartModal");
}

function showProductInfo(productName) {
    var image = document.getElementById("modalProductImage");
    var name = document.getElementById("modalProductName");
    var description = document.getElementById("modalProductDescription");
    var price = document.getElementById("modalProductPrice");

    if (productName === "Laptop Pro") {
        image.src = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600";
        image.alt = "Laptop Pro";
        description.innerHTML = "Laptop potente e leggero con processore di ultima generazione, ideale per studio, lavoro e intrattenimento.";
        price.innerHTML = "€899,99";
    } else if (productName === "Smartphone X") {
        image.src = "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600";
        image.alt = "Smartphone X";
        description.innerHTML = "Smartphone moderno con display ad alta risoluzione, fotocamera avanzata e lunga autonomia.";
        price.innerHTML = "€699,99";
    } else if (productName === "Cuffie Wireless") {
        image.src = "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600";
        image.alt = "Cuffie Wireless";
        description.innerHTML = "Cuffie wireless con cancellazione del rumore, audio di alta qualità e autonomia fino a 30 ore.";
        price.innerHTML = "€149,99";
    } else if (productName === "Desktop Gaming") {
        image.src = "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600";
        image.alt = "Desktop Gaming";
        description.innerHTML = "Desktop ad alte prestazioni pensato per gaming, grafica e applicazioni che richiedono elevata potenza.";
        price.innerHTML = "€1299,99";
    }

    name.innerHTML = productName;
    showElement("infoModal");
}

function formatPrice(totalCents) {
    var euros = (totalCents - (totalCents % 100)) / 100;
    var cents = totalCents % 100;

    if (cents < 10) {
        cents = "0" + cents;
    }
    return "€" + euros + "," + cents;
}

function calculateCartTotal() {
    var quantity1 = document.getElementById("quantity1").value;
    var quantity2 = document.getElementById("quantity2").value;
    var total;

    if (quantity1 < 1) {
        quantity1 = 1;
        document.getElementById("quantity1").value = quantity1;
    }
    if (quantity2 < 1) {
        quantity2 = 1;
        document.getElementById("quantity2").value = quantity2;
    }

    total = 89999 * quantity1 + 14999 * quantity2;
    document.getElementById("cartTotal").innerHTML = formatPrice(total);
    document.getElementById("finalTotal").innerHTML = formatPrice(total);
}

function setPaymentMethod(method) {
    var cardData = document.getElementById("cardData");
    var cardNumber = document.getElementById("numeroCarta");
    var expiry = document.getElementById("scadenza");
    var cvv = document.getElementById("cvv");

    if (method === "carta") {
        cardData.style.display = "block";
        cardNumber.disabled = false;
        expiry.disabled = false;
        cvv.disabled = false;
    } else {
        cardData.style.display = "none";
        cardNumber.disabled = true;
        expiry.disabled = true;
        cvv.disabled = true;
    }
}

function completeOrder() {
    alert("Acquisto completato con successo.");
    return true;
}
