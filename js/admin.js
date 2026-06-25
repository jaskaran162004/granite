const defaultProducts = [
  { name: "Deep Blue", description: "Elegant deep‑blue marble.", image: "images/BLUE/Deep Blue.jpg", reviews: 15, category: "BLUE" },
  { name: "Kingfisher Blue", description: "Vivid sky‑blue tone.", image: "images/BLUE/Kingfisher blue.jpg", reviews: 28, category: "BLUE" },
  { name: "Crystal Blue", description: "Clear, cool hue.", image: "images/BLUE/crystal_blue.jpg", reviews: 9, category: "BLUE" },
  { name: "Lavender", description: "Soft purple‑blue blend.", image: "images/BLUE/lavender.jpg", reviews: 31, category: "BLUE" },
  { name: "Romantic Blue", description: "Warm, muted blue.", image: "images/BLUE/romantic_blue.jpg", reviews: 17, category: "BLUE" },
  { name: "SK Blue", description: "Modern deep shade.", image: "images/BLUE/sk_blue.jpg", reviews: 42, category: "BLUE" },
  { name: "Charcoal Grey", description: "Deep neutral tone.", image: "images/Black, Grey/Charcoal Grey.jpg", reviews: 19, category: "Black, Grey" },
  { name: "Diamond Black", description: "High‑contrast dark stone.", image: "images/Black, Grey/Diamond black.jpg", reviews: 33, category: "Black, Grey" },
  { name: "Bagera Black", description: "Rich black texture.", image: "images/Black, Grey/bagera black.webp", reviews: 21, category: "Black, Grey" },
  { name: "Black Marquino", description: "Elegant marquino black.", image: "images/Black, Grey/black marquino.webp", reviews: 14, category: "Black, Grey" },
  { name: "Black Rose", description: "Soft rose‑black pattern.", image: "images/Black, Grey/black rose.jpg", reviews: 25, category: "Black, Grey" },
  { name: "Black Forest", description: "Deep forest‑like black.", image: "images/Black, Grey/black_forest.jpg", reviews: 38, category: "Black, Grey" },
  { name: "Black Galaxy Small Flower", description: "Star‑like specks.", image: "images/Black, Grey/black_galaxy small flower.jpg", reviews: 27, category: "Black, Grey" },
  { name: "Black Galaxy Big Flower", description: "Bold floral galaxy.", image: "images/Black, Grey/black_galaxy_big flower.jpg", reviews: 16, category: "Black, Grey" },
  { name: "Black Pearl", description: "Lustrous dark pearl.", image: "images/Black, Grey/black_pearl.jpg", reviews: 30, category: "Black, Grey" },
  { name: "Cats Eye", description: "Mysterious eye pattern.", image: "images/Black, Grey/cats_eye.jpg", reviews: 22, category: "Black, Grey" },
  { name: "Coin Black", description: "Metallic black coin.", image: "images/Black, Grey/coin_black.jpg", reviews: 11, category: "Black, Grey" },
  { name: "Impala Black", description: "Graceful dark impala.", image: "images/Black, Grey/impala_black.jpg", reviews: 29, category: "Black, Grey" },
  { name: "Luxury Black", description: "Premium luxury finish.", image: "images/Black, Grey/luxury black.JPG", reviews: 45, category: "Black, Grey" },
  { name: "River Black", description: "Flowing dark river.", image: "images/Black, Grey/river_black.jpg", reviews: 18, category: "Black, Grey" },
  { name: "Steel Grey", description: "Industrial steel hue.", image: "images/Black, Grey/steel_grey.jpg", reviews: 35, category: "Black, Grey" },
  { name: "White Dots Black", description: "Speckled contrast.", image: "images/Black, Grey/white dots black.jpg", reviews: 13, category: "Black, Grey" },
  { name: "IMG 0169", description: "Golden texture.", image: "images/GOLD/IMG_0169.PNG", reviews: 8, category: "GOLD" },
  { name: "Astoria", description: "Rich gold finish.", image: "images/GOLD/astoria.jpg", reviews: 26, category: "GOLD" },
  { name: "Beige Castle", description: "Warm golden stone.", image: "images/GOLD/beige_castle.jpg", reviews: 20, category: "GOLD" },
  { name: "Colonial Gold", description: "Heritage gold hue.", image: "images/GOLD/colonial_gold.jpg", reviews: 12, category: "GOLD" },
  { name: "Gold Dust", description: "Fine golden particles.", image: "images/GOLD/gold_dust.jpg", reviews: 37, category: "GOLD" },
  { name: "Golden Forrest", description: "Sun‑kissed forest.", image: "images/GOLD/golden forrest.JPG", reviews: 15, category: "GOLD" },
  { name: "Ivory Brown", description: "Soft ivory‑brown blend.", image: "images/GOLD/ivory_brown.jpg", reviews: 23, category: "GOLD" },
  { name: "Jaggery Gold", description: "Sweet golden tone.", image: "images/GOLD/jaggery_gold.jpg", reviews: 41, category: "GOLD" },
  { name: "Jubilee Rich", description: "Rich celebratory gold.", image: "images/GOLD/jubilee_rich.jpg", reviews: 30, category: "GOLD" },
  { name: "Shiva Gold", description: "Divine golden aura.", image: "images/GOLD/shiva_gold.jpg", reviews: 17, category: "GOLD" },
  { name: "Emerald Marble", description: "Vivid emerald shade.", image: "images/Green/Emerald Marble.jpg", reviews: 29, category: "Green" },
  { name: "Aqua Green", description: "Fresh aqua hue.", image: "images/Green/aqua_green.jpg", reviews: 14, category: "Green" },
  { name: "Asian Green", description: "Deep forest green.", image: "images/Green/asian_green.jpg", reviews: 22, category: "Green" },
  { name: "Green Marble", description: "Classic green marble.", image: "images/Green/green marble.PNG", reviews: 35, category: "Green" },
  { name: "Green Sparkle", description: "Sparkling green texture.", image: "images/Green/green_sparkle.jpg", reviews: 18, category: "Green" },
  { name: "Hassan Green", description: "Rich natural green.", image: "images/Green/hassan_green.jpg", reviews: 40, category: "Green" },
  { name: "Navy Green Waterfall", description: "Deep waterfall green.", image: "images/Green/navy green waterfall.JPG", reviews: 11, category: "Green" },
  { name: "Peacock Green", description: "Vibrant peacock hue.", image: "images/Green/peacock_green.jpg", reviews: 27, category: "Green" },
  { name: "Pebbles", description: "Textured stone.", image: "images/Green/pebbles.JPG", reviews: 9, category: "Green" },
  { name: "Pista Green", description: "Soft pistachio shade.", image: "images/Green/pista green.jpg", reviews: 24, category: "Green" },
  { name: "Texture Surface", description: "Fine texture.", image: "images/Green/texture surface.JPG", reviews: 13, category: "Green" },
  { name: "Cheeta Brown", description: "Warm cheetah brown.", image: "images/Red, Brown, Maroon/Cheeta Brown.jpg", reviews: 16, category: "Red, Brown, Maroon" },
  { name: "Asian Top", description: "Rich reddish top.", image: "images/Red, Brown, Maroon/asian top.jpg", reviews: 28, category: "Red, Brown, Maroon" },
  { name: "Boss Paradise", description: "Deep paradise hue.", image: "images/Red, Brown, Maroon/boss_paradise.jpg", reviews: 31, category: "Red, Brown, Maroon" },
  { name: "Cats Eye", description: "Bright cat‑eye pattern.", image: "images/Red, Brown, Maroon/cats eye.jpg", reviews: 22, category: "Red, Brown, Maroon" },
  { name: "Colombo", description: "City inspired tone.", image: "images/Red, Brown, Maroon/colombo.PNG", reviews: 15, category: "Red, Brown, Maroon" },
  { name: "Colombo JPG", description: "Same palette, JPG.", image: "images/Red, Brown, Maroon/colombo.jpg", reviews: 10, category: "Red, Brown, Maroon" },
  { name: "Himalayan Brown", description: "Mountain brown.", image: "images/Red, Brown, Maroon/himalayan_brown.jpg", reviews: 25, category: "Red, Brown, Maroon" },
  { name: "Lakha Red", description: "Vivid red stone.", image: "images/Red, Brown, Maroon/lakha_red.jpg", reviews: 34, category: "Red, Brown, Maroon" },
  { name: "Multi Red", description: "Complex red patterns.", image: "images/Red, Brown, Maroon/multi red.jpg", reviews: 19, category: "Red, Brown, Maroon" },
  { name: "Red Purpory", description: "Red‑purple blend.", image: "images/Red, Brown, Maroon/red_purpory_CHECKSPELLING.jpg", reviews: 12, category: "Red, Brown, Maroon" },
  { name: "Riviera", description: "Coastal red tone.", image: "images/Red, Brown, Maroon/riviera.jpg", reviews: 23, category: "Red, Brown, Maroon" },
  { name: "Swan Rose", description: "Delicate pink‑brown.", image: "images/Red, Brown, Maroon/swan_rose.jpg", reviews: 30, category: "Red, Brown, Maroon" },
  { name: "Tan Brown", description: "Soft tan hue.", image: "images/Red, Brown, Maroon/tan_brown.jpg", reviews: 37, category: "Red, Brown, Maroon" },
  { name: "Wooden", description: "Rich wood texture.", image: "images/Red, Brown, Maroon/wooden.PNG", reviews: 14, category: "Red, Brown, Maroon" },
  { name: "China White", description: "Pure porcelain white.", image: "images/White/China white.PNG", reviews: 45, category: "White" },
  { name: "Era White", description: "Timeless white.", image: "images/White/Era white.PNG", reviews: 39, category: "White" },
  { name: "IMG 5124", description: "Bright white stone.", image: "images/White/IMG_5124.jpg", reviews: 22, category: "White" },
  { name: "Burgundy White", description: "Soft burgundy‑white mix.", image: "images/White/burgundy_white.jpg", reviews: 15, category: "White" },
  { name: "Chida White", description: "Elegant white hue.", image: "images/White/chida_white.jpg", reviews: 18, category: "White" },
  { name: "Diana White", description: "Classic white finish.", image: "images/White/diana_white.jpg", reviews: 27, category: "White" },
  { name: "Fantasy White", description: "Dreamy white shade.", image: "images/White/fantasy_white.jpg", reviews: 33, category: "White" },
  { name: "Gelatic White", description: "Smooth gel‑like white.", image: "images/White/gelatic white.jpg", reviews: 20, category: "White" },
  { name: "Ice White", description: "Cool icy tone.", image: "images/White/ice_white.jpg", reviews: 36, category: "White" },
  { name: "Maharaja White", description: "Regal white stone.", image: "images/White/maharaja white.jpg", reviews: 42, category: "White" },
  { name: "Moon White", description: "Lunar soft white.", image: "images/White/moon white.jpg", reviews: 25, category: "White" },
  { name: "Paravati White", description: "Elegant ivory.", image: "images/White/paravati white.jpg", reviews: 14, category: "White" },
  { name: "River White", description: "Flowing white.", image: "images/White/river white.jpg", reviews: 29, category: "White" },
  { name: "S White", description: "Clarified white texture.", image: "images/White/s_white_CLARIFYNAME.jpg", reviews: 11, category: "White" },
  { name: "Snow White", description: "Pure snow hue.", image: "images/White/snow white.jpg", reviews: 24, category: "White" },
  { name: "Star White", description: "Starlit white.", image: "images/White/star_white1.jpg", reviews: 38, category: "White" },
  { name: "Star White Duplicate", description: "Duplicate version.", image: "images/White/star_white_DUPLICATE.jpg", reviews: 5, category: "White" },
  { name: "Supreme White", description: "Supreme brightness.", image: "images/White/supreme white.jpg", reviews: 31, category: "White" },
  { name: "White Fantacy", description: "Fantasy white texture.", image: "images/White/white fantacy.jpg", reviews: 28, category: "White" },
  { name: "White Pearl", description: "Pearlescent white.", image: "images/White/white pearl.jpg", reviews: 40, category: "White" },
  { name: "White Galaxy", description: "Galaxy‑inspired white.", image: "images/White/white_galaxy.jpg", reviews: 35, category: "White" }
];

