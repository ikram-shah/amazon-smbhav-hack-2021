const categories = [
    {
        name: "Groceries",
        image: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/carrot_1f955.png",
        bgColor: "bg-pink-500",
    },
    {
        name: "Cooking items",
        image: "https://5.imimg.com/data5/UO/DF/MY-21769941/saffola-gold-cooking-oil-250x250.png",
        bgColor: "bg-purple-500",
    },
    {
        name: "Toilteries",
        image: "https://pngimg.com/uploads/toothpaste/toothpaste_PNG18323.png",
        bgColor: "bg-gray-500",
    },
    {
        name: "Snacks & Drinks",
        image: "https://purepng.com/public/uploads/large/purepng.com-lays-potato-chipsfood-potato-tasty-pack-lays-chips-taste-product-snaks-9415246340529nj3f.png",
        bgColor: "bg-orange-500",
    },
    {
        name: "Stationery",
        image: "http://pngimg.com/uploads/pen/pen_PNG7404.png",
        bgColor: "bg-yellow-500",
    },
    {
        name: "Cosmetics",
        image: "https://pngimg.com/uploads/lipstick/lipstick_PNG36.png",
        bgColor: "bg-gray-500",
    },
    {
        name: "Clothing",
        image: "https://purepng.com/public/uploads/large/purepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png",
        bgColor: "bg-pink-500",
    },
    {
        name: "Electronics",
        image: "https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png",
        bgColor: "bg-blue-500",
    }
];

const primeExclusives = [
    {
        storeName: "Pinnacle stores",
        productName: "Lizol",
        productPrice: "Rs.100",
        offerDesc: "Slash",
        image: "https://rukminim1.flixcart.com/image/416/416/k7z3afk0/bathroom-floor-cleaner/z/9/d/lavender-500-disinfectant-surface-cleaner-bottle-lizol-original-imafq39xudncaux5.jpeg?q=70",
        storeNearby: "2 mins",
    },
    {
        storeName: "Some other stores",
        productName: "Pink Lizol",
        productPrice: "Rs.900",
        offerDesc: "Slash",
        image: "https://pngimg.com/uploads/toothpaste/toothpaste_PNG18323.png",
        storeNearby: "2 mins",
    },
    {
        storeName: "Purple stores",
        productName: "Lizol",
        productPrice: "Rs.100",
        offerDesc: "Slash",
        image: "https://purepng.com/public/uploads/large/purepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png",
        storeNearby: "2 mins",
    },
    {
        storeName: "Pink stores",
        productName: "Lizol",
        productPrice: "Rs.100",
        offerDesc: "Slash",
        image: "https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png",
        storeNearby: "2 mins",
    }
];


function getCategories(){
    return categories;
}

function getPrimeExclusives(){
    return primeExclusives;
}

export { getCategories, getPrimeExclusives };