import { Component, Input } from '@angular/core';
const TIME_MIN_IN_MS = 800;
@Component({
  selector: 'app-space-time-rift',
  templateUrl: './space-time-rift.component.html',
  styleUrls: ['./space-time-rift.component.less'],
  host:{"class":"d-content"}
})
export class SpaceTimeRiftComponent {
  @Input() text:string = 'Codex'
  @Input() additionalClass:string = ''
  @Input() offsetY:number = 0;
  nextInterval:number = 100;
  test_obj:any = {m2:false, m3:false, m5:false};
  timer: any = null;

  constructor () {
    this.tick(()=>{
      let int_val = Math.floor(this.nextInterval);
      this.test_obj = {m2:mod(int_val, 2), m3:mod(int_val, 3), m5:mod(int_val, 5)};

      // if( this.test_obj.m2 && this.test_obj.m3 && this.test_obj.m5 ) {
      //   console.log('m2 && m3 && m5', this.test_obj, int_val);
      // }
      function mod(val:number,m:number) {
        return (val % m === 0)
      }
    })
  }
  tick(callback:Function) {
    if(this.timer) {
      clearTimeout(this.timer);
    }
    this.nextInterval = TIME_MIN_IN_MS + (Math.random() * TIME_MIN_IN_MS)
    this.timer = setTimeout(()=>{
      callback();
      this.tick(callback);
    }, this.nextInterval)
  }
  get testAll () {
    return this.test_obj.m2 && this.test_obj.m3 && this.test_obj.m5
  }
}
