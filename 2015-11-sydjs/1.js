 const fs = require('fs')

 fs.createReadStream(__filename)
   .pipe(fs.createWriteStream('./other-file'))
