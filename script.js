const button = document.getElementById('botao')
const select = document.getElementById('moedaSelecionada')

const dolar = 4.89
const euro = 6.02

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const textoReal = document.getElementById('texto-real')
    const textoDolar = document.getElementById('texto-dolar');

    textoReal.innerHTML = textoReal.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === 'US$ Dólar Americano') {
        textoDolar.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }).format(inputReais / dolar)
    }
    if (select.value === '€ Euro')
        textoDolar.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }).format(inputReais / euro)
}


moedaTroca = () => {
    const trocaMoeda = document.getElementById('tipo-moeda')
    const trocaImg = document.getElementById('troca-img')

    if (select.value === 'US$ Dólar Americano') {
        trocaMoeda.innerHTML = "Dólar"
        trocaImg.src = "./img/usa.png"

    }
    if (select.value === '€ Euro') {
        trocaMoeda.innerHTML = "Euro"
        trocaImg.src = "./img/euro.png"
    }
    convertValues()

}
button.addEventListener('click', convertValues)
select.addEventListener("change", moedaTroca)
