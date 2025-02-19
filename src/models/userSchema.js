import {DataTypes} from 'sequelize';

const createUserSchema = (sequelize)=>{
    const User = sequelize.define(
        'user', // model
        {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            isLowercase:true,
            unique:true
        },
        designation:{
            type:DataTypes.STRING,
            allowNull:false
        },
        empId:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:false,
        }
    }
    )
    return User
}

export{
    createUserSchema
}