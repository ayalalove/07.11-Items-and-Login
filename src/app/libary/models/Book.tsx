


import mongoose, {Model,Schema} from 'mongoose';
import Ibooks from "@/app/type/Ibooks"

const BookSchema:Schema<Ibooks>=new Schema({
    bookName:{type:String, required :true},
    writer:{type:String, required :true},

})

const Book: Model<Ibooks>=
 mongoose.models.Book||mongoose.model<Ibooks>('Book',BookSchema)
 export default Book




