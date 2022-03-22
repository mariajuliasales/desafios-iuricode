import './style.css'
import Card from './components/Card'

export default function App() {

    const srcExample1 = './src/img/example01.png'
    const srcExample2 = './src/img/example02.png'
    const srcExample3 = './src/img/example03.png'
    const srcExample4 = './src/img/example04.png'
    const srcExample5 = './src/img/example05.png'
    const srcExample6 = './src/img/example06.png'
    const srcExample7 = './src/img/example07.png'
    const srcExample8 = './src/img/example08.png'

    return (
        <>
            <header>
                <h1>Jordan Shoes</h1>
                <section className='header-banner'>
                    <div>
                        <h2>A melhor loja de Jordan</h2>
                        <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
                    </div>
                </section>
            </header>
            <main>
                <section className='main-destaques'>
                    <h2>Destaques</h2>
                    <p>Frete gratis e chinelo de brinde é aqui, aproveite por tempo limitado</p>
                </section>
                <section className='main-section'>
                    <Card src={srcExample1} />
                    <Card src={srcExample2} />
                    <Card src={srcExample3} />
                    <Card src={srcExample4} />
                    <Card src={srcExample5} />
                    <Card src={srcExample6} />
                    <Card src={srcExample7} />
                    <Card src={srcExample8} />
                </section>
            </main>

            <footer>
                <p>Todos os direitos reservados</p>
            </footer>
        </>
    )
}