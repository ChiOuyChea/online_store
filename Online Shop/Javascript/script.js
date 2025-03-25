
const data = [
    {
        id: 1,
        product_name: "Honey Infused Hydrating Lip Oil",
        description: `
            - Mirsalehi Honey: A powerful humectant that attracts and retains moisture.
            - Mirsalehi Bee Garden Oils: Rich, antioxidant powerhouse oils that replenish, lock in moisture, and add shine.
            - Hyaluronic Acid: Delivers added hydration and smooths.
        `,
        category: "lip oil",
        image: "libs1.webp",
        price: 28.22,
        discount: 5
    },
    {
        id: 2,
        product_name: "Moisturizing Lip Balm",
        description: `
                
            What it is: A moisturizing lip balm that smooths lips, supports the lip barrier, and offers up to 24 hours of lip comfort.
            Formulation Type: Lip Balm & Treatment
            Benefits: Long-wearing
            Highlighted Ingredients:
            - Jojoba Oil
            - Bifidus Extract
        `,
        category: "lip oil",
        image: "s2786093-main-zoom.webp",
        price: 50.12,
        discount: 5
    },
    {
        id: 3,
        product_name: "Fenty Treatz Hydrating + Strengthening Lip Oil",
        description: `
            Skin Type: Normal, Dry, Combination, and Oily
            Skincare Concerns: Dryness
            Formulation: Oil
            Highlighted Ingredients:
            - Sweet Cherry Seed Oil: Infuses lips with essential fatty acids; moisturizes and nourishes.
            - Barbados Cherry and Wild Cherry Extracts: Antioxidant rich; condition and renew lips.
            - Jojoba Seed and Rosehip Fruit Oils: Locks in moisture and soothe dry lips.
        `,
        category: "lip oil",
        image: "Fenty.webp",
        price: 24,
        discount: 0
    },
    {
        id: 4,
        product_name: "Master Mattes™ Eyeshadow Palette",
        description: `
            This Set Contains:
            - 12 x 0.03 oz/ 1g Eyeshadows in Matte 1 (soft white), Matte 2 (warm sand), Matte 3 (warm cream), Matte 4 (warm tan), Matte 5 (warn ochre), Matte 6 (neutral brown), Matte 7 (warm terracotta), Matte 8 (warm medium brown), Matte 9 (rich red brown), Matte 10 (deep warm brown), Matte 11 (deep cool brown), Matte 12 (intense black)
            Palette Size: 5.3” x 0.7” x 2.9” (full size)
        `,
        category: "eye palettes",
        image: "s2389518-main-zoom.webp",
        price: 50,
        discount: 10
    },
    {
        id: 5,
        product_name: "Skin Defence Multi- Protection Light Essence SPF 50 PA +++",
        description: `
                Weightless, fast-absorbing moisturiser
                SPF 50 PA +++ with indoor and outdoor pollution protection
                UVA/UVB protection
                Invisible finish
                Doesn’t leave skin feeling sticky or greasy
                Great under makeup
                Suitable for sensitive skin
                Non-comedogenic
        `,
        category: "tinted moisturizer",
        image: "skin.jpg",
        price: 5,
        discount: 0
    },
    {
        id: 6,
        product_name: "Skin Defence Multi- Protection",
        description: `
                - VERSATILE: A practical face mist format, perfect for on-the-go protection that can be used directly over makeup! What’s not to love?
                - REFRESHING CLOUD-LIKE MIST: Super lightweight with a non-comedogenic formula, skin feels non-greasy and refreshed.i
                - Instant moisture boost
                - Fast-drying formula
                - With Community Trade soya oil from Brazil
        `,
        category: "tinted moisturizer",
        image: "hybrisimages_1028485_skin_defence_spray_bottle_spf_45_inrbfps873.jpg",
        price: 35,
        discount: 5
    },
    {
        id: 7,
        product_name: "ILIA Limitless Lash Lengthening Clean Mascara",
        description: `
                Highlighted Ingredients:
                    - Arginine (Keratin): Haircare hero that helps fortify and reinforce lashes from within. - Organic Shea Butter: Weightlessly conditions and adds a soft, flexible feel. - Beeswax: Helps seal in moisture for nourished, healthy-looking lashes.
                    Ingredient Callouts: Free of sulfates SLS and SLES, parabens, formaldehydes, formaldehyde-releasing agents, phthalates, mineral oil, retinyl palmitate, oxybenzone, coal tar, hydroquinone, and triclosa, and contains less than one percent of synthetic fragrances. This product is also cruelty-free and gluten-free, and comes in recyclable packaging. 
        `,
        category: "mascara",
        image: "s2335198-main-zoom.webp",
        price: 12.55,
        discount: 5
    },
    {
        id: 8,
        product_name: "Easy Bake Loose Baking & Setting Powder",
        description: `
            Highlighted Ingredients:
                - Vitamin E: Moisturizes and strengthens the skin barrier for a smooth application.
                - Rice Starch Powder: Absorbs excess oil.
                - Micronized Powder: Allows you to layer without caking.
        `,
        category: "setting spray",
        image: "s2739415-main-zoom.webp",
        price: 38,
        discount: 10
    },
    {
        id: 9,
        product_name: "CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+",
        description: `
            - 98% said it left skin looking rejuvenated
            - 96% said it left skin feeling nourished and conditioned
            - 96% said it left skin feeling moisturized throughout the day
            - 96% said it left skin looking healthy.
            - 95% said it left skin feeling healthy and infused with moisture.
        `,
        category: "face primer",
        image: "s1292820-main-zoom.webp",
        price: 69,
        discount: 0
    },
    {
        id: 10,
        product_name: "Vitamin Enriched Face Base Moisturizer & Primer with Vitamin C + Hyaluronic Acid",
        description: `
            -Hyaluronic Acid: Hydrates and plumps while minimizing the look of fine lines & wrinkles.

            -Niacinamide: Minimizes the look of discoloration & promotes even-toned, radiant skin.

            -Vitamin E: Helps soothe and nourish skin
        `,
        category: "bb&cc",
        image: "s2599835-main-zoom.webp",
        price: 29,
        discount: 5
    },
    {
        id: 11,
        product_name: "Hollywood Flawless Filter",
        description: `
            - Finely Milled Powders: Blurs lines and pores for a smoother, soft-focus look.
            - Porcelain Flower Extract: Thai flower derivative that visibly brightens and moisturizes skin.
            - Glossy Oil: Lightweight moisturizing oil that reflects and adds light where you need it.
        `,
        category: "foundation",
        image: "s2419786-main-zoom.webp",
        price: 49,
        discount: 5
    },
    {
        id: 12,
        product_name: "Vanish™ Airbrush Concealer",
        description: `
            - 97% found the formula lightweight on the skin
            - 94% said the under-eye area looked brighter
            - 94% reported a blurring or smoothing effect under the eyes
        `,
        category: "concealer",
        image: "s2303006-main-zoom.webp",
        price: 30,
        discount: 50
    },
    {
        id: 13,
        product_name: "Cookie and Tickle Shimmer Finish Powder Highlighters",
        description: `
            - Vitamin E: Moisturizes and strengthens the skin barrier for a smooth application.
                - Rice Starch Powder: Absorbs excess oil.
                - Micronized Powder: Allows you to layer without caking.
        `,
        category: "highlighter",
        image: "s2520468-main-zoom.webp",
        price: 27,
        discount: 5
    },
    {
        id: 14,
        product_name: "SoftSculpt® Shaping Stick",
        description: `
            - 97% found the formula lightweight on the skin
            - 94% said the under-eye area looked brighter
            - 94% reported a blurring or smoothing effect under the eyes
        `,
        category: "contour",
        image: "s2778207-main-zoom.webp",
        price: 39,
        discount: 5
    },
    {
        id: 15,
        product_name: "HD Skin Face Essentials – Longwear Full Face Cream Palette",
        description: `
            - 6 x 0.07 oz/ 2.2 g Complexion shades (medium with rosy tones, medium with neutral tones, deep with neutral tones, tan with rosy tones, very deep with neutral tones, deep with warm tones)
            - 4 x 0.07 oz/2.2 g Blushes (hot pink, bright coral, vibrant rose, deep berry)
            - 2 x 0.07 oz/2.2 g Highlighters (shimmering bronze, peachy gold)
        `,
        category: "facesets",
        image: "s2765352-main-zoom.webp",
        price: 31,
        discount:0
    },
    {
        id: 16,
        product_name: "24/7 Glide-On Waterproof Eyeliner Pencil",
        description: `
            - 6 x 0.07 oz/ 2.2 g Complexion shades (medium with rosy tones, medium with neutral tones, deep with neutral tones, tan with rosy tones, very deep with neutral tones, deep with warm tones)
            - 4 x 0.07 oz/2.2 g Blushes (hot pink, bright coral, vibrant rose, deep berry)
            - 2 x 0.07 oz/2.2 g Highlighters (shimmering bronze, peachy gold)
        `,
        category: "eyeliner",
        image: "s1393693-main-zoom.webp",
        price: 23,
        discount:0
    },
    {
        id: 17,
        product_name: "Brow Harmony Flexible Lifting and Laminating Eyebrow Gel",
        description: `
            - Vitamin E: Moisturizes and strengthens the skin barrier for a smooth application.
                - Rice Starch Powder: Absorbs excess oil.
                - Micronized Powder: Allows you to layer without caking.
        `,
        category: "eyebrow",
        image: "s2728186-main-zoom.webp",
        price: 29,
        discount:10
    },
    {
        id: 18,
        product_name: "Velour-Xtensions™ Self-Stick Lash Kit",
        description: `
            This Set Contains:
            - Self-Stick Lash Clusters in everyday Natural (subtle, fluffy lash style)
            - Mini Too Real Lash Extension Tool
        `,
        category: "falseeyelashes",
        image: "s2773414-main-zoom.webp",
        price: 32,
        discount:5
    },
    {
        id: 19,
        product_name: "Sephora Colorful® Eyeshadow",
        description: `
            This Set Contains:
            - Self-Stick Lash Clusters in everyday Natural (subtle, fluffy lash style)
            - Mini Too Real Lash Extension Tool
        `,
        category: "eyeshadow",
        image: "s2709822-main-zoom.webp",
        price: 33,
        discount:5
    },
    {
        id: 20,
        product_name: "Multi-Peptide Lash and Brow Serum",
        description: `
            This Set Contains:
            - Self-Stick Lash Clusters in everyday Natural (subtle, fluffy lash style)
            - Mini Too Real Lash Extension Tool
        `,
        category: "eyelashserums",
        image: "s2532588-main-zoom.webp",
        price: 26,
        discount:5
    },
    {
        id: 21,
        product_name: "GrandeBROW 2-In-1 Tinted Brow Gel + Brow Enhancing Serum",
        description: `
            - Brow-Enhancing Serum: Is backed by GrandeBROW ingredient technology.
            - Castor Oil: Is a great moisturizer rich in omega-6 fatty acids.
            - Beet Root Extract: Is a natural source of carotenoids and B vitamins that supports brow-hair health.
        `,
        category: "eyebrowserums",
        image: "s2589802-main-zoom.webp",
        price: 24,
        discount:3
    },
    {
        id: 22,
        product_name: "Eyeshadow Primer Potion",
        description: `
            - Brow-Enhancing Serum: Is backed by GrandeBROW ingredient technology.
            - Castor Oil: Is a great moisturizer rich in omega-6 fatty acids.
            - Beet Root Extract: Is a natural source of carotenoids and B vitamins that supports brow-hair health.
        `,
        category: "eyeprimer",
        image: "s1704402-main-zoom.webp",
        price: 18,
        discount:3
    },
    {
        id: 23,
        product_name: "Infinite Chrome Flakes Multichrome Gel for Eyes & Face",
        description: `
            - Brow-Enhancing Serum: Is backed by GrandeBROW ingredient technology.
            - Castor Oil: Is a great moisturizer rich in omega-6 fatty acids.
            - Beet Root Extract: Is a natural source of carotenoids and B vitamins that supports brow-hair health.
        `,
        category: "eyeprimer",
        image: "s2575504-main-zoom.webp",
        price: 17,
        discount:7
    },
    {
        id: 24,
        product_name: "Lash Bash Set",
        description: `
            - 0.02 oz/ 0.7 mL GrandeLASH-MD Lash Enhancing Serum, Mini Size
            - 0.05 oz/ 1.4 g GrandeMASCARA Conditioning Peptide Mascara, Mini Size
            - 1 oz/ 3 g GrandeDRAMA Intense Thickening Mascara with Castor Oil, Mini Size
        `,
        category: "eyesets",
        image: "s2792331-main-zoom.webp",
        price: 26,
        discount:7
    },
    {
        id: 25,
        product_name: "Lip Butter Balm for Hydration & Shine",
        description: `
            - Shea and Murumuru Seed Butters: Natural moisturizers that soothe, relieve, and condition parched lips.
            - Vegan Waxes: Soften and boost shine all day with a smooth, never-greasy texture.
        `,
        category: "lips",
        image: "s2495497-main-zoom.webp",
        price: 23,
        discount:7
    },
    {
        id: 26,
        product_name: "Lip Glow Oil",
        description: `
            - Shea and Murumuru Seed Butters: Natural moisturizers that soothe, relieve, and condition parched lips.
            - Vegan Waxes: Soften and boost shine all day with a smooth, never-greasy texture.
        `,
        category: "gloss",
        image: "s2750081-main-zoom.webp",
        price: 25,
        discount:7
    },
    {
        id: 27,
        product_name: "Gloss Bomb Stix High-Shine Gloss Stick",
        description: `
            - Shea and Murumuru Seed Butters: Natural moisturizers that soothe, relieve, and condition parched lips.
            - Vegan Waxes: Soften and boost shine all day with a smooth, never-greasy texture.
        `,
        category: "lipsticks",
        image: "s2787497-main-zoom.webp",
        price: 22,
        discount:7
    },
    {
        id: 28,
        product_name: "Kissing Jelly Hydrating Lip Oil Gloss",
        description: `
           Highlighted Ingredients:
            - Sunflower and Jojoba Seed Oils: Soften lips.
        `,
        category: "lipoil",
        image: "s2739225-main-zoom.webp",
        price: 29,
        discount:7
    },
   {
        id: 29,
        product_name: "MoistureGlow™ Plumping Lip Serum",
        description: `
           Highlighted Ingredients:
            - Sunflower and Jojoba Seed Oils: Soften lips.
        `,
        category: "lip plumper",
        image: "s2783199-main-zoom.webp",
        price: 24,
        discount:7
    },
    {
        id: 30,
        product_name: "Lip Sleeping Mask Intense Hydration with Vitamin C",
        description: `
           Highlighted Ingredients:
            - Sunflower and Jojoba Seed Oils: Soften lips.
        `,
        category: "lip balm",
        image: "s2371367-main-zoom.webp",
        price: 22,
        discount:15
    },
    {
        id: 31,
        product_name: "Lip Glowy Balm",
        description: `
           Highlighted Ingredients:
            - Sunflower and Jojoba Seed Oils: Soften lips.
        `,
        category: "lip stain",
        image: "s2743037-main-zoom.webp",
        price: 22,
        discount:20 
    },
    {
        id: 32,
        product_name: "Powermatte High-Intensity Long-Lasting Lip Pencil",
        description: `
           Highlighted Ingredients:
            - Sunflower and Jojoba Seed Oils: Soften lips.
        `,
        category: "lip liner",
        image: "s2756104-main-zoom.webp",
        price: 35,
        discount:20 
    },
    {
        id: 33,
        product_name: "Mini Glossy Pink Lip Gloss + Lip Liner Set",
        description: `
        Nude Pink:
        - 0.02 oz/ 0.57 g Mini Lip Cheat Lip Liner in Iconic Nude
        - 0.08 oz/ 2.36 mL Mini Collagen Lip Bath Gloss in Pillow Talk
        Fresh Pink:
        - 0.02 oz/ 0.57 g Lip Cheat Lip Liner in Pillow Talk
        - 0.08 oz/ 2.36 mL Collagen Lip Bath Gloss in Refresh Rose
        `,
        category: "lip sets",
        image: "s2670073-main-zoom.webp",
        price: 33,
        discount:0 
    },
    {
        id: 34,
        product_name: "Moisturizing Lip Balm",
        description: `
        Clinical Results: Coconut Balm: In a test:
        - 100% of people found the lip balm nourishes the lips
        - 100% of people found the lip balm had a soothing effect on their lips
        Cherry Balm: In a test:
        - 100% of people found the lip balm nourishes the lips
        - 100% of people found the balm instantly made their lips feel more comfortable
        Watermelon Balm: In a test:
        - 100% of people found the lip balm nourishes the lips
        - 100% of people found the lip balm moisturizes the lips
        Raspberry Balm: In a test:
        - 100% of people found the lip balm nourishes the lips
        - 100% of people found the lip balm makes their lips shine      
`,
        category: "lip treatments",
        image: "s2707875-main-zoom.jpg",
        price: 40,
        discount:30 
    },
    {
        id: 35,
        product_name: "Talc-Free Powder Blush",
        description: `
           Highlighted Ingredients: 
        - Naturally-Derived and Mineral-Based Pigments: Deliver true-color payoff and ensure a high-impact effect.
        - Pearlescent Pigments: Blurs the look of imperfections.
        - Superfine, Micronized Pigments: Provide an irresistibly silky, blendable application.
        `,
        category: "blush",
        image: "s2756393-main-zoom.webp",
        price: 20,
        discount:20 
    },
    {
        id: 36,
        product_name: "Beautiful Skin Sun-Kissed Glow Cream Bronzer",
        description: `
           Highlighted Ingredients:
            - Hyaluronic Acid: Hydrates and visibly revitalizes skin.
            - Vitamin D3: Helps protect skin upon exposure to sunlight.
        `,
        category: "bronzer",
        image: "s2569366-main-zoom.webp",
        price: 30,
        discount:20 
    },
    {
        id: 36,
        product_name: "BACKSTAGE Glow Face Palette",
        description: `
          001 Universal:
        - 4 x Highlighters in White, Golden, Bronze, Rosy Blush
        002 Glitz:
        - 4 x Highlighters in Gold, Pearly White with Maxi Glitter, Bronze with Holographic Accents, Delicately Shimmering
        `,
        category: "chighlighter",
        image: "s2748093-main-zoom.webp",
        price: 20,
        discount:10 
    },
    {
        id: 37,
        product_name: "Sculpt Cream Contour Stick",
        description: `
         Highlighted Ingredients:
        - Thyme Extract Blend: Helps nourish skin.
        - Sunflower Seed Oil: Hydrates, smooths, and calms skin.
        `,
        category: "ccontour",
        image: "s2639680-main-zoom.webp",
        price: 25,
        discount:50 
    },
    {
        id: 38,
        product_name: "Laguna Ultimate Face Palette",
        description: `
        Light to Medium Palette: 
        4 X 0.04 oz/1.2 g Eyeshadows in Spritz (shimmer rose gold), Unwind (matte peach pink), Heat Spell (satin rust brown), Sizzle (shimmer yellow gold)    
        2 X 0.14 oz /4 g Laguna Bronzing Powders in Laguna 02 Original (light-medium bronze with neutral undertones), Laguna 04 (medium bronze with warm undertones)    
        1 X 0.14 oz /4 g Highlighter in Drift Away (champagne shimmer)    
        Medium to Deep Palette: 
        4 X 0.04 oz/1.2 g Eyeshadows in Easy Livin' (matte cinnamon), Tan Lines (satin gold tangerine), Summer Love (shimmer antique copper), Sand Dollar (sparkling crimson)    
        2 X 0.14 oz /4 g Laguna Bronzing Powders in Laguna 06 (deep bronze with warm undertones), Laguna 08 (very deep bronze with neutral undertones)    
        1 X 0.14 oz /4 g Highlighter in Weekender (warm golden copper shimmer)    
        `,
        category: "ccontour",
        image: "s2772275-main-zoom.webp",
        price: 37,
        discount:40 
    },
]





