

import mongoose, {Model,Schema} from 'mongoose';
import Icar from "@/app/type/Icar";

const CarSchema:Schema<Icar>=new Schema({
    carName:{type:String, required :true},
    num:{type:String, required :true},
    year_of_manufacture:{type:String, required :true}
})

const Car: Model<Icar>=
 mongoose.models.Car||mongoose.model<Icar>('Car',CarSchema)
 export default Car