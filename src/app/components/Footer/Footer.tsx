import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const EnhancedFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Study-Hub</h3>
          <p className="text-gray-400">
            Streamlining Study Material Access for All. Secure, efficient, and
            intuitive. Join us in enhancing e-learning by making the sharing and
            discovery of educational resources effortless and secure.
          </p>
          <div className="flex mt-4 gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link
                href="/repository"
                className="hover:text-white transition duration-300"
              >
                Library
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Resources</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link
                href="#blog"
                className="hover:text-white transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="./contact"
                className="hover:text-white transition duration-300"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="#privacy"
                className="hover:text-white transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#terms"
                className="hover:text-white transition duration-300"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="text-gray-400 space-y-2">
            <li className="flex items-center gap-2">
              <FaPhone /> +2347013013462
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@Study-Hub.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 1234 Study-Hub Avenue, Tech City, TX
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} Study-Hub. All rights reserved. | Designed
        by Study-Hub Team
      </div>
    </footer>
  );
};

export default EnhancedFooter;
