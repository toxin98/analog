const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'metadata');
const outputFile = path.join(__dirname, 'public/metadataList.json');

// 读取所有 json 文件
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

// 解析每个文件并放入数组
const allFilms = files.map(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
    return JSON.parse(content);
});

// 将合并后的数组写入 public/metadataList.json
fs.writeFileSync(outputFile, JSON.stringify(allFilms, null, 2), 'utf-8');

console.log(`✅ 成功合并 ${files.length} 个胶卷记录到 public/metadataList.json`);