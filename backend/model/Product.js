import mongoose from "mongoose";

const productSchema=mongoose.Schema({
  title:{type :String ,required :true},
  description:{type :String ,required :true },
  price:{type :String ,required :true},
  image:{type :String ,required :true},
  category:{type :mongoose.Schema.Types.ObjectId,ref:"Category",required :true},
  images:[{type :String ,required :true}],
  seller:{type :mongoose.Schema.Types.ObjectId,ref:"User",required :true},
  reviews :[{ review:{type :String },
      user:{type :mongoose.Schema.Types.ObjectId,ref:"User",required :true}
        }]
})

export default mongoose.model("Product",productSchema);

