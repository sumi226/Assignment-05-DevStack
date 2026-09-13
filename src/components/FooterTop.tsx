import FooterImg from "../assets/logo-text.png";

const FooterTop = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-16">
      {/* Logo, Details */}
      <div>
        <img src={FooterImg} alt="Footer Logo" className="mb-4" />

        <p className="mb-5 leading-6 text-gray-600">
          Curated tools, technologies, and resources for developers building
          <br className="hidden lg:block" />
          modern software.
        </p>

        <ul className="flex gap-6">
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Github
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Twitter
            </a>
          </li>
        </ul>
      </div>

      {/* Products */}
      <div>
        <h4 className="mb-4 text-lg font-semibold text-gray-900">Products</h4>

        <ul className="space-y-3">
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Technologies
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Projects
            </a>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="mb-4 text-lg font-semibold text-gray-900">Company</h4>

        <ul className="space-y-3">
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Careers
            </a>
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="mb-4 text-lg font-semibold text-gray-900">Legal</h4>

        <ul className="space-y-3">
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Privac policy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Term of Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
