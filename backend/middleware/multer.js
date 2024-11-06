import multer from 'multer'

const storage = multer.diskStorage({
    filename: function (res,file,callback){
        callback(null,file.orginalname)
    }
})

const upload = multer({storage})

export default upload