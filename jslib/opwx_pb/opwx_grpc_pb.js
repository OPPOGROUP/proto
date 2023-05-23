// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var opwx_pb_opwx_pb = require('../opwx_pb/opwx_pb.js');
var hoyolib_pb_hoyolib_pb = require('../hoyolib_pb/hoyolib_pb.js');

function serialize_opwx_CheckinResults(arg) {
  if (!(arg instanceof opwx_pb_opwx_pb.CheckinResults)) {
    throw new Error('Expected argument of type opwx.CheckinResults');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opwx_CheckinResults(buffer_arg) {
  return opwx_pb_opwx_pb.CheckinResults.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opwx_PushResponse(arg) {
  if (!(arg instanceof opwx_pb_opwx_pb.PushResponse)) {
    throw new Error('Expected argument of type opwx.PushResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opwx_PushResponse(buffer_arg) {
  return opwx_pb_opwx_pb.PushResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OpwxService = exports.OpwxService = {
  pushCheckinResults: {
    path: '/opwx.Opwx/PushCheckinResults',
    requestStream: false,
    responseStream: false,
    requestType: opwx_pb_opwx_pb.CheckinResults,
    responseType: opwx_pb_opwx_pb.PushResponse,
    requestSerialize: serialize_opwx_CheckinResults,
    requestDeserialize: deserialize_opwx_CheckinResults,
    responseSerialize: serialize_opwx_PushResponse,
    responseDeserialize: deserialize_opwx_PushResponse,
  },
};

exports.OpwxClient = grpc.makeGenericClientConstructor(OpwxService);
