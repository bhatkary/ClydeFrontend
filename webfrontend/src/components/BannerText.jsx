import React from "react";
import Typed from "react-typed";

const BannerText = () => {
  return (
    <div
      className="text-center text-gray-500"
      style={{ padding: "0", fontWeight: "bold", width: "400px" }}
    >
      <p className="text-7xl">
        {"Ask Clyd anything. Ask about your"}{" "}
        <Typed
          className="text-gray-100"
          strings={["Code", "OKRs", "Bugs", "Goals"]}
          typeSpeed={100}
          backSpeed={80}
          loop
        />
      </p>
    </div>
  );
};

export default BannerText;
