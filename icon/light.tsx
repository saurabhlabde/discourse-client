import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Light = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21.5 21.5"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M10.75 0a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zM10.75 16.5a5.75 5.75 0 115.75-5.75 5.757 5.757 0 01-5.75 5.75zm0-10A4.25 4.25 0 1015 10.75a4.255 4.255 0 00-4.25-4.25z" />
      <path
        data-name="Path"
        d="M4.209 3.149a.75.75 0 10-1.06 1.06l.707.707a.75.75 0 001.06-1.06zM21.5 10.75a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zM18.351 4.209a.75.75 0 00-1.06-1.06l-.707.707a.75.75 0 001.06 1.06zM10.75 19a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zM17.644 16.584a.75.75 0 00-1.06 1.06l.707.707a.75.75 0 001.06-1.06zM2.5 10.75a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zM4.916 17.644a.75.75 0 00-1.06-1.06l-.707.707a.75.75 0 001.06 1.06z"
      />
    </svg>
  );
};

const LightIcon = React.memo(Light);

export default LightIcon;
