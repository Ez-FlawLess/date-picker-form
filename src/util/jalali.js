import { JalaliDateTime } from 'jalali-date-time';
const config = {
    timezone: 'Asia/Tehran',
    locale: 'en',
    fullTextFormat: 'W, D N Y H:I:S',
    titleFormat: 'W, D N Y',
    dateFormat: 'Y-M-D',
    timeFormat: 'H:I:S',
};
const jalali = JalaliDateTime(config);
export default jalali