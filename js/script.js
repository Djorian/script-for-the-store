document.addEventListener("DOMContentLoaded", () => {
    // Блок для вывода списка открытых магазинов
    let shopsOpenBlock = document.querySelector('#shops-open-block');
    // Блок для вывода списка закрытых магазинов
    let shopsCloseBlock = document.querySelector('#shops-close-block');

    // Текущая дата
    const newDate = new Date();
    // День неделя по счету, начиная с нуля
    const getDayNumber = parseInt(newDate.getDay());
    // Название дня недели
    const getDayName = daysList[newDate.getDay()];
    // Текущее время в часах
    let getCurrentHour = parseInt(newDate.getHours());

    let shopsOpen = ``;
    let shopsClose = ``;

    // Вывод названия дня недели на страницу
    let dayOfWeek = document.querySelector('#day-of-week');
    dayOfWeek.textContent = `Сегодня: ${getDayName[0].toUpperCase() + getDayName.substring(1)}`;

    // Вывести список открытых и закрытых магазинов
    for (const shopList of shops[getDayNumber][getDayName]) {
        for (const shopName in shopList) {
            // Начало работы магазина
            let startOfTheStore = shopList[shopName][0];
            // Конец работы магазина
            let endOfTheStore = shopList[shopName][1];

            if (startOfTheStore !== null && endOfTheStore !== null) {
                // Список открытых магазинов
                if (getCurrentHour < endOfTheStore) {
                    shopsOpen += `<tr><td scope="row">${shopName}</td><td scope="row">с ${startOfTheStore} до ${endOfTheStore}</td><td scope="row">менее ${endOfTheStore - getCurrentHour} ч.</td></tr>`;
                }
                // Список закрытых магазинов
                else {
                    shopsClose += `<tr><td scope="row">${shopName}</td><td scope="row">с ${startOfTheStore} до ${endOfTheStore}</td><td scope="row">менее ${(24 - getCurrentHour) + startOfTheStore} ч.</td></tr>`;
                }
            } else {
                // Список неработающих в этот день магазинов
                shopsClose += `<tr><td scope="row">${shopName}</td><td scope="row">сегодня магазин закрыт</td><td scope="row">сегодня магазин закрыт</td></tr>`;
            }
        }
    }
    shopsOpenBlock.innerHTML = shopsOpen;
    shopsCloseBlock.innerHTML = shopsClose;
});

// Список магазинов с режимами работы
const shops = [
    {
        'sunday': [
            { 'Auchan': [8, 22] },
            { 'Globus': [8, 22] },
            { 'Karusel': [8, 22] },
            { 'Lenta': [10, 21] },
            { 'Liniya': [10, 22] },
            { 'Magnit': [10, 21] },
            { 'Nash': [null, null] },
            { 'OK': [12, 21] },
            { 'Prisma': [null, null] },
            { 'Spar': [null, null] },
            { 'Vester': [null, null] },
        ]
    },
    {
        'monday': [
            { 'Auchan': [8, 22] },
            { 'Globus': [8, 22] },
            { 'Karusel': [8, 22] },
            { 'Lenta': [10, 21] },
            { 'Liniya': [10, 22] },
            { 'Magnit': [10, 21] },
            { 'Nash': [12, 20] },
            { 'OK': [12, 21] },
            { 'Prisma': [10, 23] },
            { 'Spar': [9, 23] },
            { 'Vester': [9, 21] },
        ]
    },
    {
        'tuesday': [
            { 'Auchan': [8, 22] },
            { 'Globus': [8, 22] },
            { 'Karusel': [8, 22] },
            { 'Lenta': [10, 21] },
            { 'Liniya': [10, 22] },
            { 'Magnit': [10, 21] },
            { 'Nash': [12, 20] },
            { 'OK': [12, 21] },
            { 'Prisma': [10, 23] },
            { 'Spar': [9, 23] },
            { 'Vester': [9, 21] },
        ]
    },
    {
        'wednesday': [
            { 'Auchan': [8, 22] },
            { 'Globus': [8, 22] },
            { 'Karusel': [8, 22] },
            { 'Lenta': [10, 21] },
            { 'Liniya': [10, 22] },
            { 'Magnit': [10, 21] },
            { 'Nash': [12, 20] },
            { 'OK': [12, 21] },
            { 'Prisma': [10, 23] },
            { 'Spar': [9, 23] },
            { 'Vester': [9, 21] },
        ]
    },
    {
        'thursday': [
            { 'Auchan': [8, 22] },
            { 'Globus': [8, 22] },
            { 'Karusel': [8, 22] },
            { 'Lenta': [10, 21] },
            { 'Liniya': [10, 22] },
            { 'Magnit': [10, 21] },
            { 'Nash': [12, 20] },
            { 'OK': [12, 21] },
            { 'Prisma': [10, 23] },
            { 'Spar': [9, 23] },
            { 'Vester': [9, 21] },
        ]
    },
    {
        'friday': [
            { 'Auchan': [8, 22] },
            { 'Globus': [8, 22] },
            { 'Karusel': [8, 22] },
            { 'Lenta': [10, 21] },
            { 'Liniya': [10, 22] },
            { 'Magnit': [10, 21] },
            { 'Nash': [12, 20] },
            { 'OK': [12, 21] },
            { 'Prisma': [10, 23] },
            { 'Spar': [9, 23] },
            { 'Vester': [9, 21] },
        ]
    },
    {
        'saturday': [
            { 'Auchan': [8, 22] },
            { 'Globus': [8, 22] },
            { 'Karusel': [8, 22] },
            { 'Lenta': [10, 21] },
            { 'Liniya': [10, 22] },
            { 'Magnit': [10, 21] },
            { 'Nash': [12, 20] },
            { 'OK': [12, 21] },
            { 'Prisma': [null, null] },
            { 'Spar': [null, null] },
            { 'Vester': [null, null] },
        ]
    }
]

// Список дней недели
const daysList = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
];