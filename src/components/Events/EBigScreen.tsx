import { useRef } from "react";
import { COLORS } from "../../constants/constants";
import ESNav from "./BigScreen/ENav";
import ESScrollSpy from "./BigScreen/EScrollSpy";
import Header from "./BigScreen/Header";
import "./ES.css";

interface ESBigScreenProps {}

const ESBigScreen = ({}: ESBigScreenProps) => {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-lg-4">
            <div
              className="position-relative"
              style={{
                zIndex: 2,
                background: COLORS.PRIMARY,
                width: "100%",
              }}
            >
              <div
                className="position-fixed top-0"
                style={{ marginTop: "calc(40vh/2)" }}
              >
                <Header />
                <ESNav />
              </div>
            </div>
          </div>

          <div
            className={
              "col-md-8 col-sm-8 col-lg-8 flex-column d-flex justify-content-center"
            }
          >
            <div ref={parentScrollContainerRef} style={{ paddingBottom: 100 }}>
              <ESScrollSpy />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ESBigScreen;
