// package: proto
// file: proto/opwx.proto

import * as jspb from "google-protobuf";
import * as proto_hoyolib_pb from "../proto/hoyolib_pb";

export class CheckinResults extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<proto_hoyolib_pb.CheckInResponse>;
  setResultsList(value: Array<proto_hoyolib_pb.CheckInResponse>): void;
  addResults(value?: proto_hoyolib_pb.CheckInResponse, index?: number): proto_hoyolib_pb.CheckInResponse;

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
    resultsList: Array<proto_hoyolib_pb.CheckInResponse.AsObject>,
  }
}

export class PushResponse extends jspb.Message {
  getStatus(): PushResponse.PushStatusMap[keyof PushResponse.PushStatusMap];
  setStatus(value: PushResponse.PushStatusMap[keyof PushResponse.PushStatusMap]): void;

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
    status: PushResponse.PushStatusMap[keyof PushResponse.PushStatusMap],
    msg: string,
  }

  export interface PushStatusMap {
    OK: 0;
    ERR: 1;
  }

  export const PushStatus: PushStatusMap;
}

