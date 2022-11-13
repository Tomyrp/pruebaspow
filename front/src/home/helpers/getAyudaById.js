import {ayudas} from '../components/ayuda/datosAyuda'

export const getAyudaById = (id) => {
    const ayuda = ayudas.find(ayuda => {
        return ayuda.id===id;
    });
    return ayuda;
}