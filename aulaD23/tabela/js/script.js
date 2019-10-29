const tabela = document.getElementById('tabela');
const btnAdd = document.getElementById('addButton');
let iniciar = 0;

function removeElement() {
    let btnRemove = document.getElementsByClassName('btnRemove');
    for (let index = 0; index < btnRemove.length; index++) {
        const botao = btnRemove[index];
        botao.addEventListener('click', async ()=>{
            const numero = botao.id.split('-')[1];
            console.log(numero)
            const tr = await document.getElementById(`idTr-${numero}`);
            tr.remove();
        });   
    }
}

function addElemento(quantidade) {
    for (let index = 0; index < quantidade; index++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const buttonRemove = document.createElement('button');
        buttonRemove.innerText = 'x';
        buttonRemove.id = `idBtnRemove-${iniciar}`;
        buttonRemove.className = 'btnRemove';
        td1.textContent = `${iniciar}`;
        td2.textContent = `Nome: ${iniciar}`;
        td3.appendChild(buttonRemove);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.id = `idTr-${iniciar}`;
        tabela.appendChild(tr);
        iniciar++;
    }
}

btnAdd.addEventListener('click', async ()=>{
    const qtd = document.getElementById('numero').value;
    await addElemento(qtd);
    removeElement();
});
