import dotenv from 'dotenv';
dotenv.config();
interface Config {
  PORT: string;
}
const config: Config = {
  PORT: process.env.PORT as string
};
export default config;