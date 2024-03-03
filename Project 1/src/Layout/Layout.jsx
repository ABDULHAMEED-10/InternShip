
import PropTypes from 'prop-types';
import Navbar from "../Pages/Components/Navbar";
import Footer from "../Pages/Components/Footer";

function Layout({children}) {
    return (  
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    
    );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
