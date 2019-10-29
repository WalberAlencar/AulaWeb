const lampada = document.getElementById('lampada');

let lampadaAcessa = false;
lampada.addEventListener('click', () => {
    if (lampadaAcessa) {
        lampada.src = '/lampada/img/lampada.jpg';
        lampadaAcessa = false;
    }
    else{
        lampada.src = '/lampada/img/lampada-on.jpg';
        lampadaAcessa = true;
    }
})