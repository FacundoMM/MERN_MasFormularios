import { useState } from "react"



const Formulario = ({ color, setcolor }) => {
    const [entradas, setEntradas] = useState([])

    const obtenerColor = (e) => {
        setcolor(e.target.value)
        console.log(color)
    }

    const agregar = (e) => {
        e.preventDefault();
        setEntradas([
            ...entradas,
            color
        ])
        console.log(entradas)
    }

    return (
        <>
            <form className="text-center mt-3" onSubmit={agregar}>
                <input
                    type="color"
                    name="color"
                    className="form-control-color btn "
                    onChange={obtenerColor}
                    style={{
                        width: "80px",
                        height: "50px"
                    }}
                />
                <button type="submit" className="btn btn-primary">Agregar </button>
            </form>
            <div className='container-block d-flex flex-wrap p-2 overflow-auto'>
                {entradas.map((color, index) => (
                    <div
                        key={index}
                        className="ms-2 mb-2" // Añadido mb-2 para espaciado entre divs
                        style={{
                            backgroundColor: color,
                            width: "100px",
                            height: "70px",
                            borderRadius: "6px",
                            marginRight: "10px", // Añadido margen derecho para separación
                            marginBottom: "10px" // Añadido margen inferior para separación
                        }}
                    ></div>
                ))}
            </div>
        </>
    )
}


export default Formulario
