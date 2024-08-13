import { Router, response } from 'express'

import { AdvSearch } from '../controllers/advSearch.js'

const routerAdvSearch = Router()
const advSearchs = new AdvSearch()

routerAdvSearch.get('/', [], async (req, res = response) => await advSearchs.getAdvSearch(req, res))
// routerAdvSearch.get('/:id', [], async (req, res = response) => await PDFs.getPDFByNewId(req, res))

// routerAdvSearch.put('/:id', [], putPurchasedCourse)

// routerAdvSearch.post('/', [], postPurchasedCourse)

// routerAdvSearch.delete('/:id', [], deletePurchasedCourse)

export default routerAdvSearch