let products = JSON.parse(localStorage.getItem("products"));
if (!products || products.length === 0) {
    products = defaultProducts;
    localStorage.setItem("products", JSON.stringify(products));
} else {
    // Check if migration is needed (if any product is missing category, image, or reviews)
    let needsMigration = products.some(p => !p.hasOwnProperty("category") || !p.hasOwnProperty("image") || !p.hasOwnProperty("reviews"));
    if (needsMigration) {
        products = products.map(p => {
            // Find in defaultProducts by name as a fallback for missing fields
            const defaultProd = defaultProducts.find(dp => dp.name === p.name);
            return {
                name: p.name,
                description: p.description || (defaultProd ? defaultProd.description : ""),
                category: p.category || (defaultProd ? defaultProd.category : "BLUE"),
                image: p.hasOwnProperty("image") && p.image ? p.image : (defaultProd ? defaultProd.image : ""),
                reviews: p.hasOwnProperty("reviews") && p.reviews !== undefined ? Number(p.reviews) : (defaultProd ? defaultProd.reviews : 0)
            };
        });
        localStorage.setItem("products", JSON.stringify(products));
    }
}

let editIndex = -1;

// Global helper functions attached to window for HTML onclick handlers
window.renderTable = function() {
    const table = document.getElementById("productsTable");
    if (!table) return;
    table.innerHTML = "";

    if (products.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="7" style="text-align:center; padding:20px;">
                    No Products Found
                </td>
            </tr>
        `;
        return;
    }

    products.forEach((p, i) => {
        table.innerHTML += `
        <tr>
            <td>${i + 1}</td>

            <td>
                ${
                    p.image
                        ? `<img src="${p.image}" class="product-img">`
                        : "No Image"
                }
            </td>

            <td>${p.name}</td>
            <td><strong>${p.category || "Unassigned"}</strong></td>
            <td>${p.description}</td>
            <td>${p.reviews}</td>

            <td>
                <button onclick="editProduct(${i})">Edit</button>
                <button onclick="deleteProduct(${i})">Delete</button>
            </td>
        </tr>
        `;
    });
};

window.updateStats = function() {
    const totalProducts = document.getElementById("totalProducts");
    const totalReviews = document.getElementById("totalReviews");

    if (totalProducts) totalProducts.textContent = products.length;

    const total = products.reduce((sum, p) => sum + Number(p.reviews || 0), 0);
    if (totalReviews) totalReviews.textContent = total;
};

window.editProduct = function(i) {
    const p = products[i];

    const nameInput = document.getElementById("name");
    const categorySelect = document.getElementById("category");
    const descInput = document.getElementById("description");
    const revInput = document.getElementById("reviews");

    if (nameInput) nameInput.value = p.name;
    if (categorySelect) categorySelect.value = p.category || "BLUE";
    if (descInput) descInput.value = p.description;
    if (revInput) revInput.value = p.reviews;

    editIndex = i;
};

window.deleteProduct = function(i) {
    products.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(products));

    window.renderTable();
    window.updateStats();
};

window.clearAllProducts = function() {
    products = [];
    localStorage.removeItem("products");

    window.renderTable();
    window.updateStats();
};

// Bind submit event and initialize render when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("productForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const category = document.getElementById("category").value;
            const description = document.getElementById("description").value;
            const reviews = document.getElementById("reviews").value;
            const imageFile = document.getElementById("image").files[0];

            if (!name || !category || !description || !reviews) return;

            const saveData = (image) => {
                const originalImage = (editIndex !== -1 && products[editIndex]) ? products[editIndex].image : "";
                const finalImage = image || originalImage;
                const product = {
                    name,
                    category,
                    description,
                    reviews: Number(reviews),
                    image: finalImage
                };

                if (editIndex === -1) {
                    products.push(product);
                } else {
                    products[editIndex] = product;
                    editIndex = -1;
                }

                localStorage.setItem("products", JSON.stringify(products));

                form.reset();

                window.renderTable();
                window.updateStats();
            };

            if (imageFile) {
                const reader = new FileReader();
                reader.onload = () => saveData(reader.result);
                reader.readAsDataURL(imageFile);
            } else {
                saveData("");
            }
        });
    }

    window.renderTable();
    window.updateStats();
});