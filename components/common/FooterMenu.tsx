import { useCustomRouter } from "components/hooks/custom-router";
import Link from "next/link";
import React from "react";

interface FooterItemProps {
  title: string;
  items: string[];
}

const FooterItem: React.FC<FooterItemProps> = ({ title, items }) => {
  
  const { goToDocument } = useCustomRouter();
  return (
    <div className="flex flex-col w-44">
      <div className="text-[#2f4644] text-start text-base font-semibold mb-6">
        {title}
      </div>
      {items.map((item, index) =>
        item === "Documentation" ? (
          <div
            key={index}
            onClick={() => goToDocument()}
            className="mb-4 w-fit text-[#54716F] font-normal cursor-pointer hover:font-semibold"
          >
            {item}
          </div>
        ) : (
          <div key={index} className="mb-4 w-fit text-[#54716F] font-normal">
            {item}
          </div>
        )
      )}
    </div>
  );
};

export default FooterItem;
