// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: hoyolib_pb/hoyolib.proto

import * as hoyolib_pb_hoyolib_pb from "../hoyolib_pb/hoyolib_pb";
import * as grpc from "@grpc/grpc-js";

interface IHoyolibService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  register: grpc.MethodDefinition<hoyolib_pb_hoyolib_pb.RegisterRequest, hoyolib_pb_hoyolib_pb.RegisterResponse>;
  checkIn: grpc.MethodDefinition<hoyolib_pb_hoyolib_pb.CheckInRequest, hoyolib_pb_hoyolib_pb.CheckInResponse>;
  getAccountInfo: grpc.MethodDefinition<hoyolib_pb_hoyolib_pb.AccountInfoRequest, hoyolib_pb_hoyolib_pb.AccountInfoResponse>;
}

export const HoyolibService: IHoyolibService;

export interface IHoyolibServer extends grpc.UntypedServiceImplementation {
  register: grpc.handleUnaryCall<hoyolib_pb_hoyolib_pb.RegisterRequest, hoyolib_pb_hoyolib_pb.RegisterResponse>;
  checkIn: grpc.handleUnaryCall<hoyolib_pb_hoyolib_pb.CheckInRequest, hoyolib_pb_hoyolib_pb.CheckInResponse>;
  getAccountInfo: grpc.handleUnaryCall<hoyolib_pb_hoyolib_pb.AccountInfoRequest, hoyolib_pb_hoyolib_pb.AccountInfoResponse>;
}

export class HoyolibClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  register(argument: hoyolib_pb_hoyolib_pb.RegisterRequest, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: hoyolib_pb_hoyolib_pb.RegisterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: hoyolib_pb_hoyolib_pb.RegisterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.RegisterResponse>): grpc.ClientUnaryCall;
  checkIn(argument: hoyolib_pb_hoyolib_pb.CheckInRequest, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.CheckInResponse>): grpc.ClientUnaryCall;
  checkIn(argument: hoyolib_pb_hoyolib_pb.CheckInRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.CheckInResponse>): grpc.ClientUnaryCall;
  checkIn(argument: hoyolib_pb_hoyolib_pb.CheckInRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.CheckInResponse>): grpc.ClientUnaryCall;
  getAccountInfo(argument: hoyolib_pb_hoyolib_pb.AccountInfoRequest, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.AccountInfoResponse>): grpc.ClientUnaryCall;
  getAccountInfo(argument: hoyolib_pb_hoyolib_pb.AccountInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.AccountInfoResponse>): grpc.ClientUnaryCall;
  getAccountInfo(argument: hoyolib_pb_hoyolib_pb.AccountInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.AccountInfoResponse>): grpc.ClientUnaryCall;
}

interface IOpwxService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  pushCheckinResults: grpc.MethodDefinition<hoyolib_pb_hoyolib_pb.CheckinResults, hoyolib_pb_hoyolib_pb.PushResponse>;
}

export const OpwxService: IOpwxService;

export interface IOpwxServer extends grpc.UntypedServiceImplementation {
  pushCheckinResults: grpc.handleUnaryCall<hoyolib_pb_hoyolib_pb.CheckinResults, hoyolib_pb_hoyolib_pb.PushResponse>;
}

export class OpwxClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  pushCheckinResults(argument: hoyolib_pb_hoyolib_pb.CheckinResults, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.PushResponse>): grpc.ClientUnaryCall;
  pushCheckinResults(argument: hoyolib_pb_hoyolib_pb.CheckinResults, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.PushResponse>): grpc.ClientUnaryCall;
  pushCheckinResults(argument: hoyolib_pb_hoyolib_pb.CheckinResults, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<hoyolib_pb_hoyolib_pb.PushResponse>): grpc.ClientUnaryCall;
}