let cartItem = JSON.parse(window.localStorage.getItem("carts")) || [];

document.getElementById("cart-quantity").innerHTML = cartItem.length;
const blur_background = document.getElementById("blur-background");
const preview_popup = document.getElementById("preview-popup");


//Close Preview Popup
document.querySelector("#close_btn").addEventListener("click", closePopUp)

function closePopUp(){
    blur_background.style.display = "none";
    preview_popup.style.top = "-1000px";
    document.body.style.removeProperty("overflow");
}

//Load data 
function getData() {
    const product_list = document.getElementById("product-list");
    let html = "";
    data.forEach((val) => {
        html += `
            <div class="product-card">
            ${val.discount > 0 ? '<span id="banner">PROMOTION</span>' : ""}
                <button id="preview" value="${val.id}"></button>
                <img src="IMG/${val.image}" alt="">
                <h3>${val.product_name}</h3>
                <div>
                    <span id="price">$ ${val.discount == 0 ? val.price : (val.price - (val.price * val.discount) / 100).toFixed(2)}</span>
                   ${val.discount > 0 ? '<span id="old_price">$ ' + val.price + '</span>' : ""}
                </div>
            </div>
        `
    });
    product_list.innerHTML = html;
    previewProduct();
}

getData();

let params = new URL(document.location.toString()).searchParams;
let urlCat = params.get("cat") || null;
let urlSearch = params.get("search") || null;
console.log(urlSearch);

