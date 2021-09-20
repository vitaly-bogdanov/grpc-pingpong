import grpc from '@grpc/grpc-js';

import { pingpongProto } from './pingpong.defenition.js';

function ping(call, callback) {
  callback(null, { msg: 'pong' });
}

function pong(call, callback) {
  callback(null, { msg: 'ping' });
}

const server = new grpc.Server();
server.addService(pingpongProto.PingPong.service, { ping, pong });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log('gRPC server start');
  server.start();
});
