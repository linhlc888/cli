module.exports = (data, meta) => `
syntax = "proto3";

package ${data.name};
option go_package = "${meta.package}/src/proto/${data.package ? data.package : ''}${data.package ? '/' : ''}${data.name};${data.name}pb";

// This is the list of proto provided by protobuf
// Use the one that you want
// import "google/protobuf/empty.proto";
// import "google/protobuf/struct.proto";
// import "google/protobuf/duration.proto";
// import "google/protobuf/timestamp.proto";
// import "google/protobuf/wrappers.proto";

// Sample service
service ${data.name}Service {
	rpc Get${data.name}(${data.name}Request) returns (${data.name}Response);
}

message ${data.name}Request {
	string id = 1;
}

message ${data.name}Response {
	string message = 1;
}
`;
