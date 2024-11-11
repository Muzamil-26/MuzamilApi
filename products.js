import { config } from "dotenv";
config();
import { ConnectToDB } from "./config/db.config.js";
import { Products } from './models/products.models.js';
import fs from 'fs';
const data = fs.readFileSync('./producst.json', 'utf-8');
const AllProducts = JSON.parse(data);


async function Inserteing() {
  try {
    // Establish database connection
    await ConnectToDB(process.env.MONGO_URI);

    // Insert products into the database
    const res = await Products.create(AllProducts);

    console.log("All Products Inserted", res);
  } catch (error) {
    console.error("Error while inserting all products:", error);
  }
}

// Call the function to insert products
Inserteing();
