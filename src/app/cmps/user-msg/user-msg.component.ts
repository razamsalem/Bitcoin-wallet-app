import { Component, OnInit, OnDestroy } from '@angular/core';
import { eventBus, SHOW_MSG } from '../../services/event-bus.service'; 

@Component({
  selector: 'app-user-msg',
  templateUrl: './user-msg.component.html',
  styleUrls: ['./user-msg.component.scss']
})
export class UserMsgComponent implements OnInit, OnDestroy {
  userMsg: any;
  private unsubscribe: () => void = () => {}

  ngOnInit(): void {
    this.unsubscribe = eventBus.on(SHOW_MSG, (msg: any) => {
      this.userMsg = msg
      setTimeout(() => {
        this.userMsg = null
      }, 3000)
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe()
  }
}
