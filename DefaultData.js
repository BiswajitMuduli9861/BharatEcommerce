import { products } from "./constants/data.js";
import ProductList from "./model/product-schema.js";

const DefaultData = async() =>{
    try {
         await ProductList.deleteMany({});
         await ProductList.insertMany(products);
         console.log('Data imported Successfully');
    } catch (error) {
        console.log('Error while inserting dafault data', error.message);
    }
}

export default DefaultData;

// import { products } from "./constants/data.js";
// import ProductList from "./model/product-schema.js";

// const DefaultData = async () => {
//     try {
//         for (let product of products) {
//             await ProductList.updateOne(
//                 { id: product.id },  // Filter by unique id
//                 { $set: product },   // Set the product data
//                 { upsert: true }     // Insert if not exists
//             );
//         }
//         console.log('Data imported or updated successfully');
//     } catch (error) {
//         console.log('Error while inserting default data', error.message);
//     }
// }

// export default DefaultData;
