// Amazon-style product details (About this item, Product description, Product information),
// copied from the Woodmen Design Amazon listings on 2026-11-10 (ASINs in comments).
// NOTE: some Amazon listings contain copy-paste errors in specs; fix the value here if you spot one.

export interface ProductDetails {
  /** "About this item" bullet points */
  about: string[];
  /** Long "Product description" paragraph (empty if the Amazon text was wrong/missing) */
  description: string;
  /** "Product information" table rows: [label, value] */
  specs: [string, string][];
}

export const PRODUCT_DETAILS: Record<string, ProductDetails> = {
  "prod-21": {
    "about": [
      "PREMIUM MATERIAL: Crafted from high-quality mango wood, this serving tray showcases the natural beauty and durability of solid hardwood construction",
      "NATURAL FINISH: Features a natural polish that enhances the wood's organic grain patterns, knots, and unique characteristics, making each tray one-of-a-kind",
      "LARGE MULTIPURPOSE SERVING TRAY Generous size of 20 x 16 inches makes it perfect for serving tea, snacks, breakfast, fruits, desserts, or using it as a decorative platter for dining tables and coffee tables.",
      "VERSATILE USE: Perfect for serving breakfast in bed, entertaining guests, displaying food at gatherings, or as a rustic decorative accent piece in your home",
      "RUSTIC CHARM: The natural wood grain pattern with visible knots and colour variations adds authentic rustic character and warmth to any kitchen or dining setting",
      "Product color may slightly vary due to photographic lighting sources or your monitor settings . Please read size, material, color and all features carefully before ordering."
    ],
    "description": "Bring elegance and functionality to your dining experience with the WOODMEN Mango Wood Serving Tray, designed with premium craftsmanship and natural wood beauty. Made from solid mango wood, this tray showcases a unique natural grain pattern that gives every piece a distinctive appearance. The sturdy construction ensures durability for everyday serving while maintaining a sophisticated and rustic charm. With a spacious size of 20 x 16 inches and 0.5 inch thickness, the tray provides ample space for serving tea, snacks, breakfast, fruits, desserts, or beverages. It is perfect for hosting guests, serving meals, or enhancing your dining presentation. The natural wooden finish complements both modern and traditional kitchen interiors, making it suitable for homes, restaurants, cafés, and special gatherings. Whether used for serving food, organizing kitchen items, or displaying decorative pieces, the WOODMEN Mango Wood Serving Tray combines practicality with timeless design.",
    "specs": [
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Colour",
        "Wooden Colour"
      ],
      [
        "Material",
        "Mango Wood"
      ],
      [
        "Product Dimensions",
        "50.8L x 38.1W x 1.3H Centimeters"
      ],
      [
        "Shape",
        "Rectangular"
      ],
      [
        "Tray Type",
        "Serving Tray"
      ],
      [
        "Recommended Uses For Product",
        "Serving"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Model number",
        "Wooden Serving Tray"
      ],
      [
        "Item Type Name",
        "Wooden Serving Tray"
      ],
      [
        "Unit Count",
        "1 Count"
      ],
      [
        "Special Feature",
        "Handcrafted"
      ],
      [
        "Style",
        "Traditional"
      ],
      [
        "Pattern",
        "Natural Wooden Grain"
      ],
      [
        "Theme",
        "Wooden"
      ],
      [
        "Enclosure Material",
        "Mango Wood"
      ],
      [
        "Finish Types",
        "Natural Wooden Grain"
      ],
      [
        "Product Care Instructions",
        "Hand Wash Only"
      ],
      [
        "Is Dishwasher Safe",
        "No"
      ],
      [
        "Item Dimensions L x W x H",
        "50.8L x 38.1W x 1.3H Centimeters"
      ],
      [
        "Number of Items",
        "1"
      ],
      [
        "Item Weight",
        "450 Grams"
      ]
    ]
  },
  "prod-22": {
    "about": [
      "Premium Natural Mango Wood Crafted from high-quality natural mango wood, this bowl features beautiful natural grain patterns and a smooth handcrafted finish that adds warmth and elegance to your kitchen and dining table.",
      "Durable & Long-Lasting Unlike ordinary wooden bowls, the WOODMEN mango wood bowl is strong, sturdy, and resistant to cracking, ensuring long-term durability for everyday use.",
      "Food-Safe & Eco-Friendly Made from natural, sustainably sourced mango wood, this bowl has a food-safe finish and contains no harmful chemicals, making it safe for serving fruits, snacks, dry fruits, or salads.",
      "Perfect Compact Size Designed with a 4 x 4 x 1.5 inch size, this small wooden bowl is perfect for serving nuts, berries, dry fruits, snacks, dips, desserts, or small portions.",
      "Multi-Purpose Serving Bowl Ideal for dry fruits, snacks, fruits, salads, candies, or decorative table serving. It also works beautifully for home décor, kitchen styling, and gift purposes."
    ],
    "description": "Bring natural elegance to your dining experience with the WOODMEN Natural Mango Wood Bowl . Expertly handcrafted from premium mango wood, this bowl showcases a rich natural grain and smooth polished finish that enhances the beauty of any kitchen or dining setup. The compact 4 x 4 x 1.5 inch design makes it perfect for serving dry fruits, nuts, berries, snacks, or small salads. Its durable mango wood construction ensures long-lasting use while maintaining a lightweight and easy-to-handle structure. Unlike plastic or chemically treated bowls, this bowl is made from natural eco-friendly mango wood with a food-safe finish , making it a healthier and more sustainable choice for your home. Whether you use it for serving snacks during gatherings, displaying fruits, or adding a rustic touch to your kitchen décor, the WOODMEN wooden bowl combines functionality with natural beauty . Because each bowl is handcrafted from real wood, slight variations in color, grain, or texture may occur, making every piece unique.",
    "specs": [
      [
        "Bowl Material",
        "Mango Wood"
      ],
      [
        "Number of Pieces",
        "1"
      ],
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Colour",
        "Natural Wooden"
      ],
      [
        "Style",
        "Traditional"
      ],
      [
        "Specific Uses For Product",
        "Dry Fruit"
      ],
      [
        "Included Components",
        "Bowl"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Unit Count",
        "1 Count"
      ],
      [
        "Number of Packs",
        "1"
      ],
      [
        "Number of Items",
        "1"
      ],
      [
        "Item Type Name",
        "Mango Wood Bowl"
      ],
      [
        "Item Weight",
        "170 Grams"
      ],
      [
        "Manufacturer Part Number",
        "Mango Wood Bowl"
      ],
      [
        "Model number",
        "Mango wood bowl"
      ],
      [
        "Product Style",
        "Traditional"
      ],
      [
        "Shape",
        "Round"
      ],
      [
        "Pattern",
        "Natural Wooden Grain"
      ],
      [
        "Bowl Material Type",
        "Mango Wood"
      ],
      [
        "Enclosure Material",
        "Mango Wood"
      ],
      [
        "OutputCapacity",
        "250 Milliliters"
      ],
      [
        "Item Dimensions W x H",
        "10.2W x 10.2H Centimeters"
      ],
      [
        "Size",
        "4 x 4 x 1.5 inch"
      ],
      [
        "Other Special Features of the Product",
        "Durable, Leak Resistant, Lightweight"
      ]
    ]
  },
  "prod-23": {
    "about": [
      "PREMIUM NATURAL WOOD CONSTRUCTION – Durable, strong & long-lasting material KEEPS ROTIS WARM & FRESH – Helps retain softness for longer time",
      "PREMIUM PACKAGING: Comes in an attractive gift box with decorative paper filling, making it perfect for gifting on special HIGH-QUALITY HANDCRAFTED WOOD – Smooth polished finish HEAT RETENTION LID – Protects from moisture & dust",
      "VERSATILE STORAGE: Ideal for storing small items, trinkets, jewellery, or decorative pieces with its well-fitted lid keeping contents secure and dust-free",
      "QUALITY CONSTRUCTION: Smooth-finished interior and exterior with a perfectly fitted lid and elegant knob handle for easy access",
      "DISTINCTIVE APPEAL: Natural wood grain patterns and traditional spherical design add a touch of rustic charm to any room setting"
    ],
    "description": "",
    "specs": [
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Colour",
        "Dark Brown"
      ],
      [
        "Material",
        "Walnut"
      ],
      [
        "Special Feature",
        "Decorative Wood Grain Pattern, Eco-friendly, Gift Box Included, Handcrafted, Removable Lid"
      ],
      [
        "Style",
        "Rustic Modern"
      ],
      [
        "Recommended Uses For Product",
        "Decorative Display, Gift Packaging, Jewelry Storage, Small Item Organization, Trinket Container"
      ],
      [
        "Product Dimensions",
        "15L x 8W x 10H Centimeters"
      ],
      [
        "Capacity",
        "0.5 litres"
      ],
      [
        "Closure Type",
        "Lift-off Lid, Wooden Knob"
      ],
      [
        "Water Resistance Level",
        "Not Water Resistant"
      ],
      [
        "Item Weight",
        "350 Grams"
      ],
      [
        "Number of Items",
        "1"
      ],
      [
        "Storage Volume",
        "500 Milliliters"
      ],
      [
        "Number of Compartments",
        "1"
      ],
      [
        "Unit Count",
        "1 Count"
      ],
      [
        "Item Package Quantity",
        "1"
      ],
      [
        "Style Name",
        "Rustic Modern"
      ],
      [
        "Shape",
        "Round"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Material Type",
        "Walnut"
      ],
      [
        "Material Features",
        "Hand-carved, Natural Wood Grain, Polished Finish, Smooth Texture"
      ],
      [
        "Other Special Features of the Product",
        "Decorative Wood Grain Pattern, Eco-friendly, Gift Box Included, Handcrafted, Removable Lid"
      ],
      [
        "Opening Mechanism",
        "Lift-off Lid With Knob Handle"
      ],
      [
        "Brand Name",
        "WOODMEN DESIGN"
      ],
      [
        "Country of Publication",
        "India"
      ],
      [
        "Included Components",
        "Decorative Filling, Fitted Lid, Gift Box, Storage Bowl"
      ],
      [
        "Item Type Name",
        "Decorative Storage Bowl"
      ],
      [
        "Model Number",
        "Wb-r500"
      ]
    ]
  },
  "prod-24": {
    "about": [
      "Elegant Floral Design Beautiful multi-color floral printed chapati box enhances your dining table and kitchen décor with a traditional yet modern handcrafted look.",
      "Keeps Rotis Fresh Longer Designed with a fitted lid to help retain warmth and freshness of chapatis, rotis, parathas, naans, and tortillas during meals.",
      "Durable Wooden Construction Made from sturdy quality wood for long-lasting durability, lightweight handling, and reliable everyday kitchen use.",
      "Multipurpose Kitchen Storage Ideal for storing chapatis, breads, snacks, dry items, cookies, or serving food stylishly during family dinners and gatherings.",
      "Perfect Gift Choice A stylish and useful kitchen accessory suitable for housewarming gifts, festive gifting, weddings, anniversaries, and home décor lovers."
    ],
    "description": "Add charm and functionality to your kitchen with this beautifully crafted Multi-Color Wooden Chapati Box. Featuring an attractive floral print design with a smooth wooden finish, this roti storage box is perfect for keeping chapatis, rotis, parathas, and breads warm and fresh for longer durations. Its sturdy wooden construction offers durability while the elegant handcrafted appearance enhances your dining experience. The spacious design provides convenient storage and serving, making it ideal for daily meals, festive occasions, and family gatherings. This designer chapati box is not only practical but also serves as a decorative kitchen accessory. Whether used for serving Indian breads or storing snacks and dry foods, it combines utility with aesthetic appeal effortlessly.",
    "specs": [
      [
        "Colour",
        "RED"
      ],
      [
        "Material",
        "Walnut"
      ],
      [
        "Product Dimensions",
        "15L x 8W x 10H Centimeters"
      ],
      [
        "Item Weight",
        "350 Grams"
      ],
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Unit Count",
        "1 Count"
      ],
      [
        "Capacity",
        "0.5 litres"
      ],
      [
        "Finish Types",
        "Smooth"
      ],
      [
        "Material Type",
        "Walnut"
      ],
      [
        "Brand Name",
        "WOODMEN DESIGN"
      ],
      [
        "Country of Publication",
        "India"
      ],
      [
        "Included Components",
        "Decorative Filling, Fitted Lid, Gift Box, Storage Bowl"
      ],
      [
        "Item Type Name",
        "Chapati Box"
      ],
      [
        "Model Number",
        "Wb-r500"
      ]
    ]
  },
  "prod-25": {
    "about": [
      "Elegant Floral Design Beautiful multi-color floral printed chapati box enhances your dining table and kitchen décor with a traditional yet modern handcrafted look.",
      "Keeps Rotis Fresh Longer Designed with a fitted lid to help retain warmth and freshness of chapatis, rotis, parathas, naans, and tortillas during meals.",
      "Durable Wooden Construction Made from sturdy quality wood for long-lasting durability, lightweight handling, and reliable everyday kitchen use.",
      "Multipurpose Kitchen Storage Ideal for storing chapatis, breads, snacks, dry items, cookies, or serving food stylishly during family dinners and gatherings.",
      "Perfect Gift Choice A stylish and useful kitchen accessory suitable for housewarming gifts, festive gifting, weddings, anniversaries, and home décor lovers."
    ],
    "description": "Add charm and functionality to your kitchen with this beautifully crafted Multi-Color Wooden Chapati Box. Featuring an attractive floral print design with a smooth wooden finish, this roti storage box is perfect for keeping chapatis, rotis, parathas, and breads warm and fresh for longer durations. Its sturdy wooden construction offers durability while the elegant handcrafted appearance enhances your dining experience. The spacious design provides convenient storage and serving, making it ideal for daily meals, festive occasions, and family gatherings. This designer chapati box is not only practical but also serves as a decorative kitchen accessory. Whether used for serving Indian breads or storing snacks and dry foods, it combines utility with aesthetic appeal effortlessly.",
    "specs": [
      [
        "Colour",
        "BLUE"
      ],
      [
        "Material",
        "Walnut"
      ],
      [
        "Product Dimensions",
        "15L x 8W x 10H Centimeters"
      ],
      [
        "Item Weight",
        "350 Grams"
      ],
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Unit Count",
        "1 Count"
      ],
      [
        "Capacity",
        "0.5 litres"
      ],
      [
        "Finish Types",
        "Smooth"
      ],
      [
        "Material Type",
        "Walnut"
      ],
      [
        "Brand Name",
        "WOODMEN DESIGN"
      ],
      [
        "Country of Publication",
        "India"
      ],
      [
        "Included Components",
        "Decorative Filling, Fitted Lid, Gift Box, Storage Bowl"
      ],
      [
        "Item Type Name",
        "Chapati Box"
      ],
      [
        "Model Number",
        "Wb-r500"
      ]
    ]
  },
  "prod-26": {
    "about": [
      "Elegant Floral Design Beautiful multi-color floral printed chapati box enhances your dining table and kitchen décor with a traditional yet modern handcrafted look.",
      "Keeps Rotis Fresh Longer Designed with a fitted lid to help retain warmth and freshness of chapatis, rotis, parathas, naans, and tortillas during meals.",
      "Durable Wooden Construction Made from sturdy quality wood for long-lasting durability, lightweight handling, and reliable everyday kitchen use.",
      "Multipurpose Kitchen Storage Ideal for storing chapatis, breads, snacks, dry items, cookies, or serving food stylishly during family dinners and gatherings.",
      "Perfect Gift Choice A stylish and useful kitchen accessory suitable for housewarming gifts, festive gifting, weddings, anniversaries, and home décor lovers."
    ],
    "description": "Add charm and functionality to your kitchen with this beautifully crafted Multi-Color Wooden Chapati Box. Featuring an attractive floral print design with a smooth wooden finish, this roti storage box is perfect for keeping chapatis, rotis, parathas, and breads warm and fresh for longer durations. Its sturdy wooden construction offers durability while the elegant handcrafted appearance enhances your dining experience. The spacious design provides convenient storage and serving, making it ideal for daily meals, festive occasions, and family gatherings. This designer chapati box is not only practical but also serves as a decorative kitchen accessory. Whether used for serving Indian breads or storing snacks and dry foods, it combines utility with aesthetic appeal effortlessly.",
    "specs": [
      [
        "Colour",
        "BROWN"
      ],
      [
        "Material",
        "Walnut"
      ],
      [
        "Product Dimensions",
        "15L x 8W x 10H Centimeters"
      ],
      [
        "Item Weight",
        "350 Grams"
      ],
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Unit Count",
        "1 Count"
      ],
      [
        "Capacity",
        "0.5 litres"
      ],
      [
        "Finish Types",
        "Smooth"
      ],
      [
        "Material Type",
        "Walnut"
      ],
      [
        "Brand Name",
        "WOODMEN DESIGN"
      ],
      [
        "Country of Publication",
        "India"
      ],
      [
        "Included Components",
        "Decorative Filling, Fitted Lid, Gift Box, Storage Bowl"
      ],
      [
        "Item Type Name",
        "Chapati Box"
      ],
      [
        "Model Number",
        "Wb-r500"
      ]
    ]
  },
  "prod-27": {
    "about": [
      "PREMIUM WOODEN DESIGN: Beautifully crafted wooden masala box with a natural wood grain finish that adds a traditional and elegant look to your kitchen.",
      "MULTIPLE STORAGE CONTAINERS: Includes multiple stainless steel containers to organize different spices, herbs, and seasonings separately.",
      "CONVENIENT WOODEN LID: Comes with a stylish wooden lid and easy-grip knob handle for convenient opening and closing.",
      "SMART KITCHEN ORGANIZATION: Keeps frequently used spices neatly arranged and easily accessible while preparing everyday meals.",
      "MULTIPURPOSE STORAGE: Suitable for storing turmeric, chilli powder, cumin, coriander powder, garam masala, and other kitchen seasonings."
    ],
    "description": "Bring elegance and convenience to your kitchen with this Premium Wooden Masala Box, beautifully designed for storing and organizing your everyday spices. Crafted with a natural wooden finish, this traditional masala dabba adds a stylish and classic touch to your kitchen. It comes with multiple stainless steel containers that allow you to keep different spices, herbs, and seasonings neatly separated and easily accessible.",
    "specs": [
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Colour",
        "TAN"
      ],
      [
        "Material",
        "Wood"
      ],
      [
        "Material Feature",
        "Reusable"
      ],
      [
        "Capacity",
        "250 Grams"
      ],
      [
        "Material Type",
        "Wood"
      ],
      [
        "Material Features",
        "Reusable"
      ],
      [
        "Is the item dishwasher safe?",
        "No"
      ],
      [
        "Material Type Free",
        "Wood"
      ],
      [
        "Is the item microwaveable?",
        "No"
      ],
      [
        "Brand Name",
        "WOODMEN DESIGN"
      ],
      [
        "Recommended Uses For Product",
        "Spices"
      ],
      [
        "Item Form",
        "Box"
      ],
      [
        "Specific Uses For Product",
        "Household"
      ],
      [
        "Country of Publication",
        "India"
      ],
      [
        "Included Components",
        "1 Round Wooden Spice Box, Metal lid with a knob, Spice Compartments"
      ],
      [
        "Item Type Name",
        "Spice Box"
      ],
      [
        "Item Dimensions L x W x H",
        "21L x 12W x 11H Centimeters"
      ],
      [
        "Item Package Quantity",
        "1"
      ],
      [
        "Item Weight",
        "500 Grams"
      ],
      [
        "Unit Count",
        "1 Count"
      ],
      [
        "Size",
        "Medium"
      ],
      [
        "Other Special Features of the Product",
        "Leak Resistant"
      ],
      [
        "Closure Type",
        "Lid"
      ],
      [
        "Container Shape",
        "Round"
      ]
    ]
  },
  "prod-28": {
    "about": [
      "Premium Mango Wood – Crafted from high-quality mango wood, this serving tray offers durability and elegance for everyday use.",
      "Natural Polish Finish – A sleek, natural finish enhances the tray's beautiful wood grain, adding a warm touch to any space.",
      "Multipurpose Use – Ideal for serving food, organizing office supplies, or displaying jewelry and other décor.",
      "Compact & Lightweight – At 9x12 inches, the tray is easy to carry and store while providing ample space for various uses.",
      "Easy to Maintain – Easy cleaning with mild soap and water, maintaining its beautiful finish for years to come."
    ],
    "description": "Premium Mango Wood Tray – This square tray is made from high-quality mango wood, known for its durability and rich texture. The smooth, polished surface enhances the tray’s natural wood grains, making it both functional and aesthetically pleasing. Perfect Size & Multipurpose Use – With dimensions of 9x12 inches, this tray is perfect for a variety of purposes. Use it to serve delicious meals or snacks, organize office supplies, or display jewelry, candles, or plants. Its compact size makes it easy to carry and store, while its sturdy construction ensures it will last for years. Natural Polish Finish – The tray is finished with a natural polish that not only protects the wood but also highlights its stunning grain pattern. The rich, warm color makes it an ideal addition to any table, countertop, or decorative display. Lightweight & Easy to Carry – This lightweight tray is designed for comfort and ease of use. Whether you are serving guests or organizing your space, it is easy to carry around and handle without feeling bulky or cumbersome. Easy Maintenance – Keeping the tray in top condition is simple. Just clean it gently with a mild soap solution and dry it immediately after use. Avoid soaking, and store it in a dry place away from direct sunlight for long-lasting beauty. Elevate your home with this versatile, stylish tray – a must-have for anyone looking to add a touch of natural elegance to their décor. Whether you're using it in the kitchen, office, or as a decorative piece, this Mango Wood Tray offers both functionality and beauty!",
    "specs": [
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Colour",
        "Turquoise, Orange, Gold, White, Pink"
      ],
      [
        "Material",
        "Mango Wood"
      ],
      [
        "Product Dimensions",
        "35L x 14W x 3.5H Centimeters"
      ],
      [
        "Shape",
        "Square"
      ],
      [
        "Tray Type",
        "Serving Tray"
      ],
      [
        "Recommended Uses For Product",
        "Serving"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Model number",
        "Searving-Tray"
      ],
      [
        "Item Type Name",
        "Decorative Serving Tray"
      ],
      [
        "Unit Count",
        "1 Count"
      ],
      [
        "Special Feature",
        "Handcrafted"
      ],
      [
        "Style",
        "Traditional"
      ],
      [
        "Pattern",
        "Floral Botanical With Turquoise And Orange Flowers, Golden Leaves, And Vine Motifs"
      ],
      [
        "Theme",
        "Floral"
      ],
      [
        "Enclosure Material",
        "Mango Wood"
      ],
      [
        "Finish Types",
        "Polished"
      ],
      [
        "Product Care Instructions",
        "Hand Wash Only"
      ],
      [
        "Is Dishwasher Safe",
        "No"
      ],
      [
        "Item Dimensions L x W x H",
        "35L x 14W x 3.5H Centimeters"
      ],
      [
        "Number of Items",
        "1"
      ],
      [
        "Item Weight",
        "400 Grams"
      ]
    ]
  },
  "prod-29": {
    "about": [
      "HANDCRAFTED DESIGN: Beautiful serving tray featuring intricate Meena work with turquoise and orange floral patterns on a pristine white background",
      "PREMIUM CONSTRUCTION: Crafted from sturdy mango wood and MDF, ensuring durability while maintaining an elegant appearance",
      "PERFECT SIZE: Measures 35 x 14 centimetres, ideal for serving beverages, snacks, or as a decorative accent piece",
      "VERSATILE DECOR: Combines traditional artistry with contemporary style, suitable for both functional use and artistic display",
      "ARTISTIC DETAILS: Delicate floral motifs with golden leaves and vibrant turquoise blooms create a stunning visual appeal"
    ],
    "description": "Elevate your serving experience with this exquisite handcrafted decorative tray featuring intricate Meena work artistry. The stunning floral pattern showcases vibrant turquoise and orange blooms with delicate golden leaves against a pristine white background, creating a mesmerising visual appeal. Crafted from premium mango wood and MDF, this 35 x 14 cm tray combines traditional craftsmanship with contemporary design. The natural wooden frame perfectly complements the detailed Meena work, making it an ideal piece for serving refreshments or displaying as a decorative accent. Each tray is meticulously handcrafted, ensuring unique character and attention to detail. Perfect for both everyday use and special occasions, this versatile tray adds a touch of elegance to your home décor while serving as a functional piece. The generous dimensions provide ample space for serving beverages, snacks, or displaying decorative items, while the sturdy construction ensures durability and longevity.",
    "specs": [
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Colour",
        "Turquoise, Orange, Gold, White, Pink"
      ],
      [
        "Material",
        "Engineered Wood, Mango Wood, Meena Work, Wood Composite"
      ],
      [
        "Product Dimensions",
        "35L x 14W x 3.5H Centimeters"
      ],
      [
        "Shape",
        "Rectangular"
      ],
      [
        "Tray Type",
        "Decorative Tray, Handcrafted Tray, Rectangular Tray, Serving Tray"
      ],
      [
        "Recommended Uses For Product",
        "Decorative Display, Dining Table Accessory, Home Decor, Serving, Vanity Tray"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Model number",
        "SACSDGF43T"
      ],
      [
        "Item Type Name",
        "Decorative Serving Tray"
      ],
      [
        "Unit Count",
        "1.0 Piece"
      ],
      [
        "Special Feature",
        "Decorative Meena Work, Floral Pattern, Handcrafted, Serving Surface, Wooden Frame"
      ],
      [
        "Style",
        "Traditional"
      ],
      [
        "Pattern",
        "Floral Botanical With Turquoise And Orange Flowers, Golden Leaves, And Vine Motifs"
      ],
      [
        "Theme",
        "Artistic, Botanical, Floral, Traditional Indian"
      ],
      [
        "Enclosure Material",
        "Engineered Wood, Mango Wood, Meena Work, Wood Composite"
      ],
      [
        "Finish Types",
        "Hand-painted Meena Work"
      ],
      [
        "Product Care Instructions",
        "Avoid Soaking In Water, Do Not Use Abrasive Cleaners, Dry With Soft Cloth, Hand Wash Only, Store In Dry Place"
      ],
      [
        "Is Dishwasher Safe",
        "No"
      ],
      [
        "Item Dimensions L x W x H",
        "35L x 14W x 3.5H Centimeters"
      ],
      [
        "Number of Items",
        "1"
      ],
      [
        "Item Weight",
        "450 Grams"
      ]
    ]
  },
  "prod-30": {
    "about": [
      "A wooden printed enamel tray set is a unique and stylish way to serve and enjoy your food and drinks.",
      "A wooden printed enamel tray set consists of a wooden base that has a colorful and artistic print on it.",
      "The wooden base provides stability and durability, while the enamel tray adds a touch of elegance and flair.",
      "You can use a wooden printed enamel tray set for various purposes, such as serving breakfast in bed, hosting a cocktail party, or having a picnic in the park.",
      "You can also choose from different prints and patterns to match your mood and personality."
    ],
    "description": "",
    "specs": [
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Colour",
        "White Grey & Gold"
      ],
      [
        "Material",
        "Wood"
      ],
      [
        "Product Dimensions",
        "14L x 8W x 2.5H Centimeters"
      ],
      [
        "Shape",
        "Rectangular"
      ],
      [
        "Tray Type",
        "Serving Tray"
      ],
      [
        "Recommended Uses For Product",
        "Serving"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Model number",
        "Wood-103-Serving-Tray"
      ],
      [
        "Item Type Name",
        "Decorative Serving Tray"
      ],
      [
        "Unit Count",
        "1 Count"
      ],
      [
        "Special Feature",
        "Handle"
      ],
      [
        "Style",
        "Modern"
      ],
      [
        "Pattern",
        "Floral Botanical With Turquoise And Orange Flowers, Golden Leaves, And Vine Motifs"
      ],
      [
        "Theme",
        "Floral"
      ],
      [
        "Enclosure Material",
        "Wood"
      ],
      [
        "Finish Types",
        "Hand-painted Meena Work"
      ],
      [
        "Product Care Instructions",
        "Hand Wash Only"
      ],
      [
        "Item Dimensions L x W x H",
        "14L x 8W x 2.5H Centimeters"
      ],
      [
        "Number of Items",
        "1"
      ],
      [
        "Item Weight",
        "400 Grams"
      ]
    ]
  },
  "prod-31": {
    "about": [
      "NATURAL WOOD FINISH: Crafted with a beautiful wood grain pattern and a warm natural finish that complements both modern and traditional interiors.",
      "RAISED RIM DESIGN: Features a practical raised rim that keeps items secure on the tray, adding elegance to your serving experience.",
      "VERSATILE USE: Ideal for serving snacks, dry fruits, biscuits, nuts, and beverages, or for arranging decorative items and table accessories.",
      "ROUND SHAPE: The classic round design makes it a stylish addition to homes, restaurants, hotels, and special occasions.",
      "THOUGHTFUL GIFT: A wonderful gift choice for family and friends, combining everyday functionality with timeless wooden charm."
    ],
    "description": "Elevate your serving experience with this beautifully crafted Wooden Round Serving Tray, designed to blend style with everyday functionality. Featuring a warm, natural wood finish and a striking wood grain pattern, this tray adds a touch of rustic charm to any setting. The raised rim not only enhances its elegant appearance but also keeps items securely in place during serving. Its versatile round design makes it ideal for presenting snacks, dry fruits, biscuits, nuts, and beverages with flair. Beyond serving, it can also be used to arrange decorative items, flower plates, and table accessories, making it a multi-purpose addition to your home. The natural wooden aesthetic complements both modern and traditional interiors effortlessly. Suitable for use at home, restaurants, hotels, and special occasions, this tray is as practical as it is attractive. It also makes for a thoughtful and tasteful gift for family and friends on any occasion.",
    "specs": [
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Colour",
        "Natural"
      ],
      [
        "Material",
        "Mango Wood"
      ],
      [
        "Product Dimensions",
        "25L x 1.5W x 25H Centimeters"
      ],
      [
        "Shape",
        "Rectangular"
      ],
      [
        "Tray Type",
        "Serving Tray"
      ],
      [
        "Recommended Uses For Product",
        "Serving"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Model number",
        "Try 2"
      ],
      [
        "Item Type Name",
        "Decorative Serving Tray"
      ],
      [
        "Special Feature",
        "Handcrafted"
      ],
      [
        "Style",
        "Traditional"
      ],
      [
        "Pattern",
        "Floral Botanical With Turquoise And Orange Flowers, Golden Leaves, And Vine Motifs"
      ],
      [
        "Theme",
        "Floral"
      ],
      [
        "Enclosure Material",
        "Mango Wood"
      ],
      [
        "Finish Types",
        "Hand-woke"
      ],
      [
        "Product Care Instructions",
        "Hand Wash Only"
      ],
      [
        "Is Dishwasher Safe",
        "No"
      ],
      [
        "Item Dimensions L x W x H",
        "25L x 1.5W x 25H Centimeters"
      ],
      [
        "Number of Items",
        "1"
      ],
      [
        "Item Weight",
        "200 Grams"
      ]
    ]
  },
  "prod-32": {
    "about": [
      "PREMIUM NATURAL WOOD: Handcrafted from natural wood with a beautiful rustic grain and smooth polished finish for an elegant look.",
      "VERSATILE USE: Ideal for serving fruits, snacks, dry fruits, salads, and desserts, perfect for everyday use and special occasions.",
      "UNIQUE DESIGN: Each bowl features a one-of-a-kind natural wood grain pattern, making every piece distinctly special and individual.",
      "LIGHTWEIGHT & DURABLE: Easy to handle and built to last, suitable for use at home, restaurants, and cafés alike.",
      "DÉCOR & GIFTING: Adds a warm, rustic charm to your dining table and kitchen décor, and makes for a thoughtful gifting option."
    ],
    "description": "This premium handcrafted wooden bowl is a beautiful addition to any home, kitchen, or dining table. Crafted from natural wood, each bowl showcases a unique rustic grain pattern and a smooth, polished finish that lends a warm and elegant charm to your surroundings. No two bowls are exactly alike, making every piece truly one of a kind. Lightweight yet durable, it is easy to handle and suitable for everyday use as well as special occasions. Use it to serve fruits, snacks, dry fruits, salads, desserts, and a variety of other food items with style. Its timeless design makes it equally at home in restaurants and cafés as it does on a family dining table. The natural polish finish enhances the wood's inherent beauty while keeping the bowl sturdy and long-lasting. It also makes for a thoughtful and elegant gifting option for housewarmings, festivals, and other celebrations. Reusable and built to last, this handcrafted wooden bowl is a practical yet aesthetically pleasing choice for those who appreciate natural materials and artisanal craftsmanship in their everyday lives.",
    "specs": [
      [
        "Bowl Material",
        "Pinewood"
      ],
      [
        "Number of Pieces",
        "2"
      ],
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Colour",
        "Natural Wood Yellow"
      ],
      [
        "Style",
        "Rustic"
      ],
      [
        "Specific Uses For Product",
        "Snacks, Dry Fruits, Condiments, Salads, Appetisers, Nuts, Desserts, Breakfast Items, Side Dishes"
      ],
      [
        "Included Components",
        "2 Wooden Bowls"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Recommended Uses For Product",
        "Serving Snacks, Serving Dry Fruits, Serving Condiments, Serving Salads, Serving Appetisers, Serving Nuts, Serving Desserts, Serving Breakfast Items, Serving Side Dishes, Decorative Display"
      ],
      [
        "Unit Count",
        "2 Count"
      ],
      [
        "Number of Packs",
        "1"
      ],
      [
        "Set Name",
        "Handcrafted Pinewood Bowls Set"
      ],
      [
        "Item Highlight",
        "Smooth Polished Finish, Unique Wood Grain, Lightweight & Durable, Multipurpose Serving, Reusable Design"
      ],
      [
        "Age Range Description",
        "Adult"
      ],
      [
        "Number of Items",
        "2"
      ],
      [
        "Item Type Name",
        "Serving Bowl"
      ],
      [
        "Item Weight",
        "150 Grams"
      ],
      [
        "Model number",
        "0001"
      ],
      [
        "Product Style",
        "Rustic"
      ],
      [
        "Shape",
        "Round"
      ],
      [
        "Theme",
        "Natural Wood, Rustic, Handcrafted, Organic"
      ],
      [
        "Pattern",
        "Wood Grain"
      ],
      [
        "Bowl Material Type",
        "Pinewood"
      ],
      [
        "Is the item dishwasher safe?",
        "No"
      ],
      [
        "Is the item microwaveable?",
        "No"
      ],
      [
        "Enclosure Material",
        "Mango Wood"
      ],
      [
        "OutputCapacity",
        "200 Centiliters"
      ],
      [
        "Item Dimensions W x H",
        "30W x 30H Millimeters"
      ],
      [
        "Size",
        "3l X 3w X 1.2h Inch"
      ],
      [
        "Other Special Features of the Product",
        "Handcrafted"
      ]
    ]
  },
  "prod-33": {
    "about": [
      "ARTISANAL DESIGN: Beautifully handcrafted tea light holder featuring Lord Ganesha carved on a decorative leaf, set within a circular wooden frame",
      "MATERIAL & CONSTRUCTION: Crafted from premium wood with metallic Ganesha motif, combining traditional artistry with contemporary aesthetics",
      "VERSATILE DECOR: Perfect as a spiritual accent piece for living room, meditation space, or altar, adding both illumination and artistic charm",
      "DIMENSIONS: Compact size ideal for tabletop display, featuring a circular wooden frame and secure tea light holder at the base",
      "SPIRITUAL SYMBOLISM: Intricate Ganesha carving on leaf represents prosperity and good fortune, making it an auspicious decorative piece"
    ],
    "description": "Bring a touch of spiritual elegance to your home with this exquisitely handcrafted Ganesha tea light holder. The centrepiece features Lord Ganesha artistically carved within a leaf design, beautifully rendered in metallic finish that creates a striking contrast against the natural wooden circular frame. The thoughtfully designed wooden stand provides a stable base for the tea light holder, while the metallic candle dish safely accommodates a tea light candle. When lit, this decorative piece casts enchanting shadows and creates a serene ambiance perfect for meditation spaces, prayer rooms, or as a sophisticated accent in any room. The combination of traditional spiritual symbolism with contemporary design makes this piece a versatile addition to both modern and traditional décor schemes. The artistic fusion of wood and metal craftsmanship showcases fine attention to detail in every aspect of its construction.",
    "specs": [
      [
        "Colour",
        "Brown And Silver"
      ],
      [
        "Material",
        "Wood"
      ],
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Product Dimensions",
        "20L x 15W x 25H Centimeters"
      ],
      [
        "Finish Type",
        "Natural Wood And Metallic"
      ],
      [
        "Item Weight",
        "450 Grams"
      ],
      [
        "Number of Pieces",
        "2"
      ],
      [
        "Theme",
        "Nature, Religious, Traditional"
      ],
      [
        "Item Diameter",
        "20 Centimetres"
      ],
      [
        "Mounting Type",
        "Tabletop"
      ],
      [
        "Unit Count",
        "1 Piece"
      ],
      [
        "Set Name",
        "Ganesha Tea Light Holder Set"
      ],
      [
        "Indoor Outdoor Usage",
        "Indoor"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Item Type Name",
        "Tea Light Holder"
      ],
      [
        "Model number",
        "AS0264"
      ],
      [
        "Manufacturer Part Number",
        "Gtlh001"
      ],
      [
        "Candle Holder Form",
        "Leaf"
      ],
      [
        "Occasion",
        "Diwali, Home Decor, Religious, Spiritual"
      ],
      [
        "Item Dimensions L x W x H",
        "20L x 15W x 25H Centimeters"
      ],
      [
        "Enclosure Material",
        "Wood"
      ],
      [
        "Finish Types",
        "Natural Wood And Metallic"
      ]
    ]
  },
  "prod-34": {
    "about": [
      "AUTHENTIC DESIGN: Beautifully crafted metal statues of Lord Ganesha and Goddess Lakshmi with intricate details, finished in an elegant silver tone",
      "COMPLETE SET: Includes two divine figurines and a tea light holder, perfectly arranged on a rustic wooden base for spiritual ambience",
      "VERSATILE DECOR: Ideal for prayer room, meditation space, or as a decorative accent piece that adds cultural sophistication to any room",
      "QUALITY CRAFTSMANSHIP: Meticulously detailed religious sculptures showcase traditional iconography and artistic excellence",
      "COMPACT SIZE: Perfect for home altars and small spaces, the wooden base provides a stable platform for the complete arrangement"
    ],
    "description": "Bring divine blessings and spiritual elegance to your home with this beautifully crafted Lord Ganesha and Goddess Laxmi statue set with an integrated tea light holder. The meticulously detailed silver-toned figurines are mounted on a rustic wooden base, creating a perfect blend of traditional artistry and contemporary design. Lord Ganesha, the remover of obstacles, is depicted in his characteristic seated pose with intricate ornamental details, while Goddess Laxmi, the harbinger of wealth and prosperity, is gracefully seated on a lotus throne. The centrally placed tea light holder adds a warm, spiritual ambience when lit. This versatile piece serves both as a stunning decorative element and as a sacred altar piece, ideal for your prayer room, living area, or meditation space. The sturdy wooden base provides stability and adds a natural, earthy element to the overall composition. This religious sculpture set makes for a thoughtful housewarming gift or a meaningful addition to your own home decor collection.",
    "specs": [
      [
        "Colour",
        "Brown And Silver"
      ],
      [
        "Material",
        "Wood"
      ],
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Product Dimensions",
        "20L x 15W x 25H Centimeters"
      ],
      [
        "Finish Type",
        "Natural Wood And Metallic"
      ],
      [
        "Item Weight",
        "450 Grams"
      ],
      [
        "Number of Pieces",
        "2"
      ],
      [
        "Theme",
        "Religious"
      ],
      [
        "Item Diameter",
        "20 Centimetres"
      ],
      [
        "Mounting Type",
        "Tabletop"
      ],
      [
        "Unit Count",
        "1 Piece"
      ],
      [
        "Set Name",
        "Ganesha Tea Light Holder Set"
      ],
      [
        "Indoor Outdoor Usage",
        "Indoor"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Item Type Name",
        "Tea Light Holder"
      ],
      [
        "Model number",
        "Glth001"
      ],
      [
        "Manufacturer Part Number",
        "Glth001"
      ],
      [
        "Candle Holder Form",
        "Leaf"
      ],
      [
        "Occasion",
        "Home Decor"
      ],
      [
        "Item Dimensions L x W x H",
        "20L x 15W x 25H Centimeters"
      ],
      [
        "Enclosure Material",
        "Wood"
      ],
      [
        "Finish Types",
        "Natural Wood And Metallic"
      ]
    ]
  },
  "prod-35": {
    "about": [
      "DESIGN ELEMENTS: Beautiful wooden tea light holder featuring Lord Ganesha figure within a circular frame, complemented by the sacred Om symbol for spiritual ambiance",
      "MATERIAL & CRAFTSMANSHIP: Handcrafted from quality wood with an antique-style metal Ganesha figurine, showcasing traditional Indian artistry",
      "VERSATILE DECOR: Perfect for meditation spaces, prayer rooms, or as an elegant decorative piece that adds a spiritual touch to any room",
      "PRACTICAL FEATURES: Includes a secure tea light holder base and sturdy wooden platform for stability and safe illumination",
      "DIMENSIONS: Compact circular design that makes for an ideal tabletop spiritual decor piece, featuring artistic wooden construction"
    ],
    "description": "Bring spiritual elegance to your home with this beautifully crafted wooden tea light holder featuring Lord Ganesha and the sacred Om symbol. The distinctive circular design creates a mesmerising frame that houses an artistically detailed metallic Ganesha figure alongside the Om symbol, symbolising divine energy and spiritual consciousness. The sturdy wooden base provides perfect stability, while the metal tea light holder adds a practical touch. When lit, this piece creates a serene ambiance, casting enchanting shadows that transform any space into a peaceful sanctuary. Perfect for meditation corners, prayer rooms, or as a sophisticated decorative accent in any room. The natural wood finish and metallic detailing showcase fine craftsmanship while maintaining traditional Hindu artistic elements. This versatile piece serves both as a functional tea light holder and as an inspiring piece of spiritual décor that adds a touch of cultural richness to your living space.",
    "specs": [
      [
        "Colour",
        "Brown And Silver"
      ],
      [
        "Material",
        "Wood"
      ],
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Product Dimensions",
        "20L x 15W x 25H Centimeters"
      ],
      [
        "Finish Type",
        "Natural Wood And Metallic"
      ],
      [
        "Item Weight",
        "450 Grams"
      ],
      [
        "Number of Pieces",
        "2"
      ],
      [
        "Theme",
        "Religious"
      ],
      [
        "Item Diameter",
        "20 Centimetres"
      ],
      [
        "Mounting Type",
        "Tabletop"
      ],
      [
        "Unit Count",
        "1 Piece"
      ],
      [
        "Set Name",
        "Ganesha Tea Light Holder Set"
      ],
      [
        "Indoor Outdoor Usage",
        "Indoor"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Item Type Name",
        "Tea Light Holder"
      ],
      [
        "Model number",
        "AS10259"
      ],
      [
        "Manufacturer Part Number",
        "AS1025"
      ],
      [
        "Candle Holder Form",
        "Leaf"
      ],
      [
        "Occasion",
        "Home Decor"
      ],
      [
        "Item Dimensions L x W x H",
        "20L x 15W x 25H Centimeters"
      ],
      [
        "Enclosure Material",
        "Wood"
      ],
      [
        "Finish Types",
        "Natural Wood And Metallic"
      ]
    ]
  },
  "prod-36": {
    "about": [
      "Divine Design: Beautiful Ram Darbar idol featuring Lord Ram, Sita, Lakshman, and Hanuman crafted in detailed metallic finish.",
      "Elegant Wooden Frame: Solid wooden base and open frame give a classic and premium look, suitable for all interiors.",
      "Built-in Diya Holder: Includes a metal diya cup for lighting, ideal for pooja rituals and festive decor.",
      "Perfect Gift Choice: A meaningful spiritual gift for Diwali, Navratri, housewarming, or wedding occasions.",
      "Durable & Easy to Maintain: Long-lasting metal craftsmanship and natural wood polish ensure years of beauty and devotion."
    ],
    "description": "Bring divine positivity and blessings into your home with this elegant Ram Darbar Metal Idol in Wooden Frame with Diya Holder. Crafted with precision, this decorative piece features finely detailed depictions of Lord Ram, Goddess Sita, Lord Lakshman, and Lord Hanuman, symbolizing devotion, protection, and righteousness. The sturdy wooden frame enhances the spiritual appeal, while the built-in diya holder allows you to illuminate your prayers with divine light. Ideal for pooja rooms, home temples, offices, and gifting, this sacred decor piece brings peace and prosperity to any space. Perfect as a spiritual home décor item or a religious festival gift for Diwali, Dussehra, or housewarming ceremonies.",
    "specs": [
      [
        "Colour",
        "Brown"
      ],
      [
        "Material",
        "Wood"
      ],
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Product Dimensions",
        "20L x 15W x 25H Centimeters"
      ],
      [
        "Finish Type",
        "Natural Wood And Metallic"
      ],
      [
        "Item Weight",
        "450 Grams"
      ],
      [
        "Number of Pieces",
        "1"
      ],
      [
        "Theme",
        "Religious"
      ],
      [
        "Item Diameter",
        "20 Centimetres"
      ],
      [
        "Mounting Type",
        "Tabletop"
      ],
      [
        "Unit Count",
        "1 Piece"
      ],
      [
        "Number of Packs",
        "1"
      ],
      [
        "Set Name",
        "Tea Light Holder Set"
      ],
      [
        "Indoor Outdoor Usage",
        "Indoor"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Item Type Name",
        "Tea Light Holder"
      ],
      [
        "Model number",
        "AX125"
      ],
      [
        "Manufacturer Part Number",
        "AX258"
      ],
      [
        "Candle Holder Form",
        "Leaf"
      ],
      [
        "Occasion",
        "Home Decor"
      ],
      [
        "Item Dimensions L x W x H",
        "20L x 15W x 25H Centimeters"
      ],
      [
        "Enclosure Material",
        "Wood"
      ],
      [
        "Finish Types",
        "Natural Wood And Metallic"
      ]
    ]
  },
  "prod-37": {
    "about": [
      "COMPLETE KITCHEN SET: 10-piece wooden utensil set includes multiple spoons, spatulas, slotted spoons, and a convenient holder to keep your cooking tools organised and within easy reach",
      "NATURAL WOOD CONSTRUCTION: Crafted from high-quality natural wood material that is gentle on non-stick cookware surfaces and won't scratch your pots and pans during cooking",
      "VERSATILE COOKING TOOLS: Comprehensive collection features various utensil designs including serving spoons, slotted spoons for draining, spatulas for flipping, and specialty tools for all your cooking needs",
      "INCLUDES STORAGE HOLDER: Comes with a matching wooden holder that keeps all utensils neatly stored on your countertop, providing easy access whilst cooking and maintaining an organised kitchen space",
      "DURABLE AND HEAT-RESISTANT: Wooden construction provides excellent heat resistance, allowing safe use with hot cookware whilst the sturdy design ensures long-lasting durability for everyday cooking tasks"
    ],
    "description": "This comprehensive wooden kitchen utensil set from WOODMEN DESIGN brings natural elegance and functionality to your cooking space. The 10-piece collection includes a thoughtfully curated selection of essential cooking tools – spoons, spatulas, and slotted spoons – each crafted from natural wood with beautiful grain patterns that make every piece unique. The set comes complete with a matching wooden holder that keeps your utensils organised and within easy reach whilst adding a warm, rustic charm to your kitchen counter. These wooden cooking utensils are gentle on your cookware, preventing scratches on non-stick surfaces whilst being sturdy enough for everyday cooking tasks. The natural wood construction provides comfortable grip and stays cool to the touch during cooking. Each utensil features a smooth finish and ergonomic design, making them practical for stirring, flipping, serving, and straining. Whether you're sautéing vegetables, serving pasta, or mixing sauces, this versatile set has the right tool for the job. The natural aesthetic complements any kitchen décor, from traditional to contemporary. Hand washing is recommended to maintain the beauty and longevity of these wooden utensils.",
    "specs": [
      [
        "Material",
        "Mango Wood, Natural Wood, Wood"
      ],
      [
        "Colour",
        "Natural Wood Grain"
      ],
      [
        "Brand",
        "WOODMEN DESIGN"
      ],
      [
        "Size",
        "10 Piece Set"
      ],
      [
        "Product Dimensions",
        "30L x 8W Centimeters"
      ],
      [
        "Unit Count",
        "10 Count"
      ],
      [
        "Country of Origin",
        "India"
      ],
      [
        "Included Components",
        "Serving Spoon, Slotted Spoon, Slotted Spatula, Solid Spatula, Slotted Turner, Skimmer Spoon, Fork Spoon, Mixing Spoon, Utensil Holder, Storage Container"
      ],
      [
        "Item Type Name",
        "Wooden Kitchen Utensil Set"
      ],
      [
        "Model number",
        "Wd-wku-10pc-nh"
      ],
      [
        "Enclosure Material",
        "Mango Wood, Natural Wood, Wood"
      ],
      [
        "Is the item dishwasher safe?",
        "No"
      ],
      [
        "Material Type Free",
        "Wood"
      ],
      [
        "Item Dimensions L x W",
        "30L x 8W Centimeters"
      ],
      [
        "Item Weight",
        "700 Grams"
      ]
    ]
  }
};
