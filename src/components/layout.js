import Main from './utils/Main.js';
import Header from './utils/Header.js';
import Footer from './utils/Footer.js';
import SideBarLeft from './utils/SideBarLeft.js';
import SideBarRight from './utils/SideBarRight.js';

/**
 * Main component. The component that runs application
 * 
 * Here must be include all components of application
 * 
 * With great power has great reponsabilities
 * 
 */

export default {

    children(){
        return [
            Header,
            SideBarLeft,
            Main,
            SideBarRight,
            Footer
        ];
    }
}