export const currentDate = (timeStamp) => {
    if (!timeStamp) {
        return false;
    }

    const date = new Date(timeStamp);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    return `${month} ${day}, ${year} ${time}`;
};

export const timeAgo = (date) => {
    date = new Date(date);

    const seconds = Math.floor(((new Date() as any) - date) / 1000);
    let intervalType = '';

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                    intervalType = 'hour';
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = 'minute';
                    } else {
                        interval = seconds;
                        intervalType = 'second';
                    }
                }
            }
        }
    }
    if (interval > 1 || interval === 0) intervalType += 's';
    if (interval === 0) return 'just now';

    return `${interval} ${intervalType} ago`;
};