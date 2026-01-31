function dateBlock() {
    const date = new Date()

    const days = [ 'Жекшемби', 'Дуйшомбу', 'Шeйшемби', 'Шаршемби','Бейшемби','Жума','Ишемби']
    const months = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь','Декабрь']

    document.getElementById('day').innerText = String
    (date.getDate()).padStart(2,"0")
    
    document.getElementById("week").innerText =
    days[date.getDay()]

    document.getElementById('month').innerText = months
    [date.getMonth()]

    document.getElementById('year').innerText = 
    date.getFullYear()
}
dateBlock()