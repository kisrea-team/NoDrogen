### 实验性版本在dev分支。(https://github.com/kisrea-team/Notion-New/tree/dev)
![20240124112925](https://github.com/kisrea-team/NoDrogen/assets/49295983/9de398a1-60b8-45de-8e06-25034ab2ed12)

## 基本特性
# 轻量化、主题可拔插（暂未完成）
## 快速构建
1.Duplicate以下的notion模板<br />
Nodrogen模板(https://www.notion.so/kisrea/1ac8cfb2dde44bbc8f6ed18d2acb1e3b?v=86c74e71bd524a29b5dc0fa1a1cf4fce)<br />
2.点击右上角，选择Publish选项卡，点击Publish to web<br />
![20240124114207](https://github.com/kisrea-team/NoDrogen/assets/49295983/7d184aad-0a8e-4486-88c6-6e289405b091)

<br />你可以修改下面的文件以做到显示你的notion文章。
### .env.local
```.env.local
VIEW_ID=1ac8cfb2dde44bbc8f6ed18d2acb1e3b
```
查看view_id（文章视图id）：
![c4956ee8cef729ad06aa923d86182a72](https://github.com/kisrea-team/NoDrogen/assets/49295983/e59f9430-bd7d-4205-a8b7-60a4a55d63c3)

你可以通过以下方式快速构建：
### 自有服务器
```shell
git clone http://github.com/kisrea-team/NoDrogen.git
cd NoDrogen
npm install --unsafe-perm
npm run build
npm run start
```
### Vercel
### Github Pages
## License
react-notion-x(https://github.com/NotionX/react-notion-x?tab=MIT-1-ov-file#readme)

nobelium(https://github.com/craigary/nobelium?tab=MIT-1-ov-file#readme)

notionnext(https://github.com/tangly1024/NotionNext?tab=MIT-1-ov-file#readme)
