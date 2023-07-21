import express from "express"
import Hotel from "../models/Hotel.js";

const router=express.Router();

// create hotels
router.post("/",async (req,res)=>{
    const newHotel=new Hotel(req.body)
    try{
      const savedHotel=await newHotel.save();
      res.status(200).json(savedHotel)
    }catch(error){
      res.status(500).json(error)
    }
})

// update hotels
router.put("/:id",async (req,res)=>{
    try{
      const updateHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
      res.status(200).json(updateHotel)
    }catch(error){
      res.status(500).json(error)
    }
})
// delete hotels
// get hotels
// get all hotals



export default router