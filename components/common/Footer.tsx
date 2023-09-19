import Image from "next/image";
import FooterItem from "./FooterMenu";
import Link from "next/link";
import Mail from "public/assets/icons/Mail";
import Twitter from "public/assets/icons/Twitter";
import Linkedin from "public/assets/icons/Linkedin";
import Telegram from "public/assets/icons/Telegram";
import Calendar from "public/assets/icons/Calendar";
import { useMediaSize } from "components/hooks/media-size";
import { cx } from "@emotion/css";
import RequestDemo from "./RequestDemo";
import { useEffect, useState } from "react";
interface MenuItem {
  title: string;
  items: string[];
}
const Footer = () => {
  const MenuItems: MenuItem[] = [
    { title: "Cryptool", items: ["Documentation", "Tokenomics", "Partners"] },
    {
      title: "Company",
      items: ["About Us", "Terms of Use", "Legal & Privacy", "Disclaimer"],
    },
    {
      title: "Support",
      items: ["Contact Support", "Services & Pricing", "FAQ"],
    },
  ];
  const { isTablet } = useMediaSize();
  const [footer, setFooter] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth) {
        setFooter(window.innerWidth);
      }
    };
    handleResize();
    if (isTablet) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isTablet]);
  return (
    <>
      {isTablet ? (
        <div className={cx("flex justify-center")}>
          <div className="w-full flex justify-center pt-8 pb-12 xs:pr-10 sm:pr-52 md:pr-56 lg:pr-60 xl:pr-64 xs:pl-10 sm:pl-32 md:pl-36 lg:pl-40 xl:pl-44 border-solid border-t-[1px] border-[#F0F0F0] footer-gradient flex-col">
            <div className="max-w-[1560px] w-full flex justify-between flex-col">
              <Image
                width={225}
                height={69}
                alt="LogoBlack"
                src="/assets/icons/LogoBlack.png"
                className="mt-10"
              />
              <div className="flex flex-wrap justify-start mt-10">
                {MenuItems.map((item) => (
                  <FooterItem
                    key={item.title}
                    title={item.title}
                    items={item.items}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col mt-16 items-center">
                  <div className="flex flex-row space-x-2">
                    <Link
                      target="blank"
                      href={"mailto:info@cryptool.io"}
                      className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                    >
                      <Mail width={14} height={16} />
                    </Link>
                    <Link
                      target="blank"
                      href={"https://twitter.com/cryptool_io"}
                      className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                    >
                      <Twitter width={14} height={16} />
                    </Link>
                    <Link
                      target="blank"
                      href={"https://linkedin.com/company/cryptool-io"}
                      className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                    >
                      <Linkedin width={14} height={16} />
                    </Link>
                    <Link
                      target="blank"
                      href={"https://t.me/cryptool_io"}
                      className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                    >
                      <Telegram width={14} height={16} />
                    </Link>
                    <Link
                      target="blank"
                      href={"https://calendly.com/cryptool_io/"}
                      className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                    >
                      <Calendar width={14} height={16} />
                    </Link>
                  </div>
                  <div className="mt-2 text-[#2F4644] text-base font-normal">
                    © 2023 Cryptool. All rights reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={cx("flex justify-center min-h-[289px] h-full")}
          style={{ width: `${footer}px` }}
        >
          <div
            className={cx(
              "w-full flex justify-center pt-8 pb-12 xs:pr-10 sm:pr-52 md:pr-56 lg:pr-60 xl:pr-64 xs:pl-10 sm:pl-32 md:pl-36 lg:pl-40 xl:pl-44 border-solid border-t-[1px] border-[#F0F0F0] footer-gradient flex-row-reverse"
            )}
          >
            <div
              className={cx(
                "max-w-[1560px] w-full flex justify-between flex-row-reverse"
              )}
            >
              <div className="flex flex-wrap justify-around">
                {MenuItems.map((item) => (
                  <FooterItem
                    key={item.title}
                    title={item.title}
                    items={item.items}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center items-start">
                <Image
                  width={225}
                  height={69}
                  alt="LogoBlack"
                  src="/assets/icons/LogoBlack.png"
                />
                <div className="flex flex-col mt-16">
                  <div className="flex flex-row space-x-2">
                    <Link
                      target="blank"
                      href={"mailto:info@cryptool.io"}
                      className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                    >
                      <Mail width={14} height={16} />
                    </Link>
                    <Link
                      target="blank"
                      href={"https://twitter.com/cryptool_io"}
                      className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                    >
                      <Twitter width={14} height={16} />
                    </Link>
                    <Link
                      target="blank"
                      href={"https://linkedin.com/company/cryptool-io"}
                      className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                    >
                      <Linkedin width={14} height={16} />
                    </Link>
                    <Link
                      target="blank"
                      href={"https://t.me/cryptool_io"}
                      className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                    >
                      <Telegram width={14} height={16} />
                    </Link>
                    <Link
                      target="blank"
                      href={"https://calendly.com/cryptool_io/"}
                      className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                    >
                      <Calendar width={14} height={16} />
                    </Link>
                  </div>
                  <div className="mt-2 text-[#2F4644] text-base font-normal">
                    © 2023 Cryptool. All rights reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
