/**
 * This presentation is intentionally static. It has no database dependency,
 * but keeping this module lets a future data-backed market map add one without
 * changing the application structure.
 */
export function getDb(): never {
  throw new Error("A database has not been configured for this static site.");
}
