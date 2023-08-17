export const API_CONSTANTS = {
  LIMIT: 100,
} as const

export const EXCLUDE_ATTRIBUTES = [
  'deletedAt',
  'createdBy',
  'updatedBy',
  'deletedBy',
]
