export const FoodMenu = [
    "All",
    "Beriyani",
    "Chicken",
    "Mutton Rice",
    "Fried Rice",
    "Fresh Juice",
    "Meals",
    "Pani Puri",
    "Rice",
    "Salad",
    "Sandwich",
    "Sweets",
    "Juice",
  ];
  
  const randomFoodNames = [
    "SS Hyderabad", "Amboor", "Chettinad", "Lucknowi", "Kolkata Style", "Dindigul",
    "Andhra Special", "Punjabi", "Mughlai", "Madurai", "Home Style", "Spicy", "Tandoori",
  ];
  
  export const Credentials =[
    {
      id: 1,
      username: "admin",
      password: "admin",
      role:"admin",
      token:"admin"
    },{
      id: 2,
      username: "user",
      password: "user",
      role:"user",
      token:"user"
    },{
      id: 3,
      username: "customer",
      password: "customer",
      role:"customer",
      token:"customer"
    }
  ]
  const randomDescriptions = [
    "3 chicken pieces, 1 egg, 1 raita, 1 pickle",
    "1 chicken piece, 2 eggs, 1 raita, 1 pickle",
    "Boneless special with extra spices",
    "Served with onion, lemon, and mint chutney",
    "Comes with ghee rice and dal tadka",
    "Topped with caramelized onions and cashews",
    "Includes special house-made masala",
    "Combo pack with naan and gravy",
    "Perfect for a spicy food lover",
  ];
  
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  export const FoodData = Array.from({ length: 100 }, (_, index) => ({
    id: (index + 1).toString(),
    name: `${getRandomItem(randomFoodNames)} ${getRandomItem(FoodMenu)}`,
    description: getRandomItem(randomDescriptions),
    menuName: getRandomItem(FoodMenu.filter(item => item !== "All")),
    price:getRandomItem([20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]),
    quantity:0
  }));
  