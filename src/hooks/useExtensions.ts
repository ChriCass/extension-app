import { useState, useMemo } from 'react';
import extensionsData from '../data/extensions.json';

export interface Extension {
  id: number;
  name: string;
  logo: string;
  description: string;
  enabled: boolean;
}

export function useExtensions() {
  const [extensions, setExtensions] = useState<Extension[]>(extensionsData);

  const toggle = (id: number) => {
    setExtensions((prev) =>
      prev.map((ext) => (ext.id === id ? { ...ext, enabled: !ext.enabled } : ext))
    );
  };

  const remove = (id: number) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  const activeExtensions = useMemo(
    () => extensions.filter((ext) => ext.enabled),
    [extensions]
  );

  const inactiveExtensions = useMemo(
    () => extensions.filter((ext) => !ext.enabled),
    [extensions]
  );

  return { extensions, activeExtensions, inactiveExtensions, toggle, remove };
}
