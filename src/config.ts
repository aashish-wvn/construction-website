import data from "./site.config.json";

// Re-export as a typed singleton — import { config } from "./config"
export const config = data as typeof data;
export default config;
