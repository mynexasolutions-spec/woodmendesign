import base64
from io import BytesIO
from PIL import Image

src = 'C:/Users/User/.gemini/antigravity/brain/1ed8ee00-f7de-4596-ab61-38f32d0cf687/.user_uploaded/media_1794127524869_21ec4741.png'
im = Image.open(src).convert('RGBA')

# 32x32 crisp tab icon
im32 = im.resize((32, 32), Image.Resampling.LANCZOS)
b32 = BytesIO()
im32.save(b32, format='PNG', optimize=True)
b64_32 = base64.b64encode(b32.getvalue()).decode('utf-8')

# Also write to public/icon.png and public/favicon.ico
im.save('public/icon.png')
im.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
im.save('public/apple-touch-icon.png')

with open('data/favicon-base64.ts', 'w', encoding='utf-8') as f:
    f.write(f'export const FAVICON_DATA_URI = "data:image/png;base64,{b64_32}";\n')

print("Generated data/favicon-base64.ts successfully!")
