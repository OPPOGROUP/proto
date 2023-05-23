// package: proto
// file: proto/hoyolib.proto

import * as jspb from "google-protobuf";

export class ResponseHeader extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseHeader): ResponseHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseHeader;
  static deserializeBinaryFromReader(message: ResponseHeader, reader: jspb.BinaryReader): ResponseHeader;
}

export namespace ResponseHeader {
  export type AsObject = {
    code: number,
    message: string,
    userId: number,
  }
}

export class RegisterRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getCookieToken(): string;
  setCookieToken(value: string): void;

  getAccountType(): RegisterRequest.AccountTypeMap[keyof RegisterRequest.AccountTypeMap];
  setAccountType(value: RegisterRequest.AccountTypeMap[keyof RegisterRequest.AccountTypeMap]): void;

  getUserId(): number;
  setUserId(value: number): void;

  clearGamesList(): void;
  getGamesList(): Array<GameTypeMap[keyof GameTypeMap]>;
  setGamesList(value: Array<GameTypeMap[keyof GameTypeMap]>): void;
  addGames(value: GameTypeMap[keyof GameTypeMap], index?: number): GameTypeMap[keyof GameTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    accountId: string,
    cookieToken: string,
    accountType: RegisterRequest.AccountTypeMap[keyof RegisterRequest.AccountTypeMap],
    userId: number,
    gamesList: Array<GameTypeMap[keyof GameTypeMap]>,
  }

  export interface AccountTypeMap {
    UNKNOWN: 0;
    OVERSEA: 1;
    CN: 2;
  }

  export const AccountType: AccountTypeMap;
}

export class RegisterResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ResponseHeader | undefined;
  setHeader(value?: ResponseHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    header?: ResponseHeader.AsObject,
  }
}

export class CheckInRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  clearGamesList(): void;
  getGamesList(): Array<GameTypeMap[keyof GameTypeMap]>;
  setGamesList(value: Array<GameTypeMap[keyof GameTypeMap]>): void;
  addGames(value: GameTypeMap[keyof GameTypeMap], index?: number): GameTypeMap[keyof GameTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckInRequest): CheckInRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckInRequest;
  static deserializeBinaryFromReader(message: CheckInRequest, reader: jspb.BinaryReader): CheckInRequest;
}

export namespace CheckInRequest {
  export type AsObject = {
    userId: number,
    gamesList: Array<GameTypeMap[keyof GameTypeMap]>,
  }
}

export class CheckInResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ResponseHeader | undefined;
  setHeader(value?: ResponseHeader): void;

  getCheckininfocnMap(): jspb.Map<number, CheckInResponse.CheckInStatus>;
  clearCheckininfocnMap(): void;
  getCheckininfooverseaMap(): jspb.Map<number, CheckInResponse.CheckInStatus>;
  clearCheckininfooverseaMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckInResponse): CheckInResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckInResponse;
  static deserializeBinaryFromReader(message: CheckInResponse, reader: jspb.BinaryReader): CheckInResponse;
}

export namespace CheckInResponse {
  export type AsObject = {
    header?: ResponseHeader.AsObject,
    checkininfocnMap: Array<[number, CheckInResponse.CheckInStatus.AsObject]>,
    checkininfooverseaMap: Array<[number, CheckInResponse.CheckInStatus.AsObject]>,
  }

  export class CheckInStatus extends jspb.Message {
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    getMsg(): string;
    setMsg(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckInStatus.AsObject;
    static toObject(includeInstance: boolean, msg: CheckInStatus): CheckInStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckInStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckInStatus;
    static deserializeBinaryFromReader(message: CheckInStatus, reader: jspb.BinaryReader): CheckInStatus;
  }

  export namespace CheckInStatus {
    export type AsObject = {
      success: boolean,
      msg: string,
    }
  }
}

export class AccountInfoRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountInfoRequest): AccountInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountInfoRequest;
  static deserializeBinaryFromReader(message: AccountInfoRequest, reader: jspb.BinaryReader): AccountInfoRequest;
}

export namespace AccountInfoRequest {
  export type AsObject = {
    userId: number,
  }
}

export class AccountInfoResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): ResponseHeader | undefined;
  setHeader(value?: ResponseHeader): void;

  hasAccountInfo(): boolean;
  clearAccountInfo(): void;
  getAccountInfo(): AccountInfoResponse.AccountInfo | undefined;
  setAccountInfo(value?: AccountInfoResponse.AccountInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountInfoResponse): AccountInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountInfoResponse;
  static deserializeBinaryFromReader(message: AccountInfoResponse, reader: jspb.BinaryReader): AccountInfoResponse;
}

export namespace AccountInfoResponse {
  export type AsObject = {
    header?: ResponseHeader.AsObject,
    accountInfo?: AccountInfoResponse.AccountInfo.AsObject,
  }

  export class AccountInfo extends jspb.Message {
    clearGameInfosList(): void;
    getGameInfosList(): Array<AccountInfoResponse.AccountInfo.GameInfo>;
    setGameInfosList(value: Array<AccountInfoResponse.AccountInfo.GameInfo>): void;
    addGameInfos(value?: AccountInfoResponse.AccountInfo.GameInfo, index?: number): AccountInfoResponse.AccountInfo.GameInfo;

    getIsSign(): boolean;
    setIsSign(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AccountInfo): AccountInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountInfo;
    static deserializeBinaryFromReader(message: AccountInfo, reader: jspb.BinaryReader): AccountInfo;
  }

  export namespace AccountInfo {
    export type AsObject = {
      gameInfosList: Array<AccountInfoResponse.AccountInfo.GameInfo.AsObject>,
      isSign: boolean,
    }

    export class GameInfo extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GameInfo.AsObject;
      static toObject(includeInstance: boolean, msg: GameInfo): GameInfo.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GameInfo, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GameInfo;
      static deserializeBinaryFromReader(message: GameInfo, reader: jspb.BinaryReader): GameInfo;
    }

    export namespace GameInfo {
      export type AsObject = {
      }
    }
  }
}

export interface ErrorCodeMap {
  OK: 0;
  INVALID_REQUEST_PARAM: 10000;
  ERROR_CREATE_USER: 10001;
  ERROR_USER_NOT_REGISTER: 10002;
  ERROR_CHECK_IN: 10003;
}

export const ErrorCode: ErrorCodeMap;

export interface GameTypeMap {
  UNKNOWN_GAME: 0;
  GENSHIN: 1000;
  STARRAIL: 1001;
}

export const GameType: GameTypeMap;

