import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Delete = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15.5 19.994"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="#e93535">
        <path d="M5 .75A.75.75 0 015.75 0h4a.75.75 0 01.75.75v.75h4.25a.75.75 0 010 1.5h-14a.75.75 0 010-1.5H5zM7.75 19.994a26.835 26.835 0 01-3.714-.259 2.6 2.6 0 01-2.226-2.29l-.02-.177a44.285 44.285 0 010-9.77l.2-1.8a.5.5 0 01.496-.448h10.527a.5.5 0 01.5.445l.2 1.8a44.4 44.4 0 010 9.77l-.02.177a2.6 2.6 0 01-2.227 2.29 26.835 26.835 0 01-3.716.262zm2-11.594a.751.751 0 00-.75.75v7a.75.75 0 001.5 0v-7a.751.751 0 00-.751-.75zm-4 0a.751.751 0 00-.75.75v7a.75.75 0 001.5 0v-7a.751.751 0 00-.75-.75z" />
      </g>
    </svg>
  );
};

const DeleteIcon = React.memo(Delete);

export default DeleteIcon;
