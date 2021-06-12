import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Home = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16.703 18.342"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M15.201 18.343h-4.165a.751.751 0 01-.75-.75v-6.211H6.417v6.211a.751.751 0 01-.75.75H1.501a.978.978 0 01-.971-.832l-.183-1.157a28.749 28.749 0 01.127-9.653 2.232 2.232 0 01.654-1.217l4.627-4.44a3.749 3.749 0 015.192 0l4.627 4.44a2.232 2.232 0 01.655 1.217 28.749 28.749 0 01.128 9.653l-.181 1.157a.978.978 0 01-.975.832zM5.667 9.882h5.368a.751.751 0 01.75.75v6.212h2.976l.113-.721a27.267 27.267 0 00-.121-9.151.752.752 0 00-.218-.405L9.909 2.128a2.249 2.249 0 00-3.115 0L2.167 6.566a.752.752 0 00-.218.405 27.267 27.267 0 00-.121 9.151l.113.721h2.977v-6.211a.751.751 0 01.749-.75z" />
    </svg>
  );
};

const HomeIcon = React.memo(Home);

export default HomeIcon;
