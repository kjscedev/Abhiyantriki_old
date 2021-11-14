import { useRef } from "react";
import { COLORS } from "../../constants/constants";
import ESNav from "./SmallScreen/ENav";
import ESScrollSpy from "./SmallScreen/EScrollSpy";
import Header from "./SmallScreen/Header";
import "./ES.css";
import "./ScrollPadding.css";
import Footer from "../Footer/Footer";

interface ESSmallScreenProps {}

const ESSmallScreen = ({}: ESSmallScreenProps) => {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* top container */}
      <div
        className="position-fixed w-100"
        style={{ background: COLORS.PRIMARY, zIndex: 1 }}
      >
        <Header />
        <ESNav navContainerRef={navContainerRef} />
      </div>

      {/* bottom container */}
      <div className="flex-column d-flex justify-content-center">
        <div
          ref={parentScrollContainerRef}
          style={{
            marginTop: 90,
            paddingBottom: 0,
            // height: "90vh",
            // overflowY: "scroll",
          }}
        >
          <ESScrollSpy
            // parentScrollContainerRef={parentScrollContainerRef}
            navContainerRef={navContainerRef}
          />
        </div>
      </div>

      {/* hard coded footer to prevent footer on ESBigScreen */}
      <Footer />
    </>
  );
};

export default ESSmallScreen;
