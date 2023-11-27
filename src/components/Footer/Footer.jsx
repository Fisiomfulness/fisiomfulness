'use client'

import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import Image from 'next/image';
import FisiumLogo from '../../assets/Logo.svg'


function Footer() {
  return (
    <footer className="w-full h-[145px] bg-primary">
      <div >
        <div className="w-full flex justify-evenly ">
          <div>
            <Image width={200} src={FisiumLogo} alt="Logo Fisiom fulness" className="pt-5 lg:w-15" />
            <div className="flex w-50 items-center justify-evenly px-12  lg:px-8 text-white pt-1">
              <Link href="/" target="_blank">
                <AiOutlineFacebook className="text-xl lg:text-2xl hover:scale-110" />
              </Link>
              <Link href="/" target="_blank">
                <AiOutlineInstagram className="text-xl lg:text-2xl hover:scale-110" />
              </Link>
              <Link href="/" target="_blank">
                <AiOutlineLinkedin className="text-xl lg:text-2xl hover:scale-110" />
              </Link>
            </div>
          </div>
          <div className="pt-5 text-white py-1 lg:text-base">
            <p className=" py-1">
              <Link className="hover:text-light-blue hover:no-underline text-sm" href="/">
                Trabaja con nosotros
              </Link>
            </p>
            <p className=" py-1">
              <Link className="hover:text-light-blue hover:no-underline text-sm" href="/">
                Quienes somos
              </Link>
            </p>
            <p className=" py-1">
              <Link
                className="hover:text-light-blue hover:no-underline text-sm"
                href="/blog"
              >
                Blog
              </Link>
            </p>
          </div>
        </div>
        <div className="mx-auhref text-center">
          <p className="text-xs text-white">
            Copyright © FisiomFulness
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
