// @ts-ignore
import window from "global/window";
import Antenna from "iotex-antenna";

export function getAntenna(): Antenna {
  const injectedWindow: Window & { antenna?: Antenna } = window;
  if (injectedWindow.antenna) {
    return injectedWindow.antenna;
  }
  // tslint:disable-next-line:no-http-string
  injectedWindow.antenna = new Antenna("http://api.iotex.one:80");
  return injectedWindow.antenna;
}
