import rate5 from '../../assets/images/rating/rating5.png'
import rate4 from '../../assets/images/rating/rating4.png'
import rate3 from '../../assets/images/rating/rating3.png'
import rate2 from '../../assets/images/rating/rating2.png'

const category = [
    {
      id :1,
      name : 'Mobile accessory',
      value : 'Mobile accessory',
      selected : false
    },
    {
      id :2,
      name : 'Electronics',
      value : 'Electronics',
      selected : false
    },
    {
      id :3,
      name : 'Smartphones ',
      value : 'Smartphones ',
      selected : false
    },
    {
      id :4,
      name : 'Modern tech',
      value : 'Modern tech',
      selected : false
    },
    {
      id :5,
      name : 'Mobile accessory',
      value : 'Mobile accessory',
      selected : false
    },
    {
      id :6,
      name : 'Mobile accessory',
      value : 'Mobile accessory',
      selected : false
    },
    {
      id :7,
      name : 'Mobile accessory',
      value : 'Mobile accessory',
      selected : false
    },
    {
      id :8,
      name : 'Mobile accessory',
      value : 'Mobile accessory',
      selected : false
    },
]

const brands = [
    {
        id :1,
        name : 'Samsung',
        value : 'Samsung',
        selected : false
      },
      {
        id :2,
        name : 'Apple',
        value : 'Apple',
        selected : false
      },
      {
        id :3,
        name : 'Huawei',
        value : 'Huawei',
        selected : false
      },
      {
        id :4,
        name : 'Pocco',
        value : 'Pocco',
        selected : false
      },
      {
        id :5,
        name : 'Lenovo',
        value : 'Lenovo',
        selected : false
      },
      {
        id :6,
        name : 'Oppo',
        value : 'Oppo',
        selected : false
      },
]

const features = [
    {
        id :1,
        name : 'Metallic',
        value : 'Metallic',
        selected : false
      },
      {
        id :2,
        name : 'Plastic cover',
        value : 'Plastic cover',
        selected : false
      },
      {
        id :3,
        name : '8GB Ram',
        value : '8GB Ram',
        selected : false
      },
      {
        id :4,
        name : 'Super power',
        value : 'Super power',
        selected : false
      },
      {
        id :5,
        name : 'Large Memory',
        value : 'Large Memory',
        selected : false
      },
      {
        id :6,
        name : 'Oppo',
        value : 'Oppo',
        selected : false
      },
];

const condition = [
    {
        id :1,
        name : 'All',
        value : 'All',
        selected : true
      },
      {
        id :2,
        name : 'Refurbished',
        value : 'Refurbished',
        selected : false
      },
      {
        id :3,
        name : 'Brand new',
        value : 'Brand new',
        selected : false
      },
      {
        id :4,
        name : 'Old items',
        value : 'Old items',
        selected : false
      },
];

const rating = [
    {
        id :1,
        name : <img src={rate5} alt="5 stars" />,
        value : '5 star',
        selected : true
      },
      {
        id :2,
        name : <img src={rate4} alt="5 stars" />,
        value : '4 star',
        selected : false
      },
      {
        id :3,
        name : <img src={rate3} alt="5 stars" />,
        value : '3 star',
        selected : false
      },
      {
        id :4,
        name : <img src={rate2} alt="5 stars" />,
        value : '2 start',
        selected : false
      },
];

export {
    category,
    brands,
    features,
    condition,
    rating
}