import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import foodPicture from './img/food_pic.jpg';
import './App.css';
import { Menu } from './Menu';
import PadThaiImage from './img/Pad-Thai-Recipe-1.jpg';
import PananagCurryImage from './img/panang-curry.png';
import ThaiFriedRiceImage from './img/thai-fried-rice.jpg';
import ThaiRedCurryImage from './img/thai red curry.jpg';
import PadKrapowImage from './img/pad krapow.jpg';
import PadSeeEwImage from './img/pad see ew.jpg';
import SomtamImage from './img/Som tam.jpg';
import YumWoonSenImage from './img/yum woon sen.jpg';
import GaitodImage from './img/gai tod.webp';
import BananaPancakeImage from './img/banana pancake.webp';
import MooPingImage from './img/moo ping.jpg';
import KhaoNeeoMamuangImage from './img/khao neeo mamuang.jpg';

const recipies = [
  {
    name: "Pad Thai",
    description: [
      "This amazing Pad Thai recipe is easy and approachable and can be made in under 30 minutes. It starts with fresh ingredients including rice noodles, chicken, shrimp, tofu, cilantro, bean sprouts, peanuts and scrambled eggs tossed in a delicious homemade pad thai sauce that is so good it tastes like it came from your favorite Thai restaurant.",
    ],
    image: PadThaiImage,
    link: "/padthai",
    tags: [
      "fried",
      "noodles",
    ],
    ingredients: [
      {
        name: "Ingredients",
        list: [
          "8 ounces flat rice noodles",
          "3 Tablespoons oil",
          "3 cloves garlic , minced",
          "8 ounces uncooked shrimp, chicken, or extra-firm tofu , cut into small pieces",
          "2 eggs",
          "1 cup fresh bean sprouts",
          "1 red bell pepper , thinly sliced",
          "3 green onions , chopped",
          "1/2 cup dry roasted peanuts",
          "2 limes",
          "1/2 cup Fresh cilantro , chopped",
        ]
      },
      {
        name: "For sauce",
        list: [
          "3 Tablespoons fish sauce",
          "1 Tablespoon low-sodium soy sauce",
          "5 Tablespoons light brown sugar",
          "2 Tablespoons rice vinegar * see note",
          "1 Tablespoon Sriracha hot sauce , or more, to taste",
          "2 Tablespoons creamy peanut butter , optional",
        ]
      }
    ],
    instructions: [
      "Cook noodles according to package instructions, just until tender.  Rinse under cold water.",
      "Mix the sauce ingredients together. Set aside.",
      "Heat 1½ tablespoons of oil in a large saucepan or wok over medium-high heat.",
      "Add the shrimp, chicken or tofu, garlic and bell pepper. The shrimp will cook quickly, about 1-2 minutes on each side, or until pink. If using chicken, cook until just cooked through, about 3-4 minutes, flipping only once.",
      "Push everything to the side of the pan. Add a little more oil and add the beaten eggs. Scramble the eggs, breaking them into small pieces with a spatula as they cook.",
      "Add noodles, sauce, bean sprouts and peanuts to the pan (reserving some peanuts for topping at the end). Toss everything to combine.",
      "Top with green onions, extra peanuts, cilantro and lime wedges. Serve immediately!   ",
    ],

  },

  {
    name: "Pananag Curry",
    description: [
      "Thai panang chicken curry (also spelled penang like the northern Malaysian state) features a warm, rich red curry with flavor notes from Malaysia, Burma, and India.",
      "Don't be put off by the long list of ingredients in the Thai panang sauce. All of them require little to no preparation and are simply tossed in a food processor or chopper and easily blitzed. But without those ingredients, your dish will lack the rich, complex flavor it was meant to have.",
      "Traditionally, this curry would be simmered on a stovetop or over a wood fire.For ease of preparation, this recipe gives directions for oven cooking, but it can be simmered on a stovetop if desired, being sure to cover it and stir occasionally until cooked.",
    ],
    image: PananagCurryImage,
    link: "/panangcurry",
    tags: [
      "soup",
    ],
    ingredients: [
      {
        name: "Ingredients",
        list: [
          "1 tablespoon oil",
          "2 tablespoons Panang curry paste *",
          "1 tablespoon peanut butter",
          "2 pounds chicken breasts , cut into pieces against the grain",
          "1 small onion , sliced",
          "1 green bell pepper , thinly sliced",
          "1 red bell pepper , thinly sliced",
          "2 teaspoons freshly grated ginger",
          "4 garlic cloves , minced",
          "2 14 oz cans coconut milk (Chaokoh brand is my favorite)",
          "2 teaspoons cornstarch",
          "1/4 cup light brown sugar , packed",
          "1 tablespoons fish sauce",
          "1 tablespoon lime juice",
          "1 cup loosely packed basil leaves , roughly chopped",
        ]
      }
    ],
    instructions: [
      "Heat oil over medium-high heat in large non-stick skillet. Saute onions for 2 minutes, then add bell peppers, garlic and ginger and saute for 2 minutes more.",
      "Add curry paste and peanut butter and saute for 1 minute. Add 1 ½ cans of coconut milk. Whisk cornstarch into remaining 1/2 can coconut milk then add to the pan. Stir well.",
      "Add chicken, stirring to coat. Simmer for 10-15 minutes or just until chicken is no longer pink and sauce begins to thicken.",
      "Stir in sugar, fish sauce, lime juice, and basil. Simmer for 5 minutes. Season with salt and pepper, to taste.",
      "Serve over hot cooked rice.",
    ],
  },
  {
    name: "Thai Fried Rice Recipe with Shrimp",
    description: ["This easy shrimp fried rice is restaurant-quality (or better!). Fresh or frozen shrimp are quickly stir-fried with garlic and onions. Add the cooked rice, a couple of eggs, frozen peas, plus a special Thai sauce, and you have a fried rice recipe that is sure to please everyone, even your kids. A great way to use leftover rice—and leftover roasted chicken can also be added if you have some taking up space in the refrigerator. Add chili if you like it spicy. Yum!",],
    image: ThaiFriedRiceImage,
    link: "/thaifriedrice",
    tags: [
      "fried",
    ],
    ingredients: [
      {
        name: "Ingredients",
        list: [
          "1.5 cups of cooked Jasmine rice cooled (or day old rice works well too) - Or just estimate about 1 normal bowl full",
          "About 5 - 10 shrimp, head peeled, but tail on",
          "¼ of a big white onion (or ½ of a very small white onion, like I used)",
          "1 leaf of Chinese broccoli (or any crisp green leafy vegetable)",
          "2 cloves garlic",
          "1 egg",
          "½ tablespoon soy sauce",
          "½ tablespoon oyster sauce",
          "Pinch of sugar (optional)",
          "1 tablespoon of oil for frying",
        ]
      }
    ],
    instructions: [
      "If you’re using whole fresh shrimp like I did, first pinch off the head, and peel the outer shell of the shrimp, leaving only the tail on (that’s Thai style). You can also devein them if you’d like, but for small shrimp, to me it doesn’t really matter.",
      "Peel 2 cloves of garlic, and then just finely mince them",
      "Slice ¼ of a sweet white onion into medium sized strips",
      "Finely dice about 3 - 4 green onions",
      "Take just 1 leaf of Chinese broccoli (kai-lan), slice it in half first along the spine, and then slice it into 1 centimeter sized strips",
      "Turn on your stove to medium high, heat up your wok (or frying pan), and add about 1 tablespoon of oil",
      "Once your oil is hot, add the garlic first, and stir fry continuously for about 15 seconds or so, until it gets nice and fragrant",
      "Next, toss in your shrimp, and fry for about 30 seconds - your shrimp should start to turn pink and feel more firm",
      "Add in a little less than ½ of your rice first. This is going to soak up all those delicious shrimp juices and oils and keep your rice nice and dry. Stir fry for about 10 more seconds - This is a little known trick to make good rice, so it remains nice and dry",
      "Scoot all your rice to one side of the pan, and then crack in the egg into the empty side",
      "Whirl the egg up, let it cook for a few seconds, and then start to mix it up with the rice and shrimp",
      "Keep stir frying for about 20 seconds until the egg is fully cooked, and then add in the rest of your rice, and give it a quick stir",
      "Add ½ tablespoon of soy sauce, ½ tablespoon of oyster sauce, just a pinch of sugar (optional), and continue stir frying your rice, making sure all the sauce get mixed in",
      "Then add your chopped Chinese broccoli and onions, and stir fry for another 30 seconds until the vegetables wilt, but they can still be crisp and not fully cooked",
      "Lastly, toss in your green onions, stir it a few more seconds, and it’s ready",
      "Immediately dish your fried rice onto a plate",
      "Slice off a wedge of lime, and serve it on the plate next to the rice",
      "For the final touch, I like to sprinkle some freshly ground black pepper on top to give some extra flavor",
    ],
  },
  {
    name: "Thai Red Curry With Chicken",
    description: ["This aromatic and sumptuous classic Thai recipe can be made mild to red-hot, depending on your spice-o-meter. It starts with a homemade Thai red curry paste which is easily put together with your food processor or blender. Add coconut milk, chicken, and vegetables, and you have a heart-warming curry dish that will awaken your senses and boost your mood. This dish would traditionally have been simmered over a fire or stove-top, but we've adapted it to be cooked in the oven, allowing you to get on with your day. (Feel free to use the traditional method if you prefer, simmering the dish in a wok or pot on the stove, instructions for that are included below the recipe).",],
    image: ThaiRedCurryImage,
    link: "/thiaredcurry",
    tags: [
      "soup",
    ],
    ingredients: [
      {
        name: "Ingredients",
        list: [
          "1 pound pieces of chicken (thigh or breast)",
          "1 bell pepper (red, chopped)",
          "2 tomatoes (sliced into small chunks)",
          "Optional: 1 to 2 cups eggplant (chopped)",
          "2 makrut lime leaves (or substitute bay leaves)",
          "1/2 cinnamon stick (or add 1/4 tsp. cinnamon to the sauce)",
          "1 handful basil (and 1 handful coriander fresh)",
        ]
      },
      {
        name: "For the Red Curry Sauce",
        list: [
          "1 can coconut milk",
          "2 to 3 tablespoon fresh lemongrass (minced or bottled/frozen prepared lemongrass)",
          "1 shallots (or 1/4 cup purple onion, sliced)",
          "1 piece ginger (thumb-size, grated)",
          "4 to 5 garlic cloves",
          "1 to 2 chilies (red fresh, sliced, or 1/2 to 1 teaspoon cayenne pepper, to taste)",
          "2 tablespoons tomato ketchup or tomato puree",
          "2 tablespoons fish sauce",
          "1 1/2 tablespoon chili powder (or more, depending on how spicy you want it (North American chili powder from the supermarket)",
          "1/2 teaspoon cumin (ground)",
          "1/2 teaspoon coriander (ground)",
          "1 tablespoon sugar (brown, to taste)",
          "1 teaspoon shrimp paste (or 1 extra tablespoon fish sauce)",
          "2 tablespoons lime juice (fresh)",
        ]
      }
    ],
    instructions: [
      "Preheat oven to 350 F. Set chicken pieces in a fairly large casserole dish.",
      "Place all curry sauce ingredients in a food processor or blender. Process well. Pour the curry sauce over chicken. Add chopped eggplant (if using), plus makrut lime leaves/bay leaf and cinnamon stick, mixing everything into the sauce. Cover and bake 45 minutes at 350 F. Note: if you prefer more sauce, add 1/4 to 1/3 cup good-tasting chicken stock. (*If you prefer to cook this curry on your stovetop, see instructions below.)",
      "Remove dish from oven. Add the bell pepper and tomato, stirring them into the sauce. Return curry to the oven for 15 to 20 minutes, or until both chicken and vegetables are well cooked.",
      "Do a taste test, looking for a balance of flavors. If not salty or flavorful enough, add up to 1 tablespoon more fish sauce. If too salty, add more fresh lime juice. If too sour, add a little more brown sugar. If too spicy, add more coconut milk. If not spicy enough, add a few fresh-cut chilies or dried crushed chili.",
      "Transfer curry into a large serving bowl. Sprinkle generously with chopped fresh basil and coriander, and serve with plenty of Thai jasmine rice.",
    ],
  },
  {
    name: "Pad Krapow Gai",
    description: [
      "This Thai basil chicken recipe takes just 3 minutes to prepare and 7 minutes to cook. Served along with steamed rice, it's restaurant food, fast.",
    ],
    image: PadKrapowImage,
    link: "/padkrapow",
    tags: [
      "fried",
    ],
    ingredients: [
      {
        name: "Ingredients",
        list: [
          "3 to 4 tablespoons oil",
          "3 Thai bird chilies or holland chilies (de-seeded if desired and thinly sliced)",
          "3 shallots (thinly sliced)",
          "5 cloves garlic (sliced)",
          "1 pound ground chicken (450g)",
          "2 teaspoons sugar (or honey)",
          "2 tablespoons soy sauce",
          "1 tablespoon fish sauce",
          "1/3 cup low sodium chicken broth (or water)",
          "1 bunch holy or Thai basil leaves",
        ]
      }
    ],
    instructions: [
      "In a wok over high heat, add the oil, chilies, shallots and garlic, and fry for 1-2 minutes. Add the ground chicken and stir-fry for 2 minutes, breaking up the chicken into small bits.",
      "Add the sugar, soy sauce, and fish sauce. Stir-fry for another minute and deglaze the pan with the broth. Because your pan is over high heat, the liquid should cook off very quickly.",
      "Add the basil, and stir-fry until wilted. Serve over rice.",
    ],
  },
  {
    name: "Pad See Ew",
    description: [
      "Pad See Ew is what I would consider Thai fast food or Thai street food. Whatever the classification, Pad See Ew is always a favorite among family and guests",
    ],
    image: PadSeeEwImage,
    link: "/padseeew",
    tags: [
      "fried",
      "noodles",
    ],
    ingredients: [
      {
        name: "For the steak & marinade",
        list: [
          "8 ounces flank steak (225g, sliced into ⅛-inch thick slices)",
          "1 teaspoon Thai black soy sauce (Thai soy sauce is saltier than Chinese brands)",
          "1 teaspoon vegetable oil",
          "1 teaspoon cornstarch (or tapioca starch)",
        ]
      },
      {
        name: "For the rest of the dish",
        list: [
          "1 tablespoon oyster sauce",
          "½ teaspoon sugar",
          "2 teaspoons Thai soy sauce (or regular soy sauce)",
          "1 tablespoon Thai black soy sauce",
          "1 teaspoon fish sauce",
          "Freshly ground white pepper (to taste)",
          "1 pound fresh wide rice noodles (you can also use dried rice noodles)",
          "4 tablespoons vegetable oil",
          "3 cloves garlic (sliced thinly)",
          "3 cups Chinese broccoli (cut into 2-inch pieces)",
          "2 large eggs (slightly beaten)",
        ]
      }
    ],
    instructions: [
      "To the flank steak, add the Thai black soy sauce, vegetable oil, and cornstarch, and mix until the beef is completely coated. Set aside.",
      "For the rest of the dish, combine the oyster sauce, sugar, Thai soy sauce, Thai black soy sauce, fish sauce, and white pepper in a small bowl. Stir to mix well.",
      "Make sure your fresh rice noodles are at room temperature. If the noodles are really cold and stiff from refrigeration, rinse them quickly under hot tap water when you are ready to stir-fry the dish. This extra step will help you avoid a big homogenous lump of noodles during stir-frying. Be sure to shake off any excess water after rinsing and use them immediately.",
      "The fresh wide rice noodles really set this dish apart from other noodle dishes, so try your best to find them. Or you can use our recipe for homemade rice noodles to make them at home. If either of these options don’t work, then use dried rice noodles. If using a dried rice noodle, follow the directions on the package and make sure you undercook the noodles slightly (al dente), since you will be cooking them again in the wok. After you drain the noodles thoroughly, toss the noodles with a tablespoon of oil. This will prevent them from sticking to the wok.",
      "Heat your wok over high heat until it just starts to smoke, and spread 1 tablespoon of oil around the perimeter of the wok evenly to coat. Sear the beef until it is 80% cooked through, and transfer back to the marinade bowl.",
      "Add another tablespoon of oil to the wok and stir in the garlic. Immediately add the Chinese broccoli and stir-fry for 20 seconds (stir constantly to prevent the garlic from burning).",
      "Next, spread the noodles around the wok. Continue to work quickly--your wok should be at the highest heat setting. Spread the sauce mixture over the top of the noodles, and gently mix everything with your wok spatula using a scooping motion for about 20 seconds. Add the beef back to wok.",
      "Push the mixture to one side to let the empty side of the wok heat for 10 seconds. Add another tablespoon of oil to the wok, and add the beaten eggs. Wait 5 seconds for them to begin to cook. Scramble the eggs for another few seconds, breaking them up into smaller pieces.",
      "If your wok is not sizzling at this point, it probably means that your burner is not hot enough. Be patient, and the heat should “catch up.” Stir-fry the mixture just enough so the noodles heat up evenly, but don’t break into small pieces. Make sure you use your wok spatula to scrape the bottom of the wok so the noodles don’t stick.",
      "As the wok heats up, you will notice that the food will stick to it less readily! But if you need to, you can add a little oil to make it easier to stir-fry.",
      "Continue cooking, stirring less frequently (so the noodles get slightly caramelized, creating that restaurant-style flavor) for another 1 to 2 minutes, or until the noodles are heated through. Serve hot with Homemade Chili Oil or Chiu Chow Sauce on the side",
    ],
  },
  {
    name: "Thai green papaya salad",
    description: [
      "Thai green papaya salad, which in Thailand is known as as som tam, is one of the most commonly available and popularly consumed dishes in Thailand.Som tam originates in the northeastern part of the Thailand (Isaan), which is on the border of Laos, where the same dish is a staple as well. You’ll now find green papaya salad everywhere throughout Thailand, and on just about every street corner in Bangkok.",
    ],
    image: SomtamImage,
    link: "/somtam",
    tags: [
      "salad",
    ],
    ingredients: [
      {
        name: "Ingredients",
        list: [
          "2 cloves of garlic",
          "5 Thai chillies (up to you how many depending on how spicy you want it)",
          "2 tablespoons shelled roasted peanuts",
          "1 tablespoon fish sauce",
          "½ - 1 tablespoon palm sugar (can also substitute brown sugar)",
          "1 - 2 limes (I used about 2, but I like things pretty sour)",
          "1 tablespoon of dried shrimp (optional)",
          "1 - 2 small tomatoes (the som tam tomatoes in Thailand are different from regular tomatoes - they are known as sida tomatoes, but you could use just 1 roma tomato)",
          "1 big handful of slivered green papaya (depending on the size of your papaya, I used only about ⅓ of my papaya in this recipe, but papayas come in many different sizes and shapes)",
        ]
      },
      {
        name: "To garnish",
        list: [
          "Long-beans or green beans",
          "Green cabbage",
          "Thai sweet basil",
          "More roasted peanuts",
        ]
      }
    ],
    instructions: [
      "After washing the green papaya, peel off the skin using a carrot peeler (or a knife will do as well). You can then either use a cheese grater to shave the papaya, or you can do it the traditional way and hack at the papaya with your knife until there are numerous vertical cuts, then shave off the top layer into thin slivers, and repeat. I like the traditional method as you get bigger, un-even, pieces of green papaya. Cut enough green papaya to have a big handful worth for this recipe.",
      "Add 2 cloves of peeled garlic and 5 chillies (or however many you like) to the mortar (krok). Pound them for a few seconds until the garlic is crushed and chilies are reduced to small bits.",
      "Add ½ tablespoon of palm sugar, 1 tablespoon of fish sauce, and then squeeze the juice from 1 - 2 limes into the mortar. You can always start with less seasoning and add more to your liking.",
      "Mix and pound the dressing, making sure the palm sugar gets fully dissolved into the liquid (so no one bites into a chunk of pure palm sugar).",
      "Add about 1 tablespoon of roasted peanuts (no need to measure, just grab some with your hand), 1 tablespoon of dried shrimp, and then roughly slice in the tomatoes into the mortar.",
      "Pound the mixture for about 30 seconds, lightly breaking up the tomatoes, shrimp, and peanuts. No need to pound too hard.",
      "Last step is to toss in a big handful of the green papaya shavings. Mix it all together, doing a combination of using just a spoon and pounding lightly, but no need to pound hard. Make sure the dressing is coating all the green papaya and that the salad is evenly mixed through and through.",
    ],
  },
  {
    name: "Yum Woon Sen",
    description: [
      "Yum woon sen is the name for a spicy Thai salad made with glass noodles, ground pork, chili peppers, and dressings. The noodles and the pork are cooked separately, then combined with crunchy chopped vegetables and drizzled over with fish sauce and lime juice. Once assembled, the salad is traditionally topped with peanuts, although some places use shrimps as the topping of choice. Because yum woon sen is typically quite spicy, people often consume it with steamed rice and lettuce on the side.",
    ],
    image: YumWoonSenImage,
    link: "/yumwoonsen",
    tags: [
      "salad",
    ],
    ingredients: [
      {
        name: "Ingredients",
        list: [
          "40 g dry glass noodles (bean threads)",
          "1 heaping Tbsp dried shrimp",
          "2 cloves garlic",
          "10 sprigs cilantro, stems and leaves separated",
          "Thai chilies, to taste",
          "1 Tbsp palm sugar, finely chopped, packed",
          "2 Tbsp + 1 tsp fish sauce",
          "3 Tbsp fresh lime juice",
          "1 tomato, cut into wedges",
          "¼ cup julienned onion",
          "1 stalk Chinese celery or 2 inner small stalks and leaves of regular celery",
          "100 g ground pork",
          "6 medium shrimp",
          "¼ cup roasted peanuts",
        ]
      }
    ],
    instructions: [
      "Soak noodles in room temperature water for 7-10 minutes until soft and pliable. Drain, then cut the noodles with scissors 2-3 times to shorten them. ",
      "Place dried shrimp in a small heatproof bowl, cover with hot water and let sit for 3-4 minutes to soften. You can also cover the shrimp with room temp water then microwave for 1 minute, then let it sit for a few more minutes. (If you’re using large dried shrimp, they will take longer to soften).",
      "Place tomato, onion and Chinese celery into a large mixing bowl. When the dried shrimp are ready, drain and pound them in a mortar and pestle until they are broken into smaller pieces. Alternately you can chop them roughly. Add dried shrimp to the mixing bowl.",
      "Cut cilantro stems into small chunks and place in the mortar and pestle along with garlic and chilies; pound into a paste. Add palm sugar and pound until dissolved. Add 2 Tbsp of the fish sauce and lime juice and stir to mix.",
      "Bring a pot of water to a boil, add glass noodles and cook for 2 minutes. Remove from the water with tongs (you want to keep the water) and place into a strainer to drain excess water; set aside.",
      "Add fresh shrimp into the remaining liquid and cook for 30-45 seconds or until they are done. Place the shrimp into the mixing bowl.",
      "Pour out the cooking water, leaving just enough water to cover the bottom, and return the pot back on the stove. Once the water boils, add the pork along with 1 tsp of fish sauce and stir until fully cooked. Use a slotted spoon to remove the pork from the liquid and place into the mixing bowl.  Then add about 1 Tbsp of the pork cooking liquid into the mixing bowl as well.",
      "Add noodles into the mixing bowl, pour the dressing over and quickly toss to combine.",
      "Toss in cilantro leaves and plate. Sprinkle with peanuts and serve immediately",
    ],
  },
  {
    name: "Gai Tod/Thai Fried Chicken",
    description: [
      "Although Gai Tod looks just like any ordinary fried chicken that can be bought in the west, many visitors are surprised by just how good it tastes. Dipped in a mixture of shallots and oil, Gai Tod has an incredible light and fluffy batter without any of the grease that is common in western fast food fried chicken. Gai Tod is a Thai street food fusion classic.",
    ],
    image: GaitodImage,
    link: "/gaitod",
    tags: [
      "streetfood",
    ],
  },
  {
    name: "Banana Roti/Banana Pancake",
    description: [
      "This is a hugely popular sweet street food in Thailand. It’s a crispy fried pancake with banana slices inside it served with a condensed milk dressing on top. Just one bite will make you fall in love with this sweet, crispy, and crunchy street treat.",
    ],
    image: BananaPancakeImage,
    link: "/bananapancake",
    tags: [
      "streetfood",
    ],
  },
  {
    name: "Moo Ping/Grilled Pork Skewers",
    description: [
      "Commonly seen in night markets and food streets, moo ping is an absolutely must-try street food in Thailand. You will not only see pork grilled at each vendor’s stall but also many other types of grilled meat and protein, such as chicken, fish, and beef. Every vendor makes his/her marinade a little differently but they are all somewhat sweet, savory, and garlicky.",
    ],
    image: MooPingImage,
    link: "/mooping",
    tags: [
      "streetfood",
    ],
  },
  {
    name: "Khao Neeo Mamuang/Mango Sticky Rice",
    description: [
      "This is an authentic tasting Thai dessert. It is made of glutinous rice, fresh coconut milk, and a ripe mango. The flavors are incredibly tasty and fresh. If you arrive in Thailand during the peak mango season, which is from April to May, be sure to try one of these desserts from a street vendor — you won’t regret it.",
    ],
    image: KhaoNeeoMamuangImage,
    link: "/khaoneeomamung",
    tags: [
      "streetfood",
    ],
  },
];

