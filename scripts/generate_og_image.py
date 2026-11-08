from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

# Create 1200x630 base canvas
W, H = 1200, 630

# Load hero background
bg_path = 'public/images/hero-bg-full.jpg'
if os.path.exists(bg_path):
    bg = Image.open(bg_path).convert('RGB')
    # Resize and crop to fill 1200x630
    bg_ratio = bg.width / bg.height
    target_ratio = W / H
    if bg_ratio > target_ratio:
        new_w = int(bg.height * target_ratio)
        left = bg.width - new_w
        bg = bg.crop((left, 0, bg.width, bg.height))
    else:
        new_h = int(bg.width / target_ratio)
        top = (bg.height - new_h) // 2
        bg = bg.crop((0, top, bg.width, top + new_h))
    bg = bg.resize((W, H), Image.Resampling.LANCZOS)
else:
    bg = Image.new('RGB', (W, H), color='#1C1008')

# Create dark luxury overlay gradient
overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
draw_overlay = ImageDraw.Draw(overlay)

# Left dark gradient block + right feathering
for x in range(W):
    # Left is dark #120904, transitioning towards 65% width
    if x < 400:
        alpha = 245
    elif x < 850:
        t = (x - 400) / 450.0
        alpha = int(245 - t * 140)  # 245 down to 105
    else:
        alpha = 105
    for y in range(H):
        pass
    draw_overlay.line([(x, 0), (x, H)], fill=(18, 9, 4, alpha))

# Top & bottom subtle vignette
for y in range(H):
    if y < 100:
        top_alpha = int((1.0 - y / 100.0) * 110)
        draw_overlay.line([(0, y), (W, y)], fill=(15, 8, 3, top_alpha))
    elif y > H - 120:
        bot_alpha = int(((y - (H - 120)) / 120.0) * 140)
        draw_overlay.line([(0, y), (W, y)], fill=(15, 8, 3, bot_alpha))

bg.paste(overlay, (0, 0), overlay)

# Load fonts
font_dir = 'C:/Windows/Fonts'
title_font = ImageFont.truetype(os.path.join(font_dir, 'georgiab.ttf'), 50)
subtitle_font = ImageFont.truetype(os.path.join(font_dir, 'arial.ttf'), 21)
badge_font = ImageFont.truetype(os.path.join(font_dir, 'arialbd.ttf'), 15)
url_font = ImageFont.truetype(os.path.join(font_dir, 'arialbd.ttf'), 17)

# Draw on canvas
draw = ImageDraw.Draw(bg)

# 1. Paste Official Logo at top left
logo_path = 'public/images/logo.webp'
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert('RGBA')
    # Target height 85px, proportional width (ratio ~3:1 -> 255px)
    logo_h = 82
    logo_w = int(logo.width * (logo_h / logo.height))
    logo = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    bg.paste(logo, (70, 50), logo)

# 2. Main Headline
headline_lines = [
    "Handcrafted Solid Wood",
    "Tableware & Kitchenware"
]
y_text = 165
for line in headline_lines:
    # Subtle drop shadow
    draw.text((72, y_text + 2), line, font=title_font, fill=(0, 0, 0))
    draw.text((70, y_text), line, font=title_font, fill=(250, 244, 237))
    y_text += 62

# 3. Subtitle
sub_text = "Authentic Indian Sheesham & Acacia woodcraft turned by generational Saharanpur master artisans."
draw.text((70, y_text + 15), sub_text, font=subtitle_font, fill=(215, 198, 183))

# 4. Feature Badges (Pills)
badges = [
    "100% Solid Hardwood",
    "Food-Safe Herbal Oil",
    "Direct Workshop Pricing"
]
pill_x = 70
pill_y = y_text + 75
pill_h = 36

for b in badges:
    bbox = badge_font.getbbox(b)
    text_w = bbox[2] - bbox[0]
    pill_w = text_w + 32
    # Draw rounded pill
    draw.rounded_rectangle(
        [pill_x, pill_y, pill_x + pill_w, pill_y + pill_h],
        radius=18,
        fill=(40, 22, 12, 210),
        outline=(140, 94, 55, 230),
        width=1
    )
    # Text
    draw.text((pill_x + 16, pill_y + 9), b, font=badge_font, fill=(235, 215, 195))
    pill_x += pill_w + 14

# 5. Bottom Bar
# Left: Tagline
bot_y = 540
draw.text((70, bot_y + 10), "Serving Bowls  •  Roti Casseroles  •  Masala Boxes  •  Serving Trays  •  Cake Stands", font=subtitle_font, fill=(229, 168, 85))

# Right: Domain URL Pill (matching user screenshot)
url_text = "woodmendesign.vercel.app"
u_bbox = url_font.getbbox(url_text)
u_w = u_bbox[2] - u_bbox[0]
u_pill_w = u_w + 36
u_pill_h = 42
u_x = W - 70 - u_pill_w
u_y = bot_y

draw.rounded_rectangle(
    [u_x, u_y, u_x + u_pill_w, u_y + u_pill_h],
    radius=21,
    fill=(250, 244, 237),
    outline=(229, 168, 85),
    width=2
)
draw.text((u_x + 18, u_y + 11), url_text, font=url_font, fill=(30, 16, 8))

# Save high-quality optimized JPEG (under 250KB for WhatsApp compatibility)
os.makedirs('public/images', exist_ok=True)
bg.save('public/og-image.jpg', 'JPEG', quality=90, optimize=True)
bg.save('public/images/og-image.jpg', 'JPEG', quality=90, optimize=True)
bg.save('app/opengraph-image.jpg', 'JPEG', quality=90, optimize=True)

print("Saved public/og-image.jpg successfully! Size:", os.path.getsize('public/og-image.jpg'), "bytes")

