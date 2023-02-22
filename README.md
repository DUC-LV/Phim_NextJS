# Phim_NextJS
-------------------------------------------------------------toggle.ts
import { ApiClient } from '@ott/api/dist/api-client';
import { useCallback, useEffect, useState } from 'react';

import { useRequireLogin } from './require-login';

export const useLike = (
  browserClient: ApiClient,
  isLoggedIn: boolean,
  itemType: 'VOD' | 'FILM' | 'LIVE',
  itemId: string | number,
  liked: boolean
) => {
  const [like, setLike] = useState(liked);

  useEffect(() => {
    setLike(liked);
  }, [liked, itemId]);

  const toggleLike = useCallback(async () => {
    setLike(!like);
    return (await browserClient.updateLike(itemType, itemId, !like)).data;
  }, [like, browserClient, itemType, itemId]);

  return { toggleLike: useRequireLogin(isLoggedIn, toggleLike), like: like };
};

export const useWatchLater = (
  browserClient: ApiClient,
  isLoggedIn: boolean,
  itemType: 'VOD' | 'FILM' | 'LIVE',
  itemId: string | number,
  isWatchLater: boolean
) => {
  const [watchLater, setWatchLater] = useState(isWatchLater);

  useEffect(() => {
    setWatchLater(isWatchLater);
  }, [isWatchLater, itemId]);

  const toggleWatchLater = useCallback(async () => {
    setWatchLater(!watchLater);
    return (await browserClient.updateWatchLater(itemType, itemId, !watchLater)).data;
  }, [watchLater, browserClient, itemType, itemId]);

  return { toggleWatchLater: useRequireLogin(isLoggedIn, toggleWatchLater), watchLater };
};
