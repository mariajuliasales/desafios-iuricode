import React from 'react'

 const Header = () => {

    const svgLupa = "M10 18a7.952 7.952 0 0 0 4.897 - 1.688l4.396 4.396 1.414 - 1.414 - 4.396 - 4.396A7.952 7.952 0 0 0 18 10c0 - 4.411 - 3.589 - 8"

    return (
    <header className='cabecalho'>
        <div className='logo'>
            <h1>Codelandia</h1>
            <p>blog</p>
        </div>
        <div className='barra-pesquisa'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    d={svgLupa}>
                </path>
            </svg>
            <label for="nome"></label>
            <input type="search" name="nome" id="nome" placeholder="Pesquisar no blog" />
        </div>
    </header>
    )
}

export default Header 