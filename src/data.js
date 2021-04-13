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
        storeName: "Ascent Store",
        productName: "Colgate",
        productPrice: "Rs.90",
        offerDesc: "MRP - Rs.120",
        image: "https://images-na.ssl-images-amazon.com/images/I/61nctAojOEL._SL1000_.jpg",
        storeNearby: "2 mins",
    },
    {
        storeName: "Ascent Store",
        productName: "Lizol",
        productPrice: "Rs.100",
        offerDesc: "MRP - Rs.130",
        image: "https://images-na.ssl-images-amazon.com/images/I/51iatO8hXjL._SX466_.jpg",
        storeNearby: "2 mins",
    },
    {
        storeName: "Ascent Store",
        productName: "Speed Cube",
        productPrice: "Rs.110",
        offerDesc: "MRP - Rs.125",
        image: "https://classteaching.files.wordpress.com/2019/09/rubiks-cube.jpg",
        storeNearby: "2 mins",
    },
    {
        storeName: "Ascent Store",
        productName: "Dove Soap",
        productPrice: "Rs.130",
        offerDesc: "MRP - Rs.150",
        image: "https://5.imimg.com/data5/JF/XH/FZ/SELLER-90374695/256390-xlarge-2-500x500.jpg",
        storeNearby: "2 mins",
    }
];


function getCategories() {
    return categories;
}

function getPrimeExclusives() {
    return primeExclusives;
}

export { getCategories, getPrimeExclusives };