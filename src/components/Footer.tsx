import SocialBar from "../utils/SocialBar"

function Footer() {
  return (
    <>
      <div className="w-full bg-bgmain">
        <footer className="footer footer-horizontal footer-center bg-bgmain text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <SocialBar />
            </div>
          </nav>
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </div>
    </>
  )
}

export default Footer