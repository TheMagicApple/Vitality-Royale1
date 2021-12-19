//Categorizing
var vitA = ["Fish", "Cheese", "Butter", "Egg", "Kale", "Greens", "Carrot", "Peppers", "Spinach", "Lettuce"];
var vitB = ["Fish", "Spinach", "Lettuce", "Egg", "Milk", "Beef", "Chicken", "Turkey", "Yogurt", "Pork"];
var vitC = ["Dried plums", "Cherries", "Peppers", "Guava", "Spinach", "Kale", "Kiwifruit", "Broccoli", "Brussels Sprouts", "Lemons", "Lychee", "Papayas", "Strawberries", "Oranges", "Pomegranates"];
var vitD = ["Fish", "Egg", "Mushrooms", "Milk", "Cereal", "Beef"];
var vitE = ["Nuts", "Fish", "Avocado", "Peppers", "Mango", "Greens", "Kiwifruit"];
var vitK = ["Kale", "Spinach", "Greens", "Lettuce", "Brussels Sprouts", "Broccoli", "Cauliflower", "Cabbage", "Fish", "Meat", "Egg", "Cereal"];
var vitB12 = ["Fish", "Spinach", "Greens", "Lettuce", "Egg", "Milk", "Beef", "Oysters", "Chicken", "Turkey", "Yogurt", "Pork", "Cereal"];
var protein = ["Beef", "Lamb", "Pork", "Chicken", "Turkey", "Fish", "Oysters", "Milk", "Cheese","Tofu", "Barbecue", "Cheesesteak", "Chicken wings", "Chicken fried steak", "Fried Chicken", "Hamburger", "Lima Beans", "PB&J", "Steak", "Tofu", "Burger", "Cheeseburger"];
var dairy = ["Cheese", "Milk", "Ice Cream", "Yogurt"];
var carbs = ["Cereal", "Pasta", "Donut", "Potato", "French Fries", "Bread", "Milk", "Corn", "Spaghetti", "Sandwich", "Sweet Potato", "Brownie", "Cheesecake", "Chesscake", ""];
var minerals = ["Nuts", "Shrimp", "Egg", "Avocado", "Beef"];
var sugar=["Baked Alaska", "Banana Bread", "Bread Pudding", "Cake", "Cupcake", "Cheesecake", "Chesscake", "Cookies", "Donuts", "Fudge", "Graham Crackers", "Ice cream", "Jello", "Pie", "Rice krispies", "Smores"];
var selections = JSON.parse(localStorage.getItem("Selections"));
var categories = [vitA, vitB, vitC, vitD, vitE, vitK, vitB12, protein, dairy, carbs, minerals,sugar];

//Sample selections = ["Egg","Egg","Egg","Egg","Egg","Egg","Egg","Egg","Egg","Egg","Egg","Cherries","Cherries","Cherries", "Butter", "Beef"];

var points = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var recommended = [9, 4, 2, 3, 6, 3, 3, 6, 3, 4, 2, 10];


var environmentBad = [["Beef", 57], ["Steak", 57],  ["Cheesesteak", 57],  ["Burger", 57],  ["Cheeseburger", 57], ["Lamb", 55], ["Shellfish", 24], ["Pork", 17], ["Chicken", 11], ["Fish", 7.5], ["Asparagus", 19.6], ["Butter", 26.5]];

