function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('Параметри width і height повинні бути числами');
    }
    return width * height;
}

try {
    let width = 10;
    let height = 5;
    let area = calcRectangleArea(width, height);
    console.log(`Площа прямокутника: ${area}`);
} catch (error) {
    console.error(`Помилка: ${error.message}`);
}
