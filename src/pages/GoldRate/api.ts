// ─── Types ────────────────────────────────────────────────────────────────────

export type LiveRate = {
  karat: string;
  label: string;
  price: number;
  unit: string;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const TROY_OZ_TO_G = 31.1035;

// Fallback prices (INR/10g) if the API is unavailable
const FALLBACK: LiveRate[] = [
  { karat: '24K',    label: '999.9 Pure Gold', price: 74820, unit: '10g' },
  { karat: '22K',    label: '916 Hallmarked',  price: 68580, unit: '10g' },
  { karat: '18K',    label: '750 Fineness',    price: 56120, unit: '10g' },
  { karat: 'Silver', label: '999 Fineness',    price: 91450, unit: 'kg'  },
];

// ─── API fetch ────────────────────────────────────────────────────────────────

// Uses @fawazahmed0/currency-api via jsDelivr — free, no API key, CORS-safe.
// XAU = gold troy oz in INR, XAG = silver troy oz in INR.
export const fetchLiveRates = async (): Promise<LiveRate[]> => {
  const [xauRes, xagRes] = await Promise.all([
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xau.json'),
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xag.json'),
  ]);

  if (!xauRes.ok || !xagRes.ok) return FALLBACK;

  const xauData = await xauRes.json() as { xau: Record<string, number> };
  const xagData = await xagRes.json() as { xag: Record<string, number> };

  const xauInr = xauData.xau['inr']; // INR per 1 troy oz of gold
  const xagInr = xagData.xag['inr']; // INR per 1 troy oz of silver

  if (!xauInr || !xagInr) return FALLBACK;

  const gold24k  = Math.round((xauInr / TROY_OZ_TO_G) * 10);
  const gold22k  = Math.round(gold24k * 0.9167);
  const gold18k  = Math.round(gold24k * 0.75);
  const silverKg = Math.round((xagInr / TROY_OZ_TO_G) * 1000);

  return [
    { karat: '24K',    label: '999.9 Pure Gold', price: gold24k,  unit: '10g' },
    { karat: '22K',    label: '916 Hallmarked',  price: gold22k,  unit: '10g' },
    { karat: '18K',    label: '750 Fineness',    price: gold18k,  unit: '10g' },
    { karat: 'Silver', label: '999 Fineness',    price: silverKg, unit: 'kg'  },
  ];
};

// ─── Historical rows ──────────────────────────────────────────────────────────

export type HistoryRow = { dateStr: string; p24: number; p22: number };

// Fetches past `days` calendar dates (newest-first) from the same free API.
// URL format: @{YYYY-MM-DD} pins to a specific date snapshot.
export const fetchHistoryRows = async (days = 6): Promise<HistoryRow[]> => {
  const today = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');

  const fetches = Array.from({ length: days }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (i + 1));
    const iso = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    const label = d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    return fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${iso}/v1/currencies/xau.json`
    )
      .then(r => (r.ok ? r.json() as Promise<{ xau: Record<string, number> }> : null))
      .then(data => {
        const inr = data?.xau?.['inr'];
        if (!inr) return null;
        const p24 = Math.round((inr / TROY_OZ_TO_G) * 10);
        return { dateStr: label, p24, p22: Math.round(p24 * 0.9167) } satisfies HistoryRow;
      })
      .catch(() => null);
  });

  const rows = await Promise.all(fetches);
  return rows.filter((r): r is HistoryRow => r !== null);
};
