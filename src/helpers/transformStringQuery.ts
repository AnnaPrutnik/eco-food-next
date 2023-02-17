import { getAsString } from 'helpers';

export function transformStringQuery(query: string | string[]) {
  const transform = getAsString(query);

  if (transform) {
    return transform
      .split('_')
      .map((item) => item.toLowerCase().split('-').join(' '));
  }
  return undefined;
}
