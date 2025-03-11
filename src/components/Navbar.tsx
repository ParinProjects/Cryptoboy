import logo from "../assets/others/logo.png";
import { ChevronDown, Facebook, Instagram, Twitter, AlignJustify, AlignLeft } from "lucide-react";

const Navbar = () => {
    return (
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
                            <label className="input bg-gray-100 rounded-xl w-[250px] " style={{outline: "none",borderColor: "transparent"}}>
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                                <input type="search" required placeholder="Search" />
                            </label>
                        </div>
                        <div className="max-md:hidden divider divider-horizontal divider-ends "></div>
                        <div className="flex gap-2">
                            <button className="border w-25 md:w-30 bg-[#5869da] text-white h-10 rounded-xl font-bold hover:bg-white hover:text-[#5869da] hover:cursor-pointer">Login</button>
                            <button className="hidden md:block border w-30 bg-[#5869da] text-white h-10 rounded-xl font-bold  hover:bg-white hover:text-[#5869da] hover:cursor-pointer" >Register</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div className="w-full">
                <div className="container mx-auto flex flex-row justify-between items-center px-5 py-3 md:p-0">
                    {/* menu */}
                    <div className="flex items-center gap-4 md:hidden">
                        <details className="dropdown">
                            <summary className="btn border-0 p-0 bg-white"><AlignJustify size={20} color="#3d3846" strokeWidth={2.25} className="" /></summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-60 p-2 shadow-sm ">
                                <li><a>Item 1</a></li>
                                <li>
                                    <details open>
                                        <summary>Parent</summary>
                                        <ul>
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                            <li>
                                                <details open>
                                                    <summary>Parent</summary>
                                                    <ul>
                                                        <li><a>Submenu 1</a></li>
                                                        <li><a>Submenu 2</a></li>
                                                    </ul>
                                                </details>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </details>
                        <span className="text-gray-00">Menu</span>
                    </div>
                    <div className="hidden md:flex">
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1 bg-white border-0">Hover <ChevronDown size={16} color="#5e5c64" strokeWidth={0.5} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1 bg-white border-0">Hover <ChevronDown size={16} color="#5e5c64" strokeWidth={0.5} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1 bg-white border-0">Hover <ChevronDown size={16} color="#5e5c64" strokeWidth={0.5} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1 bg-white border-0">Hover <ChevronDown size={16} color="#5e5c64" strokeWidth={0.5} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1 bg-white border-0">Hover <ChevronDown size={16} color="#5e5c64" strokeWidth={0.5} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1 bg-white border-0">Hover <ChevronDown size={16} color="#5e5c64" strokeWidth={0.5} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1 bg-white border-0">Hover <ChevronDown size={16} color="#5e5c64" strokeWidth={0.5} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* social */}
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <Facebook size={18} color="#1c71d8" strokeWidth={3} />
                            <Instagram size={20} color="#ed333b" strokeWidth={3} />
                            <Twitter size={20} color="#62a0ea" strokeWidth={3} />
                        </div>
                        <AlignLeft size={20} color="#3d3846" strokeWidth={2.25} className="hover:cursor-pointer" />
                    </div>
                </div>
                <div></div>
            </div>

        </nav>
    );
};

export default Navbar;
