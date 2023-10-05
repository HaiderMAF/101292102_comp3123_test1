//Create log directory - if it does not exist
//go from current process to the log directory
//make 10 log files write hello world into it
//out file names
const fs = require('fs')
//directory path
const path = require('path')

const logDir = path.join(process.cwd(), 'Logs')
//First remove log files
//check if files exist in directory
if(fs.existsSync(logDir)){
    //read directory
    const logFiles = fs.readdirSync(logDir);
    logFiles.forEach((file) => {
    //loop through directory to actually delete the files - FOREACH Works well with files which exist
        console.log("deleteing files ......", file);
        // remove files
        //fs.unlink(path.join(logDir, file));
        fs.unlinkSync(path.join(logDir, file));
    });
    //then remove directory
    fs.rmdirSync(logDir);
}

//Make dir
const newLogDir = path.join(process.cwd(), 'Logs')
//check if dir exists if not make it
if(!fs.existsSync(newLogDir)){
    fs.mkdirSync(newLogDir)
}
//make dir simulataneously
process.chdir(newLogDir)
//loop to create files
for(let i=0; i <=9; i++){
    // file names --> 'log{i}.txt' upto 9 so 10 files
    const logName = `logs${i}.txt`
    //Write hello world into files
    fs.writeFileSync(logName, `Hello World ${i}`)
    console.log(`${logName}`)
}


