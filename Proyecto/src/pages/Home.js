import CardItem from "../components/CardItem";

function Home({ items }) {
    return (
        <div className="container bg-primary text-white py-5">
            {/* Texto adicional o cuadro de presentación */}
            <div className="mb-4 text-center">
                <h2 className="fw-bold">Bienvenidos a CTL Empresariales</h2>
                <p>
                    Brindamos soluciones personalizadas con experiencia fiscal y administrativa.
                </p>
            </div>

            <div className="row">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <CardItem 
                                title={item.title} 
                                description={item.description} 
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center">
                        CTL EMPRESARIALES OFRECE A SUS CLIENTES UN ENFOQUE PERSONALIZADO, 
                        PROFUNDO CONOCIMIENTO DEL ENTORNO FISCAL Y UN EQUIPO CON EXPERIENCIA EN LA ADMINISTRACIÓN TRIBUTARIA
                    </p>
                )}
            </div>
        </div>
    );
}

export default Home;
