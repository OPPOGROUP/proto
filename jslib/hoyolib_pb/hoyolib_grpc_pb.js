// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hoyolib_pb_hoyolib_pb = require('../hoyolib_pb/hoyolib_pb.js');

function serialize_AccountInfoRequest(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.AccountInfoRequest)) {
    throw new Error('Expected argument of type AccountInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AccountInfoRequest(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.AccountInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AccountInfoResponse(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.AccountInfoResponse)) {
    throw new Error('Expected argument of type AccountInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AccountInfoResponse(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.AccountInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CheckInRequest(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.CheckInRequest)) {
    throw new Error('Expected argument of type CheckInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CheckInRequest(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.CheckInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CheckInResponse(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.CheckInResponse)) {
    throw new Error('Expected argument of type CheckInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CheckInResponse(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.CheckInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CheckinResults(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.CheckinResults)) {
    throw new Error('Expected argument of type CheckinResults');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CheckinResults(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.CheckinResults.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PushResponse(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.PushResponse)) {
    throw new Error('Expected argument of type PushResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PushResponse(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.PushResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RegisterRequest(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.RegisterRequest)) {
    throw new Error('Expected argument of type RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RegisterRequest(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RegisterResponse(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.RegisterResponse)) {
    throw new Error('Expected argument of type RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RegisterResponse(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HoyolibService = exports.HoyolibService = {
  register: {
    path: '/Hoyolib/Register',
    requestStream: false,
    responseStream: false,
    requestType: hoyolib_pb_hoyolib_pb.RegisterRequest,
    responseType: hoyolib_pb_hoyolib_pb.RegisterResponse,
    requestSerialize: serialize_RegisterRequest,
    requestDeserialize: deserialize_RegisterRequest,
    responseSerialize: serialize_RegisterResponse,
    responseDeserialize: deserialize_RegisterResponse,
  },
  checkIn: {
    path: '/Hoyolib/CheckIn',
    requestStream: false,
    responseStream: false,
    requestType: hoyolib_pb_hoyolib_pb.CheckInRequest,
    responseType: hoyolib_pb_hoyolib_pb.CheckInResponse,
    requestSerialize: serialize_CheckInRequest,
    requestDeserialize: deserialize_CheckInRequest,
    responseSerialize: serialize_CheckInResponse,
    responseDeserialize: deserialize_CheckInResponse,
  },
  getAccountInfo: {
    path: '/Hoyolib/GetAccountInfo',
    requestStream: false,
    responseStream: false,
    requestType: hoyolib_pb_hoyolib_pb.AccountInfoRequest,
    responseType: hoyolib_pb_hoyolib_pb.AccountInfoResponse,
    requestSerialize: serialize_AccountInfoRequest,
    requestDeserialize: deserialize_AccountInfoRequest,
    responseSerialize: serialize_AccountInfoResponse,
    responseDeserialize: deserialize_AccountInfoResponse,
  },
};

exports.HoyolibClient = grpc.makeGenericClientConstructor(HoyolibService);
// Service Opwx start 
var OpwxService = exports.OpwxService = {
  pushCheckinResults: {
    path: '/Opwx/PushCheckinResults',
    requestStream: false,
    responseStream: false,
    requestType: hoyolib_pb_hoyolib_pb.CheckinResults,
    responseType: hoyolib_pb_hoyolib_pb.PushResponse,
    requestSerialize: serialize_CheckinResults,
    requestDeserialize: deserialize_CheckinResults,
    responseSerialize: serialize_PushResponse,
    responseDeserialize: deserialize_PushResponse,
  },
};

exports.OpwxClient = grpc.makeGenericClientConstructor(OpwxService);
