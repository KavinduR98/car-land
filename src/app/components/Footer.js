"use client";

// next image
import Image from "next/image";

// icons
import { FaPhone, FaEnvelope } from "react-icons/fa6";

// components
import Copyright from "./Copyright";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

// link /react scroll
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image src={"/icons/logo.svg"} width={200} height={200} alt="" />
            </Link>
            {/* text */}
            <div className="text-secondary">
              Penatibus etiam bibendum gravida turpis libero magna in conubia
              nibh.
            </div>
            {/* phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(123)456-7890</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">office@carland.com</div>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="flex flex-1 flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          {/* program */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri:</div>
                <div className="font-semibold">9:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat:</div>
                <div className="font-semibold">9:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          {/* newsletter */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className="mb-9 text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
            {/* form */}
            <form className="flex gap-x-2 h-14">
              <input
                type="text"
                placeholder="Your email"
                className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
              />
              <button type="submit" className="btn btn-sm btn-accent w-24">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}
