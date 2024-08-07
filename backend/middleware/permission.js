import mongoose from 'mongoose';


export const checkPermission = (reqUser, resourceUserId) => {

    if(reqUser.id === resourceUserId.toString()){
        return
    }

    throw new Error("Tidak dapat melakukan edit postingan")
    
}

// export const isExist = (req, res) => {
    
    
//     if (!mongoose.Types.ObjectId.isValid(req)) {
//         throw new Error("Tidak dapat melakukan aksi")
//     }

//     return

// }