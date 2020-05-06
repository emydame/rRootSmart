import winston from 'winston';
import fs from 'fs';
import path from 'path';

const { printf } = winston.format;

const myFormat = printf(({ message }) => `${message}`);

const writeStream = fs.createWriteStream(
  path.join(__dirname, '../app.log'), { flags: 'a', encoding: 'utf8' }
);

// define the custom settings for each transport (file, console)
const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: myFormat
  }
};

const logger = winston.createLogger({
  transports: [new winston.transports.Console(options.console)],
  exitOnError: false // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write(message) {
    const finalIndex = message.length - 1;
    const lastTabIndex = message.lastIndexOf('\t\t');
    const str = message.substring(lastTabIndex + 1, finalIndex);
    let time = Math.ceil(parseFloat(str));
    if (time < 10) {
      time = `0${time.toString()}`;
    } else {
      time = time.toString();
    }
    const msg = `${message.substring(0, lastTabIndex + 1)}${time}ms\n`;
    writeStream.write(msg);
    logger.info(msg);
  }
};

module.exports = logger;