//Record points for each food category
for (var i = 0; i < selections.length; i++) {
  for (var c = 0; c< categories.length; c++)
  {
    currentCategory = categories[c];
    for (var k = 0; k < currentCategory.length; k++) {
      if (currentCategory[k].toLowerCase() == selections[i].toLowerCase()) {
        points[c]++;
      }
    }
  }
  
}
//vit A rec: 9 Points
//vit B rec: 4 Points
//vit C rec: 2 points
//vit D rec: 3 points
//vit E rec: 6 points
//vit K rec: 2 points
//vit B12 rec: 2 points
var ratings = []
//Assign ratings for each category
for (var i = 0; i < points.length-1; i++) {
  if (points[i] <= recommended[i] / 3) {
    ratings.push("Terrible");
  }
  else if (points[i] <= recommended[i] / 2) {
    ratings.push("Bad");
  }
  else if (points[i] <= 3 * (recommended[i] / 4)) {
    ratings.push("OK");
  }
  else if (points[i] <= 5 * (recommended[i] / 4)) {
    ratings.push("Good");
  } else {
    ratings.push("Amazing!");
  }
}
  if (points[11] <= recommended[11] / 3) {
    ratings.push("Amazing!");
  }
  else if (points[11] <= recommended[11] / 2) {
    ratings.push("Good");
  }
  else if (points[11] <= 3 * (recommended[11] / 4)) {
    ratings.push("OK");
  }
  else if (points[11] <= 5 * (recommended[11] / 4)) {
    ratings.push("Bad");
  } else {
    ratings.push("Terrible");
  }
//Rate sugar
var healthRating = 0;
for (var i = 0; i < ratings.length; i++) {
  if (ratings[i] == "Bad") {
    healthRating += 1;
  } else if (ratings[i] == "OK") {
    healthRating += 2;
  } else if (ratings[i] == "Good") {
    healthRating += 3;
  } else if (ratings[i] == "Amazing!") {
    healthRating += 4;
  }
}
healthRating = healthRating * 2.08;
//0-25:terrible
//25-50: not great
//50-60: ok
//60-75: good
//75-90: great
//90-100: amazing
//Assign word based on number rating
var healthRatingWord = ""
if (healthRating <= 25) {
  healthRatingWord = "Terrible";
} else if (healthRating <= 50) {
  healthRatingWord = "Not great";
} else if (healthRating <= 60) {
  healthRatingWord = "OK";
} else if (healthRating <= 75) {
  healthRatingWord = "Good";
} else if (healthRating <= 90) {
  healthRatingWord = "Great";
} else {
  healthRatingWord = "Amazing!";
}
//Set the bar width based on rating
document.getElementById("HealthRatingWord").innerHTML = "Health: " + healthRatingWord;
var healthBar = healthRating * 0.755;
setTimeout(() => { document.getElementById("HealthRatingBar").style.width = healthBar + "%"; }, 100);


//Display Ratings
document.getElementById("VitARating").innerHTML += ratings[0];
document.getElementById("VitBRating").innerHTML += ratings[1];
document.getElementById("VitCRating").innerHTML += ratings[2];
document.getElementById("VitDRating").innerHTML += ratings[3];
document.getElementById("VitERating").innerHTML += ratings[4];
document.getElementById("VitKRating").innerHTML += ratings[5];
document.getElementById("VitB12Rating").innerHTML += ratings[6];
document.getElementById("Protein").innerHTML += ratings[7];
document.getElementById("Dairy").innerHTML += ratings[8];
document.getElementById("Carbs").innerHTML += ratings[9];
document.getElementById("Minerals").innerHTML += ratings[10];
document.getElementById("Sugar").innerHTML += ratings[11];
//Same thing above but for environment
var enviroRating = 100;
for (var i = 0; i < selections.length; i++) {
  for (var k = 0; k < environmentBad.length; k++) {
    if (selections[i] == environmentBad[k][0]) {
      enviroRating -= (environmentBad[k][1]) / 2
    }
  }
}
var enviroRatingWord = ""
if (enviroRating <= 25) {
  enviroRatingWord = "Horrible";
} else if (enviroRating <= 50) {
  enviroRatingWord = "Bad";
} else if (enviroRating <= 60) {
  enviroRatingWord = "OK";
} else if (enviroRating <= 75) {
  enviroRatingWord = "Good";
} else if (enviroRating <= 90) {
  enviroRatingWord = "Great";
} else if (enviroRating < 100) {
  enviroRatingWord = "Amazing!";
} else {
  enviroRatingWord = "Perfect!!!";
}
document.getElementById("EnviroRatingWord").innerHTML = "Environmentalism: " + enviroRatingWord;
var enviroBar = enviroRating * 0.755;
setTimeout(() => { document.getElementById("EnviroRatingBar").style.width = enviroBar + "%"; }, 100);

