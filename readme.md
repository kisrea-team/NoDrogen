自豪地开源：<br/>[![license](https://img.shields.io/badge/License-MIT-blue)](https://github.com/kisrea-team/NoDrogen/blob/main/LICENSE)
<img src="https://i0.imgs.ovh/2024/02/08/ba1c2.png" width="200" height="200">

# NoDrogen
Nodrogen是使用Next.js开发、React-Notion-X渲染的Notion写作博客系统

演示网站 https://nodrogen.vercel.app/
## 实验性版本在[dev分支](https://github.com/kisrea-team/Notion-New/tree/dev)
![预览](https://i0.imgs.ovh/2024/02/08/bapfO.png)

## 基本特性
* Nodrogen支持几乎所有Notion的块。</br>最快每一个月一个二级版本，相同二级版本之间(1.2.x)都能任意兼容。
* 核心大小仅300kb，专注于Notion内容渲染。
* 重视SEO

# 快速构建
## 前提配置
*星标该仓库*🤪

* [Fork](https://github.com/kisrea-team/NoDrogen/fork)此仓库
* 复制[Nodrogen模板](<https://www.notion.so/kisrea/1ac8cfb2dde44bbc8f6ed18d2acb1e3b?v=86c74e71bd524a29b5dc0fa1a1cf4fce>)并公之于众
* 设置环境变量（使用Vercel部署时在Deloy之前设置）
```.env.local
PAGE_ID=98f7af9c0c8f403cab2e918b4aa630c0
TWIKOO_ID=https://zitons-nodrogen.hf.space
BLOG=https://zitons.kisrea.com/
```
`PAGE_ID`

<details><summary>PAGE_ID在哪里？</summary>
打码处就是啦
  <img src="https://i0.imgs.ovh/2024/02/08/baeyd.png">
</details>

`TWIKOO_ID`

用于调用评论系统

`TWIKOO_ID`

用于生成站点地图


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

### 静态导出

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

## 致谢

[React-Notion-X](https://github.com/NotionX/react-notion-x)
[Nobelium](https://github.com/craigary/nobelium)
[NotionNext](https://github.com/tangly1024/NotionNext)
