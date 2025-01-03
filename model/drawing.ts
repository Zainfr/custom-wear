import mongoose, {Schema, Document} from "mongoose";

interface IDrawing extends Document {
    drawing_name :string;
    createdBy : Schema.Types.ObjectId
    drawing_on : string;
    drawing_pic : string;
    createdAt : Date;
}

const drawingSchema = new Schema<IDrawing>({
    drawing_name : {
        type : String,
        default : 'CustomWear',
        required : false,
    },
    createdBy :{
        type : Schema.Types.ObjectId,
        ref : "User",
        required : false
    },
    drawing_on :{
        type : String,
        requried : false
    },
    drawing_pic : {
        type : String,
        required : true
    },
    createdAt :{
        type : Date,
        required : true,
        default : Date.now
    }
    
},{timestamps : true});

export const Drawing = mongoose.models.Drawing || mongoose.model<IDrawing>("Drawing",drawingSchema);