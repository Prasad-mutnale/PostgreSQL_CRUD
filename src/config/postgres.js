import {Sequelize} from 'sequelize'
import {createUserSchema} from '../models/userSchema.js'

const sequelize = new Sequelize("crud", "postgres", "root",{
    host:"localhost",
    dialect:'postgres'
});

let UserModel;
const connectDb = async()=>{
    try{
        await sequelize.authenticate();
        console.log("Database connected successfully")
        UserModel = await createUserSchema(sequelize)
        await sequelize.sync()
        console.log("Database Synced")
    }catch(err){
        console.log("Unable to connect to the database",err)
    }
} 

export {
    connectDb,
    UserModel,
    sequelize
}






