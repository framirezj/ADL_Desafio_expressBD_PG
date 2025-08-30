//req.body

//titulo, url, descripcion

export default function validaBody(body) {
    const { titulo, url, descripcion } = body
    const errors = []

    if (!titulo || !titulo.trim()) {
        errors.push({titulo: "El titulo es obligatorio."}) 
    }

    if (!url || !url.trim()) {
        errors.push({url: "La URL es obligatoria."}) 
    }

    if (!descripcion || !descripcion.trim()) {
        errors.push({descripcion: "La descripción es obligatoria."}) 
    }

    return errors
}