const tags = [
  "soup",
  "fried",
  "salad",
  "noodles",
  "streetfood",
];

function Home() {
  return (
    <section className="cards">
      {
        recipies.map(function (recipe) {
          return (
            <article className="card">
              <Link to={recipe.link}>
                {
                  recipe.image ? <picture><img src={recipe.image}></img></picture> : <span />
                }
                <div className="card-content">
                  <h2>{recipe.name}</h2>
                  {recipe.description.map(line =>
                    <p>{line}</p>
                  )}

                  <div className="card-footer">
                    {
                      recipe.tags.map(tag =>
                        <span className="card-tag">{tag}</span>
                      )
                    }
                  </div>
                </div>
              </Link>
            </article>);
        })
      }
    </section>
  )
}

function RecipesPage({ recipes }) {
  return (
    <section className="cards">
      {
        recipes.map(recipe =>
          <article className="card">
            <Link to={recipe.link}>
              {
                recipe.image ? <picture><img src={recipe.image}></img></picture> : <span />
              }
              <div className="card-content">
                <h2>{recipe.name}</h2>
                {recipe.description.map(line =>
                  <p>{line}</p>
                )}
                <div className="card-footer">
                  {
                    recipe.tags.map(tag =>
                      <span className="card-tag">{tag}</span>
                    )
                  }
                </div>
              </div>
            </Link>
          </article>)
      }
    </section>
  )
}
function RecipePage(recipe) {
  return (
    <div className="recipepage">
      <h2>{recipe.name}</h2>
      <img src={recipe.image}></img>
      {recipe.description.map(line =>
        <p>{line}</p>
      )}
      {
        recipe.ingredients && recipe.ingredients.map(ingredient =>
          <div>
            <h3>{ingredient.name}</h3>
            <ul>
              {ingredient.list.map(item =>
                <li>{item}</li>
              )}
            </ul>
          </div>
        )
      }
      {
        recipe.instructions && (
          <div>
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions.map(instruction =>
                <li>{instruction}</li>
              )}
            </ol>
          </div>)
      }
    </div>
  )
}

