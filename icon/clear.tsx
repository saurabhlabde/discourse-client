import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Clear = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20.282 14.1"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M8.949 3.52a.75.75 0 011.06 0l2.47 2.47 2.47-2.47a.75.75 0 011.06 1.06L13.54 7.05l2.469 2.47a.75.75 0 11-1.06 1.06l-2.47-2.469-2.47 2.469a.75.75 0 01-1.06-1.06l2.47-2.47-2.47-2.47a.75.75 0 010-1.06z" />
      <path d="M17.531 14.1H6.884a3.728 3.728 0 01-2.949-1.435L.373 8.131a1.747 1.747 0 010-2.162l3.562-4.535A3.728 3.728 0 016.884 0h10.647a2.754 2.754 0 012.75 2.75v8.6a2.754 2.754 0 01-2.75 2.75zM6.884 1.5a2.236 2.236 0 00-1.769.86L1.553 6.9a.249.249 0 000 .309l3.562 4.531a2.236 2.236 0 001.769.86h10.647a1.252 1.252 0 001.25-1.25v-8.6a1.252 1.252 0 00-1.25-1.25z" />
    </svg>
  );
};

const ClearIcon = React.memo(Clear);

export default ClearIcon;
