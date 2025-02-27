const Menu = [
    {
      id: 1,
      name: "Maggi",
      category: "Breakfast",
      description: "I love Maggi, really. It's easy to make, takes less time to cook, and we can add different flavors according to our taste.",
      image: "https://www.bing.com/th/id/OIP.b_YEqL2Uk4qt3TQ9CkQaAwHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 2,
      name: "Egg Fried",
      category: "Breakfast",
      description: "Egg Fried is a delicious and healthy meal, perfect for starting your day with high protein.",
      image: "https://th.bing.com/th/id/OIP.uXdOaBmwMUbkjiE7uuPxTwHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 3,
      name: "Masala Dosa",
      category: "Breakfast",
      description: "Masala Dosa is a crispy, golden dosa filled with spicy potato filling, served with chutney and sambar.",
      image: "https://www.bing.com/th/id/OIP.ySlkcfajuxxvyDcJpB1mRgHaLG?w=146&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 4,
      name: "Idli",
      category: "Breakfast",
      description: "Idli is a soft, steamed rice cake, a staple South Indian dish that is light and healthy.",
      image: "https://th.bing.com/th/id/OIP.acHMl7OKBxP2eZEgFZ7bJgHaFj?w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 5,
      name: "Alu Paratha",
      category: "Breakfast",
      description: "Alu Paratha is a popular Indian dish made with potatoes and spices, stuffed inside a soft paratha.",
      image: "https://th.bing.com/th/id/OIP.MC4Gb1oa1nG_K93I0OmTPAHaE7?w=306&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 6, // Changed from 5 to 6 to ensure unique IDs
      name: "Samosa",
      category: "Snack",
      description: "Samosa is a crispy and spicy deep-fried snack filled with potatoes and peas.",
      image: "https://th.bing.com/th/id/OIP.Shmb2NJhwSnQsiK0F66yogHaHD?w=256&h=244&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 7,
      name: "Daal",
      category: "Lunch",
      description: "Daal is a rich, flavorful Indian vegetable curry, made with tomatoes, cumin, coriander, and ginger.",
      image: "https://th.bing.com/th/id/OIP.nNkSjZQUZbDa8qxKxlWHvAHaFE?w=302&h=206&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 8,
      name: "Chawal",
      category: "Lunch",
      description: "Chawal is a hearty and flavorful Indian curry made with rice, lentils, tomatoes, and ginger.",
      image: "https://th.bing.com/th/id/OIP.FHVtvAE0XRB0J1Tqie5O4QHaDv?w=349&h=176&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 9,
      name: "Fried Rice",
      category: "Lunch",
      description: "Fried Rice is a rich, flavorful Indian rice dish made with rice, vegetables, and spices.",
      image: "https://www.bing.com/th/id/OIP.fti4pKkogPBQl_KND4ooUAHaHa?w=146&h=146&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 10,
      name: "Matar Panner",
      category: "Lunch",
      description: "Matar Panner is a rich, flavorful Indian curry made with tomato puree, spices, and ginger.",
      image: "https://th.bing.com/th/id/OIP.ShNCt9SVyjUyNqiXpj_eLAHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 11,
      name: "Pav Bhaji",
      category: "Lunch",
      description: "Pav Bhaji is a hearty, flavorful Indian curry made with rice, lentils, vegetables, and spices.",
      image: "https://th.bing.com/th/id/OIP.fRZW1j0fLNdRzYyxRcu8wgHaFj?w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 12,
      name: "Momos",
      category: "Snack",
      description: "Momos are a popular Indian dish made with rice, potatoes, and tomatoes.",
      image: "https://th.bing.com/th/id/OIP.RBlq5631XVOWICiVusxpUQHaEy?w=311&h=200&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 13,
      name: "Chilli Potato",
      category: "Snack",
      description: "Chilli Potato is a hearty, flavorful Indian dish made with potatoes, tomatoes, and cilantro.",
      image: "https://www.bing.com/th/id/OIP.1g3_CpgMNYNoSUaOwwadCAHaHa?w=146&h=146&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 14,
      name: "French Fries",
      category: "Snack",
      description: "French Fries are a popular Indian dish made with fried potatoes.",
      image: "https://www.bing.com/th/id/OIP.sQa_WWkKGUOpifhATWclvwHaGv?w=146&h=133&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 15,
      name: "Shai Panner + Chapati",
      category: "Dinner",
      description: "Shai Panner is a rich, flavorful Indian curry made with tomato puree, spices, and ginger.",
      image: "https://www.bing.com/th/id/OIP.AgA6dgEbV4ZUC_G6UkkLpQHaIp?w=146&h=171&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 16,
      name: "Matar Panner",
      category: "Dinner",
      description: "Matar Panner is a rich, flavorful Indian curry made with tomato puree, spices, and ginger.",
      image: "https://th.bing.com/th/id/OIP.KX82zVuC6U9RkWLQlYwhOAHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id: 17,
      name: "Chicken Tika Massala",
      category: "Dinner",
      description: "Chicken Tika Massala is a hearty, flavorful Indian curry made with chicken, tomato puree, spices, and ginger.",
      image: "https://www.bing.com/th/id/OIP.ypYqqX44HoRHAaaltLSxgQHaLH?w=146&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    }
];

export default Menu;
