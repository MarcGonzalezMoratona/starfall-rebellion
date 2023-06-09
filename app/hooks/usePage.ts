import { useContext } from 'react';
import PageContext from '../store/page-context';

export function usePageType(): string {
  const { pageType } = useContext(PageContext);
  return pageType;
}

export function usePageHandler(): (pageType: string) => void {
  const { PageHandler } = useContext(PageContext);
  return PageHandler;
}
