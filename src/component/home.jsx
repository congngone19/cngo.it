import Card from "./card";
import Demo from "./demo";
import Footer from "./footer";
import Nav from "./nav";
import Product from "./product";

function Home() {
    return (
        <div>
            <Nav />
            <Demo />
            <Product />
            <Footer />
        </div >
    );
}

export default Home;