import { Request, Response } from "express";
import pool from "../db";
const editController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const record = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (record) {
      res.render("edit", { record: record.rows[0] });
    } else {
      res.render("edit");
    }
  } catch (error : any) {
    console.log(error.message);
  }
};

// export const getUserById = async (req: Request, res: Response) => {
//   //   const id = parseInt(req.params.id);
//   //   try {
//   //     const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
//   //     if (result.rows.length === 0) {
//   //       res.status(404).json({ error: "User not found" });
//   //     } else {
//   //       res.json(result.rows[0]);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching user:", error);
//   //     res.status(500).json({ error: "Error fetching user" });
//   //   }
// };

// // update controller
// const updateController = async(req,res)=>{
//     try {
//      const updatedRecord =   await StudentModel.findByIdAndUpdate(req.params.id, req.body)
//      if(updatedRecord){
//         res.redirect('/')
//      }else{
//         res.redirect('read')
//      }
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// // delete

// const deleteController = async(req,res)=>{
//     try {
//       const deleterecord =   await StudentModel.findByIdAndDelete(req.params.id)
//         if(deleterecord){
//             res.redirect('read')
//         }else{
//             res.redirect('/')
//         }

//     } catch (error) {

//     }
// }

export { editController };
