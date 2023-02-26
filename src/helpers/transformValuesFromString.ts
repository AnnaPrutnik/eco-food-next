import { getAsString } from 'helpers';

export function transformValuesFromString(query: string | string[]) {
  const transform = getAsString(query);

  if (!transform) {
    return null;
  }

  return transform
    .split('_')
    .map((item) => item.toLowerCase().split('-').join(' '));
}
