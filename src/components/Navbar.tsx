import logo from "../assets/others/logo.png";
import Menubar from "../utils/Menubar.tsx";
import SearchBar from "../utils/SearchBar.tsx";
import ButtonMain from "../utils/ButtonMain.tsx";
import SocialBar from "../utils/SocialBar.tsx"


const Navbar = () => {

    return (
        <>
        <nav className="w-ful pb-1">
            {/* top */}
            <div className="w-full p-5 border-b pb-6 border-gray-200">
                <div className="flex  container mx-auto justify-between ">
                    {/* logo */}
                    <div className="flex ">
                        <img src={logo} alt="Logo" className="h-10 w-auto" />
                    </div>
                    {/* search and login register */}
                    <div className="flex items-center">
                        <div className="hidden md:block">
                           <SearchBar/>
                        </div>
                        <div className="max-md:hidden divider divider-horizontal divider-ends "></div>
                        <div className="flex gap-2  ">
                            <ButtonMain name="Login"/>
                            <div className="hidden md:block">
                            <ButtonMain name="Register"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* bottom */}
        <div className="w-full sticky top-0 z-50 bg-white">
                <div className="container mx-auto flex flex-row justify-between items-center px-5 py-3 md:p-0">
                    <Menubar />
                    {/* social */}
                    <div className="flex items-center gap-4">
                    <SocialBar/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
