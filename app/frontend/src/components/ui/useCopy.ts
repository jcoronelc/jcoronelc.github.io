import { useCallback, useState } from 'react';

/** Clipboard helper that reports which key was copied last, for inline "Copied" feedback. */
export function useCopy(resetMs = 2200) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback(
    async (text: string, key: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(key);
        window.setTimeout(() => setCopied((c) => (c === key ? null : c)), resetMs);
      } catch {
        setCopied(null);
      }
    },
    [resetMs],
  );

  return { copied, copy };
}
