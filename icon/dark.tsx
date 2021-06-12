import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Dark = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 17.463 17.5"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M8.75 17.5a8.75 8.75 0 010-17.5 8.834 8.834 0 011.324.1.75.75 0 01.337 1.342 4.75 4.75 0 105.83 7.5.75.75 0 011.219.654 8.751 8.751 0 01-8.71 7.9zM8.236 1.518a7.25 7.25 0 107.4 9.51A6.252 6.252 0 017 5.25a6.2 6.2 0 011.236-3.732z" />
    </svg>
  );
};

const DarkIcon = React.memo(Dark);

export default DarkIcon;
