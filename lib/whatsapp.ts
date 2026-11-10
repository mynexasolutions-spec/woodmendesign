// Single source of truth for the WhatsApp ordering flow.
// The site has no backend, so every order / inquiry / tracking request is
// handed over to the Woodmen WhatsApp desk as a pre-filled message.

export const WHATSAPP_NUMBER = '919720975271';

/** Strip control characters, collapse whitespace and cap length. */
export function clean(value: string, max = 200): string {
  return value
    .replace(/[\u0000-\u001F\u007F]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

/** Like clean(), but keeps line breaks (for free-text messages). */
export function cleanMultiline(value: string, max = 1000): string {
  return value
    .replace(/[\u0000-\u0009\u000B-\u001F\u007F]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max);
}

export function isValidIndianPhone(value: string): boolean {
  const digits = value.replace(/[\s-]/g, '').replace(/^(\+91|91|0)/, '');
  return /^[6-9]\d{9}$/.test(digits);
}

export function isValidPincode(value: string): boolean {
  return /^[1-9]\d{5}$/.test(value.trim());
}

/** Builds a wa.me link to the Woodmen number (number is fixed, never user supplied). */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Opens WhatsApp in a new tab. Must be called from a user gesture (click / submit). */
export function openWhatsApp(message: string): string {
  const url = buildWhatsAppUrl(message);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return url;
}

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;

export interface OrderLine {
  id?: string;
  name: string;
  price: number;
  quantity: number;
}

function itemLines(lines: OrderLine[]): string[] {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  return lines.flatMap((l, i) => [
    `${i + 1}. ${clean(l.name, 80)}`,
    `   Qty: ${l.quantity} x ${inr(l.price)} = ${inr(l.price * l.quantity)}`,
    ...(l.id && origin ? [`   ${origin}/products/${encodeURIComponent(l.id)}`] : []),
  ]);
}

/** "Buy Now": opens WhatsApp straight away with one product's details. */
export function buyNowOnWhatsApp(product: { id: string; name: string; price: number }, quantity = 1) {
  const qty = Math.max(1, Math.min(999, Math.floor(quantity) || 1));
  const message = [
    'Hi Woodmen, I would like to order:',
    '',
    ...itemLines([{ id: product.id, name: product.name, price: product.price, quantity: qty }]),
    '',
    `*Total: ${inr(product.price * qty)}*`,
    '',
    'Please share availability and delivery details.',
  ].join('\n');
  return openWhatsApp(message);
}

/** Cart: opens WhatsApp with every cart item and the totals. */
export function orderCartOnWhatsApp(
  lines: OrderLine[],
  totals: { subtotal: number; discount: number; couponCode: string; shippingFee: number; total: number }
) {
  const message = [
    'Hi Woodmen, I would like to order:',
    '',
    ...itemLines(lines),
    '',
    `Subtotal: ${inr(totals.subtotal)}`,
    ...(totals.discount > 0
      ? [`Discount${totals.couponCode ? ` (${clean(totals.couponCode, 20)})` : ''}: -${inr(totals.discount)}`]
      : []),
    `Shipping: ${totals.shippingFee === 0 ? 'FREE' : inr(totals.shippingFee)}`,
    `*Total: ${inr(totals.total)}*`,
    '',
    'Please share availability and delivery details.',
  ].join('\n');
  return openWhatsApp(message);
}
