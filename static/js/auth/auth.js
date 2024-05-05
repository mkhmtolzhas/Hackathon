document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(new URLSearchParams(formData).toString());
    

    try {
        const response = await fetch('http://127.0.0.1:8000/auth/jwt/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Устанавливаем правильный Content-Type
            },
            body: new URLSearchParams(formData).toString() // Преобразуем FormData в строку x-www-form-urlencoded
        });
        if (response.ok) {
            console.log(response.blob());
            window.location.href = '/';
            
        } else {
            // Если ответ не успешный, обрабатываем ошибку
            console.error('Ошибка при отправке данных:', response.status);
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
});

// function getCookie(cookieName) {
//     // Разбиваем строку document.cookie на отдельные куки
//     const cookies = document.cookie.split(';');
    
//     // Итерируемся по каждой куки
//     for (let i = 0; i < cookies.length; i++) {
//         const cookie = cookies[i].trim();
        
//         // Проверяем, начинается ли текущая куки с искомого имени
//         if (cookie.startsWith(cookieName + '=')) {
//             // Если да, возвращаем значение куки
//             return cookie.substring(cookieName.length + 1);
//         }
//     }
    
//     // Если куки с таким именем не найдено, возвращаем null
//     return null;
// }

// // Пример использования функции для получения значения куки с именем "myCookie"
// const myCookieValue = getCookie(document.cookie);
// console.log(myCookieValue); // Выводим значение куки в консоль
// console.log(document.cookie)