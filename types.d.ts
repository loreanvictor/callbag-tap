import { Source } from 'callbag';

export default function tap<T>(
  op: (t: T) => void,
  error?: (err: any) => void,
  complete?: () => void,
): (source: Source<T>) => Source<T>;