function PadThai() {
  return (
    <div className="padthaipage">
      <h2>Pad Thai</h2>
      <img className="padthai" src={PadThaiImage}></img>
      <p>Ingredients</p>
      <ul>
        <li>8 ounces flat rice noodles</li>
        <li>3 Tablespoons oil</li>
        <li>3 cloves garlic , minced</li>
        <li>8 ounces uncooked shrimp, chicken, or extra-firm tofu , cut into small pieces</li>
        <li>2 eggs</li>
        <li>1 cup fresh bean sprouts</li>
        <li>1 red bell pepper , thinly sliced</li>
        <li>3 green onions , chopped</li>
        <li>1/2 cup dry roasted peanuts</li>
        <li>2 limes</li>
        <li>1/2 cup Fresh cilantro , chopped</li>
      </ul>
      <p>For the Pad Thai sauce</p>
      <ul>
        <li>3 Tablespoons fish sauce</li>
        <li>1 Tablespoon low-sodium soy sauce</li>
        <li>5 Tablespoons light brown sugar</li>
        <li>2 Tablespoons rice vinegar</li>
        <li>1 Tablespoon Sriracha hot sauce , or more, to taste</li>
        <li>2 Tablespoons creamy peanut butter , optional</li>
      </ul>
      <p>Instructions</p>
      <ol>
        <li>Cook noodles according to package instructions, just until tender.  Rinse under cold water.</li>
        <li>Mix the sauce ingredients together. Set aside.</li>
        <li>Heat 1½ tablespoons of oil in a large saucepan or wok over medium-high heat.</li>
        <li>Add the shrimp, chicken or tofu, garlic and bell pepper. The shrimp will cook quickly, about 1-2 minutes on each side, or until pink. If using chicken, cook until just cooked through, about 3-4 minutes, flipping only once.</li>
        <li>Push everything to the side of the pan. Add a little more oil and add the beaten eggs. Scramble the eggs, breaking them into small pieces with a spatula as they cook.</li>
        <li>Add noodles, sauce, bean sprouts and peanuts to the pan (reserving some peanuts for topping at the end). Toss everything to combine.</li>
        <li>Top with green onions, extra peanuts, cilantro and lime wedges. Serve immediately!</li>
      </ol>
    </div>
  )
}
function PanangCurry() {
  return (
    <div className="panangcurrypage">
      <h2>Pananag Curry</h2>
      <img className="panangcurry" src={PananagCurryImage}></img>
      <p>Ingredients</p>
      <ul>
        <li>1 tablespoon oil</li>
        <li>2 tablespoons Panang curry paste</li>
        <li>1 tablespoon peanut butter</li>
        <li>2 pounds chicken breasts , cut into pieces against the grain</li>
        <li>1 small onion , sliced</li>
        <li>1 green bell pepper , thinly sliced</li>
        <li>1 red bell pepper , thinly sliced</li>
        <li>2 teaspoons freshly grated ginger</li>
        <li>4 garlic cloves , minced</li>
        <li>2 14 oz cans coconut milk (Chaokoh brand is my favorite)</li>
        <li>2 teaspoons cornstarch</li>
        <li>1/4 cup light brown sugar , packed</li>
        <li>1 tablespoons fish sauce</li>
        <li>1 tablespoon lime juice</li>
        <li>1 cup loosely packed basil leaves , roughly chopped</li>
      </ul>
      <p>Instructions</p>
      <ol>
        <li>Heat oil over medium-high heat in large non-stick skillet. Saute onions for 2 minutes, then add bell peppers, garlic and ginger and saute for 2 minutes more.</li>
        <li>Add curry paste and peanut butter and saute for 1 minute. Add 1 ½ cans of coconut milk. Whisk cornstarch into remaining 1/2 can coconut milk then add to the pan. Stir well.</li>
        <li>Add chicken, stirring to coat. Simmer for 10-15 minutes or just until chicken is no longer pink and sauce begins to thicken.</li>
        <li>Stir in sugar, fish sauce, lime juice, and basil. Simmer for 5 minutes. Season with salt and pepper, to taste.</li>
        <li>Serve over hot cooked rice.</li>
      </ol>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <Menu></Menu>
        <img className="cover" src={foodPicture}></img>
        <div className="content">
          <div className="center-content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Redirect from="/first-project" to="/" />
              {recipies.map(recipe =>
                <Route path={recipe.link}>
                  <RecipePage {...recipe}></RecipePage>
                </Route>
              )}
              {tags.map(tag =>
                <Route path={"/recipes/" + tag}>
                  <RecipesPage recipes={recipies.filter(r => r.tags.includes(tag))}></RecipesPage>
                </Route>
              )}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
