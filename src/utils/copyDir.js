const fs = require('fs')
const path = require('path')

/**
 * Copy the file from the `inPath` to the `outPath`
 * @param inPath Path to directory to copy
 * @param outPath Path to output directory
 */
const copyFile = (inPath, outPath) => {
  console.log(`copy file: ${outPath}`)

  const oldFile = fs.createReadStream(inPath)
  const newFile = fs.createWriteStream(outPath)

  oldFile.pipe(newFile)
}

const tryMkdir = (path) => {
  try {
    fs.mkdirSync(path)
  } catch (err) {
    // do nothing
  }
}

/**
 * Recursively copy the directory from the `inPath` to the `outPath`
 * @param inPath Path to directory to copy
 * @param outPath Path to output directory
 */
const copyDir = (inPath, outPath) => {
  tryMkdir(outPath)
  
  const files = fs.readdirSync(inPath)

  for (let i = 0; i < files.length; i++) {
    
    const current = fs.lstatSync(path.join(inPath, files[i]))
    
    if (current.isDirectory()) {
      tryMkdir(path.join(outPath, files[i]))
      copyDir(path.join(inPath, files[i]), path.join(outPath, files[i]))
    } else {
      copyFile(path.join(inPath, files[i]), path.join(outPath, files[i]))
    }
  }
}

module.exports = copyDir