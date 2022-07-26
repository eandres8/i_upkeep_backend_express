import { env } from 'process';
import { DateTime, Settings } from 'luxon';

Settings.defaultZone = env.TIME_ZONE!;

export class DateTimeAdapter {
    static now() {
        return DateTime.now();
    }
}