# anki-card
**anki-card** 是基于`openai`接口，将知识点资料生成 **Anki** 记忆卡的工具🔧，目前仅支持基础模板格式
## 使用介绍
<img width="858" alt="image" src="https://github.com/zhangwt-cn/anki-card/assets/52098594/2b2fae19-e3c4-4a81-b79b-bbf1a4b5b188">


### 生成配置
- api 地址: 需要填入符合`openai`接口的规范的 api 地址
- api key: 接口授权key

### 记忆卡导入 Anki
1. 在生成结果页面下载记忆卡文件
2. Anki 中选择对应的牌组
3. 导入文件


## 关于 api
如果没有 `openai` 的 api ，就无法使用这个工具🔧，所以在这里整理下 api 的获取方式
### 付费
1. openai 官方充值使用，缺点是需要国外卡和国外网络
2. 中转站，但有可能买到掺假的 api 注意辨别, 推荐 [oaipro](https://api.oaipro.com/)，

### 公益
在 [LinuxDO](https://linux.do/) 每天有许多大佬分享一些使用额度，动手能力强的可以自己学习 c 


### 使用 chat2api
如果有chatgpt plus，推荐使用 [oaifree](https://api.oaifree.com), 在`https://chatgpt.com/api/auth/session`获取 accessToken 作为 api key, api 地址域名替换成 `api.oaifree.com`

## 部署
在 configs 目录下创建 config.yaml 文件
```bash copy
server:
  port: ":9527"
```
目前就只有运行端口设置，如果不需要修改运行端口就不需要创建


### docker 方式

1. 拉取镜像
```bash copy
docker pull zhangwt647/anki-card:latest
```

2. 运行
```bash copy
sudo docker run -d \
  --name anki-card \
  -p 9527:9527 \
  -v $(pwd)/configs:/app/configs \
 zhangwt647/anki-card:latest
```

### docker-compose 方式

docker-compose.yml
```bash copy
version: '3.8'

services:
  anki-card:
    image: zhangwt647/anki-card:latest
    ports:
      - "9527:9527"
    volumes:
      - ./configs:/app/configs
```

在 docker-compose.yml 目录
```bash copy
docker-compose pull && docker-compose up -d
```

### 运行二进制文件
[releases](https://github.com/zhangwt-cn/anki-card/releases) 下载对应平台二进制文件运行



