document.getElementById('jubilacionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    const salarioPromedio = parseFloat(document.getElementById('salarioPromedio').value);

    let resultado = '';

    if (edad >= 60 && cuotas >= 240) {
        const porcentajeJubilacion = 0.5 + ((cuotas - 240) * 0.005);
        const montoJubilacion = salarioPromedio * Math.min(porcentajeJubilacion, 0.8);

        resultado = `Hola ${nombre}, puedes jubilarte. Tu monto de jubilación mensual es: Q${montoJubilacion.toFixed(2)}`;
    } else {
        resultado = `Hola ${nombre}, no cumples con los requisitos para jubilarte aún.`;
    }

    document.getElementById('resultado').textContent = resultado;

    const newWindow = window.open();
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Resultado de Jubilación</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: url(file.jpg) no-repeat center center fixed;
                    background-size: cover;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    background-color: rgba(255, 255, 255, 0.9);
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    max-width: 400px;
                    width: 100%;
                    text-align: center;
                }
                h1 {
                    color: #333;
                }
                p {
                    font-size: 18px;
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Resultado de Jubilación IGSS</h1>
                <p>${resultado}</p>
            </div>
        </body>
        </html>
    `);
    newWindow.document.close();
});
