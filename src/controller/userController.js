import { UserModel } from "../config/postgres.js"

export const getALL = async (req,res)=>{
    try {
        const user = await UserModel.findAll();

        if(user.length == 0)
        {
            res.status(404).json({message:"No data found"})
        }else {
            res.status(200).json({UserData:user})
        }
    } catch (error) {
        console.log("Unable to get the data ", error)
        res.status(400).json({message:"Unable to get the data"})
    }
}


export const insertData = async(req,res)=>{

    const {name,email,designation,empId} = req.body;
    try {
        const isUserExist = await UserModel.findOne({where:{empId:empId}})
        if(isUserExist == null)
        {
            await UserModel.create(req.body)
            return res.status(201).json({message:"Employee data inserted"})
        }
        return res.status(200).json({message:"Employee Id is already exist"})
    } catch (error) {
        console.log("Internal server error",error)
        return res.status(500).json({message:"Internal server error"})
        
    }

}

export const updateData = async(req,res)=>{
    const {empId} = req.params;
    console.log("emp id",empId)
    try {

        const idExist = await UserModel.findOne({where:{empId:empId}})
        console.log("exist",idExist)

        if(idExist)
        {
            const empUpdate = await UserModel.update(req.body, {where:{empId}})
            console.log("empUpdate",empUpdate)
            return res.status(200).json({message:"Employee update the data successfully"})
        }else {
            return res.status(404).json({message:"Employee Id is not exist"})
        }
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({message:"Internal server error", error})
    }
}


export const deleteData = async(req,res)=>{
    const {empId} = req.params;
    try {
        const idExist = await UserModel.findOne({where:{empId:empId}})
        if(idExist)
        {
            // const empdelete = await UserModel.destroy({where:{empId:empId}})  // One way to delete 
            await idExist.destroy() // this way we can delete the data 
            return res.status(200).json({message:"Employee Data deleted"})
        }else{
            return res.status(404).json({message:"Employee Id is not exist"})
        }
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({message:"Internal server error", error})
    }
}