[![license](https://img.shields.io/badge/License-MIT-blue)](https://github.com/kisrea-team/NoDrogen/blob/main/LICENSE)
<img src="https://i0.imgs.ovh/2024/02/08/ba1c2.png" width="200" height="200">

# NoDrogen
Nodrogen是使用Next.js开发、React-Notion-X渲染的Notion写作博客系统

演示网站 https://nodrogen.vercel.app/
## 实验性版本在[dev分支](https://github.com/kisrea-team/Notion-New/tree/dev)
![预览](https://i0.imgs.ovh/2024/02/08/bapfO.png)

## 基本特性
* Nodrogen支持几乎所有React-Notion-X的块，并支持几乎所有Mermaid代码的渲染。</br>最快每一个月每个出一个二级版本，同等二级版本(1.2.3中的1.2.x)都能随意兼容。每个二级版本都经过多次测试后发布。
* 核心大小仅300kb，每个软件包都经过认真考虑引入。专注于Notion内容渲染。
## 迁移Notion已有文章到Nodrogen

你可以先复制下面的模板，然后从原数据库导出你的文章CSV文件，然后导入CSV文件，Move To新模板。

# 快速构建
## 前提配置
*星标该仓库*🤪

* [Fork](https://github.com/kisrea-team/NoDrogen/fork)此仓库
* 复制[Nodrogen模板](<https://www.notion.so/kisrea/1ac8cfb2dde44bbc8f6ed18d2acb1e3b?v=86c74e71bd524a29b5dc0fa1a1cf4fce>)并公之于众
* 设置环境变量（使用Vercel部署时在Deloy之前设置）→
`PAGE_ID`

<details><summary>PAGE_ID在哪里？</summary>
打码处就是啦
  <img src="https://i0.imgs.ovh/2024/02/08/baeyd.png">
</details>

### 自有服务器

```shell
git clone http://github.com/kisrea-team/NoDrogen.git
cd NoDrogen
npm install --unsafe-perm
npm run build
npm run start
```

### Vercel

2.选择Next.js<br />
![20240125153353](https://github.com/kisrea-team/NoDrogen/assets/49295983/c5d256f3-e56e-42e6-8d86-8aae1bfd63b8)<br />
3.导入Git仓库<br />
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
[NotionNext](https://github.com/tangly1024/NotionNext?tab=MIT-1-ov-file#readme)
