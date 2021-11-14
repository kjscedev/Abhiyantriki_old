import TextAndButton from "../components/TextAndButton/TextAndButton";
import TwinkleTwinkle from "../components/TwinkleTwinkle/TwinkleTwinkle";

interface GetInvolvedProps {}

const GetInvolved = ({}: GetInvolvedProps) => {
  return (
    <div>
      <div className="container" style={{ paddingTop: 30 }}>
        <div
          className="
              text-center
              d-flex
              justify-content-center
              flex-column
              align-items-center
            "
        >
          <div className="mb-4">
            {/* <TwinkleTwinkle title="Get Involved" /> */}
            <img
              src={process.env.PUBLIC_URL + "/assets/gifs/get-involved.gif"}
              // className="parvaah-title"
              style={{ width: "100%" }}
              alt="Get Involved"
            />
          </div>
          <TextAndButton
            paraText={`Do you know someone with the potential to build something 
                that pawns over the technology being displayed in Abhiyantriki and 
                will leave the audience awestruck? If yes, feel free to add their details 
                in the form below and we’ll reach out to them!`}
            buttonText="Nominate an Exhibitor"
            buttonHref="https://forms.gle/Pk3sScRCaLHac2YB6"
          />

          <TextAndButton
            paraText={`Sponsors and Partners are a key component that helps make
            Abhiyantriki a fest worthy of all the praise and acclaim it has been
            garnered over the ages. Along with monetary support, you can feel
            free to help us out in any other way possible. Fill out the form
            below to get in touch with us:`}
            buttonText="Partner with us"
            buttonHref="https://forms.gle/DEctEZ9shxsyY2Vy9"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
