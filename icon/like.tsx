import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Like = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 17.5 14.5"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M8.75 14.5a3.335 3.335 0 01-1.45-.443 13.652 13.652 0 01-1.534-.941 17.886 17.886 0 01-3.884-3.484A7.777 7.777 0 010 4.78 4.981 4.981 0 015.15 0a5.234 5.234 0 013.6 1.542A5.235 5.235 0 0112.35 0a4.981 4.981 0 015.15 4.78 7.776 7.776 0 01-1.881 4.852 17.888 17.888 0 01-3.885 3.484 13.47 13.47 0 01-1.533.941 3.3 3.3 0 01-1.451.443zm-3.6-13A3.483 3.483 0 001.5 4.78 6.326 6.326 0 003.056 8.7a16.634 16.634 0 003.564 3.183 12.34 12.34 0 001.36.838 2.2 2.2 0 00.77.279 2.193 2.193 0 00.769-.279 12.34 12.34 0 001.36-.838A16.64 16.64 0 0014.444 8.7 6.326 6.326 0 0016 4.78a3.484 3.484 0 00-3.65-3.28 3.956 3.956 0 00-3.005 1.619.749.749 0 01-1.189 0A3.96 3.96 0 005.15 1.5z" />
    </svg>
  );
};

const LikeIcon = React.memo(Like);

export default LikeIcon;
