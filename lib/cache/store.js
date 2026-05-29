import { memoryStore } from "./memory-store";
import { createRedisStore } from "./redis-store";

const DEFAULT_STORE_DRIVER = "auto";

function createCacheStore({
  driver = process.env.CACHE_STORE ?? DEFAULT_STORE_DRIVER,
  redisUrl = process.env.REDIS_URL,
  keyPrefix = process.env.CACHE_REDIS_PREFIX ?? "pathfinder:cache",
  ttlMs = Number(process.env.CACHE_TTL_MS ?? 600000),
} = {}) {
  const normalizedDriver = String(driver).toLowerCase();

  if (normalizedDriver === "redis" || (normalizedDriver === "auto" && redisUrl)) {
    try {
      return createRedisStore({ redisUrl, keyPrefix, ttlMs });
    } catch (error) {
      console.warn("[cache] Failed to initialize Redis store, falling back to memory:", error.message);
      return memoryStore;
    }
  }

  return memoryStore;
}

export const cacheStore = createCacheStore();