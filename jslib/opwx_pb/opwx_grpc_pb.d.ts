// GENERATED CODE -- DO NOT EDIT!

// package: opwx
// file: opwx_pb/opwx.proto

import * as opwx_pb_opwx_pb from "../opwx_pb/opwx_pb";
import * as grpc from "@grpc/grpc-js";

interface IOpwxService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  pushCheckinResults: grpc.MethodDefinition<opwx_pb_opwx_pb.CheckinResults, opwx_pb_opwx_pb.PushResponse>;
}

export const OpwxService: IOpwxService;

export interface IOpwxServer extends grpc.UntypedServiceImplementation {
  pushCheckinResults: grpc.handleUnaryCall<opwx_pb_opwx_pb.CheckinResults, opwx_pb_opwx_pb.PushResponse>;
}

export class OpwxClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  pushCheckinResults(argument: opwx_pb_opwx_pb.CheckinResults, callback: grpc.requestCallback<opwx_pb_opwx_pb.PushResponse>): grpc.ClientUnaryCall;
  pushCheckinResults(argument: opwx_pb_opwx_pb.CheckinResults, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<opwx_pb_opwx_pb.PushResponse>): grpc.ClientUnaryCall;
  pushCheckinResults(argument: opwx_pb_opwx_pb.CheckinResults, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<opwx_pb_opwx_pb.PushResponse>): grpc.ClientUnaryCall;
}
