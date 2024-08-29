import Product from "../model/product.model.js";
import mongoose from "mongoose";

export const getproduct = async (req, res) => {
  const products = await Product.find({});
  try {
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, massage: "server eroor" });
  }
};

export const postproduct = async (req, res) => {
  const product = req.body; //request data from customer
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, massage: "please provide all credentials " });
  }

  const newproduct = new Product(product);

  try {
    await newproduct.save();
    res.status(201).json({ success: true, data: newproduct });
  } catch (error) {
    console.error("error in creting products ", error.massage);
    res.status(500).json({ success: false, massage: "server error" });
  }
};

export const deleteproduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, massage: "you have entered a wrong key" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, massage: "item deleted successfully" });
  } catch (error) {
    console.error("server is not responding", error);
    res.status(400).json({ success: false, massage: "product not found" });
  }
};

export const updateproduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, massage: "product not found" });
  }

  try {
    const updatedData = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res
      .status(200)
      .json({ success: true, massage: "Product updated successfully" });
  } catch (error) {
    console.error("server side error" , error)
    res.status(500).json({ success: false, massage: "server side error" });
  }
};
