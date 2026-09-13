import logo from "../../assets/logo-text.png";

const Footer = () => {
    return (
<footer className="footer sm:footer-horizontal bg-white text-black  p-10 container mx-auto ">
            <aside>
                <img src={logo} alt="" />
                <p>
                Curated tools, technologies, and resources for developers building
                <br />
                modern software.
                </p>
                <div className="flex gap-x-2 list-none text-gray-950">
                    <li>GitHub</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">PRODUCT</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Projects</a>
                <a className="link link-hover">Technologies</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Careers</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
            </nav>
</footer>
    );
};

export default Footer;