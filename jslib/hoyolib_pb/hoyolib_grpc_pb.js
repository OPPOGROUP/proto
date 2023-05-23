// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hoyolib_pb_hoyolib_pb = require('../hoyolib_pb/hoyolib_pb.js');

function serialize_hoyolib_AccountInfoRequest(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.AccountInfoRequest)) {
    throw new Error('Expected argument of type hoyolib.AccountInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hoyolib_AccountInfoRequest(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.AccountInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hoyolib_AccountInfoResponse(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.AccountInfoResponse)) {
    throw new Error('Expected argument of type hoyolib.AccountInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hoyolib_AccountInfoResponse(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.AccountInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hoyolib_CheckInRequest(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.CheckInRequest)) {
    throw new Error('Expected argument of type hoyolib.CheckInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hoyolib_CheckInRequest(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.CheckInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hoyolib_CheckInResponse(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.CheckInResponse)) {
    throw new Error('Expected argument of type hoyolib.CheckInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hoyolib_CheckInResponse(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.CheckInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hoyolib_RegisterRequest(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.RegisterRequest)) {
    throw new Error('Expected argument of type hoyolib.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hoyolib_RegisterRequest(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hoyolib_RegisterResponse(arg) {
  if (!(arg instanceof hoyolib_pb_hoyolib_pb.RegisterResponse)) {
    throw new Error('Expected argument of type hoyolib.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hoyolib_RegisterResponse(buffer_arg) {
  return hoyolib_pb_hoyolib_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HoyolibService = exports.HoyolibService = {
  register: {
    path: '/hoyolib.Hoyolib/Register',
    requestStream: false,
    responseStream: false,
    requestType: hoyolib_pb_hoyolib_pb.RegisterRequest,
    responseType: hoyolib_pb_hoyolib_pb.RegisterResponse,
    requestSerialize: serialize_hoyolib_RegisterRequest,
    requestDeserialize: deserialize_hoyolib_RegisterRequest,
    responseSerialize: serialize_hoyolib_RegisterResponse,
    responseDeserialize: deserialize_hoyolib_RegisterResponse,
  },
  checkIn: {
    path: '/hoyolib.Hoyolib/CheckIn',
    requestStream: false,
    responseStream: false,
    requestType: hoyolib_pb_hoyolib_pb.CheckInRequest,
    responseType: hoyolib_pb_hoyolib_pb.CheckInResponse,
    requestSerialize: serialize_hoyolib_CheckInRequest,
    requestDeserialize: deserialize_hoyolib_CheckInRequest,
    responseSerialize: serialize_hoyolib_CheckInResponse,
    responseDeserialize: deserialize_hoyolib_CheckInResponse,
  },
  getAccountInfo: {
    path: '/hoyolib.Hoyolib/GetAccountInfo',
    requestStream: false,
    responseStream: false,
    requestType: hoyolib_pb_hoyolib_pb.AccountInfoRequest,
    responseType: hoyolib_pb_hoyolib_pb.AccountInfoResponse,
    requestSerialize: serialize_hoyolib_AccountInfoRequest,
    requestDeserialize: deserialize_hoyolib_AccountInfoRequest,
    responseSerialize: serialize_hoyolib_AccountInfoResponse,
    responseDeserialize: deserialize_hoyolib_AccountInfoResponse,
  },
};

exports.HoyolibClient = grpc.makeGenericClientConstructor(HoyolibService);