if (urlCat != null){
    getProductByCategory(urlCat);
}
else{
    window.history.pushState(null, null, '/shop.html');
}
if (urlSearch != null){
    searchProduct(urlSearch);
    document.querySelector('input[type="search"]').value = urlSearch;
}

//Click Preview product
function previewProduct(){
    document.querySelectorAll("#preview").forEach(btn => {
        btn.addEventListener("click", function (e) {
            let product_id = e.target.value;
            blur_background.style.display = "block";
            blur_background.style.top = `${Math.round(window.scrollY)}px`;
            preview_popup.style.cssText = `top: calc(50% + ${Math.round(window.scrollY)}px);`;
            const previewData = data.filter(value => value.id == product_id);
            document.body.style.overflow = "hidden";
    
            let html = `
                <div id="left">
                    <div id="product-image-wrapper">
                        <img src="IMG/${previewData[0].image}" alt="">
                    </div>

                     <div id="show-pre-mobile">
                        <div>
                            <span id="quantity-label">Quantity : </span>
                            <button onclick="quantityIncreaseDescrease('-')">-</button>
                            <span id="quantity-value">1</span>
                            <button onclick="quantityIncreaseDescrease('+')">+</button>
                        </div>
                        <button id="add-to-cart" onclick="addtoCart(${previewData[0].id},'${previewData[0].product_name}',${previewData[0].discount == 0 ? previewData[0].price : (previewData[0].price - (previewData[0].price * previewData[0].discount) / 100)},'${previewData[0].image}')">Add to Cart</button>
                    </div>


                </div>
                <div id="right">
                    <h3>${previewData[0].product_name}</h3>
                    <hr/>
                   <span>$ ${previewData[0].discount == 0 ? previewData[0].price : (previewData[0].price - (previewData[0].price * previewData[0].discount) / 100).toFixed(2)}</span>
                   `;
                   
    
            let arr = previewData[0].description.split('\n');
            arr.forEach(val => {
                if (val.trim() != "") {
                    html += `
                                <p>
                                    ${val} <br>
                                </p>
                            `;
                }
            })
    
            // ${previewData[0].description}
            html += ` 
                    <hr>
                    <div id="hide-pre-mobile">
                        <div>
                            <span id="quantity-label">Quantity : </span>
                            <button onclick="quantityIncreaseDescrease('-')">-</button>
                            <span id="quantity-value">1</span>
                            <button onclick="quantityIncreaseDescrease('+')">+</button>
                        </div>
                        <button id="add-to-cart" onclick="addtoCart(${previewData[0].id},'${previewData[0].product_name}',${previewData[0].discount == 0 ? previewData[0].price : (previewData[0].price - (previewData[0].price * previewData[0].discount) / 100)},'${previewData[0].image}')">Add to Cart</button>
                    </div>
                </div>
            `;
            document.querySelector("#wrapper").innerHTML = html;
        })
    })
}



