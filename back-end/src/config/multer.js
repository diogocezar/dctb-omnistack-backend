const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

const storePath = path.resolve(__dirname, '..', '..', 'tmp')

module.exports = {
  dest: storePath,
  storage: multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, storePath)
    },
    filename: (req, file, callBack) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callBack(err)
        file.key = `${hash.toString('hex')}-${file.originalname}`
        callBack(null, file.key)
      })
    },
  }),
}
