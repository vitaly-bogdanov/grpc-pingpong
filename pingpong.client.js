import grpc from '@grpc/grpc-js';

import { pingpongProto } from './pingpong.defenition.js';

const command = process.argv[2];

const client = new pingpongProto.PingPong('localhost:50051', grpc.credentials.createInsecure());
client[command]({ msg: command }, (err, response) => {
  console.log('Response: ', response.msg);
});