document.querySelector(".cart").addEventListener("click",fetchCartItem)

function fetchCartItem(){
    const cart_popup = document.getElementById("cart-popup");
    blur_background.style.display = "block";
    blur_background.style.top = "0";
    cart_popup.style.cssText = `top: calc(50% + ${Math.round(window.scrollY)}px);`;
    const cart_wrapper = document.getElementById("cart-item-wrapper");
    document.body.style.overflow = "hidden";
    let html = "";
    let total = 0;
    if(cartItem.length>0){
        cartItem.forEach(cartitem=>{
            html+=`
                <div class="cart-item">
                    <div class="item-image-wrapper">
                        <img src="IMG/${cartitem.image}" alt="">
                    </div>
                    <div class="cart-item-desc">
                        <div>
                            <h6>${cartitem.product_name}</h6>
                            <p>x${cartitem.qty}</p>
                        </div>
                        <div>
                            <span>${cartitem.price} $</span>
                            <button class="btn-delete-cart" value="${cartitem.id}"></button>
                        </div>
                    </div>
                </div>
            `;
            total+=cartitem.qty * cartitem.price;
    
        })
    }else
     html = `<h2 id="msg">No Cart Items.</h2>`;


    document.querySelector("#cart-total").innerHTML = total+" $";
    let disprice = total * (5/100);
    document.querySelector("#cart-discount").innerHTML = `(5%) - ${disprice.toFixed(2)} $`;
    document.querySelector("#cart-total-pay").innerHTML = `${cartItem.length == 0 ? 0 : ((total - disprice) + 2).toFixed(2)} $`;
    document.querySelector("#cart-quantity").innerHTML = cartItem.length;
    cart_wrapper.innerHTML = html;
    deleteCart();
}


