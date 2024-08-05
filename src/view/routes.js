import express from 'express';
import { deleteData, getALL, insertData, updateData } from '../controller/userController.js';
const router = express.Router();


router.route("/postdata").post(insertData)
router.route("/getdata").get(getALL)
router.route("/putdata/emp/:empId").put(updateData)
router.route("/deletedata/emp/:empId").delete(deleteData)


export default router;