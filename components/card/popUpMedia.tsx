import ImageIcon from "../../icon/image";
import GifIcon from "../../icon/gif";

import {
  ItemSection,
  PopUpMediaSection,
} from "../../styles/components/card/popUpMedia";

export const PopUpMediaSelcect = () => {
  return (
    <>
      <PopUpMediaSection>
        <ItemSection>
          <ImageIcon />
        </ItemSection>
        <ItemSection>
          <GifIcon />
        </ItemSection>
      </PopUpMediaSection>
    </>
  );
};
