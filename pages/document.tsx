import PdfViewer from "components/common/PdfViewer";
import RightNavBar from "components/common/basic/RightBar";
import React from "react";

const DocumentPage = () => {

  return (
    <>
      <div className="flex flex-row bg-[#0F2421]">
        <RightNavBar />
        <PdfViewer />
      </div>
    </>
  );
};

export default DocumentPage;
