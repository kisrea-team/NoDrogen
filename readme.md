[![license](https://img.shields.io/badge/License-MIT-blue)]([https://github.com/poloclub/supernova/blob/master/LICENSE](https://github.com/kisrea-team/NoDrogen/blob/main/LICENSE))
### 实验性版本在dev分支。(https://github.com/kisrea-team/Notion-New/tree/dev)
![20240124112925](https://github.com/kisrea-team/NoDrogen/assets/49295983/9de398a1-60b8-45de-8e06-25034ab2ed12)
## 这是什么
# 使用Nextjs开发、React-Notion-X渲染的Notion写作的博客系统。Notion上的写作内容可自由同步至部署。
## 基本特性
# 稳定、轻量化、主题可拔插（暂未完成）
* Nodrogen支持几乎所有React-Notion-X的块，并支持几乎所有Mermaid代码的渲染。</br>最快每一个月每个出一个二级版本，同等二级版本(1.2.3中的1.2.x)都能随意兼容。每个二级版本都经过多次测试后发布。
* 核心大小仅300kb，每个软件包都经过认真考虑引入。专注于Notion内容渲染。
## 迁移Notion已有文章到Nodrogen
你可以先Duplicate下面的模板，然后从原数据库导出你的文章CSV文件，然后导入CSV文件，Move To新模板。
## 快速构建
1.Duplicate以下的notion模板<br />
Nodrogen模板(https://www.notion.so/kisrea/1ac8cfb2dde44bbc8f6ed18d2acb1e3b?v=86c74e71bd524a29b5dc0fa1a1cf4fce)<br />
2.点击右上角，选择Publish选项卡，点击Publish to web<br />
![20240124114207](https://github.com/kisrea-team/NoDrogen/assets/49295983/7d184aad-0a8e-4486-88c6-6e289405b091)

<br />你可以修改下面的文件以做到显示你的Notion文章。
### .env.local
```.env.local
VIEW_ID=1ac8cfb2dde44bbc8f6ed18d2acb1e3b
X=zitons
ZHIHU=try20
GITHUB=zitons
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
1.fork本仓库<br />
2.选择nextjs<br />
![20240125153353](https://github.com/kisrea-team/NoDrogen/assets/49295983/c5d256f3-e56e-42e6-8d86-8aae1bfd63b8)<br />
3.导入git仓库<br />
![20240125153544](https://github.com/kisrea-team/NoDrogen/assets/49295983/88e72d3a-de3e-408b-a1a0-aae5aad02b2f)<br />
![20240125153808](https://github.com/kisrea-team/NoDrogen/assets/49295983/1c5ca88c-0e2b-476c-b2bd-7e2a2e8d9d41)<br />
4.修改环境变量<br />
![20240125161352](https://github.com/kisrea-team/NoDrogen/assets/49295983/01e78939-e269-47ca-886f-a0b2894e491a)
5.Deloy
### Github Pages 或 静态导出
Nodrogen全面支持静态导出。
```shell
npm run build
```
可导出静态导出out文件夹。
对于Nginx，可设置Nginx Rewrite以实现完美的路由。
```shell
location / {
  if (!-e $request_filename){
      rewrite ^(.*)$ /$1.html last;
      break;
  }
}
```

## License
[React-Notion-X](https://github.com/NotionX/react-notion-x?tab=MIT-1-ov-file#readme)
[Nobelium](https://github.com/craigary/nobelium?tab=MIT-1-ov-file#readme)
[Notionnext](https://github.com/tangly1024/NotionNext?tab=MIT-1-ov-file#readme)
