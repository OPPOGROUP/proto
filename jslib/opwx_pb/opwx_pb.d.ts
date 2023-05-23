// package: opwx
// file: opwx_pb/opwx.proto

import * as jspb from "google-protobuf";
import * as hoyolib_pb_hoyolib_pb from "../hoyolib_pb/hoyolib_pb";

export class CheckinResults extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<hoyolib_pb_hoyolib_pb.CheckInResponse>;
  setResultsList(value: Array<hoyolib_pb_hoyolib_pb.CheckInResponse>): void;
  addResults(value?: hoyolib_pb_hoyolib_pb.CheckInResponse, index?: number): hoyolib_pb_hoyolib_pb.CheckInResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckinResults.AsObject;
  static toObject(includeInstance: boolean, msg: CheckinResults): CheckinResults.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckinResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckinResults;
  static deserializeBinaryFromReader(message: CheckinResults, reader: jspb.BinaryReader): CheckinResults;
}

export namespace CheckinResults {
  export type AsObject = {
    resultsList: Array<hoyolib_pb_hoyolib_pb.CheckInResponse.AsObject>,
  }
}

export class PushResponse extends jspb.Message {
  getStatus(): PushStatusMap[keyof PushStatusMap];
  setStatus(value: PushStatusMap[keyof PushStatusMap]): void;

  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PushResponse): PushResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushResponse;
  static deserializeBinaryFromReader(message: PushResponse, reader: jspb.BinaryReader): PushResponse;
}

export namespace PushResponse {
  export type AsObject = {
    status: PushStatusMap[keyof PushStatusMap],
    msg: string,
  }
}

export interface PushStatusMap {
  OK: 0;
  ERR: 1;
}

export const PushStatus: PushStatusMap;

