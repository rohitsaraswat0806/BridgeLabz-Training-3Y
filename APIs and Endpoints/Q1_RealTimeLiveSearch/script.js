const API_URL = "http://localhost:3001/products";

$("#searchBox").on("input", function () {
    const searchValue = $(this).val().trim();

    $("#loading").show();
    $("#results").empty();

    $.ajax({
        url: API_URL + "?q=" + encodeURIComponent(searchValue),
        method: "GET",
        success: function (products) {
            $("#loading").hide();

            if (products.length === 0) {
                $("#results").text("No products found");
                return;
            }

            products.forEach(function (product) {
                const productCard = $(`
                    <div class="product">
                        <img src="${product.image}" alt="${product.name}">
                        <div>
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                `);

                productCard.find("h3").text(product.name);
                productCard.find("p").text("Price: Rs. " + product.price);
                $("#results").append(productCard);
            });
        },
        error: function () {
            $("#loading").hide();
            $("#results").text("Unable to load products. Check JSON Server.");
        }
    });
});

$("#searchBox").trigger("input");
