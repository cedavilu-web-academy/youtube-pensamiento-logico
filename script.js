function calculateRectangleArea() {
    // Obtener los valores de longitud y ancho
    const length = document.getElementById('rectangle-length').value;
    const width = document.getElementById('rectangle-width').value;

    // Verificar si alguno de los campos está vacío
    if (length === '' || width === '') {
        document.getElementById('rectangle-result').textContent = 'Por favor, ingrese tanto la longitud como el ancho.';
        return; // Terminar la ejecución de la función si no se cumplen las condiciones
    }

    // Calcular el área
    const area = length * width;

    // Mostrar el resultado
    document.getElementById('rectangle-result').textContent = `Área del Rectángulo: ${area} unidades cuadradas`;
}
