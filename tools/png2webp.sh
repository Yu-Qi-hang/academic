# 进入 assets 目录
cd assets/paper0

# 转换所有 PNG 到同名 WebP
for file in *.png; do
  sharp -i "$file" -o "${file%.png}.webp" --format webp --quality 85
done