//Click On Brand
document.querySelectorAll("#product_brand").forEach( p_brand=>{
    p_brand.addEventListener("click",function(e){
        getProductByBrand(e.target.innerHTML);
        document.getElementById("hamburger-menu").checked = false;
    })
})


function deleteCart(){
    document.querySelectorAll(".btn-delete-cart").forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            cartItem = cartItem.filter(val=>val.id!=e.target.value);
            fetchCartItem();
            window.localStorage.setItem("carts",JSON.stringify(cartItem));
        })
    })
}


//Get Product By Brand
function getProductByBrand(brand){
    // console.log(brand);
    
    const filterProduct = data.filter(val => val.brand.toLowerCase() == brand.toLowerCase());
    let html = "";
    filterProduct.map(val => {
        html += 
        `
            <div class="product-card">
            ${val.discount > 0 ? '<span id="banner">PROMOTION</span>' : ""}
                <button id="preview" value="${val.id}"></button>
                <img src="IMG/${val.image}" alt="">
                <h3>${val.product_name}</h3>
                <div>
                    <span id="price">$ ${val.discount == 0 ? val.price : (val.price - (val.price * val.discount) / 100)}</span>
                   ${val.discount > 0 ? '<span id="old_price">$ ' + val.price + '</span>' : ""}
                </div>
            </div>
        `;
    })

    document.getElementById("product-list").innerHTML = html;
    previewProduct();
}

