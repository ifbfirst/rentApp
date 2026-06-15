import type { PropertyRates } from "@/types/Property";

export type { PropertyRates } from "@/types/Property";
export type RatePeriod = "nightly" | "weekly" | "monthly";

const RATE_SUFFIX: Record<RatePeriod, string> = {
  nightly: "$/night",
  weekly: "$/wk",
  monthly: "$/mo",
};

const RATE_NAMES: Record<RatePeriod, string> = {
  nightly: "Nightly",
  weekly: "Weekly",
  monthly: "Monthly",
};

const DISPLAY_PRIORITY: RatePeriod[] = ["monthly", "weekly", "nightly"];

export function getDisplayRate(rates: PropertyRates) {
  for (const period of DISPLAY_PRIORITY) {
    const amount = rates[period];
    if (amount != null) {
      return {
        amount,
        period,
        suffix: RATE_SUFFIX[period],
        name: RATE_NAMES[period],
      };
    }
  }

  return null;
}

export function formatDisplayRate(rates: PropertyRates) {
  const rate = getDisplayRate(rates);
  if (!rate) return "-";

  return `${rate.amount} ${rate.suffix}`;
}

export function getAvailableRates(rates: PropertyRates) {
  return DISPLAY_PRIORITY.filter((period) => rates[period] != null).map(
    (period) => ({
      amount: rates[period] as number,
      period,
      suffix: RATE_SUFFIX[period],
      name: RATE_NAMES[period],
    }),
  );
}
