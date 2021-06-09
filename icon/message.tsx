import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Message = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 25.918 25.154"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M13.547 0A12.37 12.37 0 002.091 17.038l1.417 3.478a.76.76 0 01-.228.879l-3 2.406a.76.76 0 00.48 1.353h11.886a13.272 13.272 0 0013.272-13.272A11.882 11.882 0 0014.036 0z"
        fill="#246afd"
      />
    </svg>
  );
};

const MessageIcon = React.memo(Message);

export default MessageIcon;