//Put x or check next to each vitamin based on whether it is good or bad
for (var i = 0; i < ratings.length-5; i++) {

  if (ratings[i] == "Terrible") {
    document.getElementById("a" + (i+1)).innerHTML = "❌";
  }else if(ratings[i]=="Bad"){
    document.getElementById("a" + (i+1)).innerHTML = "❌";
  }else if(ratings[i]=="OK"){
    document.getElementById("a" + (i+1)).innerHTML = "⚪";
  }
  if (ratings[i] == "Good") {
    document.getElementById("a" + (i+1)).innerHTML = "✔️";
  }else if(ratings[i]=="Great"){
    document.getElementById("a" + (i+1)).innerHTML = "✔️";
  }else if(ratings[i]=="Amazing!"){
    document.getElementById("a" + (i+1)).innerHTML = "✔️";
  }
}
//Find the worst vitamin and recommend you get more of it
var worstVitamin;
var foundTerribleVitamin=false;
var foundBadVitamin=false;
for(var i=0;i<ratings.length-5;i++){
  if(ratings[i]=="Terrible"){
    worstVitamin=i;
    foundTerribleVitamin=true;
  }else if(ratings[i]=="Bad" && foundTerribleVitamin==false){
    worstVitamin=i;
    foundBadVitamin=true;
  }else if(ratings[i]=="OK" && foundBadVitamin==false && foundTerribleVitamin==false){
    worstVitamin=i;
  }
}
var worstVitaminLetter="";
if(worstVitamin==0){
  worstVitaminLetter="A";
}else if(worstVitamin==1){
  worstVitaminLetter="B";
}else if(worstVitamin==2){
  worstVitaminLetter="C";
}else if(worstVitamin==3){
  worstVitaminLetter="D";
}else if(worstVitamin==4){
  worstVitaminLetter="E";
}else if(worstVitamin==5){
  worstVitaminLetter="K";
}else{
  worstVitaminLetter="B12";
}
document.getElementById("VitRecom").innerHTML="We recommend that you get more Vitamin "+worstVitaminLetter;


//Check through the score of each category, find one with worst rating
var worstCat = ""; 
for (var i=7;i<ratings.length;i++){ 
  if (ratings[i]=="Terrible"){
    worstCat=i;
    break;
  }
  else if (ratings[i]=="Bad" && worstCat != "Terrible"){
    worstCat=i;
  }
  else if (ratings[i]=="OK" && worstCat != "Terrible" && worstCat != "Bad"){
    worstCat=i;
  }
}

var worstCatName="";
if(worstCat==7){
  worstCatName="more Protein";
}else if(worstCat==8){
  worstCatName="more Dairy";
}else if(worstCat==9){
  worstCatName="more Carbohydrates";
}else if(worstCat==10){
  worstCatName="more Minerals";
}else if(worstCat==11){
  worstCatName="less Sugar";
}
document.getElementById("CatRecom").innerHTML="We recommend that you get " + worstCatName;


//Check if the user eats meat or butter or burger and recommend swap
var hasMeat = false;
var hasButter = false;
var hasBurger=false;
for (var food = 0; food<selections.length; food++)
{
  if (hasMeat == false) 
  {
    if ((selections[food]).toLowerCase() == "beef" || selections[food].toLowerCase() == "steak"){
      hasMeat = true;
      document.getElementById("FoodRecom").innerHTML += " replace beef with tofu or chicken";
    }
  }

  if (hasButter == false)
  {
     if ((selections[food]).toLowerCase() == "butter"){
      hasButter = true;
      document.getElementById("FoodRecom").innerHTML += "replace butter with milk ";
    }
  }
  if(hasBurger==false){
    if ((selections[food]).toLowerCase() == "burger" || selections[food].toLowerCase()=="cheeseburger"){
      hasBurger = true;
      document.getElementById("FoodRecom").innerHTML += " replace burger with a plant-based burger. ";
    }
  }
  
}
if(hasBurger==false && hasButter==false && hasMeat==false){
  document.getElementById("FoodRecom").innerHTML += "";
} 


