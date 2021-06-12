import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Desktop = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20.021 17"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M15.01 17h-10a.75.75 0 110-1.5h3.25v-2.049l-5.524-.157a2.6 2.6 0 01-2.494-2.29 37.429 37.429 0 010-8.51A2.6 2.6 0 012.736.205L10.01 0l7.274.205a2.6 2.6 0 012.494 2.29 37.429 37.429 0 010 8.51 2.6 2.6 0 01-2.494 2.29l-5.524.157V15.5h3.251a.75.75 0 110 1.5zm-5-15.5l-7.231.2a1.091 1.091 0 00-1.047.961 35.992 35.992 0 000 8.169 1.091 1.091 0 001.047.96l7.231.2 7.232-.2a1.089 1.089 0 001.046-.96 35.889 35.889 0 000-8.169 1.089 1.089 0 00-1.047-.961z" />
    </svg>
  );
};

const DesktopIcon = React.memo(Desktop);

export default DesktopIcon;
