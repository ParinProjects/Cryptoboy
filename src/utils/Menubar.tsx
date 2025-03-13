import { useRef, useState } from "react";
import { ChevronDown, AlignJustify, X } from "lucide-react";


function Menubar() {

    const detailsRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        if (detailsRef.current) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <>
            {/* menu mobile*/}
            <div className="flex items-center gap-4 md:hidden">
                <details ref={detailsRef} className="dropdown" onToggle={toggleMenu}>
                    <summary className="btn border-0 p-0 bg-white">
                        {isOpen ? <X size={24} color="#3d3846" strokeWidth={2.25} /> : <AlignJustify size={24} color="#3d3846" strokeWidth={2.25} />}
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-80 p-2 shadow-sm mt-2 ">
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
            {/* menu desktop*/}
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
        </>
    )
}

export default Menubar