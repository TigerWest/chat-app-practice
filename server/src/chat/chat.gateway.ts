import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
class Some {
  data: string;
}

@WebSocketGateway()
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: Some,
  ): string {
    this.server.emit('message', payload);

    client.rooms;
    return 'Hello world!';
  }

  afterInit() {
    console.log('afterinit');
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log('handle connection', client.id);
  }
  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log('disconnected', client.id);
  }
}
