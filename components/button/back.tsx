import BackIcon from "../../icon/back";

// style
import { BackButtonSection } from "../../styles/components/button/back";

export const BackButton = () => {
  const backHandel = () => {
    return history.back();
  };

  return (
    <>
      <BackButtonSection className="back_btn" onClick={backHandel}>
        <BackIcon />
      </BackButtonSection>
    </>
  );
};
