import { DateTime } from 'luxon';

export enum CustomFormat {
    YYYYMMDD = 'YYYYMMDD',
    DDMMYYY = 'DDMMYYY'
}

export class DateUtility {

    public static getStartOfDay(value: DateTime | Date | string, timezone = 'utc'): DateTime {
        return this.getDateTime(value, timezone).startOf('day');
    }

    public static getEndOfDay(value: DateTime | Date | string, timezone = 'utc'): DateTime {
        return this.getDateTime(value, timezone).endOf('day');
    }

    public static getDateTime(value: DateTime | Date | string, timezone = 'utc'): DateTime {

        let date: DateTime = null;

        if (value instanceof Date) {
            date = DateTime.fromJSDate(value);
        } else if (typeof (value) === 'string' || value instanceof String) {
            date = DateTime.fromISO(value.toString());
        } else if (value instanceof DateTime) {
            date = value;
        }

        if (date) {
            date = date.setZone(timezone);
        }

        return date;
    }

    public static getLocalToday(): DateTime {
        return DateTime.local().setZone(this.getLocalTimeZone());
    }

    //Method to ensure a day for a specific month makes sense
    //This method is not useful for when you want to ADD days, its only for setting
    //days
    public static getValidDayForMonthAndYear(day: number, month: number, year: number): number {
        let saneDay = day;
        if (month == 2 && day > 28) {
            saneDay = this.isLeapYear(year) ? 29 : 28;
        }
        else if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)
            saneDay = 30;
        else if (day > 31)
            saneDay = 31;
        return saneDay;
    }

    public static isLeapYear(year: number): boolean {
        let leapYear = false;
        if ((year % 4) == 0) {
            if ((year % 100) == 0) {
                if ((year % 400) == 0) {
                    leapYear = true;
                }
            }
            else {
                leapYear = true;
            }
        }
        else {
            leapYear = false;
        }
        return leapYear;
    }

    public static getDate(value: DateTime | Date | string): Date {

        let date: Date = null;

        if (value instanceof Date) {
            date = value;
        } else if (typeof (value) === 'string' || value instanceof String) {
            date = new Date(value as string);
        } else if (value instanceof DateTime) {
            date = new Date(value.toJSDate());
        }

        return date;
    }

    public static getDateByAddMoreHours(value: DateTime | Date | string, hours: number): Date {

        let date: Date = null;

        if (value instanceof Date) {
            date = value;
        } else if (typeof (value) === 'string' || value instanceof String) {
            date = new Date(value as string);
        } else if (value instanceof DateTime) {
            date = new Date(value.toJSDate());
        }



        return new Date(date.getTime() + hours * 60 * 60 * 1000);
    }

    public static formatDateTime(value: DateTime | Date | string, timezone: string, dateFormat: string): string {
        const dt = this.getDateTime(value, timezone);

        return dt
            ? dt.toFormat(dateFormat)
            : null;
    }

    public static formatSimpleTime(value: DateTime | Date | string, timezone: string): string {

        const dt = this.getDateTime(value, timezone);

        return dt
            ? dt.toLocaleString(DateTime.TIME_SIMPLE)
            : null;
    }

    public static customFormat(value: DateTime | Date | string, timezone: string, format: CustomFormat): string {

        const dt = this.getDateTime(value, timezone);

        const day = dt.get('day') < 10
            ? `0${dt.get('day')}`
            : `${dt.get('day')}`;

        const month = dt.get('month') < 10
            ? `0${dt.get('month')}`
            : `${dt.get('month')}`;

        const year = dt.get('year');

        switch (format) {
            case CustomFormat.YYYYMMDD: {
                return `${year}${month}${day}`;
            }
            case CustomFormat.DDMMYYY: {
                return `${day}${month}${year}`;
            }
        }


    }

    public static getNowAsUtcWithCurrentTime(): DateTime {
        const now = new Date().toISOString();
        const nowAsUtc = DateTime
            .fromISO(now)
            .setZone(DateUtility.getLocalTimeZone())
            .setZone('utc', { keepLocalTime: true });
        return nowAsUtc;
    }

    public static getLocalTimeZone(): string {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return timezone;
    }

    public static getDateTimeAsUtc(value: DateTime): DateTime {

        const asUtc = DateTime
            .fromISO(value.toString())
            .setZone(DateUtility.getLocalTimeZone())
            .setZone('utc', { keepLocalTime: true });

        return asUtc;
    }

    public static getSimpleTime(value: DateTime | Date | string, timezone = 'utc'): string {

        let date: DateTime = null;

        if (value instanceof Date) {
            date = DateTime.fromJSDate(value);
        } else if (typeof (value) === 'string' || value instanceof String) {
            date = DateTime.fromISO(value.toString());
        } else if (value instanceof DateTime) {
            date = value;
        }

        if (date) {
            date = date.setZone(timezone);
        }

        return date.toLocaleString(DateTime.TIME_SIMPLE);
    }

    public static getDateMed(value: DateTime | Date | string, timezone = 'utc'): string {

        let date: DateTime = null;

        if (value instanceof Date) {
            date = DateTime.fromJSDate(value);
        } else if (typeof (value) === 'string' || value instanceof String) {
            date = DateTime.fromISO(value.toString());
        } else if (value instanceof DateTime) {
            date = value;
        }

        if (date) {
            date = date.setZone(timezone);
        }

        return date.toLocaleString(DateTime.DATE_MED);
    }


}