function resetHamburger(){
    let hamburger_menu = document.querySelectorAll(".hamburger-dropdown");
    let hamburgers = [...hamburger_menu];
    hamburgers.forEach(hamburger => {
        hamburger.classList.remove("active-ham");
        let id = hamburger.id;
        document.getElementById(id.substring(0, id.length - 4)).classList.remove("active");
    })
}

 // get product by category
    function getProductByCategory(cat){
        window.history.pushState(null, null, 'shop.html?cat=' + cat);

        console.log(cat);
        
        const filterProduct = data.filter(val => val.category == cat);
        let html = "";
        filterProduct.map(val => {
            html += `
            <div class="product-card">
                ${val.discount > 0 ? '<span id="banner">PROMOTION</span>' : ""}
                    <button id="preview" value="${val.id}"></button>
                    <img src="IMG/${val.image}" alt="">
                    <h3>${val.product_name}</h3>
                    <div>
                        <span id="price">$ ${val.discount == 0 ? val.price : (val.price - (val.price * val.discount) / 100).toFixed(2)}</span>
                        ${val.discount > 0 ? '<span id="old_price">$ ' + val.price + '</span>' : ""}
                    </div>
                </div>
            `;
        resetHamburger();
        if(document.querySelector("#mobile_hamburger").classList.contains("active-mobile-ham")){
            document.querySelector("#mobile_hamburger").classList.remove("active-mobile-ham");
            document.querySelector("#hamburger_chkbox").checked = false;
        }
    })

    document.getElementById("product-list").innerHTML = html;
    previewProduct();
    }



