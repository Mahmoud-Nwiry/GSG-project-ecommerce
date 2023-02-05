import ProductImage1 from "../assets/images/pd1.png"
import ProductImage2 from "../assets/images/re1.png"
import SellerImage from "../assets/images/seller.png"


const data = {
    id : 1,
    name : 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
    images : [ProductImage1,ProductImage2,ProductImage1,ProductImage2,ProductImage1,ProductImage2],
    rating : '9.3',
    reviews : '27',
    sold : '154',
    quantity : [
        {
            quantity : '50-100 pcs',
            price : '98.00'            
        },
        {
            quantity : '100-700 pcs',
            price : '90.00'            
        },
        {
            quantity : '700+ pcs',
            price : '78.00'            
        },
    ],
    price : 'Negotiable',
    type : 'Classic  shoes',
    material: 'Plastic material',
    design : 'Modern nice',
    customization : 'Customized logo and design custom packages',
    protection : 'Refund Policy',
    warranty :  '2 years full warranty ',
    stock : true,
    seller : {
        id : 5000,
        image : SellerImage,
        name : 'Supplier',
        company : 'Guanjoi Trading LLC',
        from : 'Germany, Berlin',
        verified : 'Verified Seller',
        shipping : 'Worldwide shipping',
    }
}

export default data