//BIG LIST of food
var food=["Alfalfa Sprouts",
"Apple",
"Apricot",
"Artichoke",
"Asian Pear",
"Asparagus",
"Atemoya",
"Avocado",
"Bamboo Shoots",
"Banana",
"Baked Alaska",
"Banana bread",
"Barbecue",
"Beans",
"Beef",
"Bean Sprouts",
"Beets",
"Belgian Endive",
"Bitter Melon",
"Bell Peppers",
"Blackberries",
"Blueberries",
"Bok Choy",
"Boniato",
"Burrito",
"Butter",
"Boysenberries",
"Breakfast Burrito",
"Bread pudding",
"Broccoflower",
"Broccoli",
"Brownie",
"Brussels Sprouts",
"Burger",
"Cabbage",
"Cantaloupe",
"Carambola",
"Cake",
"Carrots",
"Casaba Melon",
"Cauliflower",
"Celery",
"Cereal",
"Cupcake",
"Chayote",
"Cheese",
"Cheesesteak",
"Cheesecake",
"Clam chowder",
"Chicken",
"Chicken wings",
"Chicken parm",
"Cherimoya",
"Chicken fried steak",
"Cherries",
"Cheeseburger",
"Chesscake",
"Coconuts",
"Cookies",
"Coleslaw",
"Cornbread",
"Cocktail",
"Collard Greens",
"Corn",
"Cornbread",
"Cornflakes",
"Cranberries",
"Cucumber",
"Dates",
"Dried Plums",
"Donuts",
"Eggplant",
"Egg",
"Endive",
"Escarole",
"Feijoa",
"Fennel",
"Fudge",
"Fried Chicken",
"Figs",
"Fish",
"Fish sticks",
"French fries",
"Garlic",
"Gooseberries",
"Grapefruit",
"Grapes",
"Green Beans",
"Graham crackers",
"Green Onions",
"Greens",
"Guava",
"Hominy",
"Hot dog",
"Hamburger",
"Honeydew Melon",
"Horned Melon",
"Iceberg Lettuce",
"Ice cream",
"Jerusalem Artichoke",
"Jicama",
"Jello",
"Kale",
"Kiwifruit",
"Kohlrabi",
"Kumquat",
"Kale",
"Leeks",
"Lemons",
"Lettuce",
"Lima Beans",
"Limes",
"Longan",
"Lobster",
"Loquat",
"Lychee",
"Madarins",
"Malanga",
"Mandarin Oranges",
"Mac and cheese",
"Macaroni salad",
"Mangos",
"Milk",
"Mozzarella Sticks",
"Mulberries",
"Mushrooms",
"Napa",
"Nuts",
"Nectarines",
"Okra",
"Onion",
"Oranges",
"Onion rings",
"Oysters",
"Pasta",
"Papayas",
"Parsnip",
"Passion Fruit",
"Pancakes",
"Peaches",
"Pie",
"Pears",
"Peas",
"Peppers",
"Pepperoni",
"Persimmons",
"PB&J",
"Pineapple",
"Pizza",
"Plantains",
"Plums",
"Pomegranate",
"Potatoes",
"Pork",
"Pot pie",
"Pudding",
"Prickly Pear",
"Prunes",
"Pummelo",
"Pumpkin",
"Quince",
"Radicchio",
"Radishes",
"Raisins",
"Raspberries",
"Ranch dressing",
"Rhubarb",
"Ribs",
"Rice krispie",
"Romaine Lettuce",
"Rib Roast",
"Sandwich",
"Satay",
"Salad",
"Shallots",
"Shave ice",
"Snow Peas",
"Spinach",
"Sprouts",
"Squash",
"Smores",
"Swiss roll",
"Spaghetti and meatballs",
"Steak",
"Strawberries",
"String Beans",
"Sweet Potato",
"Shrimp",
"Tangelo",
"Tangerines",
"Tomatillo",
"Tomato",
"Toast",
"Tofu",
"Turnip",
"Turkey",
"Ugli Fruit",
"Watermelon",
"Water Chestnuts",
"Watercress",
"Waxed Beans",
"Waffles",
"Yams",
"Yellow Squash",
"Yogurt",
"Yuca",
"Ziti",
"Zucchini Squash"];
//Default servings is 1
document.getElementById("Servings").value="1";
//Update search results if you type anything in search bar (using JQuery)
$("#SearchBar").on("change keyup paste", function(){
    var search=document.getElementById("SearchBar").value;
    
  if(search===""){
    for(var i=0;i<9;i++){
      document.getElementById(("button" + (i+1))).classList.add("invis");
    }
  }else{
    var goodFoods=[];
    
    for(var i=0;i<food.length;i++){
      var score=0;
      for(var c=0;c<search.length;c++){
        if(search.toLowerCase().charAt(c)==food[i].toLowerCase().charAt(c)){
          score++;
        }
        
      }
      //alert("Score: " + score);
      if (score==search.length)
      {
        goodFoods.push(food[i]);
      }

    }
    //alert(goodFoods);
    for (var i=0;i<goodFoods.length;i++){
      document.getElementById(("button" + (i+1))).innerHTML=goodFoods[i];
      document.getElementById(("button" + (i+1))).classList.remove("invis");
    }
    for (var i=8;i>goodFoods.length-1;i--){
      document.getElementById(("button" + (i+1))).classList.add("invis");
    }
  }
})
//Add selection when you press button
var selections=[];
function select(nButton){
  search="";
  document.getElementById("SearchBar").value="";
  
  for(var i=0;i<9;i++){
      document.getElementById(("button" + (i+1))).classList.add("invis");
  }
  for(var i=0;i<parseInt(document.getElementById("Servings").value);i++){
    selections.push(document.getElementById("button"+nButton).innerHTML);
  }
  //alert(selections);
  localStorage.setItem("Selections",JSON.stringify(selections));
  document.getElementById("Servings").value="1";
  document.getElementById("Check").classList.remove("disappear");
  document.getElementById("Check").classList.add("appear");
  setTimeout(() => { document.getElementById("Check").classList.add("disappear");  }, 300);
}
