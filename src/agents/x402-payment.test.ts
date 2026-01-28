import { describe, expect, it } from "vitest";

import { __testing } from "./x402-payment.js";

describe("x402 permit cache key", () => {
  it("includes the account address", () => {
    const key = __testing.buildPermitCacheKey({
      network: "eip155:8453",
      asset: "0xasset",
      payTo: "0xpayto",
      cap: "1000000",
      account: "0xaccount",
    });

    expect(key).toContain("0xaccount");
  });

  it("differs for different accounts", () => {
    const base = {
      network: "eip155:8453",
      asset: "0xasset",
      payTo: "0xpayto",
      cap: "1000000",
    };

    const keyA = __testing.buildPermitCacheKey({ ...base, account: "0xaccountA" });
    const keyB = __testing.buildPermitCacheKey({ ...base, account: "0xaccountB" });

    expect(keyA).not.toEqual(keyB);
  });
});
