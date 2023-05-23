// GENERATED CODE -- DO NOT EDIT!

// package: proto
// file: proto/opwx.proto

import * as proto_opwx_pb from "../proto/opwx_pb";
import * as grpc from "@grpc/grpc-js";

interface IOpwxService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  pushCheckinResults: grpc.MethodDefinition<proto_opwx_pb.CheckinResults, proto_opwx_pb.PushResponse>;
}

export const OpwxService: IOpwxService;

export interface IOpwxServer extends grpc.UntypedServiceImplementation {
  pushCheckinResults: grpc.handleUnaryCall<proto_opwx_pb.CheckinResults, proto_opwx_pb.PushResponse>;
}

export class OpwxClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  pushCheckinResults(argument: proto_opwx_pb.CheckinResults, callback: grpc.requestCallback<proto_opwx_pb.PushResponse>): grpc.ClientUnaryCall;
  pushCheckinResults(argument: proto_opwx_pb.CheckinResults, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_opwx_pb.PushResponse>): grpc.ClientUnaryCall;
  pushCheckinResults(argument: proto_opwx_pb.CheckinResults, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_opwx_pb.PushResponse>): grpc.ClientUnaryCall;
}