document.querySelector(".tools input[type='search']").addEventListener("keyup",function(e){ // fetch all data when delete text in search box
    if(e.target.value == "")
        getData();
   
})

//Search Product
document.querySelector(".search").addEventListener("click",function(){
    let search_query = document.querySelector(".tools input[type='search']");
    searchProduct(search_query.value);
        
})

document.querySelector("#mobile_hamburger button").addEventListener("click",function(){
    let search_query = document.querySelector("#mobile_hamburger input[type='search']");
    searchProduct(search_query.value);
    document.querySelector("#hamburger_chkbox").checked =false;
    let ele = document.querySelector("#mobile_hamburger");
    ele.classList.remove("active-mobile-ham");
})

function searchProduct(search_query){
    if(search_query.trim()!=""){
        console.log(search_query);
        window.history.pushState(null,null,'shop.html?search='+search_query);
        
        let new_data = data.filter(val=>val.product_name.toLowerCase().indexOf(search_query.toLowerCase())!=-1);
        let html = "";
        new_data.map(val=>{
            html += `
            <div class="product-card">
            ${val.discount > 0 ? '<span id="banner">PROMOTION</span>' : ""}
                <button id="preview" value="${val.id}"></button>
                <img src="IMG/${val.image}" alt="">
                <h3>${val.product_name}</h3>
                <div>
                    <span id="price">$ ${val.discount == 0 ? val.price.toFixed(2) : (val.price - (val.price * val.discount) / 100).toFixed(2)}</span>
                   ${val.discount > 0 ? '<span id="old_price">$ ' + val.price.toFixed(2) + '</span>' : ""}
                </div>
            </div>
        `;
        })
        document.getElementById("product-list").innerHTML = html;
        previewProduct();
    }else{
        getData();
    }
}

