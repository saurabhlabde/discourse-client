import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Logout = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16.501 15.5"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M8.751 14a.75.75 0 000 1.5h6a1.75 1.75 0 001.75-1.75v-12A1.75 1.75 0 0014.751 0h-6a.75.75 0 000 1.5h6a.25.25 0 01.25.25v12a.25.25 0 01-.25.25z" />
      <path d="M5.345 12a1.218 1.218 0 01-.53-.122A15.015 15.015 0 01.448 8.715l-.1-.1a1.251 1.251 0 010-1.734l.1-.1a15.015 15.015 0 014.367-3.17 1.226 1.226 0 011.752.988l.054.555c0 .037.006.073.01.11l.01.111h4.613a1.252 1.252 0 011.25 1.25v2.24a1.252 1.252 0 01-1.25 1.25H6.641c0 .035-.006.07-.009.105v.005c0 .037-.007.073-.01.11l-.055.554A1.224 1.224 0 015.345 12zm-.233-6.862a13.507 13.507 0 00-3.511 2.607c.206.212.426.424.653.628a13.547 13.547 0 002.858 1.979l.016-.163c.029-.3.052-.591.069-.872a.748.748 0 01.749-.7h5.055V6.875H5.946a.751.751 0 01-.749-.7 26.013 26.013 0 00-.069-.871l-.016-.162z" />
    </svg>
  );
};

const LogoutIcon = React.memo(Logout);

export default LogoutIcon;
