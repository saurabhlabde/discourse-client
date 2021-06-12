import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const LikeFill = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 19.5 14.5"
      aria-labelledby={titleId}
      className="like_fill_icon_svg"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="#ff7904">
        <path d="M5.15 0A4.976 4.976 0 000 4.78a7.114 7.114 0 002.028 4.73 21.308 21.308 0 003.983 3.29l2.319 1.571a.75.75 0 00.841 0l2.318-1.571c.43-.291.874-.6 1.317-.928a.3.3 0 00.094-.372l-1.368-2.749a.2.2 0 00-.333-.038l-.073.088a2 2 0 01-1.543.727H7.75a2 2 0 110-4h.7a.4.4 0 00.309-.146l1.572-1.905a2 2 0 013.361.439l.8 1.751a.352.352 0 00.5.131A1.994 1.994 0 0116 5.528h1.188a.289.289 0 00.292-.263q.02-.239.02-.485A4.975 4.975 0 0012.35 0a5.26 5.26 0 00-3.6 1.542A5.26 5.26 0 005.15 0z" />
        <path
          data-name="Path"
          d="M12.557 4.438a.75.75 0 00-1.257-.165L9.23 6.778H7.75a.75.75 0 000 1.5h1.833a.75.75 0 00.579-.273l1.53-1.855 1.793 3.913a.75.75 0 001.26.165l1.608-1.95h2.4a.75.75 0 000-1.5H16a.75.75 0 00-.578.273L14.35 8.35z"
        />
      </g>
    </svg>
  );
};

const LikeFillIcon = React.memo(LikeFill);

export default LikeFillIcon;
