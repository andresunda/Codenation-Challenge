//Components that make up the main design.
import { NavBar } from '../components/navbar/navBar';
import { Content } from '../components/content/content';
import { Footer } from '../components/footer/footer';


/*This Layout Or Component is the principal on the aplication and
renderize all pages
 */

export const Layout = ({ children }) => {
    return (
        <>
            <NavBar
                routes={[
                    { path: '/', label: 'Home' },
                    { path: '/articles', label: 'Articles' }]}
            />
            <Content>{children}</Content>
            <Footer />
        </>
    )
}
