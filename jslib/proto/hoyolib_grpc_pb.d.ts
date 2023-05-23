// GENERATED CODE -- DO NOT EDIT!

// package: proto
// file: proto/hoyolib.proto

import * as proto_hoyolib_pb from "../proto/hoyolib_pb";
import * as grpc from "@grpc/grpc-js";

interface IHoyolibService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  register: grpc.MethodDefinition<proto_hoyolib_pb.RegisterRequest, proto_hoyolib_pb.RegisterResponse>;
  checkIn: grpc.MethodDefinition<proto_hoyolib_pb.CheckInRequest, proto_hoyolib_pb.CheckInResponse>;
  getAccountInfo: grpc.MethodDefinition<proto_hoyolib_pb.AccountInfoRequest, proto_hoyolib_pb.AccountInfoResponse>;
}

export const HoyolibService: IHoyolibService;

export interface IHoyolibServer extends grpc.UntypedServiceImplementation {
  register: grpc.handleUnaryCall<proto_hoyolib_pb.RegisterRequest, proto_hoyolib_pb.RegisterResponse>;
  checkIn: grpc.handleUnaryCall<proto_hoyolib_pb.CheckInRequest, proto_hoyolib_pb.CheckInResponse>;
  getAccountInfo: grpc.handleUnaryCall<proto_hoyolib_pb.AccountInfoRequest, proto_hoyolib_pb.AccountInfoResponse>;
}

export class HoyolibClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  register(argument: proto_hoyolib_pb.RegisterRequest, callback: grpc.requestCallback<proto_hoyolib_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: proto_hoyolib_pb.RegisterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_hoyolib_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: proto_hoyolib_pb.RegisterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_hoyolib_pb.RegisterResponse>): grpc.ClientUnaryCall;
  checkIn(argument: proto_hoyolib_pb.CheckInRequest, callback: grpc.requestCallback<proto_hoyolib_pb.CheckInResponse>): grpc.ClientUnaryCall;
  checkIn(argument: proto_hoyolib_pb.CheckInRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_hoyolib_pb.CheckInResponse>): grpc.ClientUnaryCall;
  checkIn(argument: proto_hoyolib_pb.CheckInRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_hoyolib_pb.CheckInResponse>): grpc.ClientUnaryCall;
  getAccountInfo(argument: proto_hoyolib_pb.AccountInfoRequest, callback: grpc.requestCallback<proto_hoyolib_pb.AccountInfoResponse>): grpc.ClientUnaryCall;
  getAccountInfo(argument: proto_hoyolib_pb.AccountInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_hoyolib_pb.AccountInfoResponse>): grpc.ClientUnaryCall;
  getAccountInfo(argument: proto_hoyolib_pb.AccountInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_hoyolib_pb.AccountInfoResponse>): grpc.ClientUnaryCall;
}
