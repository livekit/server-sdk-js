// SPDX-FileCopyrightText: 2024 LiveKit, Inc.
//
// SPDX-License-Identifier: Apache-2.0
// this file exists to smoothly translate the autogenerated CommonJS code
// to an ES module that plays better with TypeScript.
import native from './native.cjs';

export const {
  livekitInitialize,
  livekitCopyBuffer,
  livekitRetrievePtr,
  livekitFfiRequest,
  FfiHandle,
  WrappedThreadsafeFunction,
} = native;
