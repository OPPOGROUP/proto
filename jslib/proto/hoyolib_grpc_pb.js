// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_hoyolib_pb = require('../proto/hoyolib_pb.js');

function serialize_proto_AccountInfoRequest(arg) {
  if (!(arg instanceof proto_hoyolib_pb.AccountInfoRequest)) {
    throw new Error('Expected argument of type proto.AccountInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AccountInfoRequest(buffer_arg) {
  return proto_hoyolib_pb.AccountInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AccountInfoResponse(arg) {
  if (!(arg instanceof proto_hoyolib_pb.AccountInfoResponse)) {
    throw new Error('Expected argument of type proto.AccountInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AccountInfoResponse(buffer_arg) {
  return proto_hoyolib_pb.AccountInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CheckInRequest(arg) {
  if (!(arg instanceof proto_hoyolib_pb.CheckInRequest)) {
    throw new Error('Expected argument of type proto.CheckInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CheckInRequest(buffer_arg) {
  return proto_hoyolib_pb.CheckInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CheckInResponse(arg) {
  if (!(arg instanceof proto_hoyolib_pb.CheckInResponse)) {
    throw new Error('Expected argument of type proto.CheckInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CheckInResponse(buffer_arg) {
  return proto_hoyolib_pb.CheckInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterRequest(arg) {
  if (!(arg instanceof proto_hoyolib_pb.RegisterRequest)) {
    throw new Error('Expected argument of type proto.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterRequest(buffer_arg) {
  return proto_hoyolib_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_RegisterResponse(arg) {
  if (!(arg instanceof proto_hoyolib_pb.RegisterResponse)) {
    throw new Error('Expected argument of type proto.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RegisterResponse(buffer_arg) {
  return proto_hoyolib_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HoyolibService = exports.HoyolibService = {
  register: {
    path: '/proto.Hoyolib/Register',
    requestStream: false,
    responseStream: false,
    requestType: proto_hoyolib_pb.RegisterRequest,
    responseType: proto_hoyolib_pb.RegisterResponse,
    requestSerialize: serialize_proto_RegisterRequest,
    requestDeserialize: deserialize_proto_RegisterRequest,
    responseSerialize: serialize_proto_RegisterResponse,
    responseDeserialize: deserialize_proto_RegisterResponse,
  },
  checkIn: {
    path: '/proto.Hoyolib/CheckIn',
    requestStream: false,
    responseStream: false,
    requestType: proto_hoyolib_pb.CheckInRequest,
    responseType: proto_hoyolib_pb.CheckInResponse,
    requestSerialize: serialize_proto_CheckInRequest,
    requestDeserialize: deserialize_proto_CheckInRequest,
    responseSerialize: serialize_proto_CheckInResponse,
    responseDeserialize: deserialize_proto_CheckInResponse,
  },
  getAccountInfo: {
    path: '/proto.Hoyolib/GetAccountInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_hoyolib_pb.AccountInfoRequest,
    responseType: proto_hoyolib_pb.AccountInfoResponse,
    requestSerialize: serialize_proto_AccountInfoRequest,
    requestDeserialize: deserialize_proto_AccountInfoRequest,
    responseSerialize: serialize_proto_AccountInfoResponse,
    responseDeserialize: deserialize_proto_AccountInfoResponse,
  },
};

exports.HoyolibClient = grpc.makeGenericClientConstructor(HoyolibService);
