const AppError = require('../../config/AppErrore');
const path = require('path');
const fs = require('fs');

async function viewcontroler(req, res, next) {
    try {
        const { path: filepath } = req.query;
        console.log(filepath)
        
        if (!filepath) {
            return next(new AppError("مسیر فایل الزامی است", 400));
        }

        const baseDir = path.join(process.cwd(), 'storage', 'private');
        const mainpath = path.join(baseDir, filepath);
        
        
        
        if (!mainpath.startsWith(baseDir)) {
            return next(new AppError("دسترسی غیرمجاز به فایل", 403));
        }

        
        if (!fs.existsSync(mainpath)) {
            return next(new AppError("فایل مورد نظر یافت نشد", 404));
        }

        
        res.sendFile(mainpath);
    } catch (error) {
        next(error);
    }
}

module.exports = viewcontroler;
