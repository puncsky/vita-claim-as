import test from "ava";
import { claimAs } from "..";

test("delayedHello test", async t => {
  const result = await claimAs("delayedHello");
  t.deepEqual(result, "Hello, delayedHello");
});
