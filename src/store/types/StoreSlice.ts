/* eslint-disable no-unused-vars */
export enum StoreSlice {
  Authorization = 'authorization',
}

export enum Loading {
  idle = 'idle',
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected',
}

export type LoadingStatus = Loading.idle | Loading.pending | Loading.fulfilled | Loading.rejected;
