import React from 'react';

function Header({titulo,spanTitulo}) {
    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">{titulo} <span className="text-indigo-600">{spanTitulo}</span></h1>
        </>
    )
}

export default Header;