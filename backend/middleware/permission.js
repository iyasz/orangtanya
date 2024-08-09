import mongoose from 'mongoose';


export const checkPermission = (reqUser, resourceUserId, res) => {

    if(reqUser._id.toString() === resourceUserId.toString()){
        return
    }

    res.status(403)
    throw new Error("Tidak dapat melakukan hapus/edit postingan")
    
}

// export const isExist = (req, res) => {
    
    
//     if (!mongoose.Types.ObjectId.isValid(req)) {
//         throw new Error("Tidak dapat melakukan aksi")
//     }

//     return

// }