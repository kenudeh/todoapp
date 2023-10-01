

const Header = ({title}) => {
    return (
        <main className="Header">
            <h2>{title}</h2>
        </main>
    );
}
 
Header.defaultProps ={
    title: 'Default Title'
}

export default Header;