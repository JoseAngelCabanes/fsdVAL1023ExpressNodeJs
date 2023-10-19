import { Request, Response } from "express"




const getFilms = (req: Request, res: Response) =>{ 
    //logica del o que yo quiero hacer/devolver
    
    return res.send('GET FILMS')
}

const createFilms = (req: Request, res: Response) => {
    //logica para crear películas
    console.log('create');
    

    console.log(req.body);

    return res.send('FILM CREATED SUCCESFULLY')
}



const updateFilmById = (req: Request, res: Response) => {
    //logica para actualizar películas

    const filmsId = req.params.id
    
    return res.send('FILM ' + filmsId + ' UPDATED SUCCESFULLY')
}

const deleteFilmById = (req: Request, res: Response) => {
    //logica para borrar películas
    
    return res.send('FILM DELETED SUCCESFULLY')
}

const getFilmById = (req: Request, res: Response) => {
    //logica para borrar películas
    const filmsId = req.params.id
    return res.send('FILM ' + filmsId)
}

export {getFilms, createFilms, updateFilmById, deleteFilmById, getFilmById}