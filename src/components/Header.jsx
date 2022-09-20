
function Header({text,bgcolor, color}){

    const headerStyles = {
        color: color,
        backgroundColor:bgcolor
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h1>{text}</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
   bgcolor: 'rgba(0,0,0,0.5)',
   color:'#ff6a95'
}

export default Header;