import dayjs from 'dayjs';
import pino from 'pino';

const Logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    },
    base: {pid: false},
    timestamps: () => `,"time":"${dayjs().format('mm-dd-YYYY')}"`
})
export default Logger