import { Facebook, Instagram, Twitter, } from "lucide-react";


function SocialBar() {
    return (
        <>
            <div className="flex gap-2">
                <Facebook size={18} color="#1c71d8" />
                <Instagram size={20} color="#ed333b" />
                <Twitter size={20} color="#62a0ea" />
            </div></>
    )
}

export default SocialBar