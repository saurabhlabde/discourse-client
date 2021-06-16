import { useState } from "react";
import { ChatsUserSection } from "../styles/modules/chatUser";
import { ButtonAuth } from "../components/button/auth";
import DeleteIcon from "../icon/delete";

import {
  ProfileImageSection,
  TopSection,
  Form,
  Label,
  Images,
  Input,
  Text,
  ImageSection,
  BottomSection,
} from "../styles/modules/profile";
import { SMIconSection } from "../styles/components/input/message";

import { media } from "../utils/media";
import { mediaUrl } from "../utils/mediaUrl";

export const ProfilePage = () => {
  const [seletedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);

  const inputChangeHandel = (e: any) => {
    const resFile = media(e);

    const resConvertFile = mediaUrl(e);

    setFile(resFile);

    setSelectedImage(resConvertFile);
  };

  const removeImageHandel = () => {
    setSelectedImage(null);
    setFile(null);
  };

  const uploadHandel = (e: any) => {
    e?.preventDefault();
  };

  return (
    <>
      <ChatsUserSection>
        <ProfileImageSection>
          <Form onSubmit={uploadHandel}>
            <TopSection>
              {seletedImage && (
                <SMIconSection onClick={removeImageHandel}>
                  <DeleteIcon />
                </SMIconSection>
              )}

              <ImageSection>
                <Label htmlFor="select-profile-img">
                  {seletedImage ? (
                    <Images src={seletedImage} alt="" />
                  ) : (
                    <Text>
                      <span>Select profile image</span>
                    </Text>
                  )}
                </Label>
                <Input
                  type="file"
                  id="select-profile-img"
                  hidden
                  onChange={inputChangeHandel}
                />
              </ImageSection>
            </TopSection>
            <BottomSection>
              <ButtonAuth buttonName="Set profile" />
            </BottomSection>
          </Form>
        </ProfileImageSection>
      </ChatsUserSection>
    </>
  );
};
