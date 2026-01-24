 import mongoose from "mongoose";
 import {Schema} from "mongoose";
 import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

 const VideoSchema = new Schema(
        {
            videoFile:{
                type:String, // cloudinary url
                require :true
            },
            thumbnail:{
                type:String, // cloudinary url
                require :true
            },
            title:{
                type:String, 
                require :true
            },
            description:{
                type:String, 
                require :true
            },
            duration:{
                type:String, 
                require :true
            },
            description:{
                type:String, 
                require :true
            },
            view:{
                type: Number,
                default :0
            },
            isPublished:{
                type: Boolean,
                default: true
            },
            owner:{
                type: Schema.Types.ObjectId,
                ref : "User"
            }

        },{
            timestamps: true
        }
)


 export const Video = mongoose.model("User",userSchema)