const Footer = ({items}) => {
    return (
        <main className="Footer">
            <p>{items.length} list {items.length <=1 ? 'item' : 'items'}</p>
        </main>
    );
}
 
export default Footer;