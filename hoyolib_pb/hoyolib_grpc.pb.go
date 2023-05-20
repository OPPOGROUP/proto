// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: hoyolib_pb/hoyolib.proto

package hoyolib_pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Hoyolib_Register_FullMethodName       = "/Hoyolib/Register"
	Hoyolib_Sign_FullMethodName           = "/Hoyolib/Sign"
	Hoyolib_GetAccountInfo_FullMethodName = "/Hoyolib/GetAccountInfo"
)

// HoyolibClient is the client API for Hoyolib service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type HoyolibClient interface {
	Register(ctx context.Context, in *RegisterRequest, opts ...grpc.CallOption) (*RegisterResponse, error)
	Sign(ctx context.Context, in *SignRequest, opts ...grpc.CallOption) (*SignResponse, error)
	GetAccountInfo(ctx context.Context, in *AccountInfoRequest, opts ...grpc.CallOption) (*AccountInfoResponse, error)
}

type hoyolibClient struct {
	cc grpc.ClientConnInterface
}

func NewHoyolibClient(cc grpc.ClientConnInterface) HoyolibClient {
	return &hoyolibClient{cc}
}

func (c *hoyolibClient) Register(ctx context.Context, in *RegisterRequest, opts ...grpc.CallOption) (*RegisterResponse, error) {
	out := new(RegisterResponse)
	err := c.cc.Invoke(ctx, Hoyolib_Register_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *hoyolibClient) Sign(ctx context.Context, in *SignRequest, opts ...grpc.CallOption) (*SignResponse, error) {
	out := new(SignResponse)
	err := c.cc.Invoke(ctx, Hoyolib_Sign_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *hoyolibClient) GetAccountInfo(ctx context.Context, in *AccountInfoRequest, opts ...grpc.CallOption) (*AccountInfoResponse, error) {
	out := new(AccountInfoResponse)
	err := c.cc.Invoke(ctx, Hoyolib_GetAccountInfo_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// HoyolibServer is the server API for Hoyolib service.
// All implementations must embed UnimplementedHoyolibServer
// for forward compatibility
type HoyolibServer interface {
	Register(context.Context, *RegisterRequest) (*RegisterResponse, error)
	Sign(context.Context, *SignRequest) (*SignResponse, error)
	GetAccountInfo(context.Context, *AccountInfoRequest) (*AccountInfoResponse, error)
	mustEmbedUnimplementedHoyolibServer()
}

// UnimplementedHoyolibServer must be embedded to have forward compatible implementations.
type UnimplementedHoyolibServer struct {
}

func (UnimplementedHoyolibServer) Register(context.Context, *RegisterRequest) (*RegisterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Register not implemented")
}
func (UnimplementedHoyolibServer) Sign(context.Context, *SignRequest) (*SignResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Sign not implemented")
}
func (UnimplementedHoyolibServer) GetAccountInfo(context.Context, *AccountInfoRequest) (*AccountInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAccountInfo not implemented")
}
func (UnimplementedHoyolibServer) mustEmbedUnimplementedHoyolibServer() {}

// UnsafeHoyolibServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to HoyolibServer will
// result in compilation errors.
type UnsafeHoyolibServer interface {
	mustEmbedUnimplementedHoyolibServer()
}

func RegisterHoyolibServer(s grpc.ServiceRegistrar, srv HoyolibServer) {
	s.RegisterService(&Hoyolib_ServiceDesc, srv)
}

func _Hoyolib_Register_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RegisterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HoyolibServer).Register(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Hoyolib_Register_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HoyolibServer).Register(ctx, req.(*RegisterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Hoyolib_Sign_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SignRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HoyolibServer).Sign(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Hoyolib_Sign_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HoyolibServer).Sign(ctx, req.(*SignRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Hoyolib_GetAccountInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AccountInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HoyolibServer).GetAccountInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Hoyolib_GetAccountInfo_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HoyolibServer).GetAccountInfo(ctx, req.(*AccountInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Hoyolib_ServiceDesc is the grpc.ServiceDesc for Hoyolib service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Hoyolib_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "Hoyolib",
	HandlerType: (*HoyolibServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Register",
			Handler:    _Hoyolib_Register_Handler,
		},
		{
			MethodName: "Sign",
			Handler:    _Hoyolib_Sign_Handler,
		},
		{
			MethodName: "GetAccountInfo",
			Handler:    _Hoyolib_GetAccountInfo_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "hoyolib_pb/hoyolib.proto",
}
