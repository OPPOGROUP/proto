// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_opwx_pb = require('../proto/opwx_pb.js');
var proto_hoyolib_pb = require('../proto/hoyolib_pb.js');

function serialize_proto_CheckinResults(arg) {
  if (!(arg instanceof proto_opwx_pb.CheckinResults)) {
    throw new Error('Expected argument of type proto.CheckinResults');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CheckinResults(buffer_arg) {
  return proto_opwx_pb.CheckinResults.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PushResponse(arg) {
  if (!(arg instanceof proto_opwx_pb.PushResponse)) {
    throw new Error('Expected argument of type proto.PushResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PushResponse(buffer_arg) {
  return proto_opwx_pb.PushResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OpwxService = exports.OpwxService = {
  pushCheckinResults: {
    path: '/proto.Opwx/PushCheckinResults',
    requestStream: false,
    responseStream: false,
    requestType: proto_opwx_pb.CheckinResults,
    responseType: proto_opwx_pb.PushResponse,
    requestSerialize: serialize_proto_CheckinResults,
    requestDeserialize: deserialize_proto_CheckinResults,
    responseSerialize: serialize_proto_PushResponse,
    responseDeserialize: deserialize_proto_PushResponse,
  },
};

exports.OpwxClient = grpc.makeGenericClientConstructor(OpwxService);
