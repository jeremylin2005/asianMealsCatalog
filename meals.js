const meals = [
  {
    title: "Mapo Tofu",
    cuisine: "Sichuan",
    ingredients: [
      "10-12 dried red chilies (cut into 1/2-inch pieces)",
      "1-2 tbsp Sichuan peppercorns",
      "2.5 tbsp Sichuan Dou Ban Jiang",
      "1.5 tsp fermented black soybeans (Dou Chi)",
      "2 tbsp Chinese cooking wine",
      "1 lb soft tofu",
      "1.5 liters water (to blanch tofu)",
      "1/2 tsp salt (for blanching)",
      "3 tbsp vegetable oil",
      "200g ground meat (chicken, pork, or beef)",
      "4 scallions (diced, separate white and green parts)",
      "2 tbsp diced garlic",
      "1.5 tsp minced ginger",
      "1 tsp paprika",
      "2 tsp sugar",
      "1.5 cups beef stock or water",
      "2 tsp soy sauce (or to taste)",
      "1 tbsp cornstarch",
      "1/4 cup water"
    ],
    instructions: [
      "Toast dried chilies and Sichuan peppercorns over medium-low heat until fragrant. Let cool, then grind finely to make Dao Kou La Jiao.",
      "Blend Dou Ban Jiang, fermented black soybeans, and cooking wine into a paste.",
      "Cut tofu into bite-size cubes. Blanch in salted boiling water for 2 minutes. Remove and set aside.",
      "Heat wok until smoking. Add oil and ground meat. Cook until no longer pink.",
      "Push meat aside and add Dou Ban Jiang paste. Fry on low for 2 minutes.",
      "Add garlic, ginger, white scallions, paprika, sugar, and half the Dao Kou La Jiao. Stir until fragrant.",
      "Pour in beef stock. Bring to a boil. Season with soy sauce if needed.",
      "Add tofu. Simmer on low for 5 minutes.",
      "Mix cornstarch and water. Add in batches while gently stirring to thicken.",
      "Sprinkle reserved Dao Kou La Jiao and green scallions on top. Serve hot with white rice."
    ],
    estimatedCookTimeMins: 30,
    estimatedCostUSD: 9.00,
    image: "images/mapo-tofu.jpg"
  },
  {
    title: "Tteokbokki (Spicy Rice Cakes)",
    ingredients: [
      "600g (1.3 lb) long cylinder-shaped rice cakes",
      "3 sheets (120g) Korean fish cakes",
      "3–4 green onions, sliced",
      "2 hard-boiled eggs",
      "3 cups (720ml) water",
      "1/2 tbsp Korean beef stock powder or chicken bouillon powder",
      "2 tbsp Korean chili powder (gochugaru)",
      "2 tbsp Korean chili paste (gochujang)",
      "2 tbsp sugar",
      "3 tbsp light corn syrup",
      "1 tbsp Korean beef stock powder or chicken bouillon powder",
      "1/4 tsp black pepper"
    ],
    instructions: [
      "If using frozen rice cakes, soak them in cold water for 20–30 minutes.",
      "Cut the fish cakes into bite-sized pieces. Slice the green onions into long strips.",
      "In a small bowl, mix chili powder, chili paste, sugar, corn syrup, stock powder, and black pepper to make the seasoning paste.",
      "In another container, mix 3 cups of water with 1/2 tbsp stock powder to make the soup base.",
      "In a large pan, add rice cakes, fish cakes, green onions, hard-boiled eggs, seasoning paste, and the stock.",
      "Bring to a boil, then reduce to medium heat.",
      "Simmer for about 13 minutes, stirring occasionally, until the sauce thickens and rice cakes are soft.",
      "Serve hot and enjoy!"
    ],
    estimatedCostUSD: 8.5,
    estimatedCookTimeMins: 15,
    image: "images/tteokbokki.jpg"
  },
  {
    "title": "Cashew Shrimp",
    "ingredients": [
      "12 oz shrimp (peeled and deveined)",
      "3 oz snow pea (destringed)",
      "3 oz king oyster mushroom (sliced)",
      "3 oz celery (diagonal slices)",
      "3 oz carrot (flower-cut or sliced)",
      "1 oz ginger (sliced)",
      "0.25 oz garlic (sliced)",
      "1 oz green onion white (sliced)",
      "4 cups water (for blanching)",
      "1 tbsp oil (for stir frying)",
      "1 tbsp cooking wine",
      "1 tsp sesame oil",
      "1 tsp finishing oil",
      "2 oz roasted cashews",
      "1.5 tsp cornstarch (for marinade)",
      "1 tsp fish sauce (for marinade)",
      "0.25 tsp white pepper (for marinade)",
      "1 tbsp oyster sauce (for sauce)",
      "0.5 tsp sugar (for sauce)",
      "0.5 tsp salt (for sauce)",
      "2 tsp cooking wine (for sauce)",
      "1 tsp potato starch (for sauce)",
      "1 tbsp water (for sauce)"
    ],
    "instructions": [
      "Peel and devein shrimp. Marinate with cornstarch, fish sauce, and white pepper. Mix well.",
      "Wash and cut all vegetables: snow peas, mushrooms, celery, carrot, ginger, garlic, green onion.",
      "Mix sauce ingredients: oyster sauce, sugar, salt, cooking wine, potato starch, and water.",
      "Blanch carrots (15–20s), celery and mushrooms (40–50s), then snow peas (20–30s). Shock in cold water.",
      "Blanch shrimp for 30–40s, then set aside.",
      "Heat wok, add oil, stir fry garlic and ginger (20–30s).",
      "Add green onion whites (20–30s), then veggies and shrimp (20–30s each).",
      "Splash cooking wine, then add sauce and mix until thickened (20–30s).",
      "Turn off heat, stir in sesame oil and finishing oil.",
      "Plate and top with roasted cashews. Serve hot."
    ],
    "image": "images/dads-cashew-shrimp.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 9.50
  },
  {
    title: "Chinese Cabbage Stir-Fry",
    ingredients: [
      "1 cabbage (750g before peeling)",
      "4 cloves garlic, sliced thinly",
      "5 dried chilies, cut and seeds removed",
      "2 tbsp oil",
      "1 tsp Sichuan peppercorns (optional)",
      "1 tsp salt",
      "1 tsp sugar",
      "1 tbsp light soy sauce",
      "2 tsp rice vinegar"
    ],
    instructions: [
      "Wash and pat dry the cabbage.",
      "Cut in half, remove the core, then tear leaves by hand into 2-3 inch pieces. Remove stems for better texture.",
      "Slice garlic thinly and cut dried chilies in half, removing seeds.",
      "Heat a wok over medium heat. Add oil and stir-fry Sichuan peppercorns until aromatic, then remove with sieve.",
      "Add dried chilies and garlic. Stir-fry until fragrant.",
      "Add cabbage and stir-fry over high heat for 30 seconds, flipping constantly to get charred edges.",
      "Lower heat and season with salt, sugar, light soy sauce, and rice vinegar.",
      "Turn heat back to high, stir to coat evenly, then serve hot."
    ],
    estimatedCostUSD: 4,
    estimatedCookTimeMins: 20,
    image: "images/hand-torn-cabbage.jpg" 
  },
  {
    "title": "Taiwanese Beef Noodle Soup",
    "ingredients": [
      "1.5 lb beef stew meat",
      "1.5 lb beef bones",
      "8 cups water",
      "3 tbsp Shaoxing wine",
      "1.5 tbsp oil",
      "3 tbsp sugar",
      "2.5 tbsp Sichuan Dou Ban Jiang",
      "2 tbsp tomato paste",
      "1/4 cup soy sauce",
      "1.5 tsp dark soy sauce",
      "6 slices ginger",
      "6 cloves garlic",
      "2 scallions, cut into stalks",
      "1/2 medium onion, cut into chunks",
      "1 stick cinnamon",
      "3 bay leaves",
      "1 star anise",
      "1 piece aged tangerine peel (optional)",
      "3 dried red chilies",
      "1 tsp Sichuan peppercorns",
      "1/2 tsp salt (or to taste)",
      "4 portions egg noodles (400g fresh or 240g dried)",
      "3 liters water (to boil noodles)",
      "8 baby bok choy, halved"
    ],
    "instructions": [
      "Cut beef into 1-inch cubes. Blanch beef and bones in water until boiling, skim foam, rinse beef, strain broth and reserve.",
      "Caramelize sugar in oil over low heat. Add soy sauces, Dou Ban Jiang, and tomato paste. Stir until combined.",
      "Add beef and Shaoxing wine. Stir, then add reserved broth and bring to a boil.",
      "Place aromatics and spices into a spice bag: ginger, garlic, scallions, onion, cinnamon, bay leaves, star anise, orange peel, chilies, and peppercorns. Add to pot.",
      "Simmer on low for 2 hours until beef is tender. Remove spice bag, bones, and return meat to broth. Season with salt to taste.",
      "Cook noodles in boiling water until al dente. Blanch bok choy for 30 seconds in same pot.",
      "Assemble each bowl: noodles, bok choy, beef, and 1.25 cups broth. Serve hot."
    ],
    "image": "images/taiwanese-beef-noodle-soup.jpg",
    "estimatedCookTimeMins": 150,
    "estimatedCostUSD": 11.00
  },
  {
    "title": "Chicken Congee",
    "ingredients": [
      "1 rice cup white rice",
      "8 cups water",
      "0.50 oz ginger",
      "12 oz chicken",
      "2 tsp cornstarch",
      "1 tbsp oyster sauce",
      "2 tbsp water (for marinade)",
      "0.50 tsp chicken bouillon",
      "2 tbsp vegetable oil",
      "1 tsp salt",
      "1 tsp chicken bouillon",
      "2 pieces green onion",
      "1 piece cilantro"
    ],
    "instructions": [
      "Wash the rice thoroughly 3 times and drain.",
      "Boil 8 cups of water and chop the ginger into thin strips.",
      "Slice the chicken and marinate it with cornstarch, oyster sauce, water, bouillon, and oil.",
      "Once the water is boiling, add the rice and let it come to a boil again.",
      "Partially cover and simmer on medium heat for 25–35 minutes until the rice softens.",
      "Whisk the congee for 2–3 minutes to break down rice and thicken the texture.",
      "Turn the heat to high, slowly add chicken while stirring for 1–2 minutes until cooked.",
      "Add ginger strips, salt, and chicken bouillon. Stir for 20–30 seconds.",
      "Serve hot and garnish with green onions and cilantro."
    ],
    "image": "images/dads-chicken-congee.jpg",
    "estimatedCookTimeMins": 60,
    "estimatedCostUSD": 7.50
  },
  {
    title: "Egg Fried Rice",
    ingredients: [
      "14 oz uncooked jasmine rice",
      "14 oz water (for cooking rice)",
      "1 oz green onion (green parts only)",
      "2 oz carrot",
      "4 oz frozen corn and peas",
      "4 large eggs",
      "0.5 tsp salt (for eggs)",
      "0.3 cup water (for microwaving veggies)",
      "2 tbsp oil (for stir-frying)",
      "1 tbsp light soy sauce",
      "1 tsp dark soy sauce",
      "0.5 tsp salt (for seasoning)",
      "0.5 tsp sugar",
      "1 tsp chicken bouillon powder (optional)",
      "1 tbsp oil (for final stir-fry)"
    ],
    instructions: [
      "Wash rice 3 times and drain. Cook with 14 oz water in a rice cooker.",
      "Dice green onion greens and carrot. Combine with frozen corn and peas.",
      "Crack 4 eggs into a bowl, season with 0.5 tsp salt, and set aside.",
      "After rice finishes, let it steam for 2 minutes. Microwave veggies with 0.3 cup water for 2 minutes, then drain.",
      "Fluff rice using chopsticks for 1–2 minutes to release steam.",
      "Heat wok on high. Add 2 tbsp oil on low heat and coat surface.",
      "Add beaten eggs and stir gently for 20–30 seconds. Add rice on top and stir-fry to break up clumps for about 2 minutes.",
      "Add veggies and stir-fry on high heat for 2–3 minutes.",
      "Turn heat to low. In a bowl, combine light soy sauce, dark soy sauce, 0.5 tsp salt, sugar, chicken bouillon powder. Pour over rice.",
      "Stir-fry everything for 2–3 minutes more. Add 1 tbsp oil and green onions, stir-fry 1 more minute. Taste and adjust seasoning.",
      "Serve directly or pack into a bowl and flip onto plate for round shape."
    ],
    estimatedCostUSD: 6.5,
    estimatedCookTimeMins: 20,
    image: "images/egg-fried-rice.jpg"
  },
  {
    title: "Cantonese Steamed Fish",
    ingredients: [
      "2 scallions",
      "2 tablespoons ginger",
      "1 small bunch cilantro",
      "1 ½ tablespoons light soy sauce",
      "1/8 teaspoon salt",
      "1/8 teaspoon sugar",
      "2 tablespoons hot water",
      "10 oz delicate white fish fillet (sea bass, sole, flounder, tilapia, or haddock)",
      "2 tablespoons vegetable oil"
    ],
    instructions: [
      "Cut scallions into 2-inch matchsticks. Julienne ginger and rough chop cilantro. Set aside 1/3 of each for topping.",
      "Mix soy sauce, salt, sugar, and hot water until dissolved. Set aside.",
      "Prepare a steaming setup with 1–2 inches of water and bring to a boil.",
      "Place rinsed fish fillet on a heat-proof plate. Steam covered over medium heat for 7–10 minutes (4–5 for thinner fillets). Check doneness with a butter knife.",
      "Drain excess liquid. Top with 1/3 aromatics or wait to add raw later.",
      "In a saucepan over medium-high heat, add oil, then fry remaining ginger for 1 minute.",
      "Add white scallion parts, cook 30 seconds, then remaining scallions and cilantro. Stir until wilted.",
      "Add soy sauce mixture, simmer briefly, and pour over the fish.",
      "Optionally, top with raw aromatics and pour 1 tbsp hot oil over them for sizzle and aroma.",
      "Serve immediately with steamed rice."
    ],
    image: "images/cantonese-steamed-fish.jpg",
    estimatedCookTimeMins: 20,
    estimatedCostUSD: 7.00
  },
  {
    title: "5-Minute Sundubu Jjigae (Soft Tofu Stew)",
    ingredients: [
      "1 cup green onions",
      "1 cup yellow onions",
      "4 tbsp neutral-tasting oil",
      "2 tbsp lard (optional)",
      "1 cup ground pork (or ground beef)",
      "1/3 cup minced garlic",
      "1 cup Korean chili pepper flakes (gochugaru)",
      "1 tbsp sugar",
      "1 tbsp mirin",
      "4 tbsp soy sauce",
      "2 tbsp oyster sauce",
      "2 tbsp fish sauce",
      "2 tbsp toasted sesame oil",
      "1/2 cup (120ml) water, plus more if needed",
      "2 tbsp sundubu paste",
      "1/2 tsp Korean beef stock powder (dasida) or MSG (optional)",
      "12.5 oz (350g) silken tofu",
      "1-2 green onions, divided",
      "1/2 spicy green chili (optional), divided",
      "1/2 mild red chili (optional), divided",
      "1-2 eggs",
      "Black pepper, to taste",
      "Optional: 5-6 frozen dumplings or seafood (clams, shrimp, mussels, etc.)"
    ],
    instructions: [
      "Thinly slice green onions and chop yellow onions.",
      "Mix all sundubu paste ingredients together in a container.",
      "Heat oil and lard (if using) in a pan. Add green onions and ground pork. Stir-fry until most liquid evaporates.",
      "Add onions and stir-fry again until moisture evaporates.",
      "Add garlic and seasoning paste. Stir-fry until well combined. Let the paste cool completely.",
      "To make stew, add 1/2 cup water and 2 tbsp sundubu paste to a pot. Stir and bring to boil.",
      "Add tofu (and dumplings or seafood, if using). Break tofu into large chunks.",
      "Add sliced green onions and chilies. Adjust with salt or water as needed.",
      "Top with green onions, chilies, crack 1–2 eggs. Season with black pepper.",
      "Ladle hot broth over eggs or cook to preferred doneness. Serve hot with rice."
    ],
    estimatedCostUSD: 7.0,
    estimatedCookTimeMins: 5,
    image: "images/sundubu-jjigae.jpg"
  },
  {
    title: "Chinese Beef Zongzi",
    ingredients: [
      "400g beef (chuck, brisket, or shank)",
      "4 cloves garlic, grated",
      "1/2 inch ginger, grated",
      "1 piece fermented bean curd (Sichuan style)",
      "1 tbsp dark soy sauce",
      "1 tbsp oyster sauce",
      "1 tbsp soy sauce",
      "1 tsp salt",
      "1/2 tsp five-spice powder",
      "1/2 tsp black pepper",
      "1/2 tsp Sichuan peppercorn powder",
      "1 tbsp chili flakes",
      "1/2 tbsp brown sugar",
      "800g glutinous rice (about 4 cups)",
      "45g dried shiitake mushrooms",
      "3 tbsp vegetable oil",
      "3 scallions, diced",
      "2 shallots, diced",
      "4 tsp dark soy sauce",
      "24 bamboo leaves",
      "12 salted egg yolks"
    ],
    instructions: [
      "Soak glutinous rice and dried shiitake mushrooms in separate bowls with hot water (50°C) for 1 hour.",
      "Cut beef into bite-sized pieces. Mix with garlic, ginger, fermented bean curd, soy sauces, salt, pepper, spices, and sugar. Marinate in fridge for 1 hour.",
      "Prepare bamboo leaves: boil dried leaves then soak, or rinse fresh ones and keep damp.",
      "Drain glutinous rice. Sauté shallots and scallions in oil until golden, then add rice and dark soy sauce. Stir until slightly sticky. Set aside.",
      "Squeeze excess water from soaked mushrooms and mix with marinated beef.",
      "To wrap: overlap 2 bamboo leaves smooth side up, fold into cone. Fill with a layer of rice, 2 mushrooms, 1 salted egg yolk, and some beef. Cover with more rice, fold tightly, and tie with twine.",
      "Boil a large pot of water. Add zongzi, bring back to boil, weigh down with a plate, cover partially, and simmer for 2.5 hours.",
      "Serve warm or freeze for up to 6 months. To reheat, steam for 20 minutes or microwave for 2–3 minutes from frozen."
    ],
    image: "images/beef-zongzi.jpg",
    estimatedCookTimeMins: 210,
    estimatedCostUSD: 12.00
  },
  {
    "title": "Authentic Cantonese Beef Clay Pot Rice",
    "ingredients": [
      "10 oz beef (sirloin, ribeye, flank, or NY strip), thinly sliced",
      "1/2 tsp salt (for marinade)",
      "1/3 tsp baking soda",
      "1 tbsp Chinese cooking wine (optional)",
      "1/3 tsp ground white pepper",
      "1.5 tsp dark soy sauce (for marinade)",
      "1 tbsp cornstarch",
      "1 tbsp satay paste (optional)",
      "2 tbsp cooking oil",
      "1.5 tbsp minced garlic",
      "2 tbsp diced white scallions",
      "2 tsp minced ginger",
      "1.5 tbsp soy sauce (for seasoning sauce)",
      "1/2 tbsp oyster sauce",
      "1/2 tbsp fish sauce",
      "1 tsp sugar",
      "1/4 cup water",
      "1.5 cups water (for cooking rice)",
      "1 egg",
      "6 baby bok choy, quartered and blanched",
      "2 tbsp diced green scallions (garnish)"
    ],
    "instructions": [
      "Slice beef and marinate with salt, pepper, baking soda, soy sauces, cornstarch, wine, and satay paste. Set aside.",
      "In a pan, fry garlic, ginger, and scallions in oil until golden. Pour only the oil into the beef and mix well. Let rest for 15 minutes.",
      "Wash and drain rice. Add to clay pot with 1.5 cups water. Soak for 15 minutes.",
      "Return pan with fried aromatics to stove, add soy sauce, oyster sauce, fish sauce, sugar, and water. Simmer 2 minutes. Set aside.",
      "Cook rice in clay pot on high heat for 10–14 minutes until water evaporates and bubbling stops.",
      "Add marinated beef on top, drizzle sesame oil around the rim of the pot, cover, and cook on high for 3 minutes while rotating every 20 seconds.",
      "Crack an egg in the center. Cook for 2 more minutes while rotating to crisp the base evenly.",
      "Turn off heat. Add blanched bok choy around the pot, pour over sauce, garnish with green scallions. Serve hot."
    ],
    "image": "images/cantonese-beef-claypot-rice.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 9.00
  },
  {
    "title": "Chile and Ginger\u2013Fried Tofu Salad With Kale",
    "ingredients": [
      "1 package  firm tofu, drained, patted dry, and cut into 8 pieces",
      "\u2153 cup soy sauce",
      "\u00bc cup hot chile sauce, such as Sriracha or sambal oelek chile sauce",
      "1 serrano chile, halved, seeded if desired",
      "\u2153 cup chopped fresh cilantro leaves",
      "6 garlic cloves, coarsely chopped",
      "1 tablespoon coarsely chopped peeled fresh ginger",
      "Peanut oil",
      "\u00bd cup cornstarch",
      "5 ounces baby kale or spinach",
      "2 tablespoons extra-virgin olive oil",
      "Fine sea salt to taste",
      "Sliced scallions"
    ],
    "instructions": [
      "Arrange the tofu on a plate or baking sheet. In a blender, combine the soy sauce, chile sauce, chile halves, cilantro, garlic, and ginger; puree until smooth.",
      "Using a pastry brush, coat the tofu on both sides with two-thirds of the chile mixture (reserve the rest for serving). Cover with plastic wrap and refrigerate for at least 1 hour and up to 6 hours.",
      "Fill a 12-inch skillet with \u00bd inch of peanut oil and heat it over medium-high heat. Dip the slabs of tofu in the cornstarch, coating both sides, and tap off the excess.",
      "Working in batches, add the tofu to the hot oil and cook, turning it over once, until it is golden brown, 1 to 2 minutes per side. Transfer the tofu to a paper-towel-lined plate to drain off the excess oil.",
      "In a large bowl, toss the kale with the olive oil and fine sea salt to taste. Add the tofu and toss. Some of the kale will wilt, which is what you want. Serve hot, topped with sliced scallions and cilantro leaves, and with the reserved chile marinade alongside for drizzling."
    ],
    "image": "images/chile-and-ginger-fried-tofu-salad-with-kale-melissa-clark-dinner.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 5.44
  },
  {
    "title": "Jerk Tofu Wrapped in Collard Leaves",
    "ingredients": [
      "1 cup chopped yellow onion",
      "3 scallions, thinly sliced",
      "1 tablespoon minced fresh ginger",
      "1 tablespoon minced garlic",
      "2 tablespoons muscovado sugar",
      "1 tablespoon ground allspice",
      "1 teaspoon freshly grated nutmeg",
      "1 tablespoon freshly ground black pepper",
      "Pinch of cayenne pepper",
      "2 Scotch bonnet or habanero chiles, stemmed, seeded, and minced",
      "2 tablespoons fresh lime juice",
      "2 tablespoons apple cider vinegar",
      "6 tablespoons shoyu",
      "\u00bc cup coconut oil",
      "2 tablespoons minced fresh thyme",
      "Fine sea salt",
      "\u00be cup olive oil",
      "16 large garlic cloves, thinly sliced",
      "2 garlic cloves, minced",
      "3 tablespoons extra-virgin olive oil",
      "\u00bc teaspoon ground coriander",
      "\u00bc teaspoon coarse sea salt, plus more as needed",
      "1 cup tightly packed fresh cilantro leaves",
      "2 tablespoons fresh lemon juice",
      "\u00bd jalape\u00f1o",
      "2  blocks extra-firm tofu",
      "2 cups Jerk Marinade",
      "1 tablespoon plus 2 teaspoons fine sea salt, plus more as needed",
      "16 large collard leaves, tough part of the stem removed",
      "1 cup arrowroot powder",
      "Peanut oil",
      "\u00bc cup Garlic Chips",
      "Cilantro Sauce",
      "Cilantro leaves",
      "Crushed peanuts"
    ],
    "instructions": [
      "Combine all the ingredients except the salt in a food processor, add \u00bc cup water, and puree until well combined. Season with salt to taste. Store in an airtight container in the refrigerator until ready to use, up to 1 week.",
      "In a medium skillet, warm the olive oil over low heat. Add the garlic and cook, stirring occasionally, until crispy and golden brown, 8 to 10 minutes. Strain the oil through fine-mesh sieve into a bowl, reserving the garlic chips. Use immediately or store in separate airtight containers in the refrigerator for up to 1 week.",
      "In a small skillet, combine the garlic, olive oil, coriander, and salt. Bring to a simmer over medium heat and cook just until the garlic is fragrant, about 1 \u00bd minutes. Remove from the heat and let cool.",
      "Transfer the oil mixture to a blender. Add the cilantro, lemon juice, jalape\u00f1o, and \u00bc cup water and blend until smooth. If necessary, season with additional salt to taste. Use immediately or store in an airtight container in the refrigerator for up to 1 week.",
      "First, press your tofu. This procedure extracts excess water, makes the block more uniformly firm, and allows the tofu to absorb the marinade more easily. Just wrap the block of tofu in a clean kitchen towel (or paper towels), place it in a large bowl or a clean kitchen sink, and sit something heavy on top of it (like a 28-ounce can of tomatoes) for 20 minutes, turning the block over after 15 minutes.",
      "Place one block of the tofu on a cutting board. Cut it in half horizontally, then cut vertically down the center to yield four pieces. Repeat with the second block of tofu.",
      "Pour the marinade into a large baking dish, adding just enough water to ensure that it is runny, if necessary. Place the tofu in the marinade in one even layer. Cover and refrigerate for 8 hours or overnight, flipping the tofu every 30 minutes for the first 2 hours. Remove the tofu from the marinade, scrape off any excess, and transfer to a large plate. Strain the marinade through a fine-mesh sieve and set aside.",
      "In a large pot, bring 2 quarts water to a boil over high heat. Add 1 tablespoon of the salt. Blanch the collard leaves, one at a time, for 30 seconds each, then lay them flat on clean kitchen towels to dry.",
      "Combine the arrowroot and the remaining 2 tea\u00acspoons salt in a pie plate. Mix well. Coat each side of the tofu pieces with the arrowroot, shake off any excess arrowroot, and transfer them to a second large plate.",
      "Lightly coat the bottom of a large cast-iron skillet with peanut oil and heat over medium-high heat until shimmering. Add half the tofu and fry until golden brown, 2 to 3 minutes. Gently flip each piece with a spatula and fry until golden brown on the second side. Lightly sprinkle both sides of the tofu with salt and transfer to a rack. Repeat to fry the remaining tofu. Wipe the skillet clean.",
      "On a clean work surface, arrange two collard leaves lengthwise, overlapping each other by an inch or so, and place one piece of tofu in the center of the leaves. Smear 2 heaping tablespoons of the reserved marinade on top of the tofu, sprinkle a heaping teaspoon of garlic chips on top of the tofu, then fold the leaves around the tofu to create a packet. Repeat with the remaining collard leaves and tofu.",
      "In the same skillet, warm 2 tablespoons peanut oil over medium-high heat, tilting the pan to coat it evenly with the oil. Place the packets in the skillet, folded-side up, and cook for about 1 minute. Gently flip each packet with a spatula, cover the skillet with a lid or some aluminum foil, and cook for about 5 minutes to warm through.",
      "To serve, spread some cilantro sauce over four plates and place two of the tofu packets on each plate. Garnish with cilantro leaves and peanuts and serve."
    ],
    "image": "images/jerk-tofu-wrapped-in-collard-leaves-bryant-terry-vegetable-kingdom.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 10.09
  },
  {
    title: "Authentic Bibimbap",
    ingredients: [
      "14 oz (400g) Korean radish (or daikon)",
      "1 cup thinly sliced green onion",
      "1 cup finely diced yellow onion",
      "1 cup ground beef (or ground pork, chicken, etc.)",
      "1 cucumber",
      "2 lettuce leaves",
      "1 zucchini",
      "1 carrot",
      "6 shiitake mushrooms",
      "2 cups soybean sprouts (or mung bean sprouts)",
      "4 cups hot cooked rice (about 1 cup or 210g per serving)",
      "4 tsp toasted sesame oil, divided",
      "4 fried eggs, to serve",
      "Radish",
      "1 tsp salt",
      "1 tbsp Korean chili pepper flakes (gochugaru)",
      "1 tbsp toasted sesame oil",
      "1 tbsp sugar",
      "5 tbsp soy sauce",
      "3 tbsp oyster sauce",
      "1 tbsp minced garlic",
      "1 tbsp toasted sesame oil",
      "1/3 cup (80ml) water",
      "Black pepper, to taste",
      "Zucchini, Carrot, and Mushrooms",
      "1 tbsp neutral-tasting oil (for each)",
      "Salt and pepper, to taste",
      "1 tsp toasted sesame oil (for mushrooms)",
      "Soybean/Mung Bean Sprouts",
      "1/2 tsp salt",
      "3 tbsp Korean chili paste (gochujang)",
      "1 tsp sugar (or light corn syrup)",
      "1 tbsp water"
    ],
    instructions: [
      "Cut radish into thin matchsticks. Salt and let sit for 15 minutes. Drain and squeeze. Mix with chili flakes and sesame oil.",
      "Make meat sauce by combining onions, soy sauce, oyster sauce, sugar, garlic, sesame oil, water, and pepper. Cook beef in a pan, then add sauce and simmer until thickened.",
      "Cut cucumber and lettuce into bite-sized pieces. Set aside.",
      "Julienne zucchini and sauté with a bit of oil and salt over low heat. Set aside.",
      "Julienne carrots and sauté similarly. Set aside.",
      "Slice mushrooms and sauté with oil, salt, and pepper. Finish with sesame oil.",
      "Blanch bean sprouts in salted boiling water for 1 minute. Rinse in cold water and squeeze out water.",
      "Mix gochujang, sugar, and water to make the bibimbap sauce.",
      "To serve regular bibimbap: place hot rice in a bowl, drizzle with sesame oil, top with assorted vegetables, meat sauce, and a fried egg. Serve with bibimbap sauce.",
      "To serve dolsot bibimbap: coat a clay pot with sesame oil, layer rice, toppings, and raw egg yolk (or sunny-side-up egg), heat for 3 minutes on medium-high and 2 minutes on low. Finish with sesame oil. Serve hot with sauce."
    ],
    estimatedCostUSD: 9.5,
    estimatedCookTimeMins: 30,
    image: "images/bibimbap-aaronclaire.jpg" 
  },
  {
    title: "Chinese Braised Pork Belly with Quail Eggs",
    ingredients: [
      "680g pork belly (skin-on)",
      "50g white sugar",
      "3 tbsp Chinese cooking wine",
      "3 tbsp soy sauce",
      "2 tbsp oyster sauce",
      "1.5 tbsp Sichuan dou ban jiang",
      "600ml water",
      "2 inches ginger, sliced thinly",
      "3 scallions, cut into stalks",
      "1/2 tsp five-spice powder",
      "24 quail eggs",
      "Diced scallions (for garnish)"
    ],
    instructions: [
      "Cut pork belly into 1-inch cubes.",
      "Blanch pork belly in boiling water. Skim off foam, drain and set aside.",
      "In a clay pot, add 2 tsp oil and caramelize 1/4 cup sugar over medium-low heat.",
      "Add pork belly and cooking wine, stir to prevent sugar from burning.",
      "Add ginger and scallions. Season with soy sauce, oyster sauce, dou ban jiang.",
      "Pour in 600ml water and add five-spice powder. Stir and simmer on low for 1.5 hours.",
      "Boil quail eggs for 3 minutes, peel them, then add to the pot.",
      "Simmer until pork is tender. Discard scallions and ginger.",
      "Turn heat to high and reduce sauce until thick and glossy (about 5 minutes).",
      "Serve with white rice and garnish with diced scallions."
    ],
    image: "images/braised-pork-quail.jpg",
    estimatedCookTimeMins: 95,
    estimatedCostUSD: 11.50
  },
  {
    "title": "Crispy Tofu Balls",
    "ingredients": [
      "1  package firm tofu",
      "\u2153 cup finely chopped scallions",
      "5 \u2153 teaspoons mushroom bouillon",
      "4 tablespoons fresh corn, off the cob",
      "2 pinches ground white pepper",
      "Spicy aioli",
      "1 cup all-purpose flour",
      "1 \u00bc cups water",
      "2 \u00bc teaspoons mushroom bouillon",
      "1  package green glutinous rice flakes",
      "\u00bd cup cornstarch"
    ],
    "instructions": [
      "Pressing the tofu is the most important step, so I\u2019m going to give y\u2019all (I grew up in Texas, so I have the liberty to use \u201cy\u2019all\u201d liberally) three pressing options. The first step before you press is the same: Drain the liquid from the box of tofu. Then press.",
      "Method 1: (Easiest) Use a tofu-pressing machine! I spotted one of these in Torrance, California, at a little Japanese grocery store. You place a block of tofu in between two plates and turn a small crank to compress it. Though it will press only one block at a time\u2014the boxes of tofu we use come four to a box\u2014you can set it and forget it (but do it three more times if you plan on using all the tofu).",
      "Method 2: (Most common) Use two similar-size plates or relatively flat surfaces. Lay out the blocks of tofu flat in a single layer on one of the plates, and then put the second plate on top of the tofu. Press the tofu by placing at least 10 pounds of weight on top of the second plate.",
      "Method 3: (Most \u201cprofessional\u201d) We still prepare the tofu this way at our restaurant, which is, without question, the most efficient way to prepare larger servings. Lay baking racks/grates inside baking sheets, then cover racks with clean (lint-free) towels or, as we did successfully for four years, with neatly folded aprons laid in a single layer as level and as flat as possible across the racks. Yup, towels or aprons, plural. Because tofu holds so much moisture, the liquid constantly spills over, and we\u2019ve found very few people who just live to clean. To absorb the moisture, and to create much less of a mess, we started using layers of cloth.",
      "Lay out the tofu on the covered racks in a single layer, organized as tightly as possible. Make sure the tofu doesn\u2019t hang over the sides of the sheets or it won\u2019t be pressed evenly. Next, lay another towel/apron on top of the layer of tofu, again, flat and level. Then lay another equal-size baking sheet + covered rack + tofu on top of that. Repeat the same steps as needed. The top layer should be a baking sheet on which you place 30 to 40 pounds of \u201cstuff\u201d to press down on all the layers. No matter how many layers you stack, the tofu should flatten out only slightly, not be completely crushed.",
      "Processing the tofu is far simpler than pressing it, though like pressing, there are three different ways to do it. Start with a bowl or a large (22-quart) plastic container made by and known as a Cambro (if you have one of those lying around), and do one of the following:",
      "Method 1: Use a food mill, which is what we use. This is by far the easiest way to process tofu and get the most consistent texture (and it\u2019s a great method for mashing anything).",
      "Method 2: Use a potato masher. Just mash away, but you\u2019ll still need to use the third option to smash out any little lumps that the masher doesn\u2019t, um, well, mash.",
      "Method 3: Mash everything with your hands. (This is the most common way.)",
      "Process the tofu until it is a consistent, almost pasty texture. If you go with No. 2 or No. 3, make sure to smash out all lumps from the tofu or else the seasoning won\u2019t evenly distribute throughout the mix and, later, the balls.",
      "Add chopped scallions, mushroom bouillon, corn, and ground white pepper to the (hopefully) evenly processed tofu. Stick your hands in (maybe with gloves) and mix all the ingredients. Taste some of the mix from different areas of the bowl/container to make sure it\u2019s evenly seasoned. It should taste savory, with little bits of scallion and corn in every bite.",
      "Now it\u2019s ball-rolling time! Scoop out a tablespoon of the tofu mixture, hand-pack it tightly into the spoon, then level out the spoon with your finger. Assertively shake or scoop out the mix into your hand while mostly keeping it in one piece. Firmly clench the tofu by making a fist, packing it very tightly so it doesn\u2019t fall apart.",
      "Continue by shaping into a ball, either with one hand or by lightly tossing the ball back and forth between both hands like you\u2019re playing catch with yourself. Lightly roll the tofu between your hands, moving your hands in an alternating clockwise motion, like you would forming a meatball, only more gently to smooth out any cracks. Tofu is very docile; the more you do it, the better you\u2019ll get the feel of it (like most things in life). Place tofu balls on a plate or (ideally) a baking sheet rack.",
      "Optional: Refrigerate the balls overnight, uncovered. This will firm them up.",
      "Add flour, water, and mushroom bouillon to a bowl. Mix together. It should not be lumpy; the consistency should be not too thin and consistently thick enough to adhere, but not so thick it doesn\u2019t drip off your finger.",
      "Empty the green rice flakes into a separate bowl or catering pan, then mix in half of the dry cornstarch with flakes. Next, drop balls into flour paste. Shake off excess paste (we highly recommend using a kitchen \u201cspider\u201d strainer to do this), then roll balls around in the flakes until they\u2019re fully coated. Gently clench the balls to pack one last bit of flakes onto the balls. If flakes start to drop off the balls, mix in more of the remaining cornstarch to dry flakes, then try again.",
      "Set balls on a rack.",
      "Optional: If you plan on making more and hate waste like we do, clean and dry your hands, then sift through all the flakes. Throw out any moist clumps of flakes. Store dry flakes in a closed container, then refrigerate until your next tofu ball\u2013rolling party!",
      "Optional: Refrigerate the fully flaked balls uncovered (and preferably elevated on a rack) overnight. This will give the flakes more time to adhere and dry out, which is important in giving the balls more puff, crunch, and an overall prettier look after frying.",
      "Add at least 2 inches of oil to a pot, bring to 350\u00b0F over high heat, then fry the balls for about 3 to 4 minutes, or until the flakes puff up bright green and any exposed tofu turns a slight golden color. If the balls start turning brown, the oil\u2019s too hot or you\u2019re frying them for too long. If the balls look oily or wet after frying, either the temperature is too low or you\u2019re frying too many balls at once, which lowers the temperature of the oil too quickly.",
      "Remove from oil, shake off excess, drip dry on a rack. Plate and top with spicy aioli and more aioli on the side to dip."
    ],
    "image": "images/crispy-tofu-balls.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 10.93
  },
  {
    "title": "Silken Tofu With Soy-Sauced Tomatoes",
    "ingredients": [
      "1 cup  cherry tomatoes, halved",
      "1 tablespoon soy sauce",
      "1 teaspoon olive oil",
      "Freshly ground black pepper",
      "1 block silken tofu, about 12 ounces, chilled",
      "Toasted sesame oil",
      "Thinly sliced scallions",
      "Thinly sliced basil"
    ],
    "instructions": [
      "In a small saucepan or skillet, combine the tomatoes, soy sauce, olive oil, and many grinds of black pepper. Place over low heat and cook for 5 to 7 minutes, just until the tomatoes start to soften and juices collect in the pan.",
      "Carefully cut the tofu into 2 wide slabs (or 4 smaller ones) and place on plates or in shallow bowls. Divide the warm tomatoes on top. Add a judicious drizzle of toasted sesame oil, then sprinkle with scallions and basil, if using. Serve immediately."
    ],
    "image": "images/silken-tofu-with-soy-sauced-tomatoes.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 13.21
  },
  {
    "title": "Chinese Broccoli With Soy Paste",
    "ingredients": [
      "1 lb. Chinese broccoli or broccolini, trimmed, cut in thirds crosswise",
      "\u00bc cup soy paste"
    ],
    "instructions": [
      "Set a steamer basket in a large pot filled with 1\" water, cover pot, and bring water to a boil. Add broccoli to steamer basket, cover pot, and steam broccoli until crisp-tender, about 5 minutes.",
      "Meanwhile, whisk soy paste and 2 Tbsp. water in a large bowl.",
      "Arrange broccoli on a platter and drizzle sauce over."
    ],
    "image": "images/chinese-broccoli-with-soy-paste.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 11.16
  },
  {
    "title": "Tomato Fried Rice",
    "ingredients": [
      "4 scallions",
      "1 lb. cherry and/or grape tomatoes of any and all colors",
      "Kosher salt",
      "2 Tbsp. toasted sesame oil, divided",
      "3 garlic cloves, finely grated",
      "1 1/2 tsp. finely grated peeled ginger",
      "2 1/2 cups chilled cooked long-grain white or brown rice",
      "3 large eggs, beaten to blend",
      "1 Tbsp. soy sauce",
      "Extra-virgin olive oil",
      "Crushed red pepper flakes",
      "1/2 lemon"
    ],
    "instructions": [
      "Trim dark green tops from scallions and thinly slice; set aside. Thinly slice white and pale green parts; set aside separately. Quarter any larger tomatoes and halve any small ones. Place about one-quarter of tomatoes in a small bowl; season generously with salt and toss to combine. Set aside.",
      "Heat 1 Tbsp. sesame oil in a large skillet over medium-high. Add reserved white and pale green parts of scallions and remaining 3/4 of tomatoes and cook, stirring occasionally, until softened and any liquid from tomatoes has evaporated, about 4 minutes. Mix in garlic and ginger; cook, stirring constantly, until fragrant, about 30 seconds. Add rice and stir to separate grains. Cook just to heat rice through, about 3 minutes.",
      "Scoot vegetables and rice to 1 side of skillet, then pour half of remaining sesame oil into pan. Add eggs and cook, stirring often, until just set, about 1 minute. Mix into vegetables and rice, then drizzle in soy sauce and cook, stirring, just until well combined.",
      "Transfer fried rice to a large bowl or platter. Drain salted tomatoes, drizzle with olive oil, and spoon over rice. Sprinkle with reserved scallion tops and red pepper flakes (if using) and drizzle with remaining sesame oil. Finely grate zest from lemon over."
    ],
    "image": "images/tomato-fried-rice.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 10.08
  },
  {
    "title": "Vietnamese Pork Meatball Banh Mi Fried Rice",
    "ingredients": [
      "1 small daikon radish, peeled and cut into matchsticks",
      "1 large carrot, peeled and cut into matchsticks",
      "1 teaspoon kosher salt",
      "1 cup distilled white vinegar",
      "1 cup water",
      "1/3 cup granulated sugar",
      "1 stalk lemongrass, root end trimmed, outer leaves removed, finely sliced",
      "2 cloves garlic",
      "2 green onions",
      "1 Tbsp. fish sauce",
      "1 Tbsp. sriracha",
      "1 Tbsp. kosher salt",
      "1 lb. ground pork",
      "1 Tbsp. vegetable oil",
      "5 green onions, ends trimmed, cut into 1\u201d lengths",
      "4 cups cold cooked rice",
      "1 Tbsp. soy sauce",
      "1 Tbsp. fish sauce",
      "1 Tbsp. sriracha, plus more",
      "1/2 cup chopped fresh cilantro"
    ],
    "instructions": [
      "Combine the daikon and carrot on a colander set in the sink. Sprinkle with salt, and massage the vegetables until they\u2019re bendable and have expelled their liquid. In a medium bowl, combine the vinegar, water, and sugar. Stir until the sugar is dissolved. Add the carrot and daikon, pressing to make sure the vegetables are mostly submerged. Cover and refrigerate at least an hour before using, and up to several weeks.",
      "In a food processor, combine the lemongrass, garlic, and green onions. Pulse until finely chopped. Add the fish sauce, sriracha, salt, and pork; pulse until just combined. (Alternatively, you can very finely chop the lemongrass, garlic, and green onions by hand or use a mortar and pestle, then mix with the remaining ingredients. Filling can be made several days ahead and refrigerated.) Roll the meat mixture into heaping teaspoon-size meatballs (alternatively, you can roll just half into meatballs and use a combination of ground pork and meatballs in the fried rice).",
      "Heat the oil in a large saute\u0301 pan over medium-high heat. Add the meatballs and brown on all sides, about 5 minutes. Transfer to a plate. (If you rolled only half the mixture into meatballs, now saute\u0301 the ground pork in the pan until cooked through, then transfer to the plate.) Add the green onions and saute\u0301 until browned, about 2 minutes. Add the rice and saute\u0301 until warmed through and softened, then continue saute\u0301ing until the rice seems firm again, about 3 minutes. Add the meatballs and cook until warmed through. In a small bowl, combine the soy sauce, fish sauce, and sriracha. Drizzle the mixture over the rice and stir until evenly coated."
    ],
    "image": "images/vietnamese-pork-meatball-banh-mi-fried-rice.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 9.52
  },
  {
    title: "Mongolian Ground Beef",
    ingredients: [
      "5 green onions",
      "5 cloves garlic",
      "2.5 tsp grated ginger (10g)",
      "3 tbsp neutral-tasting oil, divided",
      "1.1 lb (500g) ground beef",
      "5 Vietnamese dried chilies (optional)",
      "1/2 tbsp toasted sesame oil",
      "3-4 cups hot cooked rice",
      "1/2 mild red chili or bell pepper (optional)",
      "3 tbsp soy sauce",
      "2 tbsp sugar",
      "1 tbsp oyster sauce",
      "1 tsp chicken bouillon powder",
      "1/2 tsp dark soy sauce",
      "1 tbsp light corn syrup",
      "2 tbsp Shaoxing wine or substitute",
      "Black pepper to taste",
      "5 tbsp water",
      "1 tbsp cornstarch"
    ],
    instructions: [
      "Thinly slice the white parts of the green onions and cut the green parts into long strips. Keep them separate.",
      "Smash and finely chop the garlic. Grate the ginger.",
      "In a bowl, mix soy sauce, sugar, oyster sauce, chicken bouillon powder, dark soy sauce, corn syrup, Shaoxing wine, black pepper, water, and cornstarch to make the sauce.",
      "In a wok, heat 1 tbsp oil over medium-high heat. Add ground beef and sauté until browned, about 7–8 minutes. Remove from wok and set aside.",
      "In the same wok, add 2 tbsp oil. Sauté the white parts of the green onions, garlic, and ginger for 1 minute.",
      "Add the thicker green onion parts and dried chilies (if using). Stir for 30 seconds.",
      "Pour in the sauce and simmer for 1 minute until thickened slightly. Return beef to the wok and mix for another minute.",
      "Turn off the heat, stir in the remaining green onions and sesame oil.",
      "Serve hot over rice and garnish with red chili if desired."
    ],
    estimatedCostUSD: 9.5,
    estimatedCookTimeMins: 20,
    image: "images/mongolian-ground-beef.jpg"
  },
  {
    "title": "Cold Soba Noodles with Miso and Smoked Tofu",
    "ingredients": [
      "1 tablespoon finely grated peeled ginger",
      "3 tablespoons miso paste",
      "3 tablespoons mirin, plus more to taste",
      "3 tablespoons unseasoned rice vinegar, plus more to taste",
      "1 tablespoon soy sauce, plus more to taste",
      "1/4 teaspoon kosher salt, plus more to taste",
      "1 pound soba noodles",
      "5 red radishes, thinly sliced",
      "5 scallions, trimmed, thinly sliced",
      "4 ounces smoked tofu",
      "cubed"
    ],
    "instructions": [
      "Whisk ginger, miso paste, 3 Tbsp. mirin, 3 Tbsp. vinegar, 1 Tbsp. soy sauce, and 1/4 tsp. salt in a large bowl.",
      "Cook soba noodles according to package directions. Drain noodles, rinse with cold water, then add to ginger mixture. Season with more mirin, vinegar, soy sauce, and salt, if needed.",
      "Transfer noodles to a serving bowl or platter and top with radishes, scallions, and tofu. Serve immediately."
    ],
    "image": "images/cold-soba-noodles-with-miso-and-smoked-tofu-56389798.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 7.31
  },
  {
    "title": "Shawarma-Spiced Tofu Pita Wraps",
    "ingredients": [
      "1/2 small red onion, thinly sliced",
      "3 Tbsp. seasoned rice vinegar",
      "1  block firm or extra-firm tofu, drained",
      "3 Tbsp. extra-virgin olive oil",
      "2 tsp. ground coriander",
      "2 tsp. smoked Spanish paprika",
      "1/2 tsp. crushed red pepper flakes",
      "1/2 tsp. ground cinnamon",
      "1 tsp. kosher salt, plus more",
      "1/2 cup whole-milk Greek yogurt",
      "1 small garlic clove, finely grated",
      "4 pitas, warmed",
      "2 Persian or mini cucumbers, thinly sliced lengthwise",
      "Mint leaves"
    ],
    "instructions": [
      "Preheat oven to 425\u00b0F. Toss onion and vinegar in a small bowl to coat; set aside.",
      "Squeeze tofu over a medium bowl, gently at first, then more firmly to expel as much water as possible (like squeezing out a big sponge). Don\u2019t worry if it starts to crack apart. When no more liquid comes out, tear tofu into 1\" pieces. Arrange in a single layer on a large rimmed baking sheet. Toss with oil, then add coriander, paprika, red pepper flakes, cinnamon, and 1 tsp. salt. Toss well to coat. Roast tofu, turning once or twice, until crispy around the edges and well browned, 20\u201325 minutes (the tofu will get crispier as it cools, so don\u2019t be tempted to take it too far and dry it out in the oven).",
      "Stir yogurt and garlic in a small bowl; season with salt. Assemble by dividing yogurt among pitas, followed by tofu, cucumbers, drained pickled onion, and a handful of mint."
    ],
    "image": "images/shawarma-spiced-tofu-pita-wraps.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 8.46
  },
  {
    "title": "Barbecued Pork Fried Rice with Mushrooms and Extra Ginger",
    "ingredients": [
      "3 tablespoons neutral oil, such as canola or grapeseed",
      "2 cups  cultivated mushrooms, brushed free of dirt",
      "Fine sea salt to taste",
      "1 tablespoon minced Fresno or jalape\u00f1o chile",
      "2 tablespoons minced ginger",
      "1 bunch scallions, finely sliced white and dark green parts, kept separate",
      "3/4 cup  shredded barbecued pork ribs or cooked pork shoulder",
      "2 cups cooked rice, clumps broken up, dried if possible",
      "1/2 cup corn kernels, fresh or frozen",
      "1 tablespoon soy sauce",
      "1 egg",
      "whisked"
    ],
    "instructions": [
      "In a large (10-inch or more) saut\u00e9 pan or wok, heat 1 tablespoon of the oil over medium-high heat. Saut\u00e9 the mushrooms without disturbing until browned on the underside, about 2 to 3 minutes. Add a pinch of salt, stir, and cook for another 1 to 2 minutes, until the mushrooms are glossy and pliant. Add the remaining 2 tablespoons of oil, the chile, ginger, and the white portion of the scallions. Stir constantly until fragrant, 30 seconds to 1 minute. Add the pork and stir vigorously for 1 minute to heat it through.",
      "Add the rice, toss well to combine, and let it sit undisturbed for 30 seconds to toast well. Add the corn and cook, tossing and stirring continuously, until warmed through, about another 30 seconds. Stir in the soy sauce and toss thoroughly to combine.",
      "While folding the rice mixture quickly, fold in the egg (don\u2019t let it sit still or the egg will pool and form ugly clumps). Remove the pan from the heat, add the scallion greens, and toss. Taste and adjust the seasoning with more salt or soy sauce as desired and serve."
    ],
    "image": "images/barbecued-pork-fried-rice-with-mushrooms-and-extra-ginger.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 7.28
  },
  {
    "title": "Manchurian Green Beans with Tofu",
    "ingredients": [
      "1/2  package extra-firm tofu",
      "1 1/2 pounds green beans, ends trimmed, cut into 3-inch pieces",
      "2 scallions, thinly sliced",
      "2 tablespoons finely chopped fresh cilantro",
      "2 medium garlic cloves, minced",
      "1  piece finely chopped, peeled fresh ginger",
      "2 \u00e1rbol chiles",
      "1/4 cup low-sodium tamari",
      "2 tablespoons fresh lemon juice",
      "2 tablespoons arrowroot powder"
    ],
    "instructions": [
      "Drain the tofu and press it between your hands to remove excess liquid. Cut the tofu into 1-inch cubes. Place the cubes in a large nonstick saut\u00e9 pan over medium heat and cook for about 5 minutes, until golden and crispy on all sides.",
      "Meanwhile, to make the sauce, in a separate, large nonstick saut\u00e9 pan, combine the garlic, ginger, and chiles and toast over medium heat for about 2 minutes, until they are aromatic, stirring constantly so they don\u0092t burn. Add the green beans and 3/4 cup water. Increase the heat to high and bring to a boil. Reduce the heat to medium and simmer for 5 to 7 minutes, until the beans are cooked but still crunchy. (Cook them for about 3 minutes if you like your vegetables al dente.)",
      "Combine the soy sauce, lemon juice, arrowroot, and 1/4 cup water to make a slurry and whisk with a fork until no lumps remain. Pour the slurry into the saut\u00e9 pan and cook, stirring constantly, until the sauce thickens, about 3 minutes. Add the tofu and cook for 5 to 7 minutes, until the sauce coats the tofu and beans. Stir in the scallions and cilantro. Serve warm."
    ],
    "image": "images/manchurian-green-beans-with-tofu.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 11.5
  },
  {
    "title": "Sinangag (Garlic Fried Rice)",
    "ingredients": [
      "1 cup  vegetable oil",
      "1 cup  garlic cloves, sliced paper thin",
      "4 cups  freshly cooked jasmine rice, kept hot",
      "Kosher salt",
      "2 to 4 large eggs",
      "fried or sunny-side up"
    ],
    "instructions": [
      "In a medium saucepan, heat the vegetable oil over medium heat until the oil begins to shimmer. Line a plate with paper towels and set it nearby.",
      "Carefully pour the garlic into the hot oil and stir continuously until the garlic is just beginning to lightly brown. Remove the pan from the heat and use a slotted spoon to transfer the fried garlic onto the paper towel\u2013lined plate; reserve the oil. Set both the garlic and the oil aside while you make the rice. (You can store the garlic chips and oil in separate airtight containers in the refrigerator for up to a week.)",
      "Fluff the hot rice with a fork and toss it with 1/4 cup (60 ml) of the garlic oil and 1/2 cup (40 g) of the fried garlic chips. (You will have leftover oil and chips for more rice; or try them on the pansits and soups.)",
      "Season the rice with salt and serve right away or at room temperature, with the eggs, if desired."
    ],
    "image": "images/garlic-fried-rice-sinangag.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 6.34
  },
  {
    "title": "Stir-Fried Rice Noodles with Shrimp and Adobo (Pansit Bihon Guisado)",
    "ingredients": [
      "2 dried mushrooms",
      "1 1/2 cups warm water",
      "1/2 cup leftover chicken and/or pork adobo meat, shredded",
      "1 tablespoon red or white wine",
      "3 tablespoons vegetable oil, divided",
      "4\u20136 cloves garlic, minced",
      "1 small to medium onion, cut into slivers",
      "1\u20132 celery ribs, chopped",
      "1 small red bell pepper, seeded and cut into thin strips",
      "1/4 cup fresh shrimp, peeled and deveined, or dried shrimp",
      "1/4 cup soy sauce, plus a dash",
      "1 medium carrot, cut into thin strips",
      "1 chayote or zucchini, cut into thin strips, or 1/2 head broccoli or napa cabbage, chopped",
      "1/2 pound bihon",
      "1/2 teaspoon freshly ground black pepper",
      "Dash freshly squeezed calamansi  juice",
      ""
    ],
    "instructions": [
      "Soak the mushrooms in the warm water for at least 20 minutes. Drain the mushrooms, reserve the soaking liquid, and thinly slice the mushrooms. Combine the adobo and wine (if using) in a bowl.",
      "Heat 2 tablespoons of the oil in a large skillet or wok over medium heat until it shimmers. Add the garlic and stir-fry until light gold. Add the onion and cook, stirring occasionally, for about 2 minutes, or until translucent. Stir in the celery and bell pepper. Cook, stirring occasionally, for 2 minutes. Add the adobo. If you are using fresh shrimp, add them, too. Cook, stirring, for about 1 minute. Remove from the heat and set aside.",
      "Pour the reserved mushroom soaking liquid into a saucepan and add the soy sauce, mushrooms, carrot, and chayote. If you are using dried shrimp, add those, too. Bring the mixture to a boil over high heat. Add the noodles and toss with the rest of the ingredients. As the noodles become tender, separate them until they are able to mix evenly with the veggies, about 3 minutes.",
      "When the noodles have completely absorbed the liquid and are chewable, stir in the celery, bell pepper, and adobo mixture. Season with the black pepper and mix thoroughly. Pour in the remaining 1 tablespoon oil. Reduce the heat to low to gently fry the noodles for about 2 minutes. Serve with an extra dash of soy sauce and calamansi juice, if using."
    ],
    "image": "images/stir-fried-rice-noodles-with-shrimp-and-adobo-pansit-bihon-guisado.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 8.17
  },
  {
    "title": "Turmeric-Kale Fried Rice",
    "ingredients": [
      "2 cups uncooked brown rice",
      "2 tablespoons toasted sesame oil",
      "1/2 large yellow onion, finely chopped",
      "2 garlic cloves, finely minced",
      "2 carrots, finely chopped",
      "3 tablespoons reduced-sodium tamari soy sauce",
      "3 green onions, finely sliced on the bias",
      "1 tablespoon ground turmeric",
      "1 cup  savory tofu",
      "1 cup chopped kale or broccoli rabe",
      "Gomashio",
      "for topping"
    ],
    "instructions": [
      "In a medium saucepan, bring brown rice, or your choice of grain, plus the appropriate amount of water to a boil. Reduce to a simmer and cook for 25 to 30 minutes until tender. Drain any excess liquid, fluff with a fork, and set aside to cool.",
      "In medium saut\u00e9 pan, heat the oil over medium heat. Add the yellow onion and saut\u00e9 for about 8 minutes, or until translucent. Add the garlic and cook until fragrant. Add the carrots and cook approximately 2 minutes.",
      "Pour in the soy sauce and cook, stirring occasionally, until it begins to evaporate, about 2 minutes. Add half the green onions and stir-fry for another 3 minutes, or until thoroughly heated. Sprinkle in the turmeric. Add the cooked rice or grains and saut\u00e9 until warmed through. Add the tofu and warm through. Add the finely chopped kale or broccoli rabe and stir to coat and quickly warm through. Top with the remaining green onions, sprinkle with some gomashio, if desired, and serve immediately."
    ],
    "image": "images/turmeric-kale-fried-rice.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 14.49
  },
  {
    "title": "Chinese Five-Spice Steak with Oranges and Sesame Broccolini",
    "ingredients": [
      "3 small oranges",
      "1 1/2 tsp. Chinese five-spice powder",
      "1 tsp. light brown sugar",
      "2 1/4 tsp. kosher salt, divided",
      "1 hanger steak , cut in half lengthwise, center gristle removed",
      "2 Tbsp. vegetable oil",
      "3 bunches broccolini , trimmed, halved lengthwise if large",
      "2 Tbsp. toasted sesame oil",
      "1/2 tsp. crushed red pepper flakes",
      "1 tsp. toasted sesame seeds, plus more",
      "3 scallions, thinly sliced",
      "Flaky sea salt",
      "Steamed rice and hot sauce"
    ],
    "instructions": [
      "Finely grate 2 tsp. orange zest from 1 orange into a small bowl. Cut all oranges in half; set aside.",
      "Add five-spice powder, brown sugar, and 2 tsp. kosher salt to bowl with zest and stir to combine. Rub steak all over with spice mixture.",
      "Heat vegetable oil in a large heavy skillet (preferably cast iron) over high. Cook steak, turning often, until browned on all sides and an instant-read thermometer inserted into the center registers 130\u02daF for medium-rare, 15\u201320 minutes total. After steak has cooked for about 5 minutes, nestle orange halves cut side down around steak and cook until well browned, about 5 minutes. Transfer oranges to a plate. Transfer steak to a cutting board and let rest 10 minutes before slicing.",
      "Arrange broccolini in an even layer in same skillet and heat over high. Cook, undisturbed, until well charred, about 3 minutes. Toss and continue to cook until tender and slightly charred all over, about 3 minutes more. Transfer to a large bowl. Squeeze in juice from 2 orange halves over. Add sesame oil, red pepper flakes, 1 tsp. sesame seeds, and remaining 1/4 tsp. kosher salt and toss to coat.",
      "Transfer steak to a platter. Arrange broccolini mixture alongside. Top with scallions, sea salt, and remaining sesame seeds. Serve with charred orange halves to squeeze over, rice, and hot sauce alongside, if desired."
    ],
    "image": "images/chinese-five-spice-steak-with-oranges-and-sesame-broccolini.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 5.04
  },
  {
    "title": "Crispy Tofu in Shiitake Broth",
    "ingredients": [
      "1/4 cup plus 2 tablespoons reduced-sodium soy sauce",
      "1 tablespoons light brown sugar",
      "1  package firm tofu, drained",
      "3 scallions",
      "12 shiitake mushrooms, rinsed, patted dry",
      "2  pieces dried kombu",
      "1  piece ginger, peeled, thinly sliced",
      "4 garlic cloves",
      "2 tablespoons vegetable oil",
      "Kosher salt",
      "4 baby bok choy , halved lengthwise",
      "2 medium carrots, peeled, thinly sliced into rounds",
      "1 small radish, trimmed, thinly sliced into rounds",
      "Toasted sesame oil"
    ],
    "instructions": [
      "Stir 1/4 cup soy sauce and brown sugar in a medium bowl. Cut tofu into 1/2\"-thick slabs and then into squares. Pat dry with paper towels. Add tofu and toss to coat. Let sit, tossing occasionally, 20 minutes.",
      "Meanwhile, remove green tops from scallions and very thinly slice; set aside. Coarsely chop white parts and place in a medium pot. Add mushrooms, kombu, ginger, garlic, and 8 cups water and bring to a simmer over medium-high. Reduce heat to low and cook 10 minutes. Remove from heat; discard kombu. Let dashi sit 20 minutes (this will coax more flavor from aromatics), then fish out and discard scallions, mushrooms, ginger, and garlic.",
      "Heat vegetable oil in a large skillet, preferably nonstick, over medium-high. Cook tofu, working in batches if needed, until golden brown and crisp around edges, about 3 minutes per side. Transfer to paper towels to drain; season with salt.",
      "While tofu is cooking, bring dashi to a boil. Add bok choy and carrots and cook until tender, about 3 minutes. Add remaining 2 Tbsp. soy sauce; taste and season with more salt if needed.",
      "Ladle soup into bowls and add tofu, radishes, and reserved scallion tops; drizzle with sesame oil.",
      "Dashi can be made 3 days ahead. Let cool; cover and chill, or freeze up to 3 months."
    ],
    "image": "images/crispy-tofu-in-shiitake-broth.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 12.02
  },
  {
    "title": "Homemade Baked Tofu",
    "ingredients": [
      "One  tub firm or extra- firm tofu",
      "1/4 cup reduced-sodium natural soy sauce",
      "1/4 cup white wine, cooking sherry, vegetable broth, or water",
      "1 tablespoon dark sesame oil",
      "1 tablespoon agave nectar or other liquid sweetener",
      "2 tablespoons rice vinegar or white wine vinegar",
      "1 to 2 cloves garlic, crushed or minced",
      "1 teaspoon grated fresh or jarred ginger, or more to taste",
      "Fresh or dried thyme leaves  or fresh or dried oregano leaves to taste"
    ],
    "instructions": [
      "Drain the tofu and cut into 8 slabs crosswise. Blot well between paper towels or clean kitchen towels (or use a tofu press). Cut each slab into strips.",
      "Combine the remaining ingredients in a small bowl and whisk together. Arrange the tofu slices in a single layer in a shallow container or baking dish and pour enough marinade over them to cover. Let stand for an hour or two\u2014the longer the better.",
      "Shortly before you\u2019d like to bake the tofu, preheat the oven to 400\u00b0F. If this is the only thing you\u2019re making, use a toaster oven\u2014it\u2019s the perfect size. Remove the tofu slices from the marinade and transfer to a parchment-lined baking pan in a single layer. If you\u2019re using the full-size oven, roast some veggies at the same time (I like to use the excess marinade to roast eggplant or green beans).",
      "Bake for 20 minutes, then turn the strips and bake for 15 to 20 minutes longer, or until the tofu is firm and starting to turn light brown along the edges.",
      "Add 1 teaspoon liquid smoke (or more to taste) to the marinade for a subtle smoky flavor.",
      "Instead of baking, cook these tofu slices on a grill. About 5 minutes per side should do\u2014make sure there are nice grill marks on each side."
    ],
    "image": "images/homemade-baked-tofu.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 5.91
  },
  {
    "title": "Tofu-Vegetable Noodle Toss",
    "ingredients": [
      "1 pound asparagus, trimmed and cut into 1-inch pieces",
      "1 1/2 cups trimmed and halved snow peas",
      "1 cup Marinated Saut\u00e9ed Tofu cubes",
      "9.5 ounces buckwheat soba noodles",
      "1 tablespoon low-sodium soy sauce",
      "2 tablespoons low-sodium soy sauce",
      "1 tablespoon mirin",
      "1/2 tablespoon agave nectar",
      "1/2 tablespoon rice vinegar",
      "1 clove garlic, crushed",
      "2 teaspoons cornstarch mixed in 1 tablespoon cold water",
      "Dash sesame oil or chili oil",
      "Pinch crushed red pepper flakes"
    ],
    "instructions": [
      "Put a large pot of water on to boil. Add the vegetables to the boiling water and cook for about 2 minutes. Remove the vegetables from the water with a strainer and place them in a large bowl. Add the tofu and mix well.",
      "Bring the water back to a boil. Add the soba noodles and cook for 4 to 5 minutes, until tender.",
      "For the sauce place all the sauce ingredients in a saucepan. Slowly bring to a boil, stirring constantly, until thickened and clear. Remove from the heat and pour over the tofu and vegetables, mixing well.",
      "Remove soba noodles from water and place in a large bowl. Toss with the 1 tablespoon soy sauce to separate the noodles. Pour the vegetable mixture over the noodles and toss well to mix. Serve warm or at room temperature, with Sriracha hot sauce as a condiment, if desired, for more heat."
    ],
    "image": "images/asian-vegetable-noodle-toss.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 12.72
  },
  {
    "title": "Kare-Kare with Beans, Baby Bok Choy, and Eggplant",
    "ingredients": [
      "1/4 cup achiote  seeds",
      "1/4 cup black peppercorns",
      "1/3 cup dried bay leaves",
      "4 tablespoons  vegetable oil, divided",
      "5 pounds oxtails",
      "Kosher salt, freshly ground pepper",
      "2 medium onions, 1 coarsely chopped, 1 thinly sliced",
      "2 large carrots, peeled, coarsely chopped",
      "3 celery stalks, coarsely chopped",
      "1 pound shiitake mushrooms, stems removed, coarsely chopped",
      "1 cup dry white wine",
      "5 garlic cloves, coarsely chopped",
      "1 cup chopped garlic chives or 1 medium leek, white and pale green parts only, thinly sliced",
      "4 medium baby bok choy, quartered",
      "1 medium Japanese eggplant, halved lengthwise, cut into 2-inch pieces",
      "1 medium taro root, peeled, cut into 2-inch pieces",
      "1 pound Chinese long beans or green beans, trimmed, cut into 4-inch pieces",
      "3/4 cup creamy natural peanut butter",
      "Crushed unsalted, roasted peanuts, sliced red chile, and shrimp paste",
      "A 12-inch square of cheesecloth"
    ],
    "instructions": [
      "Bundle achiote seeds, peppercorns, and bay leaves in cheesecloth and tie closed with kitchen twine; set sachet aside.",
      "Preheat oven to 225\u00b0F. Heat 1 Tbsp. oil in a large Dutch oven or wide heavy pot over medium-high. Season oxtails generously with salt and pepper. Cook half of oxtails until browned all over, 8\u201312 minutes; transfer to a platter. Add 1 Tbsp. oil to pot; cook remaining oxtails. Pour off all but 3 Tbsp. fat from pot. (If pot is scorched, clean and start with 3 Tbsp. fresh oil.)",
      "Return pot to medium-high heat. Cook chopped onion, carrots, celery, and mushrooms, stirring often, until lightly browned and very soft, 12\u201315 minutes. Add wine; cook, scraping up any browned bits, until almost completely evaporated, about 5 minutes. Add 2 quarts water and reserved sachet. Bring to a vigorous boil; cook 1 minute. Return oxtails to pot (add water if needed to just cover). Reduce heat so liquid is simmering gently, cover, and transfer to oven. Braise, checking every 2 hours and adding more water if needed to keep oxtails barely submerged, until meat is just about falling off the bone, 6\u20138 hours. Let cool. Skim off fat; discard. (Or, ideally, chill overnight and scrape off fat before proceeding.)",
      "Remove oxtails from pot; pull meat from bones. Discard bones (or save some meaty bones for serving). Strain braising liquid into a large bowl. You should have 6\u20138 cups; simmer to reduce further or add water if needed. Discard solids.",
      "Clean pot and heat remaining 2 Tbsp. oil over medium. Cook sliced onion, garlic, and garlic chives, stirring often, until onion is translucent, about 5 minutes. Add bok choy, eggplant, taro (if using), and long beans; cook, stirring often, until just beginning to soften, about 5 minutes. Add braising liquid and bring to a simmer; season with salt. Cook until vegetables are halfway tender, 6\u20138 minutes. Stir in peanut butter to dissolve, then add meat. Cook just until meat is heated through, vegetables are tender, and flavors have melded, about 5 minutes. Season with more salt if needed.",
      "Divide kare-kare among bowls; top with peanuts and red chile. Serve with shrimp paste."
    ],
    "image": "images/kare-kare-with-beans-baby-bok-choy-and-eggplant.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 8.23
  },
  {
    "title": "Spicy Tofu With Pickled Shiitake Mushrooms",
    "ingredients": [
      "6 ounces shiitake mushrooms, stems removed, caps thinly sliced",
      "1/3 cup sugar",
      "1/2 cup plus 5 teaspoons soy sauce",
      "1/2 cup plus 5 teaspoons unseasoned rice vinegar",
      "1 1/2 cups short-grain brown or white sushi rice",
      "Kosher salt",
      "2 tablespoons dried wakame",
      "5 teaspoons spicy black bean paste",
      "1 tablespoon honey",
      "1 1/2 teaspoons toasted sesame oil",
      "1  package firm tofu, drained, patted dry, cut into 3/4-inch pieces",
      "3 scallions, thinly sliced on a diagonal",
      "1/4 cup coarsely chopped unsalted, roasted, skin-on peanuts",
      "Tobiko"
    ],
    "instructions": [
      "Bring mushrooms, sugar, 1/2 cup soy sauce, 1/2 cup vinegar, and 1 cup water to a simmer in a small saucepan over medium-high heat and cook, stirring occasionally, until sugar is dissolved, about 5 minutes. Transfer mushrooms to a medium bowl with a slotted spoon. Let brine cool, then pour over mushrooms. Cover and chill at least 1 hour.",
      "Meanwhile, rinse rice until water runs clear (this removes surface starch and keeps rice from getting gummy). Combine rice and 2 cups water in a medium saucepan, season with salt, and let sit 30 minutes.",
      "Bring rice to a boil. Reduce heat to low, cover, and cook until tender, 30\u201335 minutes (you can also use a rice cooker). Remove from heat and let sit, covered, 15 minutes; fluff with a fork. Keep warm.",
      "Soak wakame in 1/2 cup cold water in a small bowl until softened, 6\u20138 minutes. Drain and mix in a clean small bowl with black bean paste, honey, oil, remaining 5 tsp. soy sauce, and remaining 5 tsp. vinegar. Add tofu to spicy black bean shoyu, season with salt, and gently toss. Let sit 10 minutes to let flavors meld. Taste and season with more salt if needed.",
      "Divide rice among bowls and spoon tofu mixture on top of rice. Arrange drained pickled shiitake mushrooms, scallions, peanuts, and some tobiko, if using, around tofu mixture.",
      "Mushrooms can be pickled 5 days ahead. Keep chilled."
    ],
    "image": "images/spicy-tofu-with-pickled-shiitake-mushrooms.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 13.59
  },
  {
    "title": "Japanese-Style Fried Rice (Chahan)",
    "ingredients": [
      "1/4 cup diced  carrot",
      "12 medium shrimp , peeled and deveined, cut crosswise into thirds",
      "1/4 cup fresh or frozen corn kernels",
      "1/4 cup fresh or frozen shelled edamame",
      "1/4 cup diced  fresh shiitake mushrooms or rehydrated dried shiitakes",
      "2 1/4 cups low-sodium chicken stock",
      "3 tablespoons Japanese soy sauce",
      "3 tablespoons sake",
      "2 teaspoons granulated sugar",
      "1 1/2 teaspoons kosher salt",
      "3 tablespoons cornstarch",
      "2 teaspoons toasted sesame oil",
      "White or black pepper to taste",
      "1/4 cup vegetable oil",
      "4 large eggs, lightly beaten",
      "6 packed cups cooked short-grain white rice, preferably 1 or 2 days old",
      "1 generous tablespoon thinly sliced scallion greens"
    ],
    "instructions": [
      "Bring a small pot of water to a boil. Add the carrot and cook 2 minutes. Add the shrimp and cook until they\u2019re just cooked through, 1 to 2 minutes more. Drain and then return them to the pot. Add the corn, edamame, shiitakes, chicken stock, soy sauce, sake, sugar, and 1/2 teaspoon of salt. Set the pot over medium-high heat and bring to a boil. In a small container, stir together the cornstarch and 3 tablespoons of water until smooth. Gradually add the cornstarch mixture to the pot, stirring constantly. Let the stock mixture come to a boil again and cook just until slightly thickened, about 3 minutes. Take the pot off the heat and stir in the sesame oil and pepper to taste; keep warm, covered.",
      "Heat the vegetable oil in a large skillet over medium-high heat until it shimmers. Add the eggs and cook, stirring constantly, until they\u2019re barely cooked, about 30 seconds. Add the rice and cook, stirring often and breaking up the clumps but making sure not to smash the grains, until the rice is heated through and the egg has browned slightly, about 4 minutes. Season with about 1 teaspoon of the salt and pepper to taste.",
      "Divide the fried rice among 4 small bowls and firmly press down on the rice to pack it into the bowls. Overturn the bowls onto 4 large shallow bowls. Remove the bowls to reveal the mounds of rice and pour the sauce over each one. Top with the scallions and serve."
    ],
    "image": "images/japanese-style-fried-rice-chahan.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 10.35
  },
  {
    "title": "Stuffing Fried Rice",
    "ingredients": [
      "4 cups cooled cooked short-grain white rice",
      "3 tablespoons vegetable oil, divided",
      "1 large egg",
      "1/4 cup sliced garlic chives or regular chives, plus more",
      "1/2 teaspoon ground coriander, plus more",
      "2 tablespoons  mushroom soy sauce or 1 tablespoon regular soy sauce",
      "8 cups  cubes stuffing",
      "1 bunch small Tuscan kale, ribs and stems removed, leaves torn",
      "1  package honshimeji or oyster mushrooms",
      "torn into bite-size pieces"
    ],
    "instructions": [
      "Break rice apart with your hands or a spoon so grains are individual and not in clumps. Heat 1 Tbsp. oil in a large nonstick skillet over medium-high. Add egg and cook, breaking up with chopsticks or a rubber spatula, just until it is in small clumps and mostly set, about 1 minute. Add rice, toss to distribute egg, and cook, undisturbed, drizzling 1 Tbsp. oil around edge of pan, until rice begins to crisp, about 3 minutes.",
      "Add 1/4 cup chives and 1/2 tsp. coriander to rice and cook, tossing occasionally, until rice is heated through and crisp in spots, about 4 minutes. Add mushroom soy sauce and toss to combine; taste and adjust seasoning with more soy sauce if needed. Transfer fried rice to a plate.",
      "Heat remaining 1 Tbsp. oil in same skillet over medium. Cook stuffing, turning occasionally, until golden brown all over, about 5 minutes. Add kale and mushrooms and cook, tossing gently, just until vegetables are softened, about 5 minutes. Return fried rice to skillet and toss to combine. Serve topped with more chives and coriander.",
      "Rice can be cooked (but not fried) 3 days ahead. Let cool; cover and chill."
    ],
    "image": "images/stuffing-fried-rice.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 13.11
  },
  {
    "title": "Weeknight Mapo Tofu with Ground Pork",
    "ingredients": [
      "2 tablespoons vegetable oil",
      "8 ounces ground pork",
      "1 jalape\u00f1o, thinly sliced",
      "4 garlic cloves, sliced",
      "1  piece ginger, peeled, finely chopped",
      "4 scallions, chopped, plus more",
      "1 tablespoon tomato paste",
      "1 teaspoon ground Sichuan peppercorns or freshly ground black pepper",
      "2 cups low-sodium chicken broth",
      "3 tablespoons Chinese black bean garlic sauce",
      "1 tablespoon cornstarch",
      "1 pound silken tofu, drained, cut into 1-inch pieces",
      "Torn basil leaves and steamed white rice"
    ],
    "instructions": [
      "Heat oil in a small heavy pot over medium-high. Add ground pork and cook undisturbed until very well browned, about 5 minutes. Break pork up into small pieces and continue to cook, stirring occasionally, until browned all over, about 3 minutes longer. Add jalape\u00f1o, garlic, ginger, and 4 scallions and cook, stirring often, until softened and very fragrant, about 3 minutes. Add tomato paste and Sichuan peppercorns and cook, stirring constantly, until paste is slightly darkened in color, about 1 minute. Add broth and black bean garlic sauce and bring to a simmer. Mix cornstarch and 1 Tbsp. water in a small bowl to form a slurry, then stir into broth. Return to a simmer and cook just until slightly thickened, about 1 minute. Add tofu, cover pot, and let simmer gently until tofu is heated through (do not stir or tofu will break apart).",
      "Divide mapo dofu into bowls and top with basil and more chopped scallion. Serve with rice."
    ],
    "image": "images/weeknight-mapo-tofu-with-ground-pork.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 6.15
  },
  {
    "title": "Turkey Congee With Crispy Shiitake Mushrooms",
    "ingredients": [
      "1  turkey carcass",
      "1 medium onion, unpeeled, quartered",
      "1  piece ginger, peeled, thinly sliced",
      "1  piece cinnamon, whacked into pieces",
      "1 star anise pod",
      "1/2 cup long-grain rice, rinsed well",
      "Kosher salt",
      "3 tablespoons vegetable oil",
      "6 ounces shiitake mushrooms, stems removed, thinly sliced",
      "1 tablespoon soy sauce",
      "Freshly ground black pepper",
      "Cilantro leaves with tender stems and chili oil"
    ],
    "instructions": [
      "Bring turkey, onion, ginger, cinnamon, star anise, and 14 cups cold water to a boil in a large heavy pot. Reduce heat and simmer gently, turning turkey over halfway through, until liquid is reduced to 8 cups, 50\u201365 minutes. Discard carcass; strain stock through a fine-mesh sieve into a medium saucepan.",
      "Add rice to stock and bring to a boil. Reduce heat and simmer, stirring occasionally, until soup begins to thicken, 35\u201345 minutes (make sure to stir the bottom of pot to prevent rice from sticking). Continue to cook, stirring constantly, until rice begins to break into smaller pieces and mixture resembles the consistency of oatmeal, 10\u201315 minutes longer; season congee with salt.",
      "Meanwhile, heat oil in a large nonstick skillet over medium-high. Cook mushrooms, tossing occasionally, until browned and crisp, 6\u20138 minutes. Remove from heat and add soy sauce; season generously with pepper.",
      "Divide congee among bowls. Top with crispy mushrooms and cilantro and drizzle with chili oil."
    ],
    "image": "images/turkey-congee-with-crispy-shiitake-mushrooms.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 11.36
  },
  {
    "title": "Quick Pork Ramen With Carrots, Zucchini, and Bok Choy",
    "ingredients": [
      "1 ounce dried mushrooms",
      "Kosher salt",
      "16 ounces fresh or 10 ounces dried ramen noodles",
      "2 small heads baby bok choy, quartered lengthwise",
      "1 tablespoon toasted sesame oil, plus more",
      "1 pound ground pork",
      "1/2 teaspoon freshly ground black pepper",
      "4 scallions, thinly sliced, divided",
      "3 tablespoons white or yellow miso paste",
      "6 cups homemade chicken stock or low-sodium chicken broth",
      "2 tablespoons low-sodium soy sauce",
      "2 teaspoons Sriracha, plus more",
      "1 medium carrot",
      "1 medium zucchini",
      "4 large soft-boiled eggs",
      "1/4 cup coarsely chopped basil"
    ],
    "instructions": [
      "Place mushrooms in a medium bowl and cover with hot water. Let sit until ready to use.",
      "Pour 10 cups hot water into a medium pot. Season generously with salt, cover, and bring to a boil. Cook noodles according to package directions, adding bok choy during the last minute of cooking. Drain noodles and bok choy; rinse with cold water.",
      "Meanwhile, heat 1 Tbsp. oil in a large pot over high. Add pork, 3/4 tsp. salt, and 1/2 tsp. pepper and cook, stirring and breaking up meat slightly, 3 minutes. Add half of the scallions and cook, stirring occasionally, until pork is just cooked through, about 3 minutes more. Add miso and cook, stirring, until incorporated, about 30 seconds. Stir in broth, soy sauce, and 2 tsp. Sriracha.",
      "Drain and slice mushrooms; add to pot. Cover and bring to a low boil. Uncover pot, reduce heat to medium, and simmer 5 minutes. Taste and adjust seasonings, if necessary.",
      "Meanwhile, using a mandoline or the large holes on a box grater, coarsely grate carrot and zucchini until you have 1 1/2 cups each. Divide noodles, bok choy, carrot, and zucchini among bowls. Top evenly with soup, eggs, if using, basil, and remaining scallions. Serve with additional sesame oil and Sriracha for drizzling alongside."
    ],
    "image": "images/quick-pork-ramen-with-carrots-zucchini-and-bok-choy.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 13.47
  },
  {
    "title": "Sumo Stew (Chanko Nabe) with Shrimp, Meatballs, and Bok Choy",
    "ingredients": [
      "8 ounces udon noodles",
      "3/4 teaspoon kosher salt, divided, plus more",
      "3 tablespoons vegetable oil, divided",
      "4\u20136 large eggs",
      "8 ounces sliced maitake or shiitake mushrooms",
      "2 garlic cloves, finely chopped",
      "1 tablespoon finely chopped ginger",
      "2 teaspoons white miso paste",
      "4 cups homemade or store-bought low-sodium chicken broth",
      "1  piece dried kombu",
      "1 tablespoon low-sodium soy sauce",
      "Chicken Meatballs with Ginger and Miso",
      "1 medium carrot, sliced into 1/4-inch coins",
      "3/4 pound baby bok choy, trimmed, cut crosswise in 2-inch pieces",
      "1 tablespoon rice wine vinegar",
      "8 ounces skinless flaky white fish , cut into 3x3/4-inch pieces",
      "8 ounces peeled, deveined, tail-on large shrimp",
      "2 tablespoons sliced scallions"
    ],
    "instructions": [
      "Cook udon in a medium pot of boiling salted water according to package directions. Transfer udon to a colander to drain; reserve cooking liquid in pot. Transfer udon to a large bowl and toss with 1 Tbsp. oil.",
      "If using eggs, cover pot and return cooking liquid to a boil. Add eggs and cook at a low boil until soft-boiled, about 6 minutes. Transfer eggs to a large bowl of ice water to cool, then peel and reserve.",
      "Heat remaining 2 Tbsp. oil in a large pot over medium-high. Saut\u00e9 mushrooms and 1/4 tsp. salt until lightly browned and moisture releases, about 5 minutes. Stir in garlic and ginger; cook until fragrant, 30\u201360 seconds. Stir in miso, then add chicken broth. Stir in kombu, if using, soy sauce, and remaining 1/2 tsp. salt. Cover, bring to a simmer, and cook 10 minutes.",
      "Add meatballs and carrots. Cover and continue to simmer until meatballs are just cooked through, about 10 minutes. Remove kombu from broth and discard.",
      "Stir in bok choy and vinegar, if using. Place fish on top of stew, then cover and cook 3 minutes. Gently fold in shrimp (try to avoid breaking up fish) and cook, covered, until shrimp is pink and fish is opaque and cooked through, about 3 minutes more.",
      "Divide stew among bowls. Slice eggs in half lengthwise and top each bowl with 2 halves. Sprinkle with scallions. Serve udon in large bowl for sharing alongside."
    ],
    "image": "images/sumo-stew-chanko-nabe-with-shrimp-meatballs-and-bok-choy.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 14.87
  },
  {
    "title": "Cantonese Crispy Pork Belly",
    "ingredients": [
      "1.6 lb pork belly",
      "1 tbsp salt",
      "1 tsp white rice vinegar",
      "0.50 cup water (for roasting pan)",
      "0.50 tsp five-spice powder",
      "0.33 tsp black pepper",
      "0.25 tsp white pepper",
      "1 tsp garlic salt",
      "0.50 tsp salt (for rub)",
      "2 tsp ground bean sauce",
      "1 tsp sugar"
    ],
    "instructions": [
      "Parboil pork belly: Boil water and cook pork belly skin-side down for 1 min, then flip for 30–45 seconds. Transfer to cold water.",
      "Clean the skin with knife scraping, pat dry, and poke many holes in the skin using toothpicks or a fork.",
      "Score the meat side deeply in a crosshatch pattern.",
      "Apply dry rub (five-spice, garlic salt, black and white pepper, salt) into the meat crevices. Mix bean sauce and sugar and apply over the dry rub (not on skin).",
      "Wrap pork belly with foil into a tray, keeping skin exposed. Rub skin with 1 tbsp salt, let sit 5 min, then scrape off moisture. Rub 1 tsp rice vinegar on skin.",
      "Refrigerate overnight uncovered for 10–12 hours to dry skin.",
      "Preheat oven to 375°F (190°C). Place pork on rack in pan with 0.5 cup water. Roast for 25 minutes.",
      "Increase temperature to 425°F (218°C) and roast another 30–35 minutes until skin crisps.",
      "Let pork rest for 1 hour before cutting. Slice and serve crispy-side up."
    ],
    "image": "images/dads-siu-yuk.jpg",
    "estimatedCookTimeMins": 810,
    "estimatedCostUSD": 12.00
  },
  {
    "title": "Spicy Tofu Crumbles",
    "ingredients": [
      "1 pound extra-firm tofu, sliced 3/4 inch thick",
      "2 tablespoons vegetable oil",
      "1 Fresno chile, thinly sliced",
      "3 tablespoons soy sauce",
      "2 tablespoons mirin",
      "2 tablespoons Sriracha or gochujang",
      "2 tablespoons unseasoned rice vinegar",
      "2 teaspoons toasted sesame oil",
      "1 teaspoon finely grated fresh ginger"
    ],
    "instructions": [
      "Arrange tofu slices in a single layer on a paper towel\u2013lined plate and cover with a few more paper towels. Press down firmly on tofu with your hands to expel excess liquid.",
      "Heat vegetable oil in a large skillet, preferably cast iron. Cook tofu, turning once, until browned, 7\u201310 minutes total. Transfer to a plate and let cool.",
      "Meanwhile, whisk chile, soy sauce, mirin, Sriracha, vinegar, sesame oil, and ginger in a medium bowl to combine.",
      "Crumble tofu into small pieces and add to bowl; toss to combine.",
      "Crumbles can be made 5 days ahead. Cover and chill."
    ],
    "image": "images/spicy-tofu-crumbles.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 10.88
  },
  {
    "title": "Ramen Noodle Bowl with Escarole and Spicy Tofu Crumbles",
    "ingredients": [
      "2  servings fresh or dried ramen noodles",
      "4 cups torn escarole",
      "3 tablespoons Roasted Garlic Chili Sauce",
      "Kosher salt",
      "4 Pickled Scallions",
      "Spicy Tofu Crumbles",
      "thinly sliced radish",
      "and chopped peanuts"
    ],
    "instructions": [
      "Cook noodles according to package directions. During the last minute of cooking, add escarole. Drain and rinse under cold water.",
      "Toss noodles, escarole, and chili sauce in a large bowl until coated; season with salt. Divide noodles between bowls. Slice scallions into 1\" pieces and place on top of noodles along with some tofu crumbles, radishes, and peanuts."
    ],
    "image": "images/ramen-noodle-bowl-with-escarole-and-spicy-tofu-crumbles.jpg",
    "estimatedCookTimeMins": 60,
    "estimatedCostUSD": 6.21
  },
  {
    "title": "Shrimp Un-Fried Rice",
    "ingredients": [
      "1 tablespoon oil",
      "4 large eggs, whisked",
      "1 red bell pepper, diced",
      "1/2 cup shelled edamame",
      "1 garlic clove, minced",
      "1/2 pound shrimp, peeled and deveined",
      "1/2 teaspoon salt",
      "4 cups cooked brown rice",
      "2 tablespoons low sodium soy sauce",
      "1 tablespoon sesame seeds",
      "1 tablespoon diced scallions"
    ],
    "instructions": [
      "1. Heat 1 teaspoon of the oil in a skillet over medium heat. Add the whisked eggs and cook for 1 minute stirring to make scrambled eggs, then remove to a plate.",
      "2. Heat the remaining 2 teaspoons oil, add the red bell peppers and cook 3\u20134 minutes, until soft. Add the edamame and garlic and cook 1 more minute.",
      "3. Add the shrimp and salt and cook 3 minutes, until they are bright pink.",
      "4. Add the cooked eggs, rice, soy sauce and sesame seeds and cook 2 minutes, just until heated through.",
      "5. Top with the scallions and serve."
    ],
    "image": "images/shrimp-un-fried-rice-56389476.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 12.06
  },
  {
    "title": "Apple Bok Choy Salad",
    "ingredients": [
      "6 cups finely chopped bok choy",
      "1 large apple, shredded",
      "1 large carrot, shredded",
      "1/2 cup chopped red onion",
      "1/2 cup unsweetened soy, hemp, or almond milk",
      "1/2 cup raw cashews or 1/4 cup raw cashew butter",
      "1/4 cup balsamic vinegar",
      "1/4 cup raisins",
      "1 teaspoon Dijon mustard"
    ],
    "instructions": [
      "Combine bok choy, apple, carrot, and chopped onion in a large bowl.",
      "Blend soy milk, cashews, vinegar, raisins, and mustard in a food processor or high-powered blender. Add desired amount to chopped vegetables."
    ],
    "image": "images/apple-bok-choy-salad-56389418.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 6.25
  },
  {
    "title": "Roasted Hot-Honey Shrimp with Bok Choy and Kimchi Rice",
    "ingredients": [
      "1 1/2 pounds baby bok choy , halved lengthwise",
      "3 tablespoons vegetable oil, such as grapeseed, divided",
      "1 1/2 teaspoons kosher salt, divided",
      "1/2 teaspoon red-pepper flakes",
      "2 tablespoons honey",
      "1 tablespoon low-sodium soy sauce",
      "1 1/2 pounds large tail-on shrimp, peeled and deveined",
      "1 tablespoon toasted sesame oil",
      "3/4 cup jasmine rice",
      "3/4 cup kimchi, thinly sliced",
      "1 scallion, thinly sliced",
      "1 1/2 teaspoons toasted sesame seeds",
      "4 lime wedges"
    ],
    "instructions": [
      "Preheat oven to 450\u00b0F. Arrange racks in upper and lower thirds of oven and place a rimmed baking sheet on each rack. In a medium saucepan over high heat, bring water for rice to a boil according to package directions.",
      "Meanwhile, in a medium bowl, toss bok choy with 2 tablespoons vegetable oil and 1/2 teaspoon salt and set aside. In another medium bowl, combine red-pepper flakes, honey, soy sauce, remaining 1 tablespoon vegetable oil, and 1/2 teaspoon salt. Toss shrimp in mixture to coat.",
      "Carefully remove the hot baking sheets from the oven; spread the boy choy mixture on one sheet and place on the lower rack; spread the shrimp mixture on the other sheet and place on the upper rack. Roast, tossing halfway through, until shrimp is pink and starting to caramelize (about 8 minutes) and bok choy is softened and lightly browned in spots (13 to 15 minutes).",
      "While shrimp and bok choy are roasting, add rice and 1/2 teaspoon salt to boiling water. Cover and cook according to package directions. Once cooked, fluff rice with a fork and stir in kimchi.",
      "To serve, divide kimchi rice among four wide bowls. Remove shrimp from the oven and drizzle with 1 tablespoon toasted sesame oil; toss to combine. Top rice with shrimp and bok choy. Sprinkle with sesame seeds and scallions, and serve with lime wedges."
    ],
    "image": "images/roasted-hot-honey-shrimp-with-bok-choy-and-kimchi-rice-51261050.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 9.21
  },
  {
    "title": "Sausage with Sauerkraut, Apples, and Bok Choy",
    "ingredients": [
      "1 teaspoon caraway seeds",
      "2 tablespoons plus 3 teaspoons vegetable oil, such as grapeseed, divided",
      "1 pound baby bok choy, heads trimmed and quartered lengthwise",
      "1 teaspoon kosher salt, divided",
      "1/2 teaspoon freshly ground black pepper, divided",
      "1 Honeycrisp or Gala apple, sliced into 1/4-inch wedges",
      "8 links fresh sausage , such as hot or sweet Italian sausage",
      "2 1/2 cups prepared sauerkraut, drained",
      "1/2 cup low-sodium chicken broth",
      "1 tablespoon cider vinegar",
      "1 tablespoon unsalted butter",
      "Grainy Dijon mustard"
    ],
    "instructions": [
      "In a large dry skillet over medium heat, lightly toast the caraway seeds until fragrant, 1 to 2 minutes. Scrape out and reserve seeds.",
      "Add 1 tablespoon oil to the skillet and heat over medium-high heat. Working in two to three batches, sear bok choy on all sides until lightly browned, 2 to 3 minutes per cut side. Add 1/4 teaspoon salt, 1/8 teaspoon pepper to each batch, and 1 teaspoon oil to sear each subsequent batch of bok choy.",
      "Add 1 teaspoon oil to the skillet and saut\u00e9 apples with 1/4 teaspoon salt and 1/8 teaspoon pepper until softened but still holding their shape, 5 to 7 minutes. Reserve apples.",
      "Add remaining tablespoon oil to skillet and sear sausages on all sides until golden brown, 3 to 5 minutes per side. Add toasted caraway seeds, sauerkraut, and broth. Bring to a simmer, reduce heat to medium, cover the skillet, and simmer until sausages are cooked through (150\u00b0F for pork sausages, 160\u00b0F for poultry sausages), about 10 minutes. Remove cover and fold in reserved bok choy, apples, vinegar, and butter. Cook, tossing, until some of the liquid has evaporated and the bok choy and apples are warm, 3 to 5 minutes. Taste and adjust seasoning. Serve with mustard for dipping."
    ],
    "image": "images/sausage-with-sauerkraut-apples-and-bok-choy-51254430.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 6.94
  },
  {
    "title": "Brussels Sprouts Salad with Szechuan Peppercorn and Celery",
    "ingredients": [
      "3 tablespoons vegetable oil, such as grapeseed",
      "1 tablespoon toasted sesame oil",
      "1/3 cup rice-wine vinegar",
      "1 large pinch ground white pepper",
      "1 tablespoon Szechuan peppercorns, lightly crushed",
      "Kosher salt",
      "1 1/2 pounds Brussels sprouts, trimmed",
      "3 celery stalks, thinly sliced",
      "1 serrano chile, thinly sliced",
      "1 cup cilantro"
    ],
    "instructions": [
      "In a large bowl, whisk together the oils, vinegar, white pepper, and peppercorns; season with salt. Working over the bowl, separate the Brussels sprout leaves and add them to the dressing. You may need to trim the core more as you get to the center of the sprouts. Add the celery and chile to the bowl and toss to combine. Let the salad sit about 15 minutes. Add cilantro and taste and adjust seasoning before serving."
    ],
    "image": "images/brussels-sprouts-salad-with-szechuan-peppercorn-and-celery-51253020.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 8.11
  },
  {
    "title": "Dirty Fried Rice",
    "ingredients": [
      "2 tablespoons vegetable oil, divided",
      "4 ounces chicken livers, rinsed, patted dry",
      "Kosher salt",
      "freshly ground pepper",
      "1/2 small onion, chopped",
      "1/2 celery stalk, finely chopped",
      "1/2 small poblano chile, with seeds, finely chopped",
      "1 garlic clove, finely chopped",
      "1 tablespoons finely chopped peeled ginger",
      "2 tablespoons soy sauce",
      "1 tablespoons black vinegar",
      "1 tablespoons hot sauce",
      "1 tablespoons Thai crab or shrimp paste with bean oil",
      "1/4 cup vegetable oil",
      "3 large eggs, beaten to blend",
      "3 cups cooled cooked jasmine rice",
      "4 ounces large shrimp , peeled, deveined, cut into bite-size pieces",
      "1 pickled jalapeno, sliced",
      "2 scallions, thinly sliced",
      "Old Bay seasoning",
      "MSG",
      "and chili oil"
    ],
    "instructions": [
      "Heat 1 tablespoons oil in a large skillet over medium-high heat. Season chicken livers with salt and pepper and cook until browned on the outside but still pink inside, about 1 1/2 minutes per side.",
      "Transfer to a large plate and let cool. Pulse in a food processor to a coarse paste; set chicken liver paste aside.",
      "Heat remaining 1 tablespoons oil in same skillet over medium-high heat and cook onion, celery, chile, garlic, and ginger, scraping up any browned bits, until vegetables are tender, about 2 minutes.",
      "Add soy sauce, vinegar, hot sauce, crab paste, reserved chicken liver paste, and 1/4 cup water to skillet. Reduce heat to medium and cook, stirring occasionally, until a thick dry paste forms. (You should have about 1/2 cup.)",
      "Heat oil in a large wok or skillet over high heat. Cook eggs, stirring constantly, until fluffy and just set, about 1 minute. Add rice and cook, stirring often, until rice is evenly coated and beginning to brown, about 4 minutes.",
      "Add shrimp and chicken-liver base and stir to coat. Cook, stirring often, until shrimp is cooked through, about 2 minutes.",
      "Remove from heat and stir in jalape\u00f1o.",
      "Serve fried rice topped with scallions, Old Bay seasoning, and MSG, if using, and drizzled with chili oil."
    ],
    "image": "images/dirty-fried-rice-51248620.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 11.96
  },
  {
    "title": "Sweet Potato Tempura and Steak Sandwich with Bok Choy and Miso Mayo",
    "ingredients": [
      "2 teaspoons finely grated ginger",
      "1 large clove garlic, finely grated",
      "3 tablespoons vegetable oil, divided",
      "2 tablespoons low-sodium soy sauce",
      "1 tablespoon mirin",
      "1/2 teaspoon kosher salt",
      "1/4 teaspoon black pepper",
      "10 ounces skirt steak, cut into 2 pieces",
      "2 heads baby bok choy, split in half lengthwise",
      "1 large sweet potato",
      "Vegetable oil",
      "1/2 cup all-purpose flour",
      "2 tablespoons cornstarch",
      "3/4 teaspoon kosher salt, divided",
      "1/2 cup very cold club soda",
      "1/2 teaspoon white miso paste",
      "1/4 cup mayonnaise",
      "1 teaspoon fresh lemon juice",
      "A mandoline"
    ],
    "instructions": [
      "Whisk the ginger, garlic, 1 tablespoon oil, soy sauce, mirin, salt, and pepper in a small bowl. Place the skirt steak in a resealable plastic bag and pour the marinade over. Turn to coat and let sit at room temperature 30 minutes.",
      "Remove the skirt steak from the marinade. Heat 1 tablespoon oil in a large skillet over medium-high heat. Add the steak and sear to desired doneness, about 3 minutes per side for medium rare. Let steak rest on a cutting board.",
      "Wipe out skillet and heat remaining 1 tablespoon oil. Sear the bok choy cut side down over medium-high heat until browned, 2 to 3 minutes. Flip the bok choy over, add 1/4 cup water, cover, and cook 2 minutes more. Remove bok choy and roughly chop.",
      "Using a mandoline, carefully slice the sweet potato lengthwise into 1/8-inch-thick planks. Select 4 planks from the center of the sweet potato that are similar in size. Meanwhile, fill a large Dutch oven or cast-iron skillet with oil to a depth of 1 1/2 inches and heat carefully to 350\u00b0F. Sift the flour, cornstarch, and 1/2 teaspoon salt into a large bowl. Gently incorporate the club soda into the flour mixture; do not overmix. Coat 2 slices sweet potato in the batter and fry, turning occasionally, until golden brown, about 5 to 6 minutes. Repeat with remaining 2 slices sweet potato. Sprinkle with remaining 1/4 teaspoon salt and drain on a cooling rack placed over a sheet tray.",
      "Assemble the sandwich: Mix together the miso, mayonnaise, and lemon juice in a small bowl. Thinly slice the skirt steak against the grain. Place 1 fried sweet potato slice on a plate and layer with half the bok choy, half the skirt steak and 1 tablespoon of miso mayo. Top with another sweet potato slice to form a sandwich. Repeat with remaining sweet potato slices to make a second sandwich.",
      "The leftover miso mayo can be refrigerated for up to a week."
    ],
    "image": "images/sweet-potato-tempura-and-steak-sandwich-with-bok-choy-and-miso-mayo-51234910.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 10.69
  },
  {
    "title": "Grilled Baby Bok Choy with Miso Butter",
    "ingredients": [
      "1 1/2 pounds baby bok choy  or Shanghai bok choy",
      "3 tablespoons unsalted butter, at room temperature",
      "3 tablespoons white or yellow miso paste",
      "2 tablespoons olive oil",
      "1 tablespoon freshly squeezed lemon juice",
      "Pinch of kosher salt",
      "Freshly ground black pepper"
    ],
    "instructions": [
      "Cut the leaves away from the bok choy stalks. Halve the stalks lengthwise. Rinse the leaves and stalks well, then pat dry to remove any excess water. In a small bowl, mix together the butter and miso with a fork until well combined. Set aside.",
      "Prepare a medium-hot fire in a charcoal or gas grill. Put the bok choy stalks in a large bowl. Using your hands (or a fork), coat the bok choy with the miso butter. Arrange the bok choy, cut side down, on the grill grate. (If you have a grill screen, set it on top of the grate before adding the bok choy, to keep the stalks from falling through the gaps.) Close the lid and grill for about 5 minutes, until golden brown on the underside. Turn the bok choy with tongs, re-cover, and grill for 5 to 6 minutes more, until golden and crisp-tender.",
      "While the stalks are cooking, stack the bok choy leaves and roll them up lengthwise into a cigar shape. Slice the leaves crosswise into thin shreds. Make a bed of the shredded leaves on a serving platter. Drizzle the leaves with the oil and lemon juice, sprinkle with the salt and 1/4 teaspoon pepper, and toss to combine.",
      "Put the grilled bok choy on the dressed salad to wilt the leaves; sprinkle additional pepper over the bok choy. Serve immediately."
    ],
    "image": "images/grilled-baby-bok-choy-with-miso-butter-51227010.jpg",
    "estimatedCookTimeMins": 41,
    "estimatedCostUSD": 6.9
  },
  {
    "title": "Crispy Spring Rolls with Spicy Tofu, Vegetables, and Toasted Nuts",
    "ingredients": [
      "2 tablespoons olive oil or canola oil",
      "2 teaspoons minced fresh ginger",
      "2 garlic cloves, minced",
      "One 8-ounce package Thai- or teriyaki-flavored tofu, cut into 1/2-inch cubes",
      "1 cup  finely chopped fresh oyster mushrooms",
      "1/2 cup finely diced carrot",
      "1/2 cup finely diced water chestnuts",
      "2 tablespoons tamari sauce",
      "3/4 cup toasted peanuts or walnuts , coarsely chopped, 1/4 cup reserved for garnish",
      "2 green onions, minced",
      "1 teaspoon sesame oil",
      "Twelve 8-inch round dried rice paper wrappers",
      "1 head Boston or Bibb lettuce, leaves washed and separated",
      "Lime-Soy-Ginger Sauce"
    ],
    "instructions": [
      "1. Heat a wok or nonstick skillet over medium heat. Add the olive oil and swirl to coat. Add the ginger and garlic and stir-fry until fragrant, about 30 seconds. Add the tofu and mushrooms and stir-fry for 2 minutes. Add the carrot and water chestnuts and stir-fry until heated through, about 30 seconds.",
      "2. Add the tamari sauce. Cook, stirring occasionally, until the vegetables are heated through, about 2 minutes. Stir in the nuts, green onions, and sesame oil and toss to combine. Remove from the heat.",
      "3. Fill a medium bowl with warm water. Dip one of the wrappers in the water for 15 seconds, or until softened. Carefully transfer to a dry work surface.",
      "4. Arrange 2 to 3 tablespoons of the filling in an even horizontal mound just below the center of the wrapper. Roll up the rice paper to form a tight cylinder, folding in the sides about halfway. Assemble the remaining spring rolls in the same manner. Cover the finished rolls with a damp cloth to prevent them from drying out.",
      "5. Preheat the broiler. Lightly coat a large nonstick baking sheet with cooking spray. Arrange the spring rolls in a single layer on the baking sheet, leaving a little space between them. Lightly coat the rolls with cooking spray.",
      "6. Broil the rolls until lightly browned and crisp, 10 to 13 minutes. Using tongs or a spatula, turn the rolls over and continue to broil for another 8 to 10 minutes.",
      "7. Serve each roll wrapped in a lettuce leaf garnished with nuts, and accompanied by the Lime-Soy-Ginger Sauce."
    ],
    "image": "images/crispy-spring-rolls-with-spicy-tofu-vegetables-and-toasted-nuts-51219810.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 5.27
  },
  {
    "title": "Poached Seckel Pear with Pomegranate, Cabrales Cheese, and Szechuan Pepper Ice Cream",
    "ingredients": [
      "3 cups  whole milk",
      "1 cup plus 1 Tbsp  heavy cream",
      "3 Tbsp plus 1 tsp  Szechuan peppercorns",
      "8 1/2 large  egg yolks",
      "3/4 cup plus 2 Tbsp  granulated sugar",
      "4 cups  pomegranate juice",
      "3 to 5 turns freshly ground black pepper",
      "8 Seckel pears, peeled",
      "2 cups  poaching liquid from Poached Pears with Pomegranate",
      "8 3/4 Tbsp  unsalted butter",
      "1/2 cup plus 2 Tbsp  granulated sugar",
      "1 1/3 cups  almond flour",
      "2 large  eggs",
      "1 Tbsp plus 1 tsp  all-purpose flour",
      "4 oz  Cabrales cheese, cut into eight 1/2-inch-thick slices",
      "ice cream machine; pepper mill; 9-inch square baking pan; 2-inch-long by 1-inchwide diamond-shaped pastry cutter"
    ],
    "instructions": [
      "1. In a medium saucepan, combine the milk, cream, and peppercorns and cook over medium-high heat until the mixture comes to a gentle boil. Remove the pan from the heat, cover, and allow to infuse for 20 minutes.",
      "2. Strain the milk mixture and return it to the saucepan. Reheat until the mixture just begins to boil. Remove from the heat.",
      "3. In a medium bowl, whisk together the egg yolks and sugar vigorously until pale. Whisk about 1/2 cup of the hot milk mixture into the yolks, then return this mixture to the saucepan with the remaining milk mixture and cook over medium heat, stirring constantly with a wooden spoon, until it thickens enough to coat the back of the spoon and reaches 175\u00b0F (79\u00b0C) on an instant-read thermometer; do not let the mixture boil, or the egg yolks will curdle. Remove the pot from the heat. Pass the ice cream base through a fine-mesh sieve into a bowl. Set the bowl in an ice bath and stir frequently until cold. Cover the bowl and refrigerate the ice cream base for at least 4 hours.",
      "4. Process the base in an ice cream machine according to the manufacturer's instructions (be careful not to overchurn the ice cream or it will become grainy). Transfer the ice cream to an airtight container and freeze until ready to serve.",
      "1. In a medium saucepan, bring the pomegranate juice and black pepper to a boil over medium-high heat. Add the pears and reduce the heat to medium-low. Poach the pears in the simmering juice until tender, about 15 minutes. Cool completely at room temperature.",
      "2. Transfer the pears, still in the liquid, to an airtight container and refrigerate until ready to serve.",
      "Pour the poaching liquid in a small saucepan and bring to a boil over medium-high heat. Continue to boil the liquid until it has reduced by half, about 15 minutes. Pass the syrup through a fine-mesh sieve into a bowl and cool.",
      "1. Preheat the oven to 375\u00b0F (191\u00b0C). Coat the bottom and sides of a 9-inch square baking pan with nonstick cooking spray.",
      "2. In the bowl of a stand mixer fitted with the paddle attachment, mix together the butter and sugar on medium speed until creamy and well blended, about 2 minutes. Add the almond flour and mix until blended. Reduce the mixer speed to medium-low and add the eggs, one at a time, mixing well after each addition and scraping down the sides of the bowl as necessary. Add the flour and mix until blended. Scrape the almond mixture into the prepared pan, smoothing it into an even layer. Bake for 18 to 22 minutes, or until golden brown. Place the pan on a wire rack and cool completely.",
      "3. Using a 2-inch-long by 1-inch-wide diamond-shaped pastry cutter, cut out 8 diamonds of baked almond cream. Store in an airtight container until ready to use.",
      "Cut each Poached Pear with Pomegranate in half crosswise and remove the cores from the bottom halves. Place each pear bottom standing up on a plate and top with a slice of Cabrales cheese. Replace the pear tops. Glaze the pears with some of the Pomegranate Sauce, letting some of the sauce drip onto the plates. Place a Baked Almond Diamond on each plate and top with a scoop of Szechuan Pepper Ice Cream."
    ],
    "image": "images/poached-seckel-pear-with-pomegranate-cabrales-cheese-and-szechuan-pepper-ice-cream-51202610.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 13.53
  },
  {
    "title": "Miso-Tofu Ranch Dip",
    "ingredients": [
      "4 ounces drained soft  tofu",
      "3 tablespoons white miso",
      "1 tablespoon fresh lemon juice",
      "2 teaspoons Sherry vinegar or white wine vinegar",
      "1/2 teaspoons garlic powder",
      "1/2 teaspoons onion powder",
      "1/4 teaspoons freshly ground black pepper",
      "1/2 cup sour cream",
      "2 tablespoons chopped fresh chives",
      "1 tablespoon chopped fresh flat-leaf parsley",
      "Raw vegetables"
    ],
    "instructions": [
      "Pur\u00e9e 4 ounces drained soft (silken) tofu, 3 tablespoons white miso (fermented soybean paste), 1 tablespoon fresh lemon juice, 2 teaspoons Sherry vinegar or white wine vinegar, 1/2 teaspoons garlic powder, 1/2 teaspoons onion powder, and 1/4 teaspoons freshly ground black pepper in a blender. Transfer to a medium bowl; mix in 1/2 cup sour cream, 2 tablespoons chopped fresh chives, and 1 tablespoon chopped fresh flat-leaf parsley. Top dip with more chives and serve with raw vegetables for dipping.",
      "DO AHEAD: Dip can be made 3 days ahead. Cover and chill."
    ],
    "image": "images/miso-tofu-ranch-dip-51193020.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 14.34
  },
  {
    "title": "Broccoli Stir Fry",
    "ingredients": [
      "1 lb broccoli (about 2 heads)",
      "1 oz garlic (4–5 cloves)",
      "0.5 oz ginger",
      "2 tbsp oil (divided)",
      "1 tsp cooking wine (for wok)",
      "1 tsp salt (for soaking broccoli)",
      "1 tsp salt (for blanching)",
      "1 tsp oil (for blanching)",
      "Ice water (for blanching)",
      "Hot water (to submerge broccoli)",
      "0.5 tsp salt (for sauce)",
      "1 tsp sugar",
      "1 tbsp cooking wine (for sauce)",
      "1 tsp chicken bouillon powder",
      "2 tsp cornstarch",
      "2 tbsp water",
      "1 tsp oyster sauce"
    ],
    "instructions": [
      "Soak broccoli in salted water for 3–5 minutes, then trim and cut florets and stems into uniform pieces.",
      "Smash, peel, and mince garlic and ginger.",
      "Mix sauce ingredients in a small bowl: salt, sugar, cooking wine, bouillon powder, cornstarch, water, and oyster sauce.",
      "Boil water with salt and oil. Blanch broccoli for ~3 minutes until vibrant, then shock in ice bath for 1 minute and drain.",
      "Heat wok, add 1 tbsp oil, stir fry garlic for 15–20 sec, then ginger for 20–30 sec.",
      "Add broccoli, stir fry for 40–50 sec on high heat. Splash in 1 tsp cooking wine.",
      "Add sauce a little at a time and stir fry for 1.5 minutes.",
      "Add remaining 1 tbsp oil, stir fry for 15–20 sec, turn off heat and plate."
    ],
    "image": "images/dads-broccoli-stir-fry.jpg",
    "estimatedCookTimeMins": 20,
    "estimatedCostUSD": 5.00
  },
  {
    "title": "Teriyaki Fried Rice",
    "ingredients": [
      "2 teaspoons toasted sesame oil",
      "2 eggs, lightly beaten",
      "2 green onions, white and light green parts only, thinly sliced",
      "1 1/2 cups leftover cooked rice",
      "1/2 cup cooked shelled edamame",
      "1 tablespoon teriyaki sauce"
    ],
    "instructions": [
      "1. In a medium skillet, heat the sesame oil over medium heat. Add the eggs and scramble until just cooked. Add the green onions, cooked rice, edamame, and teriyaki sauce, and cook, stirring often, until everything is warmed through, about 2 minutes.",
      "2. Divide the fried rice between two or three thermoses."
    ],
    "image": "images/teriyaki-fried-rice-51188810.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 14.03
  },
  {
    "title": "Edamame Fried Rice",
    "ingredients": [
      "Olive oil cooking spray",
      "2 eggs, beaten",
      "2 tablespoons light olive oil, divided",
      "8 ounces shiitake mushroom caps, thinly sliced",
      "1 red bell pepper, seeded and chopped",
      "4 cups broccoli florets",
      "4 ounces kale, chopped",
      "4 garlic cloves, minced",
      "1 2-inch piece fresh gingerroot, minced",
      "1 cup uncooked short-grain brown rice, cooked according to the package instructions",
      "1 1/2 cups frozen, shelled edamame, defrosted",
      "3 tablespoons reduced-sodium soy sauce",
      "2 scallions",
      "thinly sliced"
    ],
    "instructions": [
      "Heat a large skillet over high heat. Remove from the heat and coat with cooking spray. Return the skillet to the burner and add the eggs, turning the pan to coat it with a thin layer of eggs. Cook 30 seconds, loosening the inside edges of the eggs with a spatula. Gently flip the eggs over and cook 10 to 15 seconds. Transfer the eggs to a cutting board.",
      "Heat the same skillet over medium heat. Add half the oil. Add the mushrooms, bell pepper, broccoli, and kale. Cook 4 to 5 minutes, turning often, until the vegetables soften. Add the garlic and ginger. Cook 1 minute, until it becomes fragrant.",
      "Increase the heat to high. Push the vegetables to one side of the skillet and add the remaining olive oil, and the rice. Cook 1 to 2 minutes, turning the rice over with a metal spatula and scraping up bits that stick to the pan. Add the edamame and soy sauce and remove from the heat. Stir two or three times to mix in the soy sauce.",
      "Thinly slice the eggs. Top the rice mixture with the eggs and scallions and serve."
    ],
    "image": "images/edamame-fried-rice-51186610.jpg",
    "estimatedCookTimeMins": 60,
    "estimatedCostUSD": 8.29
  },
  {
    "title": "Marinated Tofu",
    "ingredients": [
      "1 pound extra-firm tofu",
      "2 tablespoons low-sodium soy sauce",
      "1 tablespoon orange juice",
      "2 teaspoons sesame oil",
      "1 teaspoon canola oil",
      "Cooking spray"
    ],
    "instructions": [
      "1. Slice the tofu into 1/2-inch-thick slabs and lay the slices on top of paper towels. Use more paper towels (you'll probably need three) and firmly pat the tofu in order to remove as much of the water as possible. Cut the tofu into 3/4-inch cubes.",
      "2. In a medium bowl, combine the soy sauce, orange juice, sesame oil, and canola oil. Add the tofu cubes and toss gently. Cover and let the tofu marinate in the refrigerator for at least 30 minutes, and up to 24 hours.",
      "3. Preheat the oven to 450\u00b0F. Spray a large shallow baking dish with cooking spray. Place the tofu in a single layer in the baking dish. Bake for 25 to 30 minutes, or until golden brown."
    ],
    "image": "images/marinated-tofu-51181210.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 8.25
  },
  {
    "title": "Stir-Fried Sesame Baby Bok Choy",
    "ingredients": [
      "1 pound baby bok choy",
      "1 1/2 tablespoons soy sauce",
      "1 tablespoon Chinese rice wine or dry sherry",
      "1/2 teaspoon sugar",
      "1 tablespoon peanut or vegetable oil",
      "1 garlic clove, minced",
      "1 1-inch piece fresh ginger, peeled and minced",
      "2 teaspoons sesame oil"
    ],
    "instructions": [
      "1. Trim and discard the rough bottoms from the baby bok choy. Separate the leaves, rinse, and pat dry.",
      "2. In a small bowl, combine the soy sauce, rice wine, and sugar. Set aside.",
      "3. Heat a wok or large skillet over medium-high heat until a bead of water sizzles and evaporates on contact. Add the peanut oil and swirl to coat the bottom and sides. Add the garlic and ginger and stir-fry until aromatic, 20 to 30 seconds. Add the bok choy and stir-fry for about 2 minutes, until crisp-tender. Add the soy sauce mixture and cook for another 30 seconds. Turn off the heat, and drizzle with sesame oil. Transfer to a serving plate and serve hot."
    ],
    "image": "images/stir-fried-sesame-baby-bok-choy-51180000.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 10.48
  },
  {
    "title": "Chinese Orange Chicken",
    "ingredients": [
      "1 pound boneless, skinless chicken thighs, patted dry and cut into 1 1/2-inch pieces",
      "1 teaspoon soy sauce",
      "1 teaspoon Chinese Shaoxing wine or dry sherry",
      "1/2 cup cornstarch",
      "About 2 cups canola oil for frying",
      "2 oranges",
      "2 teaspoons cornstarch",
      "1 tablespoon canola oil",
      "2 cloves garlic, minced",
      "2 teaspoons minced peeled fresh ginger",
      "1/8 to 1/4 teaspoon crushed red pepper",
      "1 tablespoon low-sodium soy sauce",
      "1 teaspoon Chinese Shaoxing wine or dry sherry",
      "1 teaspoon rice vinegar  or cider vinegar",
      "2 tablespoons sugar",
      "Thinly sliced scallion greens",
      "Thinly sliced fresh red chile",
      "Cooked rice",
      "Equipment: 10-inch cast-iron skillet or other high-sided skillet",
      "deep-fry thermometer",
      "Microplane"
    ],
    "instructions": [
      "In a shallow, medium bowl toss the chicken pieces with the soy sauce and wine. Let stand while you make the sauce.",
      "Using a vegetable peeler, remove 4 lengthwise strips of zest from 1 orange\u2014each strip should be about 3/4 inch wide and 3 1/2 to 4 inches long. Arrange the zest in one layer between paper towels and microwave on high in 20-second increments until dry and brittle but not browned, 60 to 80 seconds total. Let the zest cool then finely chop it. If desired, use a Microplane to remove some of the remaining zest from the orange and reserve it for garnish. (If desired, zest the second orange for additional garnish.)",
      "Squeeze enough juice from both oranges to measure 1/2 cup. In a small bowl, whisk together the juice and 2 teaspoons cornstarch until the cornstarch is dissolved.",
      "In a 10-inch skillet, heat 1 tablespoon oil over moderate heat until hot but not smoking. Add the garlic, ginger, crushed red pepper, and dried orange zest and stir-fry until golden, about 30 seconds. Add the soy sauce, wine, vinegar, and sugar and stir until the sugar dissolves, about 5 seconds. Stir the orange juice\u2013cornstarch mixture then add it to the skillet. Bring the sauce to a boil, stirring, then reduce the heat to low and simmer, uncovered, for 1 minute. Remove the skillet from the heat and set it aside while you fry the chicken.",
      "Line a large rimmed baking sheet with paper towels.",
      "In a 10-inch cast-iron skillet, heat 1/2 inch of oil until a deep-fry thermometer registers 365\u00b0F. Meanwhile, coat half of the chicken, a couple pieces at a time, in cornstarch, making sure they are well coated and gently knocking off any excess, then transfer to a plate. Carefully add all the coated chicken to the hot oil, spacing the pieces apart from each other. Fry the chicken, turning it once or twice, until deep golden, about 5 minutes. While frying, adjust the heat as necessary to keep the oil at 365\u00b0F. Using a metal spider or a slotted spoon, transfer the chicken as done to the paper-towel-lined baking sheet. Continue to coat and fry the remaining chicken in the same manner, returning the oil to 365\u00b0F between batches.",
      "Once the chicken is fried, place the skillet of reserved orange sauce over moderately low heat and bring it to a simmer, stirring and thinning the sauce with a little water if necessary. Add the chicken, and stir until thoroughly coated in sauce.",
      "Transfer the chicken to a serving dish and garnish with the scallions, and, if desired, the red chile slices and the freshly grated orange zest. Serve immediately with rice."
    ],
    "image": "images/chinese-orange-chicken-51168000.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 7.34
  },
  {
    "title": "Shrimp Fried Rice",
    "ingredients": [
      "2 tablespoons vegetable oil, divided",
      "12 ounces peeled deveined small shrimp, thawed if frozen",
      "Kosher salt",
      "8 scallions, whites chopped, greens thinly sliced",
      "2 garlic cloves, chopped",
      "1 tablespoon finely chopped peeled ginger",
      "3 cups cold cooked white rice",
      "2 large eggs, beaten to blend",
      "1/2 cup frozen edamame, thawed",
      "1/2 cup frozen peas, thawed",
      "3 tablespoons reduced-sodium soy sauce",
      "2 tablespoons unseasoned rice vinegar",
      "1 teaspoon toasted sesame oil"
    ],
    "instructions": [
      "Heat 1 tablespoon vegetable oil in a large nonstick skillet over medium-high heat. Season shrimp with salt and cook, turning once, until just opaque in the center, about 3 minutes; transfer to a plate.",
      "Heat remaining 1 tablespoon vegetable oil in same skillet; add scallion whites, garlic, and ginger. Cook, stirring, until fragrant, about 1 minute. Add rice and stir to coat. Cook until rice is crisp, about 2 minutes. Push rice to one side of skillet; add eggs to other side and cook, stirring and working into rice mixture, 1 to 2 minutes.",
      "Add edamame, peas, soy sauce, vinegar, sesame oil, and cooked shrimp. Cook, tossing constantly, until shrimp and vegetables are heated through, about 1 minute. Top with scallion greens."
    ],
    "image": "images/shrimp-fried-rice-51149040.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 11.91
  },
  {
    "title": "Hot-and-Sour Peanutty Noodles with Bok Choy",
    "ingredients": [
      "8 ounces whole-wheat spaghetti",
      "2 1/4 teaspoons kosher salt, divided",
      "1 tablespoon canola or sunflower oil",
      "1 large shallot, sliced",
      "1 piece  ginger, peeled and finely chopped",
      "1 pound baby bok choy, leaves and stems separated, roughly chopped",
      "1 red bell pepper, sliced",
      "3/4 cup low-sodium vegetable stock or water",
      "2 tablespoons low-sodium soy sauce",
      "1 tablespoon dark sesame oil",
      "1 tablespoon rice vinegar",
      "1/2 cup chopped unsalted roasted peanuts",
      "1/4 teaspoon red pepper flakes"
    ],
    "instructions": [
      "Cook pasta as directed on package with 2 teaspoons salt until just tender. Drain and rinse pasta with cool water. In a large nonstick skillet, heat canola oil over medium-high heat. Cook shallot and ginger, stirring, until just brown, 1 minute. Add bok choy stems, bell pepper and remaining 1/4 teaspoon salt. Cook, stirring frequently, until peppers are crisp-tender, 1 to 2 minutes. Transfer contents of skillet to a plate. To same skillet, add bok choy leaves, stock, soy sauce, sesame oil and vinegar. Cook, stirring, until leaves are soft and bright green, 1 to 2 minutes. Add bell pepper mixture, pasta, peanuts and pepper flakes to pan. Toss to combine; serve."
    ],
    "image": "images/hot-and-sour-peanutty-noodles-with-bok-choy-395096.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 8.68
  },
  {
    "title": "Chinese Trinidadian Stir-Fried Shrimp with Rum",
    "ingredients": [
      "1 pound large shrimp",
      "Juice of 1/2 lime",
      "3 tablespoons ketchup",
      "3 tablespoons dark Jamaican rum",
      "2 teaspoons soy sauce",
      "1/4 teaspoon ground white pepper",
      "2 tablespoons peanut or vegetable oil",
      "1 tablespoon minced garlic",
      "1 tablespoon minced ginger",
      "1/2 teaspoon salt",
      "1 medium ripe tomato, cut into thin wedges",
      "1 large green bell pepper, cut into thin strips",
      "1 small onion, cut into thin wedges",
      "1 tablespoon finely chopped cilantro"
    ],
    "instructions": [
      "1. Using kitchen shears, cut through the shrimp shells two-thirds of the length down the back of the shrimp. Remove the legs and devein the shrimp, leaving the shells and tails on. In a medium bowl toss the shrimp with the lime juice for a few seconds. Rinse the shrimp, drain, and set on a plate lined with paper towels. With more paper towels pat the shrimp dry. In a small bowl combine the ketchup, rum, soy sauce, and ground white pepper.",
      "2. Heat a 14-inch flat-bottomed wok or 12-inch skillet over high heat until a bead of water vaporizes within 1 to 2 seconds of contact. Swirl in the oil, add the garlic and ginger, then, using a metal spatula, stir-fry 10 seconds or until the aromatics are fragrant. Push the aromatics to the sides of the wok, carefully add the shrimp and spread them evenly in one layer in the wok. Cook undisturbed 1 minute, letting the shrimp begin to sear. Sprinkle on the salt and stir-fry 30 seconds or until the shrimp begin to turn orange. Add the tomatoes, bell peppers, and onions and stir-fry 1 minute or until the shrimp have turned almost totally orange. Swirl the ketchup mixture into the wok and stir-fry 1 minute or until the shrimp are just cooked through and the sauce coats the shrimp. Stir in the cilantro."
    ],
    "image": "images/chinese-trinidadian-stir-fried-shrimp-with-rum-388610.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 14.74
  },
  {
    "title": "Scarborough Fair Tofu Burger",
    "ingredients": [
      "1 tablespoon  dried parsley",
      "1 tablespoon  dried sage",
      "1 tablespoon  dried rosemary",
      "1 tablespoon  dried thyme",
      "12 ounces  extra-firm tofu, drained and pressed",
      "1 cup  TVP granules",
      "1 cup  vegetable broth",
      "2 tablespoons  minced garlic",
      "2 1/2 tablespoons  ground flaxseed mixed with",
      "3 tablespoons  water",
      "1/4 cup  hulled sunflower seeds",
      "1/4 cup  hulled pumpkin seeds",
      "Salt and pepper"
    ],
    "instructions": [
      "Grind the parsley, sage, rosemary, and thyme into a fine powder. I use a coffee grinder for this.",
      "In a mixing bowl, crumble the tofu and mix well with the spice mixture so that the herbs are well infused with the tofu. Let sit for the flavors to meld.",
      "In a microwave-safe bowl, mix together the TVP granules and the broth, cover tightly with plastic wrap, and microwave for 5 to 6 minutes. Alternatively, bring the broth to a boil, pour over the TVP, cover, and let sit for 10 minutes.",
      "When cool enough to handle, add the TVP to the tofu mixture, then add the minced garlic, flaxseed mixture, sunflower seeds, pumpkin seeds, and salt and pepper to taste. Mix with your hands until all the ingredients are very well incorporated. The mixture will be nice and smooth, and should form lovely burgers. Shape into 6 patties. Refrigerate until ready to cook, although refrigeration isn't necessary if you plan on cooking them right away.",
      "I recommend baking these rather than frying. It just seems that this burger is too healthy to fry. Preheat the oven to 350\u00b0F (180\u00b0C, or gas mark 4) and line a baking sheet with parchment or a silicone baking mat. Bake, covered with a foil tent, for 15 minutes per side."
    ],
    "image": "images/scarborough-fair-tofu-burger-366471.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 6.33
  },
  {
    "title": "Smashed Cucumber Salad",
    "ingredients": [
      "20 oz cucumber",
      "2 oz red bell pepper",
      "4 cloves garlic (minced)",
      "2 stalks green onion (diced)",
      "0.25 oz cilantro (chopped)",
      "1 tsp salt (for salting)",
      "1 tsp sugar (for salting)",
      "0.5 tsp chili sauce",
      "1.3 tbsp light soy sauce",
      "1 tbsp oyster sauce",
      "2 tbsp vinegar",
      "2 tbsp sugar",
      "1 tbsp sesame seeds",
      "0.5 tsp sesame oil",
      "0.5 tbsp cooking oil"
    ],
    "instructions": [
      "Trim ends of cucumbers and peel stripes. Cut in half lengthwise, remove seeds, and smash using cleaver or rolling pin. Slice into angled chunks.",
      "Cut bell pepper into strips. Dice green onion. Chop cilantro. Mince garlic.",
      "Add salt and sugar to cucumber, mix, and let sit for 5–6 minutes with chopped bell pepper.",
      "Make sauce by combining chili sauce, soy sauce, oyster sauce, vinegar, sugar, and garlic. Mix well.",
      "Drain water from cucumbers and bell pepper.",
      "Combine veggies with sauce and green onions. Mix thoroughly.",
      "Add cilantro, sesame seeds, sesame oil, and cooking oil. Toss to coat and serve chilled or at room temperature."
    ],
    "image": "images/dads-smashed-cucumber-salad.jpg",
    "estimatedCookTimeMins": 10,
    "estimatedCostUSD": 4.00
  },
  {
    "title": "Black Pepper Tofu",
    "ingredients": [
      "1 3/4 lbs firm tofu",
      "Vegetable oil for frying",
      "Cornstarch to dust the tofu",
      "11 tbsp butter",
      "12 small shallots , thinly sliced",
      "8 fresh red chiles , thinly sliced",
      "12 garlic cloves, crushed",
      "3 tbsp chopped fresh ginger",
      "3 tbsp sweet soy sauce",
      "3 tbsp light soy sauce",
      "4 tsp dark soy sauce",
      "2 tbsp sugar",
      "5 tbsp coarsely crushed black peppercorns",
      "16 small and thin green onions",
      "cut into 1 1/4-inch segments"
    ],
    "instructions": [
      "Start with the tofu. Pour enough oil into a large frying pan or wok to come 1/4 inch up the sides and heat. Cut the tofu into large cubes, about 1 x 1 inch. Toss them in some cornstarch and shake off the excess, then add to the hot oil. (You'll need to fry the tofu pieces in a few batches so they don't stew in the pan.) Fry, turning them around as you go, until they are golden all over and have a thin crust. As they are cooked, transfer them onto paper towels.",
      "Remove the oil and any sediment from the pan, then put the butter inside and melt it. Add the shallots, chiles, garlic and ginger. Saut\u00e9 on low to medium heat for about 15 minutes, stirring occasionally, until the ingredients have turned shiny and are totally soft. Next, add the soy sauces and sugar and stir, then add the crushed black pepper.",
      "Add the tofu to warm it up in the sauce for about a minute. Finally, stir in the green onions. Serve hot, with steamed rice."
    ],
    "image": "images/black-pepper-tofu-365129.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 9.79
  },
  {
    "title": "Teriyaki Black Cod with Sticky Rice Cakes and Seared Baby Bok Choy",
    "ingredients": [
      "9 baby bok choy, halved lengthwise",
      "3/4 cup sushi rice",
      "Grapeseed or canola oil spray",
      "2 tablespoons sliced scallions",
      "1 teaspoon minced garlic",
      "1 tablespoon minced peeled fresh ginger",
      "1 tablespoon unseasoned rice vinegar",
      "1 1/2 teaspoons mirin",
      "Pinch of kosher salt",
      "Pinch of freshly ground black pepper",
      "1/2 cup low-sodium soy sauce",
      "3/4 cup fresh orange juice",
      "1/4 cup mirin",
      "1 teaspoon minced peeled fresh ginger",
      "1/2 teaspoon cornstarch",
      "6  skinless black cod fillets, each 1 inch thick",
      "1/4 teaspoon freshly ground black pepper",
      "Grapeseed or canola oil spray",
      "1/2 cup thinly sliced scallions",
      "1 tablespoon sesame seeds",
      "toasted"
    ],
    "instructions": [
      "Bring a large pot of water to a rapid boil. Prepare a bowl of ice water. Add the bok choy to the boiling water and cook for 30 seconds. Drain the bok choy and immediately transfer it to the ice water for 2 minutes to cool. Drain the bok choy and set aside on a clean kitchen towel to soak up excess moisture.",
      "Prepare the sticky rice cakes. Put the rice in a large bowl and cover with cold water. Use your hand to swish the rice around a few times. Drain and repeat until the water in the bowl is clear; you may need to rinse it several times.",
      "Put the rice in a small, heavy-bottomed saucepan and add water to cover by 1 inch. Cover the pan; for best results, do not uncover the pan at any time during cooking. Bring to a boil over medium-high heat, 4 to 5 minutes; you will be able to tell the water is boiling by the large amount of steam pouring out from under the lid. Reduce the heat to low and simmer, covered, for 10 minutes. Remove the pan from the heat and let stand, covered, for 15 minutes.",
      "Spray a small saut\u00e9 pan with grapeseed oil and heat over medium heat. Add the scallions, garlic, and ginger and cook, stirring, until just softened and fragrant, about 30 seconds. Fold the scallion mixture into the warm, cooked rice along with the vinegar, mirin, salt, and pepper.",
      "Line a platter or baking sheet with parchment paper sprayed with oil or with waxed paper. Have a separate bowl of water ready. Dip your hands into the water and scoop up 1/4 cup rice. Form it into a tightly packed cake about 2 inches thick and place the cake on the platter. Repeat with the remaining rice to form five more cakes. Set aside in the refrigerator.",
      "Meanwhile, in a small saucepan, combine the soy sauce, orange juice, mirin, and ginger. Bring to a boil and reduce the heat to low. Simmer just until reduced by half, 30 to 40 minutes. In a small dish, mix the cornstarch and 1 teaspoon water and stir this slurry into the simmering sauce. Simmer 30 seconds and remove the pan from the heat."
    ],
    "image": "images/teriyaki-black-cod-with-sticky-rice-cakes-and-seared-baby-bok-choy-363330.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 9.52
  },
  {
    "title": "Stir-Fried Bok Choy and Mizuna with Tofu",
    "ingredients": [
      "3 1/2 tablespoons soy sauce, divided",
      "4 teaspoons Asian sesame oil, divided",
      "3 1/2 teaspoons unseasoned rice vinegar, divided",
      "1 14- to 16-ounce container extra-firm tofu, drained",
      "2 tablespoons peanut oil",
      "4 green onions, chopped",
      "1 tablespoon finely chopped peeled fresh ginger",
      "2 garlic cloves, finely chopped",
      "4 baby bok choy, leaves separated",
      "12 cups loosely packed mizuna",
      "Ingredient info: Mizuna is sold at some supermarkets and at Asian markets"
    ],
    "instructions": [
      "Whisk 2 tablespoons soy sauce, 2 teaspoons sesame oil, and 1/2 teaspoon vinegar in bowl.",
      "Stack 2 paper towels on work surface. Cut tofu crosswise into 3/4-inch-thick slices; cut each slice crosswise in half. Arrange tofu on paper towels and let stand 10 minutes. Pat top of tofu dry.",
      "Heat peanut oil in large nonstick skillet over medium-high heat. Add tofu and cook, without moving, until golden brown on bottom, 2 to 3 minutes per side. Transfer tofu to paper towel to drain, then place tofu on sheet of foil and brush both sides with soy sauce mixture.",
      "Wipe out any peanut oil from skillet. Add 2 teaspoons sesame oil and place skillet over medium heat. Add green onions, ginger, and garlic. Stir until fragrant, about 30 seconds. Add remaining 1 1/2 tablespoons soy sauce and 3 teaspoons vinegar, then bok choy. Toss until bok choy wilts, 1 to 2 minutes. Add mizuna in 2 batches, tossing to wilt before adding more, 1 to 2 minutes per batch. Season greens with salt and pepper. Add tofu to skillet. Toss gently to blend. Transfer to platter."
    ],
    "image": "images/stir-fried-bok-choy-and-mizuna-with-tofu-362936.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 10.43
  },
  {
    "title": "Grilled Asian Chicken with Bok Choy, Shiitake Mushrooms, and Radishes",
    "ingredients": [
      "8 1/3-inch-thick rounds red onion",
      "8 large shiitake mushrooms, stemmed",
      "8 red radishes, trimmed, halved",
      "4 baby bok choy, halved lengthwise",
      "1 large orange bell pepper, cut lengthwise into 8 strips",
      "1 1/4 cups Mango-Sesame Dressing , divided",
      "6 boneless chicken breast halves with skin",
      "Nonstick vegetable oil spray"
    ],
    "instructions": [
      "Arrange all vegetables on large rimmed baking sheet. Brush vegetables lightly on both sides with 1/3 cup Mango-Sesame Dressing; sprinkle with salt and pepper.",
      "Arrange chicken on sheet of foil. Brush both sides of chicken with 1/3 cup dressing, then sprinkle with salt and pepper.",
      "Vegetables and chicken can be prepared 2 hours ahead. Let stand at room temperature.",
      "Coat grill rack generously with nonstick spray and prepare barbecue (medium-high heat). Grill vegetables until just tender, turning occasionally, about 8 minutes for onion rounds and 4 minutes for mushrooms, radishes, bok choy, and pepper strips. Return all vegetables to same baking sheet.",
      "Grill chicken until cooked through, 5 to 6 minutes per side. Transfer chicken to cutting board. Let stand 5 to 10 minutes. Cool 2 chicken breasts; wrap and chill for Asian Chicken-Noodle Salad.",
      "Arrange remaining 4 chicken breasts and vegetables on platter. Serve with remaining dressing."
    ],
    "image": "images/grilled-asian-chicken-with-bok-choy-shiitake-mushrooms-and-radishes-359329.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 13.52
  },
  {
    "title": "Simple Fried Rice",
    "ingredients": [
      "1 medium onion, halved from pole to pole; each half cut into 6 wedges",
      "4 to 6 ounces meat of choice, cooked or raw, cut into bite-size pieces",
      "4 to 6 ounces vegetable of choice, cooked or raw, cut into bite-size pieces",
      "1 large garlic clove, minced",
      "2 large eggs, beaten",
      "4 tablespoons soy sauce",
      "4 tablespoons vegetable oil",
      "4 cups cooked rice",
      "4 scallions",
      "white and green parts",
      "minced"
    ],
    "instructions": [
      "1. Set a heavy-bottomed 12-inch nonstick or cast iron skillet over low heat while preparing meat, vegetable, garlic, and eggs. Marinate the meat in 1 tablespoon of soy sauce. Three to four minutes from making the fried rice, increase the heat to high and turn on the exhaust fan.",
      "2. Put 1 tablespoon of oil and the onion in the skillet; stir-fry until the onion is still crisp but starts to turn brown, about 1 minute. Add the raw meat or vegetable; stir-fry until crisp-tender for vegetables or lightly browned for meat, about 1 minute. Add the cooked meat or vegetable; stir-fry until lightly browned, about 1 minute longer. (If both meat and vegetables are raw or cooked, stir-fry the meat first, giving it a little head start.) Stir in the garlic, then transfer the mixture to a plate; set aside.",
      "3. Put the remaining 3 tablespoons oil in the skillet; heat until shimmering. Add the rice; stir-fry, breaking up clumps, until heated through, about 2 minutes. Add the egg; stir until scrambled, about 1 minute. Return the meat/vegetable mixture, along with the remaining 3 tablespoons of soy sauce and the scallions, to the pan and stir to combine. Serve immediately."
    ],
    "image": "images/simple-fried-rice-358301.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 13.68
  },
  {
    "title": "Tofu Dengaku",
    "ingredients": [
      "3 tablespoons sake, divided",
      "1/4 cup white miso",
      "7 teaspoons sugar, divided",
      "1/2 teaspoon finely grated yuzu peel",
      "1 tablespoon chopped shiso leaf",
      "1/4 cup red miso",
      "4 cups water",
      "1 3 x 5-inch piece dashi-kombu",
      "1 cup dried shaved bonito flakes",
      "1/3 cup light soy sauce",
      "1/3 cup mirin",
      "20 ounces extra-firm tofu, well drained",
      "20 6- to 8-inch-long wooden skewers",
      "Toasted sesame seeds"
    ],
    "instructions": [
      "Bring 1 1/2 tablespoons sake just to boil in small saucepan. Remove from heat. Mix in white miso and 1 teaspoon sugar. Mix in yuzu and shiso, if desired. Set white miso sauce aside.",
      "Bring remaining 1 1/2 tablespoons sake just to boil in another small saucepan. Remove from heat. Mix in red miso and remaining 6 teaspoons sugar. Set red miso sauce aside.",
      "Combine 4 cups water and dashi-kombu in medium saucepan. Bring just to simmer over high heat, then immediately remove broth from heat (to prevent dashi-kombu from becoming bitter). Add bonito; let stand until bonito settles at bottom of pan, about 20 minutes.",
      "Strain broth into large saucepan. Mix in soy sauce and mirin. Bring to boil. Reduce heat and simmer 10 minutes to blend flavors. Set broth aside.",
      "Line large rimmed baking sheet with foil. Cut tofu into 2 x 1 x 1/2-inch rectangles. Add tofu rectangles to broth and simmer over medium-low heat 10 minutes to flavor tofu. Using slotted spoon, carefully remove tofu rectangles and place on prepared baking sheet. Cool tofu. DO AHEAD: Sauces and tofu can be made 2 hours ahead. Let stand at room temperature.",
      "Preheat broiler. Starting at 1 short end of tofu, insert skewer through center, extending to opposite short end. Repeat with remaining tofu and skewers. Brush half of tofu pieces (top only) with red miso mixture. Brush remaining tofu pieces (top only) with white miso mixture. Place sheet of foil over exposed portion of skewers to prevent burning. Broil tofu 6 to 8 inches from heat source until golden brown and charred in spots, watching closely, 2 to 4 minutes. Remove foil. Transfer skewers to platter. Sprinkle with sesame seeds."
    ],
    "image": "images/tofu-dengaku-357333.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 14.57
  },
  {
    "title": "Calas Fried Rice Fritters",
    "ingredients": [
      "1/2 cup long-grain white rice",
      "Peanut oil for frying",
      "1 cup all-purpose flour",
      "1 teaspoon baking powder",
      "1/2 teaspoon ground cinnamon",
      "3 large eggs",
      "2 tablespoons sugar",
      "1 teaspoon vanilla extract",
      "1/2 teaspoon salt",
      "Cane syrup"
    ],
    "instructions": [
      "Bring 1 cup of water and a pinch of salt to a boil in a small saucepan. Add the rice, stir once, reduce the heat to low, and cover the pan, cooking 18 to 20 minutes or until the grains of rice are plump and fluff apart with a fork. Turn the rice out onto a parchment paper\u2013-lined baking sheet and cool for 15 minutes, then transfer to a plastic container (don't pack it in). Cover with plastic wrap and poke a few holes in the top. Refrigerate for at least 8 hours or up to 2 days.",
      "Pour enough peanut oil into a large pot to fill it to a 2 1/2- to 3-inch depth and bring to a temperature between 350\u00b0F and 360\u00b0F over medium heat. Line a plate with paper towels and set aside.",
      "While the oil heats up, place the flour, baking powder, and cinnamon in a medium bowl. Using a stand mixer or a hand mixer, beat the eggs, sugar, and vanilla on high speed until foamy and tripled in volume, 1 1/2 to 2 minutes. Sift in half of the dry ingredients, add the salt, and mix on low speed until only a few dry streaks remain. Sift in the remaining dry ingredients and mix on low speed for a few turns, then add the rice and mix until the fritter batter just comes together into a loose, roughly textured ball.",
      "Once your oil is hot, dip a teaspoon in the hot oil, then into the batter and scoop out a heaping teaspoonful. Hold the spoon close to the oil and let the batter roll off and into the oil. Repeat with the remaining batter; using a slotted spoon, turn and baste the fritters occasionally, allowing them to become golden brown on all sides. (Fry the fritters in two batches if your pot becomes overcrowded.) If the temperature of the oil dips below 350\u00b0F, increase the heat to medium-high. Once the fritters are golden brown, transfer them to the prepared plate to cool slightly. Serve on a small plate drizzled with lots of cane syrup."
    ],
    "image": "images/calas-fried-rice-fritters-356809.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 11.91
  },
  {
    "title": "Salmon with Hoisin, Orange and Bok Choy",
    "ingredients": [
      "2 heads of baby bok choy, each cut lengthwise into 6 wedges",
      "2 5-to 6-ounce salmon fillets",
      "2 tablespoons fresh orange juice",
      "1 green onion, thinly sliced",
      "1 tablespoon hoisin sauce",
      "1 teaspoon minced peeled fresh ginger",
      "1/2 teaspoon finely grated orange peel",
      "3/4 teaspoon cracked coriander seeds",
      "1/4 cup fresh cilantro leaves"
    ],
    "instructions": [
      "Preheat oven to 425\u00b0F. Form bed of bok choy in center of each of two 12-inch square pieces of foil. Top bok choy with fish. Mix orange juice, green onion, hoisin, ginger, and orange peel in small bowl. Spoon mixture over fish, dividing equally. Sprinkle with salt and coriander. Top with cilantro. Fold up foil sides and pinch tightly to seal above fish and at both ends of packets, enclosing contents completely. Place packets on baking sheet. Bake until fish is just opaque in center, 12 to 14 minutes. Transfer packets to plates and serve."
    ],
    "image": "images/salmon-with-hoisin-orange-and-bok-choy-356309.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 11.2
  },
  {
    "title": "Fried Rice",
    "ingredients": [
      "3 tablespoons canola oil",
      "2 eggs, beaten",
      "1 bunch scallions, roughly chopped",
      "1 cup leftover pork, chicken, or beef, diced",
      "1 cup frozen peas and carrots, thawed",
      "4 cups cold cooked white or brown rice",
      "4 tablespoons soy sauce",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "1. In a large skillet or wok, heat 1 tablespoon of the oil over medium-high heat.",
      "2. Add the eggs and scallions. Cook, breaking up the eggs with a spoon until they are lightly browned.",
      "3. Stir in the meat, vegetables, rice, and the remaining oil. Increase heat slightly and cook until the rice is crispy, about 5 minutes.",
      "4. In a small bowl, combine the soy sauce with 4 tablespoons of water. Pour the mixture over the rice.",
      "5. Continue cooking, stirring occasionally, until the rice has absorbed all the liquid, 3 to 5 minutes. 6 Season with the salt and pepper and serve, with extra soy sauce on the side."
    ],
    "image": "images/fried-rice-354350.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 8.6
  },
  {
    "title": "Chinese Egg Noodles with Smoked Duck and Snow Peas",
    "ingredients": [
      "2 tablespoons soy sauce",
      "2 tablespoons olive oil",
      "1 tablespoon hoisin sauce*",
      "1 tablespoon unseasoned rice vinegar",
      "3 1/2 ounces snow peas or sugar snap peas, thinly sliced lengthwise",
      "1 red bell pepper, cut into matchstick-size strips",
      "1 17-ounce  package thin fresh Chinese egg noodles**",
      "1 pound smoked duck, turkey, or chicken, cut into 3x1/4-inch strips",
      "1/2 cup fresh cilantro leaves",
      "2 tablespoons thinly sliced green onion",
      "1 tablespoon thinly sliced jalape\u00f1o chile with seeds"
    ],
    "instructions": [
      "Whisk soy sauce, olive oil, hoisin sauce, and rice vinegar in large bowl to blend. Let dressing stand at room temperature while preparing noodles.",
      "Place sliced snow peas and bell pepper strips in medium bowl. Bring kettle or large saucepan of water to boil. Pour boiling water over snow pea mixture and let soak 10 seconds. Drain well. Rinse mixture with cold water and drain again. Place egg noodles in large bowl. Bring kettle or large saucepan of water to boil, then pour boiling water over noodles; stir noodles to separate. Let noodles soak 10 seconds. Drain well. Rinse noodles with cold water; drain again.",
      "Add snow pea mixture, egg noodles, smoked duck, cilantro leaves, green onion, and jalape\u00f1o to bowl with dressing. Toss well to coat. Divide noodle mixture among plates and serve.",
      "* Hoisin sauce is available in the Asian foods section of many supermarkets and at Asian markets.",
      "** Fresh Chinese egg noodles are available in the refrigerated section of Asian markets."
    ],
    "image": "images/chinese-egg-noodles-with-smoked-duck-and-snow-peas-354302.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 12.82
  },
  {
    "title": "Proven\u00e7al Bok Choy",
    "ingredients": [
      "2 tablespoons extra-virgin olive oil",
      "2 large garlic cloves, finely chopped",
      "2 teaspoon chopped thyme",
      "1 Turkish or 1/2 California bay leaf",
      "3  strips orange zest",
      "3 pounds bok choy , cut crosswise into 2-inch pieces",
      "1 pound tomatoes , chopped",
      "1/3 cup Kalamata olives, pitted and chopped",
      "1/2 cup coarsely chopped flat-leaf parsley"
    ],
    "instructions": [
      "Heat oil in a deep 12-inch heavy skillet over medium-high heat until it shimmers, then saut\u00e9 garlic with thyme, bay leaf, and zest until garlic is pale golden and mixture is very fragrant, about 30 seconds. Add bok choy, tomatoes, olives, 3/4 teaspoon salt, and 1/4 teaspoon pepper and reduce heat to medium. Cook, stirring occasionally, until bok choy is crisp-tender, 10 to 12 minutes. Discard bay leaf and stir in parsley."
    ],
    "image": "images/provencal-bok-choy-354198.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 10.11
  },
  {
    "title": "Panfried Tofu with Romano-Bean and Herb Salad",
    "ingredients": [
      "2  packages soft tofu",
      "6 large eggs",
      "2 tablespoons fresh lemon juice",
      "2 tablespoons water",
      "1 tablespoon Dijon mustard",
      "1/2 cup plus 2 tablespoon vegetable oil, divided",
      "1 medium shallot, minced",
      "1/3 cup chopped flat-leaf parsley",
      "2 tablespoons drained capers, chopped",
      "1 1/2 pounds Romano beans or green beans, trimmed",
      "5 ounces wild or baby arugula",
      "1/3 cup tarragon leaves"
    ],
    "instructions": [
      "Cut each tofu block lengthwise into 3 equal pieces. Drain on paper towels.",
      "Peel hard-boiled eggs and halve lengthwise. Remove hard-boiled yolks and place in a food processor. Thinly slice whites crosswise and reserve.",
      "Add lemon juice, water, mustard, and 1/4 teaspoon each of salt and pepper to yolks in food processor. With motor running, add 1/2 cup oil in a slow stream, processing until emulsified and smooth and scraping down sides as needed. Transfer to a bowl and stir in shallot, parsley, and capers. Reserve 1/4 cup dressing for serving.",
      "Cook beans, uncovered, in well-salted boiling water until crisp-tender, 4 to 5 minutes. Transfer to an ice bath to stop cooking, then drain well. Transfer to a bowl and toss with dressing (excluding 1/4 reserved dressing for serving). Gently toss with arugula, tarragon, and egg whites. Season with salt and pepper.",
      "Heat remaining 2 tablespoons oil in a 12-inch nonstick skillet over medium heat. Meanwhile, lightly beat remaining 2 eggs in a medium bowl. Pat tofu dry and season both sides with 1/2 teaspoon salt (total). Coat tofu with egg, letting excess drip off, then fry, turning once, until golden and heated through, 8 to 10 minutes. Drain briefly on paper towels, then serve with salad and reserved dressing.\u25ca"
    ],
    "image": "images/panfried-tofu-with-romano-bean-and-herb-salad-354152.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 13.19
  },
  {
    "title": "Broiled Tofu With Miso (Tofu Dengaku)",
    "ingredients": [
      "1  block firm tofu, drained",
      "1/3 cup red  miso",
      "2 tablespoons sugar",
      "2 tablespoons sake, dry Sherry, or dry white wine",
      "1 teaspoon sesame seeds, toasted",
      "Equipment: 12 two-pronged wooden picks or 24  straight wooden picks"
    ],
    "instructions": [
      "Pat tofu dry with paper towels, then wrap in fresh paper towels and put in a microwave-safe dish (see cooks' note, below). Microwave at high power 30 seconds. Pour off any liquid and wrap tofu in fresh paper towels. Microwave 1 or 2 more times for 30 seconds each time, pouring off any liquid, until tofu feels firmer.",
      "Preheat broiler.",
      "Stir together miso, sugar, and sake in a small saucepan. (If miso mixture is very thick, stir in 1 tablespoon water.) Cook over medium-high heat, stirring, until bubbling, glossy, and the consistency of ketchup, 1 to 3 minutes.",
      "Cut tofu in half horizontally and arrange, cut sides up, on a cutting board. Cut each half into 6 squares (pieces might not be perfectly square).",
      "Arrange tofu on a foil-lined broiler pan, cut sides up, and broil about 2 inches from heat until a crust just forms, 1 to 2 minutes. Remove from oven and spread crusted side of each square with about 3/4 teaspoon miso mixture. Broil until tops are just bubbling and starting to color, 1 to 2 minutes. Transfer to a plate. Skewer each square with 1 two-pronged pick or 2 parallel straight picks. Sprinkle with seeds."
    ],
    "image": "images/broiled-tofu-with-miso-em-tofu-dengaku-em-353652.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 13.59
  },
  {
    "title": "Grilled Veggie and Tofu Stack with Balsamic and Mint",
    "ingredients": [
      "1/3 cup balsamic vinegar",
      "2 garlic cloves, minced",
      "2/3 cup olive oil",
      "1/3 cup thinly sliced fresh mint leaves plus sprigs for garnish",
      "1 12-ounce container extra-firm tofu, cut crosswise into 8 slices, drained on paper towels",
      "1 zucchini, trimmed, cut lengthwise into four 4-inch-long slices",
      "1 red bell pepper, rounded ends trimmed, seeded, cut lengthwise into 4 pieces",
      "1 Japanese eggplant, trimmed, cut lengthwise into four 4-inch-long slices",
      "4 3-inch-diameter portobello or shiitake mushrooms, stems removed",
      "1 small head of radicchio",
      "quartered through root end"
    ],
    "instructions": [
      "Prepare barbecue (medium-high heat). Place vinegar and minced garlic in large bowl. Gradually whisk in olive oil. Stir in sliced mint. Season marinade to taste with salt and pepper.",
      "Working in batches, add tofu to marinade and turn to coat. Transfer tofu to baking sheet and sprinkle with salt and pepper. Add zucchini, bell pepper, eggplant, mushrooms, and radicchio to marinade in bowl and toss to coat.",
      "Place zucchini, pepper, eggplant, and mushrooms on grill. Sprinkle with salt and pepper. Cook until charred and softened, turning occasionally, about 6 minutes. Transfer to baking sheet. Place tofu and radicchio on grill. Cook until tofu is charred and radicchio is charred and wilted, about 2 minutes per side.",
      "Stack tofu and vegetables on plates. Garnish with mint sprigs and serve"
    ],
    "image": "images/grilled-veggie-and-tofu-stack-with-balsamic-and-mint-353313.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 12.37
  },
  {
    "title": "Summer Rolls with Baked Tofu and Sweet-and-Savory Dipping Sauce",
    "ingredients": [
      "2 ounces dried bean thread noodles",
      "1 small carrot, cut into thin matchsticks",
      "1 Kirby cucumber, halved lengthwise, seeded, and cut into thin matchsticks",
      "1 small fresh jalape\u00f1o, cut into thin matchsticks",
      "1/4 cup rice vinegar",
      "1/4 teaspoon sugar",
      "1 tablespoon plus 3/4 teaspoon fresh lime juice, divided",
      "16 rice-paper rounds  plus additional in case some tear",
      "plus additional in case some tear",
      "4 romaine leaves, each torn into 4 pieces",
      "10 ounces packaged baked tofu, cut into 3- by 1/3-inch sticks",
      "1 cup fresh bean sprouts",
      "1/2 cup each of torn basil, mint, and cilantro leaves",
      "1/3 cup hoisin sauce",
      "2 tablespoons chunky peanut butter",
      "2 tablespoons water"
    ],
    "instructions": [
      "Soak noodles in a medium bowl of boiling-hot water 10 minutes.",
      "Meanwhile, blanch carrot in boiling water until softened, about 45 seconds. Drain. Rinse under cold water to stop cooking, then transfer to a small bowl along with cucumber, jalape\u00f1o, vinegar, sugar, 1 tablespoon lime juice, and 1/4 teaspoon salt. Let stand 5 minutes. Reserve 2 tablespoons liquid and drain pickled vegetables.",
      "Drain noodles and rinse under cold water, then drain and pat dry. Toss noodles with remaining 3/4 teaspoon lime juice and snip with kitchen shears 5 or 6 times.",
      "Fill a shallow pan or pie plate with warm water. Soak 2 rice-paper rounds until they begin to soften, about 30 seconds, then let excess water drip off and stack soaked rounds on a work surface so that they overlap by all but 1 inch on either side. Put 2 pieces of romaine on bottom third of round. Top with one eighth of noodles (about 2 tablespoons), tofu (4 sticks), bean sprouts (about 2 tablespoons), herbs (3 tablespoons), and pickled vegetables (3 tablespoons). Roll up tightly around filling, folding in sides. Make 7 more rolls in same manner.",
      "Stir together hoisin sauce, peanut butter, water, and reserved 2 tablespoons pickling liquid. Serve rolls with dipping sauce."
    ],
    "image": "images/summer-rolls-with-baked-tofu-and-sweet-and-savory-dipping-sauce-352777.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 8.58
  },
  {
    "title": "Warm Tofu with Spicy Garlic Sauce",
    "ingredients": [
      "1  package soft tofu",
      "1 teaspoon chopped garlic",
      "1/4 cup chopped scallion",
      "2 teaspoons sesame seeds, toasted and crushed with side of a heavy knife",
      "3 tablespoons soy sauce",
      "1 tablespoon Asian sesame oil",
      "1 teaspoon coarse Korean hot red-pepper flakes",
      "1/2 teaspoon sugar"
    ],
    "instructions": [
      "Carefully rinse tofu, then cover with cold water in a medium saucepan. Bring to a simmer over medium-high heat, then keep warm, covered, over very low heat.",
      "Meanwhile, mince and mash garlic to a paste with a pinch of salt. Stir together with remaining ingredients (except tofu).",
      "Just before serving, carefully lift tofu from saucepan with a large spatula and drain on paper towels. Gently pat dry, then transfer to a small plate. Spoon some sauce over tofu and serve warm. Serve remaining sauce on the side."
    ],
    "image": "images/warm-tofu-with-spicy-garlic-sauce-351871.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 7.41
  },
  {
    "title": "Tofu Stir Fry",
    "ingredients": [
      "1 package  extra-firm tofu",
      "1 tablespoon soy sauce",
      "1 teaspoon garlic powder",
      "2 tablespoons all-purpose flour",
      "2 tablespoons sesame oil",
      "1 small red bell pepper, seeded, cored and thinly sliced",
      "1 small green bell pepper, seeded, cored and thinly sliced",
      "6 green onions, cut into 1/4-inch pieces",
      "1 package  whole-wheat lo mein noodles",
      "6 tablespoons white miso paste",
      "2 cloves garlic, minced",
      "1 piece ginger , minced",
      "1 teaspoon orange zest",
      "1/4 cup orange juice",
      "1 can  baby corn, drained and rinsed",
      "1 can  water chestnuts",
      "drained and rinsed"
    ],
    "instructions": [
      "Place tofu in a colander; set a heavy pot on top 10 to 15 minutes to press out moisture. Halve; sprinkle soy sauce, garlic powder, then flour over halves. Heat 1 tablespoon oil over medium-high heat in a large skillet. Cook tofu until golden, 2 to 3 minutes per side. Slice; set aside. In same skillet, cook peppers and onions, covered, until peppers soften, 7 to 8 minutes. Cook noodles as directed on package. Whisk miso paste, garlic, ginger, zest, juice and remaining 1 tablespoon oil in a bowl. Add pepper mixture, noodles, corn, water chestnuts; toss. Top with tofu."
    ],
    "image": "images/tofu-stir-fry-351409.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 7.78
  },
  {
    "title": "Panang Tofu Curry",
    "ingredients": [
      "1 1/2 tablespoons olive oil",
      "1/2 cup finely chopped shallots",
      "2 tablespoons finely grated peeled ginger",
      "4 garlic cloves, finely chopped",
      "1/4 cup organic peanut butter",
      "2 teaspoons turmeric",
      "1 teaspoon ground cumin",
      "1 teaspoon hot chili paste *",
      "1 cup water",
      "1 13 1/2-to 14-ounce can organic light coconut milk",
      "3 kaffir lime leaves or 3 tablespoons fresh lime juice and 1 1/2 teaspoons finely grated lime peel",
      "1 tablespoon  golden brown sugar",
      "2 14-ounce packages organic firm tofu, drained, cut into 1-inch cubes 1 1/2 cups 1/4- to 1/3-inch-thick slices peeled carrots",
      "1 1/2 cups 1/4- to 1/3-inch-thick slices peeled carrots",
      "1 large red bell pepper",
      "cut into 3/4-inch pieces"
    ],
    "instructions": [
      "Heat oil in heavy large skillet over medium-high heat. Add shallots, ginger, and garlic; cook until shallots are tender, about 6 minutes. Add peanut butter, turmeric, cumin, and chili paste; stir until fragrant, 1 to 2 minutes. Whisk in 1 cup water, then coconut milk, lime leaves, and brown sugar; bring to simmer. Season sauce with salt. Add tofu, carrots, and bell pepper; simmer over medium heat until carrots are tender, adjusting heat to medium-low if beginning to boil and occasionally stirring gently, about 20 minutes. Season to taste with salt. DO AHEAD: Can be made 3 days ahead. Cool slightly, cover, and chill. Rewarm over medium heat before serving.",
      "Available in the Asian foods section of many supermarkets and at Asian markets."
    ],
    "image": "images/panang-tofu-curry-351275.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 12.66
  },
  {
    "title": "Chinese Black Rice",
    "ingredients": [
      "2 cups Chinese black rice",
      "3 1/2 cups water"
    ],
    "instructions": [
      "Rinse rice in a sieve under cold running water until water runs clear.",
      "Bring rice, water (3 1/2 cups), 1/2 teaspoon salt, and 1/4 teaspoon pepper to a boil in a 2 2 1/2- to 3-quarts heavy saucepan, uncovered, over medium-high heat. Cover and reduce heat to low, then cook until rice is tender and most of water has been absorbed, about 35 minutes.",
      "Remove from heat and let stand, covered, 10 minutes. Fluff with a fork."
    ],
    "image": "images/chinese-black-rice-243608.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 7.82
  },
  {
    "title": "Yangzhou Fried Rice",
    "ingredients": [
      "1 cup long-grain white rice, rinsed several times in cold water until water runs clear",
      "3 tablespoons vegetable or peanut oil",
      "8 scallions , thinly sliced on diagonal",
      "4 ounces fresh shrimp, peeled, deveined, and finely diced",
      "3 large eggs, lightly beaten",
      "4 ounces fresh shiitake mushroom, stems discarded and caps finely diced",
      "4 ounces fresh or frozen peas",
      "4 ounces ham, finely diced",
      "1 tablespoon oyster sauce",
      "1 teaspoon sugar",
      "1 teaspoon kosher salt",
      "1/2 teaspoon ground white pepper"
    ],
    "instructions": [
      "In medium saucepan over high heat, combine rice and 1 1/4 cups water. Cover and bring to boil, then reduce heat to low and simmer until water is absorbed, about 25 minutes. Remove from heat and let stand, covered, 10 minutes. Fluff with large fork or chopsticks, then cool. (Rice can be made ahead and refrigerated, covered, up to 2 days.)",
      "In wok or heavy large saut\u00e9 pan over moderately high heat, heat oil until hot but not smoking. Add half of scallions (reserve remainder for garnish). Add shrimp and stir-fry until shrimp are pink and cooked through, 2 to 3 minutes. Add eggs and rice and stir-fry until eggs are just set, about 1 minute. Add mushrooms, peas, ham, oyster sauce, sugar, salt, and pepper and stir-fry until heated through and fluffy, 4 to 5 minutes. Garnish with remaining scallions and serve."
    ],
    "image": "images/yangzhou-fried-rice-243064.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 10.04
  },
  {
    "title": "Ma\u2013Po Tofu (Spicy Bean Curd with Beef)",
    "ingredients": [
      "1 teaspoon Sichuan peppercorns",
      "1 1/2 pounds soft  tofu, cut into 1-inch cubes",
      "2 tablespoons Chinese hot bean paste *",
      "1 tablespoon Chinese black-bean paste or sauce*",
      "4 tablespoons oyster sauce",
      "2 tablespoons Asian chili powder*",
      "1 tablespoon cornstarch",
      "1/4 cup peanut oil",
      "4 ounces ground beef",
      "1  piece fresh ginger, minced",
      "2 cloves garlic, minced",
      "1 scallion , thinly sliced on diagonal",
      "1/4 cup Shaohsing rice wine",
      "1 medium leek , washed, halved lengthwise, and cut into 1/2-inch slices",
      "1/2 cup chicken stock or low-sodium chicken broth",
      "1 tablespoon light soy sauce",
      "1 tablespoon dark soy sauce",
      "2 tablespoons fresh cilantro, chopped",
      "*Available at Asian markets and in the Asian section of some supermarkets"
    ],
    "instructions": [
      "In dry heavy skillet over moderate heat, toast peppercorns, stirring, until fragrant, 3 to 5 minutes. Transfer to bowl and let cool, then grind in spice grinder to fine powder. Set aside.",
      "In large pot over moderately high heat, bring 4 cups water to boil. Add tofu, remove from heat, and let steep, uncovered, 5 minutes. Using slotted spoon, transfer tofu to medium bowl and set aside.",
      "In small bowl, whisk together hot bean paste, black-bean paste, 2 tablespoons oyster sauce, and chili powder. Set aside.",
      "In small bowl, whisk together cornstarch and 3 tablespoons water. Set aside.",
      "In wok or heavy large saut\u00e9 pan over moderate heat, heat oil until hot but not smoking. Add beef, ginger, garlic, and scallions and stir-fry until meat is browned, about 1 minute. Add rice wine and cook, stirring occasionally, until most of moisture evaporates, 1 to 2 minutes. Add hot bean paste mixture and cook, stirring occasionally, until mixture is incorporated and oil in pan turns red, about 1 minute.",
      "Add tofu, leeks, stock, light and dark soy sauces, and remaining 2 tablespoons oyster sauce and bring to boil. Whisk cornstarch mixture to recombine, then add to pan and cook, stirring occasionally, until juices thicken slightly, about 1 minute.",
      "Transfer to serving dish. Sprinkle with Sichuan peppercorn powder and cilantro, if using. Serve immediately."
    ],
    "image": "images/ma-po-tofu-spicy-bean-curd-with-beef-243066.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 12.47
  },
  {
    "title": "Steamed Scallion Ginger Fish Fillets with Bok Choy",
    "ingredients": [
      "1/2 cup light soy sauce",
      "2 tablespoons sugar",
      "1/2 cup Shaohsing rice wine",
      "1/2 teaspoon five-spice powder",
      "2 pounds sole fillet, cut into 8 pieces",
      "1  piece fresh ginger, finely julienned",
      "6 tablespoons vegetable oil",
      "8 scallions , cut crosswise into 2-inch lengths, then thinly julienned lengthwise",
      "Stir-Fried Baby Bok Choy"
    ],
    "instructions": [
      "In medium bowl, whisk together soy sauce, sugar, rice wine, and five-spice powder.",
      "Transfer fish to 2 rimmed plates. Drizzle each piece with 1 tablespoon soy sauce mixture and scatter with julienned ginger. (Set remaining sauce aside for finishing dish.) Cover and refrigerate 15 minutes.",
      "Fit large saucepan with flat steamer basket, fill with 1 inch water, and bring to boil over high heat. Reduce heat to low and transfer 1 plate to steamer basket. Cover and steam 4 minutes. Without lifting lid, turn off flame and allow residual heat to finish cooking until fish is just cooked through, about 1 minute more. Carefully remove plate (keep warm in oven). Return water in steamer to boil, transfer second plate to steamer, and steam remaining fish in same manner.",
      "While fish is steaming, in small saucepan over moderate heat, heat vegetable oil. Keep warm.",
      "Divide fish among 4 plates and top with julienned scallions. Pour splash of hot oil over each dish. Serve immediately with bok choy."
    ],
    "image": "images/steamed-scallion-ginger-fish-fillets-with-bok-choy-243067.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 8.18
  },
  {
    "title": "Chicken Congee with Mushroom",
    "ingredients": [
      "2.5 cups cooked rice",
      "8-10 cups unsalted chicken stock",
      "6 shiitake mushrooms",
      "2 bok choy",
      "Julienned ginger",
      "Diced scallion",
      "2 tsp salt (or to taste)",
      "1/2 tsp sugar",
      "White pepper to taste",
      "1 tbsp sesame oil",
      "14 oz chicken breast",
      "1 tsp salt (for marinade)",
      "1.5 tbsp Chinese cooking wine",
      "1 egg white",
      "2 tbsp cornstarch",
      "1/2 tsp garlic powder"
    ],
    "instructions": [
      "Bring 8 cups of chicken stock to a boil. Add cooked rice and simmer for 10 minutes.",
      "Slice the chicken breast and marinate with salt, Chinese cooking wine, egg white, cornstarch, and garlic powder. Mix for 5 minutes.",
      "Slice mushrooms, chop bok choy, julienne ginger, and dice scallion.",
      "Add mushrooms and ginger to the rice soup. Season with salt and sugar to taste.",
      "Whisk the rice soup to break up grains and thicken the congee. Add more hot stock or water if needed.",
      "Add marinated chicken, stir well, and turn off heat once the chicken turns color. Let residual heat finish cooking.",
      "Add bok choy, white pepper, sesame oil, and scallions. Serve with fried donut sticks or pickled vegetables if desired."
    ],
    "image": "images/chicken-congee-mushroom.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 8.25
  },
  {
    "title": "Stir Fried Baby Bok Choy",
    "ingredients": [
      "1 1/2 pounds baby bok choy",
      "2 tablespoons peanut oil",
      "1  piece fresh ginger, minced",
      "2 scallions , thinly sliced",
      "4 cloves garlic, thinly sliced",
      "1 teaspoon coarse sea or kosher salt",
      "1 teaspoon sugar",
      "1/8 teaspoon ground white pepper"
    ],
    "instructions": [
      "Trim 1/4 inch from bottom of each head of bok choy. Slice bok choy crosswise into 1/2-inch-thick slices. Wash bok choy in several changes of cold water and dry in colander or salad spinner until dry to touch.",
      "In wok or large saut\u00e9 pan over moderately high heat, heat oil until hot but not smoking. Add ginger, scallions, and garlic and stir-fry until aromatic, about 15 seconds. Add bok choy, salt, sugar, and pepper and stir-fry 1 minute. Add 1 tablespoon water, cover, and cook until wilted, about 30 seconds. Uncover, stir-fry 5 seconds, then cover again, turn off flame, and let steam in residual heat until just tender, about 30 seconds more. Serve immediately."
    ],
    "image": "images/stir-fried-baby-bok-choy-243124.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 10.6
  },
  {
    "title": "Chilled Soba with Tofu and Sugar Snap Peas",
    "ingredients": [
      "1 large dried shiitake mushroom",
      "2 1/2 cups water",
      "8  pieces kombu",
      "1/2 cup soy sauce",
      "1/4 cup mirin",
      "3 tablespoons ponzu sauce",
      "1 tablespoon sugar",
      "1 tablespoon Asian sesame oil",
      "1 pound sugar snap peas, thinly sliced",
      "10 ounces baby spinach",
      "1 pound dried soba noodles",
      "1  package silken tofu",
      "1 cup thinly sliced scallions, divided",
      "2 tablespoons thin matchsticks of peeled ginger"
    ],
    "instructions": [
      "Simmer mushroom in water in a small saucepan, covered, 15 minutes. Add kombu and barely simmer, covered, 5 minutes. Remove from heat and let stand, covered, 5 minutes. Strain through a fine-mesh sieve into a large glass measure, pressing on and discarding solids. Return 2 cups liquid (add water if necessary) to saucepan. Add soy sauce, mirin, ponzu, sugar, and 1/4 teaspoon salt and bring to a boil, stirring until sugar has dissolved. Remove from heat. Stir in sesame oil, then cool in pan in a large ice bath.",
      "Blanch sugar snaps in a large pot of unsalted boiling water until crisp-tender, about 2 minutes. Transfer with a slotted spoon to a large colander set in ice bath to stop cooking. Lift colander to drain. Transfer sugar snaps to a bowl. Meanwhile, return water to a boil. Blanch spinach until just wilted, about 30 seconds, then cool and drain in same manner. Squeeze out excess water. Add to sugar snaps.",
      "Return water to a boil.",
      "Add noodles and cook according to package directions, stirring occasionally, until tender. Drain in colander and rinse with cold water. Cool in ice bath until very cold (add more ice to water as necessary). Drain well.",
      "Carefully drain tofu and pat dry. Cut into 3/4-inch cubes.",
      "Whisk sauce, then pour 1 1/2 cups sauce into a large bowl. Add noodles, sugar snaps, spinach, and half of scallions and toss. Serve in shallow bowls, topped with tofu, remaining scallions, and ginger. Drizzle with some of remaining sauce and serve remainder on the side."
    ],
    "image": "images/chilled-soba-with-tofu-and-sugar-snap-peas-242834.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 10.53
  },
  {
    "title": "Grilled Shrimp Satay with Peaches and Bok Choy",
    "ingredients": [
      "6 tablespoons smooth natural peanut butter, stirred to combine",
      "1/3 cup  dark brown sugar",
      "3 tablespoons seasoned rice vinegar",
      "2 tablespoons soy sauce",
      "2 to 3 teaspoons hot chili paste *",
      "9 tablespoons peach nectar, divided",
      "3 peaches or nectarines, each cut into 6 wedges",
      "16 uncooked large shrimp, peeled, deveined",
      "6 heads of baby bok choy",
      "halved lengthwise"
    ],
    "instructions": [
      "Prepare barbecue (medium-high heat). Whisk first 5 ingredients and 5 tablespoons nectar until smooth; season sauce with pepper.",
      "Arrange peaches, shrimp, and bok choy on grill. Brush with 4 tablespoons nectar; brush lightly with 1/4 cup sauce. Sprinkle with salt and pepper. Grill until peaches are slightly charred, shrimp are just opaque in center, and bok choy halves are just tender, about 2 minutes per side for peaches and 3 minutes per side for shrimp and bok choy.",
      "Mound shrimp, bok choy, and peaches on platter. Drizzle with some sauce. Serve with remaining sauce.",
      "*Available in the Asian foods section of many supermarkets and at Asian markets."
    ],
    "image": "images/grilled-shrimp-satay-with-peaches-and-bok-choy-242685.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 8.36
  },
  {
    "title": "Chicken, Mushroom, and Bok Choy Kebabs",
    "ingredients": [
      "3 large garlic cloves",
      "1/2 cup reduced-sodium soy sauce",
      "1/3 cup dry Sherry",
      "1/4 cup packed brown sugar",
      "1 tablespoon finely grated peeled ginger",
      "2 teaspoon Asian sesame oil",
      "1 1/2 pound skinless boneless chicken thighs, cut into 2-inch pieces",
      "1 pound baby bok choy",
      "1/2 pound large cremini mushrooms, stems trimmed flush with caps",
      "1/2 cup vegetable oil",
      "14  wooden skewers",
      "soaked in water 30 minutes"
    ],
    "instructions": [
      "Mince and mash garlic to a paste with a pinch of salt.",
      "Boil soy sauce, Sherry, and brown sugar in a small saucepan over medium heat, stirring occasionally, until reduced to about 2/3 cup, 5 to 7 minutes. Stir in garlic paste, ginger, and sesame oil, then cool to room temperature.",
      "Pour half of marinade into a large sealable bag and chill remainder for basting. Add chicken to bag and marinate, chilled, turning bag occasionally, at least 3 hours.",
      "Prepare grill for direct-heat cooking over medium-hot charcoal (medium-high heat for gas).",
      "Meanwhile, halve bok choy lengthwise and blanch in a large pot of boiling salted water (2 Tbsp salt for 5 qt water) until crisp-tender, about 2 minutes. Immediately transfer with tongs to an ice bath to stop cooking. Pat bok choy very dry, then, bending leaves, thread 3 or 4 halves (through bulb and leaves) onto each of 3 or 4 skewers. Put on a tray.",
      "Toss mushrooms with vegetable oil. Thread mushrooms (through sides) and chicken (discard marinade) onto remaining skewers, alternating them. Put on another tray.",
      "Oil grill rack, then grill chicken-and-mushroom skewers, covered only if using a gas grill, 6 minutes. Turn over and baste with some of remaining marinade, then grill, turning and basting occasionally (but not during last 3 minutes), until chicken is just cooked through and mushrooms are tender, 6 to 8 minutes more.",
      "Lightly brush bok choy with oil and grill, covered only if using a gas grill, turning once, until grill marks appear, about 2 minutes total."
    ],
    "image": "images/chicken-mushroom-and-bok-choy-kebabs-242629.jpg",
    "estimatedCookTimeMins": 60,
    "estimatedCostUSD": 13.42
  },
  {
    "title": "Sesame Soba Noodles with Cucumber, Bok Choy, and Mixed Greens",
    "ingredients": [
      "1/2 cup fresh orange juice",
      "1/4 cup creamy peanut butter",
      "2 tablespoons unseasoned rice vinegar",
      "2 tablespoons chopped peeled fresh ginger",
      "2 tablespoons fresh lime juice",
      "1 tablespoon finely grated orange peel",
      "1 tablespoon soy sauce",
      "2 garlic cloves, peeled",
      "1 1/2 teaspoons finely grated lime peel",
      "2 teaspoons dried crushed red pepper, divided",
      "1/3 cup canola oil",
      "8 ounces soba noodles",
      "1 teaspoon Asian sesame oil",
      "3 cups  mixed baby greens",
      "2 heads of baby bok choy, cored, thinly sliced crosswise",
      "1 English hothouse cucumber, cut into matchstick-size strips",
      "3 green onions, cut into matchstick-size strips",
      "1/3 cup chopped fresh cilantro plus sprigs for garnish",
      "2 tablespoons chopped fresh mint",
      "Salted roasted peanuts"
    ],
    "instructions": [
      "Puree first 9 ingredients and 1 teaspoon red pepper in blender until smooth. With machine running, gradually add canola oil through opening in lid. Season dressing to taste with salt and pepper. DO AHEAD: Can be made 1 day ahead. Cover and chill. Bring to room temperature before continuing.",
      "Cook soba noodles in large pot of boiling salted water until tender but still firm to bite. Drain. Rinse with cold water; drain well. Using kitchen shears, cut noodles crosswise in 2 to 3 places. Drizzle noodles in strainer with sesame oil and toss to coat.",
      "Place greens, bok choy, cucumber, green onions, chopped cilantro, and mint in large bowl. Add 1 teaspoon red pepper, dressing, and noodles; toss to coat. Season to taste with salt and pepper. Garnish with cilantro sprigs and peanuts and serve."
    ],
    "image": "images/sesame-soba-noodles-with-cucumber-bok-choy-and-mixed-greens-242500.jpg",
    "estimatedCookTimeMins": 60,
    "estimatedCostUSD": 12.88
  },
  {
    "title": "Spicy Thai Tofu with Red Bell Peppers and Peanuts",
    "ingredients": [
      "1/3 cup olive oil",
      "2 large red bell peppers, seeded, thinly sliced",
      "3 tablespoons minced peeled fresh ginger",
      "3 large garlic cloves, finely chopped",
      "1 14-to 16-ounce package extra-firm tofu, drained well, cut into 1-inch cubes",
      "3 green onions, thinly sliced on diagonal",
      "3 tablespoons soy sauce",
      "2 tablespoons fresh lime juice",
      "1/2 to 3/4 teaspoon dried crushed red pepper",
      "1 6-ounce bag baby spinach leaves",
      "1/3 cup chopped fresh basil",
      "1/3 cup lightly salted roasted peanuts"
    ],
    "instructions": [
      "Heat oil in wok over high heat. Add bell peppers, ginger, and garlic; saut\u00e9 until peppers just begin to soften, about 2 minutes. Add tofu and green onions; toss 2 minutes. Add next 3 ingredients. Toss to blend, about 1 minute. Add spinach in 3 additions, tossing until beginning to wilt, about 1 minute for each addition. Mix in basil. Season with salt and pepper. Sprinkle peanuts over."
    ],
    "image": "images/spicy-thai-tofu-with-red-bell-peppers-and-peanuts-242489.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 10.48
  },
  {
    "title": "Salmon Bulgogi with Bok Choy and Mushrooms",
    "ingredients": [
      "2 large garlic cloves, peeled, divided",
      "1/3 cup chopped green onions",
      "1/4 cup soy sauce",
      "1 tablespoon Chinese rice wine or dry Sherry",
      "1 3/4-inch cube peeled fresh ginger",
      "2 teaspoons sugar",
      "1 teaspoon Asian sesame oil",
      "3/4 teaspoon chili-garlic sauce*",
      "4 6-ounce center-cut skinless salmon fillets",
      "1 tablespoon olive oil",
      "1 large bok choy, cut crosswise into 1/2-inch-wide strips",
      "4 ounces fresh shiitake mushrooms, stemmed, caps sliced",
      "Available in the Asian foods section of many supermarkets and at Asian markets"
    ],
    "instructions": [
      "Blend 1 garlic clove and next 7 ingredients in mini processor. Arrange salmon in 11x7x2-inch glass baking dish. Spoon marinade over. Let marinate 5 minutes.",
      "Preheat oven to 500\u00b0F. Arrange fish, with some marinade still clinging, on rimmed baking sheet. Transfer any marinade in dish to small saucepan. Roast fish until just opaque in center, about 8 minutes. Bring marinade in saucepan to boil; set aside and reserve for glaze.",
      "Meanwhile, heat oil in large nonstick skillet over high heat. Add bok choy and mushrooms; using garlic press, press in 1 garlic clove. Stir-fry until mushrooms are tender and bok choy is wilted, about 4 minutes. Season with salt and pepper.",
      "Divide vegetables among plates. Top with salmon. Brush fish with glaze."
    ],
    "image": "images/salmon-bulgogi-with-bok-choy-and-mushrooms-242481.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 10.77
  },
  {
    "title": "Asian Chicken Salad with Snap Peas and Bok Choy",
    "ingredients": [
      "2 skinless boneless chicken breast halves",
      "5 fresh cilantro sprigs plus 1/3 cup chopped cilantro",
      "1 whole green onion plus 2 green onions, chopped",
      "1 8-ounce package sugar snap peas",
      "3 baby bok choy, thinly sliced crosswise",
      "1 English hothouse cucumber, quartered lengthwise, thinly sliced crosswise",
      "1 red jalape\u00f1o chile, thinly sliced",
      "1/4 cup ponzu*",
      "2 1/2 tablespoons seasoned rice vinegar",
      "2 1/2 tablespoons vegetable oil",
      "1 tablespoon minced peeled fresh ginger"
    ],
    "instructions": [
      "Fill medium skillet with salted water; bring to boil. Add chicken breasts, cilantro sprigs, and whole green onion; reduce heat to medium and poach chicken until just cooked through, about 20 minutes. Using tongs, transfer chicken to plate; cool. Add snap peas to same skillet; increase heat to high and cook until crisp-tender, about 1 minute.",
      "Drain; rinse snap peas under cold water to cool. Discard whole green onion and cilantro sprigs. Coarsely shred chicken. Toss chicken, chopped cilantro, chopped green onions, snap peas, and next 3 ingredients in large bowl. Whisk ponzu, vinegar, oil, and ginger in small bowl. Add dressing to salad; toss to coat. Season to taste with salt and pepper.",
      "* Available in the Asian foods section of some supermarkets and at Asian markets."
    ],
    "image": "images/asian-chicken-salad-with-snap-peas-and-bok-choy-242110.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 11.13
  },
  {
    "title": "Chinese Broccoli",
    "ingredients": [
      "1 pound Chinese broccoli, trimmed",
      "2 tablespoons unsalted butter",
      "2 teaspoons soy sauce",
      "1/4 teaspoon Chinese five-spice powder",
      "1/3 cup roasted soy nuts or peanuts",
      "crushed"
    ],
    "instructions": [
      "1. In a pot filled with 2 inches of water, steam the broccoli or Broccolini until the stems are just tender, 4 to 5 minutes. Transfer to a platter.",
      "2. Discard the water. Add the butter, soy sauce, five-spice powder, and 2 teaspoons water and place over medium-low heat.",
      "3. Stir until the butter has melted.",
      "4. Drizzle the mixture over the vegetables, top with the nuts, and serve."
    ],
    "image": "images/chinese-broccoli-242053.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 7.73
  },
  {
    "title": "Chinese Barbecued Baby Back Ribs",
    "ingredients": [
      "3 tablespoons chopped peeled ginger",
      "2 tablespoons chopped garlic",
      "1/3 cup soy sauce",
      "2 tablespoons vegetable oil",
      "1/2 cup hoisin sauce",
      "2 tablespoons honey",
      "4 pounds baby back ribs"
    ],
    "instructions": [
      "Preheat oven to 400\u00b0F with rack in middle. Line a 17- by 12- by 1-inch baking pan with foil.",
      "Pur\u00e9e ginger, garlic, soy sauce, and oil in a blender, then transfer to a bowl and whisk in hoisin sauce and honey. Reserve 1/2 cup sauce and coat ribs with remainder.",
      "Arrange ribs, meaty sides down, in pan and bake, turning and basting once with some of reserved sauce halfway through baking, until cooked through, about 40 minutes.",
      "Turn on broiler. Brush ribs, meaty sides up, with remaining sauce. Broil 4 to 5 inches from heat until edges are lightly charred, 4 to 8 minutes."
    ],
    "image": "images/chinese-barbecued-baby-back-ribs-240581.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 6.19
  },
  {
    "title": "Stir-Fried Baby Bok Choy with Garlic",
    "ingredients": [
      "1/3 cup reduced-sodium chicken broth",
      "1 tablespoon soy sauce",
      "1 1/2 teaspoons cornstarch",
      "3 tablespoons peanut or vegetable oil",
      "1/4 cup thinly sliced garlic",
      "2 pounds baby or Shanghai bok choy, halved lengthwise",
      "2 teaspoons Asian sesame oil",
      "Equipment: a well-seasoned 14-inch flat-bottomed wok with a lid"
    ],
    "instructions": [
      "Stir together broth, soy sauce, cornstarch, and 1/2 teaspoon salt until cornstarch has dissolved.",
      "Heat wok over high heat until a drop of water evaporates instantly. Pour peanut oil down side of wok, then swirl oil, tilting wok to coat side. Add garlic and stir-fry until pale golden, 5 to 10 seconds. Add half of bok choy and stir-fry until leaves wilt, about 2 minutes, then add remaining bok choy and stir-fry until all leaves are bright green and limp, 2 to 3 minutes total. Stir broth mixture, then pour into wok and stir-fry 15 seconds. Cover with lid and cook, stirring occasionally, until vegetables are crisp-tender, 2 to 4 minutes. Stir in sesame oil, then transfer to a serving dish."
    ],
    "image": "images/stir-fried-baby-bok-choy-with-garlic-240548.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 14.98
  },
  {
    "title": "Mustard-Crusted Tofu with Kale and Sweet Potato",
    "ingredients": [
      "1 14-ounce package firm tofu",
      "1/2 cup whole grain Dijon mustard",
      "4 tablespoons vegetable oil, divided",
      "1/2 medium onion, sliced",
      "1 tablespoon minced peeled fresh ginger",
      "1 bunch kale, stem cut from each leaf, leaves thinly sliced crosswise",
      "1 small red-skinned sweet potato , peeled, halved lengthwise, thinly sliced crosswise",
      "2 tablespoons fresh lime juice"
    ],
    "instructions": [
      "Cut tofu into eight 1/2-inch-thick slices. Arrange on paper towels; drain 10 minutes. Spread both sides of each slice with mustard.",
      "Heat 2 tablespoons oil in large nonstick skillet over medium-high heat. Add onion and ginger; saut\u00e9 1 minute. Add kale, sweet potato, and lime juice. Cover, reduce heat to low, and cook until potato is tender and kale is wilted, about 12 minutes.",
      "Meanwhile, heat remaining 2 tablespoons oil in another large nonstick skillet over medium heat. Add tofu; cover and cook until heated through and crisp, about 2 minutes per side (some mustard seeds may fall off tofu).",
      "Arrange kale and sweet potato mixture on plate. Overlap tofu slices atop vegetables and serve."
    ],
    "image": "images/mustard-crusted-tofu-with-kale-and-sweet-potato-239827.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 9.96
  },
  {
    "title": "Arctic Char with Chinese Broccoli and Sweet Potato Pur\u00e9e",
    "ingredients": [
      "3 red-skinned sweet potatoes",
      "1 teaspoon  hot prepared Chinese mustard",
      "1 cup balsamic vinegar",
      "1 1/2 teaspoons soy sauce",
      "1 pound Chinese broccoli or broccoli rabe ,* large outer leaves removed, cut crosswise on diagonal into 1/4-inch-thick slices",
      "2 slices bacon, cut into 1-inch pieces",
      "2 teaspoons yellow mustard seeds",
      "4 5- to 6-ounce arctic char fillets",
      "2 tablespoons vegetable oil, divided"
    ],
    "instructions": [
      "Preheat oven to 400\u00b0F. Wrap sweet potatoes individually in foil. Roast until tender, 1 to 1 1/2 hours. Cool and peel. Puree in processor until smooth. Measure 3 cups puree and transfer to microwave-safe bowl. Stir in mustard. Season with salt. DO AHEAD: Can be made 1 day ahead. Cover and chill. Boil vinegar in small saucepan until reduced to ` cup, about 8 minutes. Stir in soy sauce. Remove from heat.",
      "Cook broccoli in pot of boiling salted water until crisp-tender, about 1 minute. Drain; set aside. Cook bacon in medium skillet over medium heat until edges are crisp. Transfer to paper towels to drain. DO AHEAD: Reduction and broccoli can be made 2 hours ahead. Let stand at room temperature.",
      "Process mustard seeds in spice grinder until coarsely ground. Sprinkle fish with salt and pepper. Sprinkle ground seeds over top of fish. Heat 1 tablespoon oil in large skillet over medium-high heat. Add fish, mustard side down, and cook until brown and just opaque in center, about 3 minutes per side.",
      "Meanwhile, rewarm puree in microwave until heated through. Heat 1 tablespoon oil in another large skillet. Add broccoli and bacon; saut\u00e9 until heated through. Season with salt and pepper.",
      "Divide broccoli, fish, and puree among plates. Drizzle with balsamic reduction and serve.",
      "*Chinese broccoli is also called gai lan or Chinese kale; it's available at Asian markets. Broccoli rabe is an Italian leafy green vegetable with scattered clusters of broccoli-like florets; you'll find it at some supermarkets and at specialty foods stores."
    ],
    "image": "images/arctic-char-with-chinese-broccoli-and-sweet-potato-puree-239797.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 5.26
  },
  {
    "title": "Wheat-Berry Salad with Grilled Tofu",
    "ingredients": [
      "1/2 pounds tomatoes, chopped",
      "1/4 cup red-wine vinegar",
      "1 tablespoon balsamic vinegar",
      "2 teaspoons Dijon mustard",
      "2 teaspoons sugar",
      "1 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1/2 cup extra-virgin olive oil",
      "1  block extra-firm tofu, cut crosswise into 4 thick slices",
      "1 cup reserved tomato vinaigrette",
      "1 tablespoon soy sauce",
      "1 cup wheat berries",
      "1/2 teaspoon salt",
      "1/2 pound cherry tomatoes",
      "4 yellow bell peppers",
      "3 celery ribs, halved lengthwise and thinly sliced",
      "3 scallions, halved lengthwise and thinly sliced",
      "1/2 cup pitted brine-cured black olives, such as Kalamata, halved",
      "1 head Boston lettuce, torn into bite-size pieces",
      "1 cup torn fresh mint leaves",
      "2  wooden skewers",
      "soaked in water for 30 minutes"
    ],
    "instructions": [
      "Pur\u00e9e all vinaigrette ingredients in a blender. Reserve 1 cup vinaigrette for marinating tofu.",
      "Combine reserved vinaigrette and soy sauce in a sealable plastic bag. Add tofu, seal bag, and turn to coat. Marinate, chilled, turning bag over occasionally, at least 30 minutes and up to 1 day. Bring to room temperature, about 30 minutes, before grilling.",
      "Simmer wheat berries in unsalted water in a 2- to 3-quart saucepan, partially covered, until tender but still chewy, 1 1/4 to 1 1/2 hours. Drain, then return to pan and stir in salt. Cool to room temperature.",
      "Prepare grill for direct-heat cooking over hot charcoal.",
      "Pour off marinade from tofu and pat dry, then transfer to a plate.",
      "Thread tomatoes 1/4 inch apart onto skewers.",
      "Oil grill rack and grill bell peppers, covered only if using a gas grill, turning occasionally with tongs, until skins are blackened, 10 to 12 minutes. Transfer to a bowl, then cover and let steam 10 minutes.",
      "Grill tomatoes, covered only if using a gas grill, turning over once, until blistered and softened, 3 to 4 minutes.",
      "Oil grill rack well, then grill tofu, covered only if using a gas grill, until grill marks appear, about 3 minutes. Loosen tofu with a metal spatula, then turn over and grill until heated through and grill marks appear, about 3 minutes more. Transfer to a clean plate and cover.",
      "Assemble salad: Stir together tomatoes, celery, scallions, olives, wheat berries, and 1/2 cup vinaigrette. Let stand, uncovered, 15 minutes.",
      "Peel and seed peppers, then cut into 1-inch-wide strips. Stir into wheat-berry mixture.",
      "Halve pieces of tofu diagonally (for a total of 8 triangles).",
      "Toss lettuce and mint on a platter, then top with wheat-berry mixture and tofu. Drizzle with some vinaigrette; serve remainder on the side."
    ],
    "image": "images/wheat-berry-salad-with-grilled-tofu-238674.jpg",
    "estimatedCookTimeMins": 60,
    "estimatedCostUSD": 8.56
  },
  {
    "title": "Five-Spice Tofu Stir-Fry with Carrots and Celery",
    "ingredients": [
      "2 tablespoons peanut oil or vegetable oil, divided",
      "8 ounces savory baked five-spice tofu cakes , cut into matchstick-size strips",
      "2 cups matchstick-size strips carrots",
      "2 cups matchstick-size strips celery",
      "1/3 cup finely chopped rinsed canned Szechuan preserved vegetable",
      "1 tablespoon Shaoxing wine  or dry Sherry",
      "1/2 teaspoon salt",
      "1/2 teaspoon sugar",
      "1/4 teaspoon ground white pepper",
      "2 teaspoons Asian sesame oil"
    ],
    "instructions": [
      "Heat 14-inch-diameter flat-bottomed wok or heavy 12-inch-diameter skillet over high heat until drop of water added to wok evaporates on contact. Add 1 tablespoon peanut oil and swirl, then add tofu and stir-fry until tofu just begins to brown, about 1 minute. Transfer tofu to plate. Add remaining 1 tablespoon peanut oil to same wok (do not clean). Add carrots, celery, and Szechuan preserved vegetable and stir-fry until carrots are crisp-tender, about 3 minutes. Return tofu to wok; add rice wine, salt, sugar, and white pepper. Stir-fry to blend, about 1 minute. Remove pan from heat; stir in sesame oil and serve."
    ],
    "image": "images/five-spice-tofu-stir-fry-with-carrots-and-celery-238275.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 9.17
  },
  {
    "title": "Chinese Char Siu Grilled Lamb Chops",
    "ingredients": [
      "3 tablespoons hoisin sauce*",
      "3 tablespoons soy sauce",
      "2 tablespoons Shaoxing wine  or dry Sherry",
      "1 tablespoon sugar",
      "1 teaspoon Chinese five-spice powder**",
      "1/2 teaspoon salt",
      "18 rib lamb chops , well trimmed",
      "2 tablespoons honey",
      "1 tablespoon water",
      "*Available in the Asian foods section of many supermarkets and at Asian markets",
      "**A spice blend that usually contains ground fennel seeds",
      "Szechuan peppercorns",
      "cinnamon",
      "star anise",
      "and cloves; available in the spice section of most supermarkets"
    ],
    "instructions": [
      "Whisk first 6 ingredients in small bowl. Transfer to large resealable plastic bag. Add lamb; seal bag and turn to coat. Marinate in refrigerator at least 4 hours or overnight.",
      "Prepare barbecue (medium-high heat). Drain lamb, leaving some marinade clinging. Grill lamb until slightly charred and cooked to desired doneness, about 21/2 minutes per side for medium-rare. Transfer to platter.",
      "Stir honey and 1 tablespoon water in small skillet over medium heat until warm. Brush over lamb chops."
    ],
    "image": "images/chinese-char-siu-grilled-lamb-chops-238259.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 7.08
  },
  {
    "title": "Panfried Tofu with Asian Caramel Sauce",
    "ingredients": [
      "1  block extra-firm tofu, rinsed",
      "1/2 pound shallots",
      "1 cup vegetable oil",
      "1/3 cup sugar",
      "1 garlic clove, finely chopped",
      "1/2 tablespoon finely chopped peeled fresh ginger",
      "3 tablespoons soy sauce",
      "3 tablespoons rice vinegar",
      "1 1/3 cups plus 2 tablespoons water",
      "2 tablespoons cornstarch",
      "1/3 cup loosely packed fresh basil leaves",
      "1/3 cup loosely packed fresh mint leaves",
      "cooked jasmine rice; steamed baby bok choy ; lime wedges"
    ],
    "instructions": [
      "Halve tofu crosswise, then cut lengthwise into fourths to form 8 slices. Put tofu slices between several layers of paper towels to drain, replacing towels as needed, until ready to use.",
      "Finely chop enough shallots to measure 1/2 cup and reserve. Cut remaining shallots crosswise into 1/8-inch-thick slices and separate into rings. Heat oil in a 10-inch heavy skillet (preferably cast-iron) over moderately high heat until hot but not smoking, then fry sliced shallots in 2 batches, stirring occasionally, until golden brown, 1 1/2 to 3 minutes per batch (watch closely, as shallots can burn easily). Quickly transfer shallots as fried with a slotted spoon to paper towels to drain. Pour off all but 1 tablespoon oil from skillet and reserve skillet.",
      "Cook sugar in a dry 1- to 1 1/2-quart heavy saucepan over moderate heat, undisturbed, until it melts around edges and begins to turn golden, then continue to cook, stirring, until all of sugar is melted and turns a golden caramel.",
      "Add reserved chopped shallots (use caution; caramel will bubble up and steam vigorously) and cook, stirring, until shallots shrink and are very fragrant, about 45 seconds. Add garlic and ginger and cook, stirring, 30 seconds. Stir in soy sauce, vinegar, and 1 1/3 cups water and simmer, stirring, until any hardened caramel is dissolved, about 1 minute.",
      "Stir together cornstarch and remaining 2 tablespoons water until smooth, then stir into sauce and simmer, stirring occasionally, 2 minutes. Remove from heat and keep warm, covered.",
      "Heat oil remaining in skillet over high heat until hot but not smoking. Meanwhile, blot any excess moisture remaining on tofu with paper towels, then add to hot oil in skillet in 1 layer. Fry tofu, turning over once, until golden and crisp, 7 to 10 minutes total. Transfer to clean paper towels to drain briefly.",
      "Reheat sauce, then serve tofu topped with sauce, basil, mint, and fried shallots."
    ],
    "image": "images/panfried-tofu-with-asian-caramel-sauce-238093.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 8.06
  },
  {
    "title": "Pork Fried Rice",
    "ingredients": [
      "400 g  pork fillets",
      "1/3 cup vegetable oil",
      "4 free-range eggs, lightly beaten",
      "1 small red onion, finely diced",
      "1 tablespoon finely diced ginger",
      "2 teaspoons white sugar",
      "2 tablespoons hoisin sauce",
      "2 tablespoons light soy sauce",
      "1 tablespoon malt vinegar",
      "1/4 teaspoon sesame oil",
      "4 cups steamed rice",
      "2/3 cup finely sliced spring onions"
    ],
    "instructions": [
      "Using a sharp knife, cut pork fillets into 5 mm (1/4 inch) slices, then cut into 5 mm (1/4 inch) strips and set aside.",
      "Heat half the oil in a hot wok until surface seems to shimmer slightly. Pour beaten eggs into wok and leave to cook on the base of the wok for 10 seconds before folding egg mixture over onto itself with a spatula and lightly scrambling for about 1 minute or until almost cooked through. Carefully remove omelette from wok with a spatula and drain on kitchen paper. Set aside.",
      "Heat remaining oil in hot wok and stir-fry onion and ginger for 30 seconds. Add sugar and stir-fry for 30 seconds. Add pork and stir-fry for a further 30 seconds. Stir in hoisin sauce, soy sauce, vinegar, and sesame oil and cook, stirring, for 1 minute. Toss in rice and reserved omelette and stir-fry, using a spatula to break up the egg into smaller pieces, for 1 minute. Lastly, add spring onions and stir-fry for a further 30 seconds or until well combined and rice is heated through.",
      "Transfer rice to a platter and serve."
    ],
    "image": "images/pork-fried-rice-237524.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 14.28
  },
  {
    "title": "Marinated Tri-Tip with Chinese Mustard Sauce and Roasted Green Onions and Mushrooms",
    "ingredients": [
      "1/3 cup dry red wine",
      "2 tablespoons soy sauce",
      "3 garlic gloves, minced",
      "1 teaspoon plus 2 tablespoons dry mustard",
      "1 1 1/2-pound beef tri-tip roast",
      "2 tablespoons honey",
      "2 tablespoons water",
      "1/4 teaspoon salt",
      "3 bunches green onions, root ends trimmed, dark green tops cut off and discarded",
      "1 pound or three 6-ounce packages baby portobello mushrooms",
      "2 tablespoons olive oil"
    ],
    "instructions": [
      "Whisk wine, soy sauce, garlic, and 1 teaspoon dry mustard in large glass baking dish. Add tri-tip and turn to coat with marinade. Let stand at room temperature 30 minutes, turning meat occasionally.",
      "Meanwhile, whisk honey, 2 tablespoons water, 1/4 teaspoon salt, and remaining 2 tablespoons dry mustard in small bowl to blend; set sauce aside.",
      "Preheat oven to 450\u00b0F. Remove tri-tip from marinade; pat dry with paper towels. Place tri-tip on large rimmed baking sheet; sprinkle with salt and pepper. Arrange green onions and mushrooms around meat; drizzle onions and mushrooms with olive oil. Roast 12 minutes. Turn meat, onions, and mushrooms over; roast until vegetables are tender and instant-read thermometer inserted into center of meat registers 125\u00b0F for medium-rare, about 12 minutes longer.",
      "Place mushrooms and green onions on platter. Cut meat into 1/4-inch-thick slices; arrange atop green onions and mushrooms. Pour any pan juices over. Drizzle lightly with mustard sauce. Serve, passing remaining mustard sauce alongside."
    ],
    "image": "images/marinated-tri-tip-with-chinese-mustard-sauce-and-roasted-green-onions-and-mushrooms-237321.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 10.6
  },
  {
    "title": "Spicy Lime and Herbed Tofu in Lettuce Cups",
    "ingredients": [
      "1/4 cup thinly sliced peeled fresh ginger",
      "1/4 cup thinly sliced fresh lemongrass, cut from bottom 4 inches of 4 stalks with tough leaves removed",
      "1/4 cup fresh lime juice",
      "2 tablespoons fish sauce *",
      "2 tablespoons water",
      "3 tablespoons sweet chili sauce*",
      "1/2 cup diced seeded peeled cucumber",
      "1/4 cup chopped green onions",
      "1/4 cup diced seeded plum tomato",
      "2 tablespoons chopped seeded jalape\u00f1o chile",
      "1 tablespoon finely chopped fresh cilantro",
      "1 tablespoon finely chopped fresh mint",
      "1 tablespoon finely chopped fresh basil",
      "1 14- to 16-ounce package firm tofu, drained, cut into 1/2-inch cubes, patted dry",
      "6 large or 12 medium butter lettuce leaves"
    ],
    "instructions": [
      "Puree first 5 ingredients in blender. Let mixture stand at least 15 minutes and up to 1 hour. Strain mixture into small bowl, pressing on solids to release any liquid; discard solids. Stir in sweet chili sauce. (Can be made 1 day ahead. Cover and refrigerate.)",
      "Combine first 7 ingredients in large bowl. Add tofu and dressing to bowl; toss to coat.",
      "Arrange 1 or 2 lettuce leaves on each of 6 plates. Divide tofu mixture among lettuce leaves and serve.",
      "*Available in the Asian foods section of most supermarkets and at Asian markets."
    ],
    "image": "images/spicy-lime-and-herbed-tofu-in-lettuce-cups-233691.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 13.52
  },
  {
    "title": "Braised Oxtails with Star Anise and Chinese Greens",
    "ingredients": [
      "12  oxtail pieces , fat trimmed",
      "2 cups low-salt chicken broth",
      "1 large onion, halved, thinly sliced",
      "1/2 cup soy sauce",
      "8 large garlic cloves, peeled",
      "8 whole star anise*",
      "6  rounds fresh ginger",
      "3 tablespoons dark brown sugar",
      "1 tablespoon Chinese brown bean sauce **",
      "12 to 18 yu choy, baby choy sum, or baby bok choy",
      "Chopped green onions",
      "*Brown star-shaped seedpods; available in the spice section of some supermarkets and at specialty foods stores and Asian markets",
      "**Available at Asian markets"
    ],
    "instructions": [
      "Arrange oxtails in single layer in heavy large pot. Add next 8 ingredients, then enough water to cover oxtails by 1/2 inch; bring to boil. Reduce heat to low, partially cover, and simmer until very tender, adding more water by 1/2 cupfuls as needed to keep oxtails covered, about 3 hours. Cool slightly. Chill uncovered until cold, then cover and keep chilled at least 1 day and up to 3 days.",
      "Spoon off and discard fat from sauce. Rewarm oxtails over low heat. Transfer oxtails to large plate. Boil sauce just until reduced enough to coat spoon thinly (do not reduce too much or sauce may become salty). Discard ginger slices and star anise.",
      "Meanwhile, cook yu choy in large pot of boiling salted water until just tender, about 4 minutes. Drain well.",
      "Divide yu choy among shallow bowls. Top with oxtails and sauce and sprinkle with green onions."
    ],
    "image": "images/braised-oxtails-with-star-anise-and-chinese-greens-236874.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 11.23
  },
  {
    "title": "Maple-Glazed Tofu with Spaghetti Squash",
    "ingredients": [
      "1  spaghetti squash",
      "1 tablespoon unsalted butter, melted",
      "1 tablespoon brown sugar",
      "1 cup chicken broth",
      "2 tablespoons maple syrup",
      "1 tablespoon apple cider",
      "1 tablespoon soy sauce",
      "1/2 tablespoon lemon juice",
      "1 garlic clove, smashed",
      "1 teaspoon cornstarch, dissolved in 1 teaspoon cold water",
      "1  package extra-firm tofu, drained and patted dry",
      "1 tablespoon extra-virgin olive oil"
    ],
    "instructions": [
      "1. Preheat oven to 350\u00b0F. Cut the squash in half lengthwise and scoop out the seeds. Brush both halves with the butter and sprinkle with the brown sugar. Place them, cut sides down, on a baking sheet and roast until fork-tender, about 1 hour.",
      "2. Meanwhile, in a skillet, combine the broth, syrup, cider, soy sauce, lemon juice, and garlic. Boil for 5 minutes, then whisk in the cornstarch and cook, whisking constantly, until the glaze thickens, about 1 to 2 minutes more. Set aside.",
      "3. Slice the tofu into 1/2-inch-thick slabs. Then use a knife or a cookie cutter to create cubes or playful shapes. Heat the oil in a saucepan over medium-high heat. Add the tofu and sear until golden brown, 2 to 3 minutes a side. Transfer to a paper towel-lined plate.",
      "4. Scoop the squash strands out and into bowls. Top with the tofu, drizzle on the glaze, and serve."
    ],
    "image": "images/maple-glazed-tofu-with-spaghetti-squash-239218.jpg",
    "estimatedCookTimeMins": 30,
    "estimatedCostUSD": 12.97
  },
  {
    "title": "Tofu Rigatoni Casserole",
    "ingredients": [
      "1/4 cup extra-virgin olive oil, plus more for drizzling",
      "1/2 onion, finely chopped",
      "3 garlic cloves, finely chopped",
      "1  can crushed tomatoes",
      "1 pinch dried oregano",
      "1  package firm tofu, drained",
      "1 large egg",
      "1 pinch grated nutmeg",
      "Salt and freshly ground black pepper to taste",
      "1  package frozen spinach, defrosted and drained",
      "1  box rigatoni, cooked al dente and drained",
      "1 pound fresh mozzarella, grated",
      "3 ounces grated Parmesan"
    ],
    "instructions": [
      "1. Preheat oven to 350\u00b0F.",
      "2. Heat the oil in a saucepan over medium-high heat. Add the onion. Saut\u00e9 for 3 minutes, then add the garlic and cook until the onion is translucent, about 2 minutes more.",
      "3. Add the tomatoes and oregano. Reduce heat and simmer, stirring occasionally, for 15 minutes. Meanwhile, in a blender, process the tofu, egg, nutmeg, salt, and pepper until smooth.",
      "4. Transfer the mixture to a bowl and fold in the spinach, cooked rigatoni, tomato sauce, 1 cup of the mozzarella, and 1/2 cup of the Parmesan.",
      "5. Drizzle a coating of olive oil into a 13-by-9-inch baking pan. Add the pasta mixture and sprinkle the remaining cheeses over the top. Bake until golden and bubbling, 35 to 40 minutes. Let cool for 10 minutes before slicing."
    ],
    "image": "images/tofu-rigatoni-casserole-239219.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 14.78
  },
  {
    "title": "Tofu-and-Meat Loaf",
    "ingredients": [
      "3 tablespoons ketchup",
      "2 tablespoons hoisin sauce",
      "2 teaspoons Dijon mustard",
      "1/2 tablespoon light brown sugar",
      "1  package extra-firm tofu, drained",
      "1/2 pound ground beef",
      "1/2 pound ground turkey",
      "3 slices bread, torn into small pieces",
      "2 eggs, lightly beaten",
      "1/2 onion, finely chopped",
      "1 celery stalk, finely chopped",
      "2 tablespoons soy sauce",
      "2 tablespoons hoisin sauce",
      "1 teaspoon minced garlic",
      "1 teaspoon minced ginger",
      "1/4 teaspoon red pepper flakes"
    ],
    "instructions": [
      "1. A day in advance, crumble the tofu into a plastic container. Freeze overnight or for up to 4 hours. Thaw the tofu and pat it dry with a paper towel before using.",
      "2. Preheat oven to 350\u00b0F. In a small bowl, whisk together the topping ingredients.",
      "3. In a large bowl, break up the tofu with your hands. Add the remaining loaf ingredients and combine well. Pat the mixture into a 9-by-5-inch loaf pan. Bake for 45 minutes.",
      "4. Remove the loaf and brush it with the topping, then return it to the oven and bake for 15 minutes more.",
      "5. Remove and let the loaf cool for 5 minutes before slicing and serving."
    ],
    "image": "images/tofu-and-meat-loaf-239220.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 13.16
  },
  {
    "title": "Spicy-Sweet Tangerine Shrimp with Baby Bok Choy",
    "ingredients": [
      "6 baby bok choy, halved lengthwise",
      "2 tablespoons Asian sesame oil, divided",
      "1 1/2 pounds uncooked large shrimp, peeled, deveined",
      "1/3 cup frozen orange-tangerine concentrate, thawed",
      "1/3 cup Asian sweet chili sauce",
      "12 strips tangerine peel",
      "1 1/2 teaspoons distilled white vinegar",
      "1 teaspoon oyster sauce",
      "2 green onions, chopped",
      "1 1/2 tablespoons minced peeled fresh ginger"
    ],
    "instructions": [
      "Cover bottom of large skillet with 1/2 inch water. Add bok choy; drizzle with 1 tablespoon oil. Sprinkle with salt and pepper. Cover; cook over high heat until bok choy is tender, about 5 minutes. Arrange bok choy around edge of platter. Boil liquid in skillet until reduced to glaze, about 1 minute; pour over bok choy.",
      "Mix shrimp and next 5 ingredients in medium bowl. Heat 1 tablespoon sesame oil in same skillet over high heat. Add onions and ginger. Saut\u00e9 1 minute. Add shrimp mixture. Toss until shrimp are just opaque in center, about 3 minutes. Using slotted spoon, transfer shrimp to platter. Cook sauce until thickened, about 2 minutes. Spoon sauce over shrimp."
    ],
    "image": "images/spicy-sweet-tangerine-shrimp-with-baby-bok-choy-233394.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 13.28
  },
  {
    "title": "Thai Tofu with Zucchini, Red Bell Pepper, and Lime",
    "ingredients": [
      "2 tablespoons peanut oil, divided",
      "1 12-ounce package extra-firm tofu, drained, patted dry, cut into 1/2-inch cubes",
      "1 pound yellow and/or green zucchini, cut into 1/2-inch cubes",
      "1 large red bell pepper, diced",
      "1 tablespoon minced peeled fresh ginger",
      "1 1/3 cups canned unsweetened coconut milk",
      "3 tablespoons  fresh lime juice",
      "1 1/2 tablespoons soy sauce",
      "3/4 teaspoon Thai red curry paste",
      "1/2 cup sliced fresh basil, divided"
    ],
    "instructions": [
      "Heat 1 tablespoon oil in large nonstick skillet over medium-high heat. Add tofu; saut\u00e9 until golden, about 4 minutes. Transfer tofu to bowl. Add remaining 1 tablespoon oil, then zucchini and bell pepper to skillet; saut\u00e9 until beginning to soften, about 4 minutes. Return tofu to skillet. Add ginger; stir 30 seconds. Add coconut milk, 3 tablespoons lime juice, soy sauce, and curry paste; stir to dissolve curry paste. Simmer until sauce thickens, about 6 minutes. Season with salt and more lime juice, if desired. Stir in half of basil. Sprinkle with remaining basil; serve."
    ],
    "image": "images/thai-tofu-with-zucchini-red-bell-pepper-and-lime-231440.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 14.29
  },
  {
    "title": "Grilled Vegetable Salad with Tofu",
    "ingredients": [
      "1 zucchini, halved lengthwise",
      "1 ear corn, husked",
      "1 bunch asparagus , ends trimmed",
      "1 4-ounces firm tofu, cut into 2 1/2-inch slices",
      "4 scallions",
      "Olive oil cooking spray",
      "1 cup mixed greens",
      "1 romaine heart, chopped",
      "1/4 avocado, cut into bite-size chunks",
      "1 vine-ripened tomato, cut into bite-size chunks",
      "1 teaspoon Dijon mustard",
      "1 teaspoon fresh lemon juice",
      "1 teaspoon fresh lime juice",
      "1/2 teaspoon white wine vinegar",
      "1/2 cup extra-virgin olive oil"
    ],
    "instructions": [
      "Heat grill to medium. Spray zucchini, corn, asparagus, tofu and scallions with oil. Season with salt and pepper. Grill scallions 2 minutes per side; tofu 2 minutes per side; zucchini and asparagus 3 minutes per side; corn 8 to 10 minutes, turning often. Cut zucchini and asparagus into bite-ize pieces. Cut corn into chunks; slice off some kernels. Slice tofu into triangles. Combine veggies, tofu and remaining ingredients in a bowl.",
      "Combine all ingredients in a bowl; whisk until smooth. Season with salt and pepper. Divide salad greens and veggies between 2 bowls; drizzle each with 2 tablespoon dressing."
    ],
    "image": "images/grilled-vegetable-salad-with-tofu-235691.jpg",
    "estimatedCookTimeMins": 20,
    "estimatedCostUSD": 12.67
  },
  {
    "title": "Grilled Halibut, Eggplant, and Baby Bok Choy with Korean Barbecue Sauce",
    "ingredients": [
      "4 tablespoons olive oil or vegetable oil, divided",
      "2 garlic cloves, minced",
      "1 1/2 teaspoons minced serrano chile with seeds",
      "1/3 cup soy sauce",
      "1/4 cup  dark brown sugar",
      "3 tablespoons unseasoned rice vinegar",
      "3 tablespoons water",
      "1 tablespoon Asian sesame oil",
      "8 baby bok choy, halved lengthwise",
      "4 medium-size Japanese eggplants, trimmed, halved lengthwise",
      "4 6- to 7-ounce halibut fillets",
      "2 green onions",
      "thinly sliced"
    ],
    "instructions": [
      "Heat 1 tablespoon olive oil in heavy small saucepan over medium heat. Add garlic and chile; saut\u00e9 until fragrant and light golden, about 3 minutes. Add soy sauce, brown sugar, vinegar, and 3 tablespoons water and bring to boil, stirring until sugar dissolves. Reduce heat to medium and simmer until mixture is reduced to 3/4 cup, about 5 minutes (sauce will be thin). Remove barbecue sauce from heat; whisk in sesame oil. Transfer 1/4 cup barbecue sauce to small bowl and reserve for serving.",
      "Prepare barbecue (medium heat). Combine bok choy and eggplant halves in large bowl. Drizzle 2 tablespoons olive oil over and toss to coat. Sprinkle with salt and pepper. Brush fish with remaining 1 tablespoon olive oil; sprinkle with salt and pepper. Grill vegetables and fish until vegetables are tender and slightly charred and fish is just opaque in center, turning occasionally and brushing with sauce, about 10 minutes total for vegetables and 7 minutes total for fish. Transfer vegetables and fish to plates; sprinkle with green onions. Drizzle with reserved sauce and serve."
    ],
    "image": "images/grilled-halibut-eggplant-and-baby-bok-choy-with-korean-barbecue-sauce-235590.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 5.41
  },
  {
    "title": "Chinese Chicken Salad",
    "ingredients": [
      "20 square wonton wrappers, thawed if frozen",
      "About 2 1/2 cups vegetable oil",
      "1/2 pound snow peas, trimmed 1 lb Napa cabbage, cored, then cut crosswise into 1/3-inch-wide strips",
      "1 pound Napa cabbage",
      "1  head of romaine, torn into bite-size pieces",
      "1/4 cup soy sauce",
      "1/4 cup fresh lemon juice",
      "2 tablespoons sugar",
      "1 tablespoon distilled white vinegar",
      "1 teaspoon salt",
      "1/2 teaspoon black pepper",
      "1 tablespoon Asian sesame oil",
      "1/4 cup vegetable oil",
      "6 cups coarsely shredded cooked chicken",
      "1/2 cup chopped scallions",
      "1/2 cup chopped fresh cilantro",
      "1/2 cup sliced almonds, toasted",
      "2 tablespoons sesame seeds, toasted",
      "a deep-fat thermometer"
    ],
    "instructions": [
      "Cut wonton wrappers into 1/2-inch-wide strips and separate on paper towels.",
      "Heat 3/4 inch oil in a wide 3-quart heavy saucepan over moderate heat until it registers 350\u00b0F on thermometer. Fry strips, 5 or 6 at a time, gently turning over once with a slotted spoon, until just golden, 15 to 30 seconds per batch (some strips will fold and curl). Transfer to paper towels to drain, then season with salt.",
      "Cook snow peas in a 4-quart pot of boiling salted water until crisp-tender, about 1 1/2 minutes. Transfer with a slotted spoon to a bowl of ice and cold water to stop cooking, then drain in a colander and pat dry. Cut diagonally into 1-inch-wide pieces and put in a large bowl with cabbage and romaine.",
      "Whisk together soy sauce, lemon juice, sugar, vinegar, salt, and pepper in a small bowl, then add sesame oil and vegetable oil in a slow stream, whisking until sugar is dissolved and dressing is combined well. Toss chicken and scallions with 1/3 cup of dressing in another large bowl. Whisk remaining dressing (it will separate), then add cabbage mixture, cilantro, almonds, and sesame seeds to chicken and toss with enough remaining dressing to coat. Sprinkle with wontons (if using)."
    ],
    "image": "images/chinese-chicken-salad-234995.jpg",
    "estimatedCookTimeMins": 50,
    "estimatedCostUSD": 12.64
  },
  {
    "title": "Spicy Stir-Fried Chinese Long Beans with Peanuts",
    "ingredients": [
      "1 1/2 lb Chinese long beans*",
      "1/2 cup unsalted dry-roasted peanuts",
      "2 teaspoons soy sauce",
      "2 to 3 small fresh Thai chiles** , finely chopped",
      "1/2 teaspoon salt",
      "1 1/2 tablespoons peanut oil",
      "1 tablespoon chopped garlic",
      "1 large shallot, halved lengthwise, then very thinly sliced crosswise",
      "2 tablespoons fresh lime juice",
      "Garnish: lime wedges",
      "a well-seasoned 14-inch flat-bottomed wok"
    ],
    "instructions": [
      "Cook untrimmed beans in a 6- to 8-quart pot of boiling salted water, uncovered, stirring occasionally, until just tender, 3 to 5 minutes. Transfer with tongs to a large bowl of ice and cold water to stop cooking, then drain in a colander and pat dry with paper towels. Trim beans and cut crosswise into 3/4-inch pieces.",
      "Meanwhile, pulse peanuts in a food processor until about half of peanuts are finely ground and remainder are in very large pieces (do not grind to a paste).",
      "Stir together soy sauce, chiles, and salt in a small bowl.",
      "Heat wok over high heat until a bead of water dropped onto cooking surface evaporates immediately. Add oil, swirling to coat wok, then add garlic and stir-fry until garlic begins to turn pale golden, about 5 seconds. Add peanuts, and stir-fry until all of mixture is golden, about 30 seconds. Add beans, and stir-fry until hot and well coated, about 2 minutes. Remove wok from heat, then stir in soy sauce mixture and shallot, stirring until shallot has wilted. Drizzle in lime juice and season with salt, then transfer to a bowl. Serve warm or at room temperature.",
      "*Available at Asian markets.",
      "**Available at kalustyans.com."
    ],
    "image": "images/spicy-stir-fried-chinese-long-beans-with-peanuts-234667.jpg",
    "estimatedCookTimeMins": 60,
    "estimatedCostUSD": 13.08
  },
  {
    "title": "Fried Rice with Canadian Bacon",
    "ingredients": [
      "3 tablespoons peanut oil",
      "2 tablespoons minced peeled fresh ginger",
      "1 bunch scallions, chopped",
      "1/4 teaspoon salt",
      "3 cups cold cooked white rice",
      "1  piece Canadian bacon, cut into 1/2-inch cubes",
      "1 cup frozen baby peas, thawed",
      "2 cups fresh mung bean sprouts",
      "3 tablespoons oyster sauce",
      "1/4 cup water",
      "1/4 teaspoon Asian sesame oil"
    ],
    "instructions": [
      "Heat peanut oil in a wok or 12-inch heavy skillet over moderately high heat until smoking. Add ginger, 1/4 cup scallions, and salt and stir-fry 1 minute. Add rice and stir-fry until beginning to brown, 7 to 10 minutes. Add remaining ingredients (including scallions) and stir-fry until liquid is absorbed, about 2 minutes. Season with pepper."
    ],
    "image": "images/fried-rice-with-canadian-bacon-233994.jpg",
    "estimatedCookTimeMins": 55,
    "estimatedCostUSD": 5.66
  },
  {
    "title": "Black-Bean Shrimp with Chinese Broccoli",
    "ingredients": [
      "3/4 cup homemade chicken broth  or store-bought chicken broth",
      "3 tablespoons Chinese rice wine  or medium-dry Sherry",
      "3 teaspoons light soy sauce",
      "2 teaspoons cornstarch",
      "1 teaspoon sugar",
      "1/4 teaspoon salt",
      "1 1/2 lb gai lan",
      "1 1/2 lb large shrimp in shell , peeled and deveined",
      "1 tablespoon peanut or vegetable oil",
      "1  piece fresh ginger, peeled and cut into very thin matchsticks",
      "2 tablespoons fermented black beans, rinsed and chopped",
      "2 garlic cloves, minced",
      "1/2 fresh jalape\u00f1o chile , or to taste, cut crosswise into 1/8-inch-thick slices",
      "1 teaspoon Asian sesame oil",
      "a well-seasoned 14-inch flat-bottomed wok"
    ],
    "instructions": [
      "Stir together broth, rice wine, soy sauce, cornstarch, sugar, and salt in a small bowl until cornstarch is dissolved.",
      "Remove any bruised or withered outer leaves from gai lan, then trim and peel stalks, halving thick ones lengthwise. Cut crosswise into 2 1/2-inch pieces, separating leafy parts from thick stems.",
      "Cook stems in a 6- to 8-quart pot of boiling salted water, uncovered, until crisp-tender, about 3 minutes. Add leafy parts and cook until all of gai lan is just tender, 3 to 5 minutes. Drain well, then transfer to a clean kitchen towel and pat dry. Transfer to a large dish and keep warm, loosely covered with foil.",
      "Pat shrimp dry. Heat wok over high heat until a drop of water vaporizes instantly. Pour peanut oil around side of wok, then tilt wok to swirl oil, coating side. When oil just begins to smoke, add ginger and stir-fry 5 seconds. Add black beans, garlic, and jalape\u00f1o and stir-fry 1 minute. Working quickly, add shrimp, spreading in 1 layer on bottom and side of wok. Cook, undisturbed, 3 minutes, then stir-fry until shrimp are just pink on both sides, about 1 minute more. Stir broth mixture, then add to shrimp and bring to a boil. Boil, stirring, 2 minutes. Remove from heat and drizzle with sesame oil, then stir to combine.",
      "Pour shrimp and sauce over gai lan."
    ],
    "image": "images/black-bean-shrimp-with-chinese-broccoli-233803.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 14.1
  },
  {
    "title": "Chinese Egg Rolls",
    "ingredients": [
      "2 tablespoons oyster sauce",
      "1 tablespoon soy sauce",
      "2 teaspoons Asian sesame oil",
      "2 teaspoons sugar",
      "1/2 teaspoon salt",
      "About 4 cups peanut or vegetable oil",
      "2 teaspoons finely chopped peeled fresh ginger",
      "2 teaspoons finely chopped garlic",
      "1 1/2 bunches scallions , white and pale green parts cut into 2-inch lengths, then cut lengthwise into very thin matchsticks",
      "2 celery ribs, cut into very thin matchsticks",
      "2 medium carrots, cut into very thin matchsticks",
      "8 large fresh shiitake mushrooms, stems discarded and caps sliced 1/4 inch thick",
      "1 lb medium shrimp in shell , peeled, deveined, and coarsely chopped",
      "1/4 lb Chinese roast pork  or leftover roast pork, cut into 2-inch lengths, then cut lengthwise into very thin matchsticks",
      "1  package Asian egg roll or spring roll wrappers",
      "1 large egg, lightly beaten",
      "Accompaniments: Asian sweet chile sauce; Chinese mustard",
      "a deep-fat thermometer"
    ],
    "instructions": [
      "Stir together oyster sauce, soy sauce, sesame oil, sugar, and salt in a small bowl until sugar and salt are dissolved.",
      "Heat a dry 12-inch heavy skillet (not nonstick) over moderately high heat until hot but not smoking, then add 2 tablespoons peanut oil, swirling skillet to coat. Stir-fry ginger, garlic, and scallions until scallions are wilted, about 1 minute. Add celery, carrots, and mushrooms and stir-fry until vegetables are softened, 4 to 6 minutes. Push vegetables toward edge of skillet, then add shrimp to center and stir-fry until shrimp are just cooked through, 3 to 5 minutes. Add pork and oyster sauce mixture and stir together all ingredients in skillet until combined. Season with salt and transfer to a large shallow bowl. Cool, stirring occasionally, about 30 minutes.",
      "Gently peel apart wrappers to separate if necessary (wrappers may not be perfectly square).",
      "Put 1 wrapper on a work surface, arranging wrapper with a corner nearest you and keeping remaining wrappers covered with plastic wrap. Stir filling, then spread a scant 1/4 cup filling horizontally across center of wrapper to form a 4-inch log. Fold bottom corner over filling, then fold in side corners. Brush top corner with egg and roll up wrapper tightly to enclose filling, sealing roll closed with top corner. Transfer roll, seam side down, to a paper-towel-lined baking sheet and loosely cover with plastic wrap. Make more egg rolls in same manner, transferring to baking sheet as formed (you may have some filling left over).",
      "Put oven rack in middle position and preheat oven to 250\u00b0F. Line a large colander with paper towels. Heat 1 inch peanut oil in a 5- to 6-quart wide heavy pot until it registers 350\u00b0F on thermometer, then fry 4 or 5 egg rolls (don't crowd pot), turning with a slotted spoon, until golden brown, 3 to 5 minutes. Transfer with slotted spoon to colander and drain rolls upright 2 to 3 minutes, then keep warm on a rack set on a large baking sheet in oven. Fry remaining egg rolls in batches, transferring to colander and then to rack in oven."
    ],
    "image": "images/chinese-egg-rolls-233522.jpg",
    "estimatedCookTimeMins": 25,
    "estimatedCostUSD": 8.96
  },
  {
    "title": "Seared Tofu with with Green Beans and Asian Coconut Sauce",
    "ingredients": [
      "1  package firm tofu",
      "2 tablespoons soy sauce",
      "1/4 cup vegetable oil",
      "1 tablespoon finely chopped garlic",
      "1 tablespoon finely chopped peeled fresh ginger",
      "1/2 teaspoon dried hot red pepper flakes",
      "1 lb green beans, trimmed and cut into 2-inch-long pieces",
      "1 red bell pepper, cut into 1/4-inch-wide strips",
      "1 teaspoon salt",
      "1  can unsweetened coconut milk",
      "1 tablespoon fresh lime juice",
      "1/3 cup chopped salted roasted cashews",
      "Accompaniment: rice noodles or rice"
    ],
    "instructions": [
      "Halve tofu lengthwise, then cut crosswise into 1/2-inch-thick slices and pat dry well. Put 1 tablespoon soy sauce in a wide shallow dish, then add tofu, turning to coat, and let stand 10 minutes. Pat tofu dry.",
      "Heat oil in a 12-inch heavy skillet over high heat until hot but not smoking, then add tofu in 1 layer and cook, turning over once, until tofu is browned, about 6 minutes total. Transfer with a slotted spoon to a large plate, reserving oil in skillet.",
      "Add garlic, ginger, and red pepper flakes to skillet and saut\u00e9, stirring, until fragrant, about 30 seconds. Add beans, bell pepper, and salt and saut\u00e9, stirring, 1 minute.",
      "Stir in coconut milk and remaining tablespoon soy sauce and bring to a boil, then boil, uncovered, until beans are tender, about 6 minutes. Transfer vegetables using a slotted spoon to plate with tofu.",
      "Simmer sauce until thickened slightly and reduced to about 3/4 cup, about 2 minutes. Stir in lime juice and pour sauce over vegetables and tofu. Sprinkle with cashews."
    ],
    "image": "images/seared-tofu-with-with-green-beans-and-asian-coconut-sauce-232618.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 7.32
  },
  {
    "title": "Egg Fried Rice",
    "ingredients": [
      "1 tablespoon peanut oil",
      "4 large eggs, lightly beaten",
      "4 cups cold unsalted steamed white rice",
      "3/4 teaspoon salt",
      "1/2 cup thinly sliced scallion greens",
      "1 to 2 teaspoons Asian sesame oil",
      "a well-seasoned 14-inch flat-bottomed wok"
    ],
    "instructions": [
      "Heat wok over high heat until a drop of water vaporizes instantly upon contact. Add peanut oil, swirling to coat wok evenly, and heat until hot and just smoking. Add eggs, tilting wok and swirling eggs to form a thin even layer on cooking surface, and cook 30 seconds, then add rice and salt and stir-fry, breaking up eggs and letting rice rest several seconds between stirs, until rice is hot, 2 to 3 minutes. Add scallion greens and sesame oil (to taste) and stir-fry until combined well."
    ],
    "image": "images/egg-fried-rice-232498.jpg",
    "estimatedCookTimeMins": 35,
    "estimatedCostUSD": 8.41
  },
  {
    "title": "Chinese Hot-and-Sour Soup",
    "ingredients": [
      "5 ounces boneless pork loin, cut into 1/4-inch-thick strips",
      "2 teaspoons dark soy sauce*",
      "4 small Chinese dried black mushrooms*",
      "12 small dried tree ear mushrooms*",
      "1 1/2 tablespoons cornstarch",
      "12 dried lily buds*",
      "1/2 cup canned sliced bamboo shoots*, cut lengthwise into 1/8-inch-wide strips",
      "2 tablespoons red-wine vinegar",
      "2 tablespoons rice vinegar",
      "1 tablespoon light soy sauce*",
      "1 1/2 teaspoons sugar",
      "1 teaspoon kosher salt",
      "2 tablespoons peanut oil",
      "4 cups reduced-sodium chicken broth",
      "3 to 4 oz firm tofu , rinsed and drained, then cut into 1/4-inch-thick strips",
      "2 large eggs",
      "2 teaspoons Asian sesame oil*",
      "1 1/2 teaspoons freshly ground white pepper",
      "2 tablespoons thinly sliced scallion greens",
      "2 tablespoons fresh whole cilantro leaves",
      "*Available at Asian foods markets",
      "Uwajimaya",
      "and Kam Man Food Products Inc"
    ],
    "instructions": [
      "Toss pork with dark soy sauce in a bowl until pork is well coated.",
      "Soak black and tree ear mushrooms in 3 cups boiling-hot water in another bowl (water should cover mushrooms), turning over black mushrooms occasionally, until softened, about 30 minutes. (Tree ears will expand significantly.) Cut out and discard stems from black mushrooms, then squeeze excess liquid from caps into bowl and thinly slice caps. Remove tree ears from bowl, reserving liquid, and trim off any hard nubs. If large, cut tree ears into bite-size pieces. Stir together 1/4 cup mushroom-soaking liquid (discard remainder) with cornstarch in a small bowl and set aside.",
      "Meanwhile, soak lily buds in about 1 cup warm water until softened, about 20 minutes, then drain. Trim off tough tips of lily buds. Cut lily buds in half crosswise, then tear each half lengthwise into 2 or 3 shreds.",
      "Cover bamboo shoots with cold water by 2 inches in a small saucepan, then bring just to a boil (to remove bitterness) and drain in a sieve.",
      "Stir together vinegars, light soy sauce, sugar, and salt in another small bowl.",
      "Heat a wok over high heat until a bead of water vaporizes within 1 to 2 seconds of contact. Pour peanut oil down side of wok, then swirl oil, tilting wok to coat sides. Add pork and stir-fry until meat just changes color, about 1 minute, then add black mushrooms, tree ears, lily buds, and bamboo shoots and stir-fry 1 minute.",
      "Add broth and bring to a boil, then add tofu. Return to a boil and add vinegar mixture. Stir cornstarch mixture, then add to broth and return to a boil, stirring. (Liquid will thicken.) Reduce heat to moderate and simmer 1 minute.",
      "Beat eggs with a fork and add a few drops of sesame oil. Add eggs to soup in a thin stream, stirring slowly in one direction with a spoon. Stir in white pepper, then drizzle in remaining sesame oil and divide among 6 to 8 bowls. Sprinkle with scallions and cilantro before serving."
    ],
    "image": "images/chinese-hot-and-sour-soup-231354.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 5.29
  },
  {
    "title": "Broiled Tofu with Cilantro Pesto",
    "ingredients": [
      "1/4 cup mild olive oil plus additional for brushing",
      "2  packages firm tofu, rinsed and drained",
      "2 cups packed fresh cilantro leaves",
      "2 tablespoons pine nuts",
      "1 tablespoon fresh lime juice",
      "2 teaspoons Asian fish sauce",
      "1 teaspoon Asian sesame oil",
      "1 teaspoon sugar",
      "1/2 teaspoon salt",
      "1/8 teaspoon black pepper",
      "Garnish: pine nuts; fresh cilantro leaves; lime wedges"
    ],
    "instructions": [
      "Preheat broiler and lightly oil a shallow flameproof baking pan with olive oil.",
      "Cut each block of tofu crosswise into 6 slices and pat dry between several layers of paper towels. Arrange in 1 layer in baking pan and brush tops of slices with more olive oil. Broil 4 to 6 inches from heat, without turning, until golden brown, about 15 minutes.",
      "While tofu is broiling, pur\u00e9e cilantro, pine nuts, lime juice, fish sauce, sesame oil, sugar, remaining 1/4 cup olive oil, salt, and pepper in a food processor until bright green and smooth, about 1 minute.",
      "Transfer tofu with a slotted spatula to a platter and serve with cilantro pesto."
    ],
    "image": "images/broiled-tofu-with-cilantro-pesto-231002.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 5.49
  },
  {
    "title": "Seared Coriander Scallops with Bok Choy and Hoisin",
    "ingredients": [
      "3/4 cup fresh orange juice",
      "2 tablespoons hoisin sauce*",
      "2 teaspoons minced peeled fresh ginger",
      "10 large sea scallops",
      "1 tablespoon coriander seeds, coarsely crushed",
      "2 teaspoons oriental sesame oil",
      "2 baby bok choy, each cut lengthwise into eighths",
      "2 tablespoons water"
    ],
    "instructions": [
      "Whisk orange juice, hoisin sauce, and ginger in small bowl. Pat scallops dry on paper towels. Sprinkle coriander seeds over top of scallops, pressing to adhere. Heat sesame oil in large nonstick skillet over high heat. Add scallops, coriander side down, and cook just until opaque in center, turning once, about 1 1/2 minutes per side. Transfer scallops to plate. Add bok choy and 2 tablespoons water to skillet; saut\u00e9 until wilted, about 2 minutes. Using tongs, divide bok choy between 2 plates, then top with scallops. Add hoisin mixture to same skillet; boil until reduced to 1/3 cup, about 2 minutes. Drizzle sauce over scallops and bok choy.",
      "*Hoisin sauce, a thick mixture of ground soybeans, garlic, chiles, and spices, is used as a condiment and ingredient in Chinese cooking. It can be found in the Asian foods section of many supermarkets and at Asian markets."
    ],
    "image": "images/seared-coriander-scallops-with-bok-choy-and-hoisin-230929.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 6.42
  },
  {
    "title": "Steamed Chicken with Black Mushrooms and Bok Choy",
    "ingredients": [
      "12 dried shiitake mushrooms*",
      "2 cups boiling-hot water",
      "2 1/2 lb skinless chicken thighs",
      "1/4 cup soy sauce",
      "2 tablespoons Chinese rice wine or medium-dry Sherry",
      "2 tablespoons cornstarch",
      "1 teaspoon Asian sesame oil",
      "1/2 teaspoon salt",
      "3 scallions, cut into 1-inch pieces",
      "1 tablespoon minced peeled fresh ginger",
      "1 1/2 lb baby bok choy , trimmed, halved lengthwise, and washed well",
      "Accompaniment: steamed rice",
      "Garnish: thinly sliced scallion",
      "a heavy cleaver; a 13- to 14-inch wok with a lid and a 9-inch round metal cooling rack or a deep 12-inch skillet fitted with a 12-inch steamer insert; a 9- to 9 1/2-inch  deep-dish pie plate"
    ],
    "instructions": [
      "Soak shiitakes in boiling-hot water in a bowl until softened, about 30 minutes. Cut out and discard stems, then squeeze excess liquid from caps and discard soaking liquid.",
      "Hack each chicken thigh crosswise through bone into thirds with cleaver.",
      "Stir together soy sauce, rice wine, cornstarch, sesame oil, and salt in a large bowl until smooth, then add chicken, mushroom caps, scallions, and ginger and toss well to coat. Marinate at room temperature, stirring occasionally, 30 minutes.",
      "Put rack into wok and add enough water to reach just below it. (If using a steamer insert, use approximately 4 inches of water.) Cover wok (or skillet) and bring water to a boil. Transfer chicken mixture to pie plate and put in wok (or skillet), then steam, covered, stirring once, until chicken is just cooked through, about 25 minutes.",
      "While chicken is steaming, cook bok choy, uncovered, in a 4- to 6-quart pot of (unsalted) boiling water until just tender, 7 to 9 minutes, then drain in a colander.",
      "Carefully remove pie plate from wok. Arrange bok choy around edge of a large deep platter and spoon chicken and sauce in center.",
      "*Available at Asian markets, many supermarkets, and Uwajimaya (800-889-1928)."
    ],
    "image": "images/steamed-chicken-with-black-mushrooms-and-bok-choy-230450.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 9.11
  },
  {
    "title": "Szechuan Sesame Noodles",
    "ingredients": [
      "8 ounces thin dried Asian noodles or linguine",
      "4 tablespoons oriental sesame oil",
      "3 tablespoons chopped peanuts",
      "2 tablespoons finely chopped peeled fresh ginger",
      "3 large garlic cloves, minced",
      "6 tablespoons bottled teriyaki sauce",
      "2 tablespoons fresh lime juice",
      "1 teaspoon chili-garlic sauce",
      "1 1/2 cups thinly sliced green or red onions"
    ],
    "instructions": [
      "Cook noodles in large pot of boiling salted water until tender but still firm to bite. Drain; return noodles to same pot. Mix in 1 tablespoon oil and peanuts.",
      "Heat 3 tablespoons oil in heavy small skillet over medium-low heat. Add ginger and garlic; stir 10 seconds. Add teriyaki sauce, lime juice and chili sauce; simmer 30 seconds. Mix sauce and onions into noodles. Season with salt and pepper. Serve warm or at room temperature."
    ],
    "image": "images/szechuan-sesame-noodles-102196.jpg",
    "estimatedCookTimeMins": 45,
    "estimatedCostUSD": 5.12
  },
  {
    "title": "Ma-Po Tofu",
    "ingredients": [
      "1/4 cup chicken broth",
      "2 tablespoons hot bean paste",
      "2 tablespoons soy sauce",
      "Additive-free kosher salt to taste",
      "1 lb regular or soft  tofu, drained and cut into 1/2-inch cubes",
      "1 1/2 to 2 tablespoons corn, peanut, or canola oil",
      "1/2 lb ground pork shoulder",
      "1 tablespoon plus 1 teaspoon finely minced garlic",
      "1 tablespoon plus 1 teaspoon finely minced peeled fresh ginger",
      "1 tablespoon cornstarch dissolved in 2 tablespoons water",
      "1 1/2 teaspoons Japanese sesame oil",
      "1/2 to 1 teaspoon toasted Sichuan-peppercorn powder",
      "3 tablespoons thinly sliced scallion",
      "Accompaniment: steamed rice"
    ],
    "instructions": [
      "Stir together broth, bean paste, soy sauce, and kosher salt. Set aside.",
      "Slide tofu into a saucepan of simmering water and keep at a bare simmer while stir-frying rest of dish.",
      "Heat a wok or large heavy skillet over high heat until hot and add 1 1/2 tablespoons corn oil, swirling to coat. Add pork and stir-fry, breaking up lumps and adding remaining 1/2 tablespoon corn oil if meat sticks, until no longer pink. Add garlic and ginger and stir-fry over moderate heat until very fragrant, about 2 minutes.",
      "Stir reserved sauce, then add to pork and bring to a simmer. Drain tofu in a large sieve and slide into sauce, stirring gently.",
      "Stir cornstarch mixture and add to stir-fry. Bring to a boil, stirring gently, and cook until thickened and glossy, about 15 seconds.",
      "Turn off heat and sprinkle with sesame oil, Sichuan-peppercorn powder to taste, and 2 tablespoons scallion. Stir once or twice, then serve sprinkled with remaining tablespoon scallion."
    ],
    "image": "images/ma-po-tofu-103565.jpg",
    "estimatedCookTimeMins": 40,
    "estimatedCostUSD": 8.82
  }
];