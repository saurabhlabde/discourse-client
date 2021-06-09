import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Search = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 17.395 17.399"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M16.647 17.4a.747.747 0 01-.531-.219l-5.155-5.156a6.75 6.75 0 111.06-1.06l5.156 5.155a.75.75 0 01-.531 1.28zm-9.9-15.9a5.25 5.25 0 100 10.5 5.217 5.217 0 003.708-1.533A5.25 5.25 0 006.747 1.5z"
        fill="#fefefe"
      />
    </svg>
  );
};

const SearchIcon = React.memo(Search);

export default SearchIcon;
