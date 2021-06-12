import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

interface IAgoTime {
        created: string;
}

TimeAgo?.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export const AgoTime = ({ created }: IAgoTime) => {
        return timeAgo.format(new Date(created), 'mini-now');
};
