import BigNumber from "bignumber.js";
import dotenv from "dotenv";
import cron from "node-cron";
import moment from "moment";
// @ts-ignore
import window from "global/window";
import Antenna from "iotex-antenna";
import { Account } from "iotex-antenna/lib/account/account";
import { Vita } from "./erc20/vita";

dotenv.config();

export async function claimAs(): Promise<void> {
  // tslint:disable-next-line:no-http-string
  const antenna = new Antenna("http://api.iotex.one:80");
  const vita = Vita.create(
    "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",
    antenna.iotx
  );
  const acct = Account.fromPrivateKey(String(process.env.ACCOUNT_PRIVATE_KEY));
  const resp = await vita.claimAs(
    String(process.env.STAKE_OWNER_IO_ADDRESS),
    String(process.env.STAKE_OWNER_SIGNATURE),
    new BigNumber(1),
    acct
  );
  window.console.log(resp);
}

cron.schedule(
  "0 11 * * *",
  () => {
    console.log(moment().format("LLLL"));
    claimAs();
  },
  {
    timezone: "America/Los_Angeles"
  }
);
