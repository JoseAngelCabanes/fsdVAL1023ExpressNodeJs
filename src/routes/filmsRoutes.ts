import { Router } from "express";
import { createFilms, deleteFilmById, getFilmById, getFilms, updateFilmById } from "../controllers/filmsController";

const router = Router()

router.get('/', getFilms)

router.post('/', createFilms)

router.put('/:id', updateFilmById)

router.delete('/:id', deleteFilmById)

router.get('/:id', getFilmById)

export {router}

