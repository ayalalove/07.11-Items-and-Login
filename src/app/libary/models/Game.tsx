





import mongoose, {Model,Schema} from 'mongoose';
import Igame from "@/app/type/Igame";

const GameSchema:Schema<Igame>=new Schema({
    gameName:{type:String, required :true},
    num_of_participants:{type:String, required :true},
    age:{type:String, required :true}
})

const Game: Model<Igame>=
 mongoose.models.Game||mongoose.model<Igame>('Game',GameSchema)
 export default Game
