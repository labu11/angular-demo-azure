import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers_title="This is servers page";
  allowNewServer=false;
  serverCreatedOrNot='No server created!';
  serverName='Test server';
  serverCreated=false;
  servers=['Test server1','Test server2'];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer =true;
    },2000);
  }

  ngOnInit() {
  }
  onAddServerClick = (event:any) => {
    console.log(event);
    this.serverCreated=true;
    this.servers.push(this.serverName);
    return this.serverCreatedOrNot ="Server was created: Server name is"+this.serverName;
  };

  onUpdateServer = (event:Event) => {
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  //  return this.serverCreatedOrNot ="Server was created";
  };

}
