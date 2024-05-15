import { Router } from 'express'
import { response } from 'express'

import { PDFS } from '../controllers/pdfs.js'
import { verifyJWT } from '../helpers/JWT.js'

const routerUser = Router()
const PDFs = new PDFS();

routerUser.get('/', [], async(req, res = response) => await PDFs.getAllPDFs(req, res))
routerUser.get('/:id', [], async(req, res = response) => await PDFs.getPDFByNewId(req, res))

// routerUser.put('/:id', [], putPurchasedCourse)

// routerUser.post('/', [], postPurchasedCourse)

// routerUser.delete('/:id', [], deletePurchasedCourse)

export default routerUser
