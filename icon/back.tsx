import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Back({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 5.815 10.044"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M5.583.232a.793.793 0 010 1.121L1.914 5.022l3.669 3.669a.793.793 0 01-1.121 1.121L.232 5.583a.793.793 0 010-1.121l4.23-4.23a.793.793 0 011.121 0z"
        fill="#fefefe"
      />
    </svg>
  );
}

const BackIcon = React.memo(Back);

export default BackIcon;
