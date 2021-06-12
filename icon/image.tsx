import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Image = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      data-name="Component 2179 \u2013 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 9.5 8.25"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M5.75 1.5A1.5 1.5 0 117.25 3a1.5 1.5 0 01-1.5-1.5z" />
      <path
        data-name="Path"
        d="M3.886 3.102a.75.75 0 00-1.272 0l-2.5 4A.75.75 0 00.75 8.25h8a.75.75 0 00.6-1.2l-1.5-2a.75.75 0 00-1.2 0l-.844 1.125z"
      />
    </svg>
  );
};

const ImageIcon = React.memo(Image);

export default ImageIcon;
