import {HammerGestureConfig} from "@angular/platform-browser";
import {Injectable} from "@angular/core";

@Injectable()
export class HammerConfig extends HammerGestureConfig
{
  overrides = {
    pan: {
      pointers: 0,
      threshold: 0
    }
  }
}