//Quantity Button
function quantityIncreaseDescrease(operator){
   
    document.querySelectorAll("#quantity-value").forEach(q=>{
        let qty = Number(q.innerHTML);
        operator=="+"?qty++:(qty==1?1:qty--);
        
        q.innerHTML = qty;
    })
    
}

//Click Add to Cart
function addtoCart(id,pname,price,image){
    const cart_ele = document.querySelector("#cart-quantity");
    let qty = Number(cart_ele.innerHTML); 
    if(document.getElementById("quantity-value").innerHTML == '0'){
        alert("Quantity must greater than zero.")
    }else{
        cart_ele.innerHTML = ++qty;
        closePopUp();
        cartItem.push(
            {
                id:id,
                product_name:pname,
                qty:Number(document.getElementById("quantity-value").innerHTML),
                price:price,
                image:image
            }
        );
        window.localStorage.setItem("carts",JSON.stringify(cartItem));
    }
}

//Close Cart PopUp
document.querySelector("#btn-close-cart").addEventListener("click",()=>{
    const cart_popup = document.getElementById("cart-popup");
    blur_background.style.display = "none";
    cart_popup.style.top = "-500px";
    document.body.style.removeProperty("overflow");
})

document.querySelector("#btn-checkout").onclick = () =>{ // clear cartitem when click checkout button
    if(cartItem.length > 0)
    {
        alert("Checkout successfull.");
        window.localStorage.removeItem("carts");
        cartItem = [];
        fetchCartItem();
    }else
        alert("Please add some product to cart.");
}  