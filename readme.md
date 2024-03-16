自豪地开源：<br/>[![license](https://img.shields.io/badge/License-MIT-blue)](https://github.com/kisrea-team/NoDrogen/blob/main/LICENSE)
<img src="https://i0.imgs.ovh/2024/02/08/ba1c2.png" width="200" height="200">

# NoDrogen
NoDrogen是使用Next.js开发、React-Notion-X渲染的Notion写作博客系统

演示网站 https://nodrogen.vercel.app/
## 实验性版本在[dev分支](https://github.com/kisrea-team/Notion-New/tree/dev)
![预览](https://i0.imgs.ovh/2024/02/08/bapfO.png)

## 基本特性
* 一式两端，Core和Client，高度分离，更快速。
* NoDrogen支持几乎所有Notion的块。</br>最快每一个月一个二级版本，相同二级版本之间(1.2.x)都能任意兼容。
* 核心大小仅300kb，专注于Notion内容渲染。
* 重视SEO

# 快速构建
## 前提配置
*星标该仓库*🤪

* [Fork](https://github.com/kisrea-team/NoDrogen/fork)此仓库
* [Fork](https://github.com/kisrea-team/NoDrogen-Core/fork)NoDrogen-Core仓库
* 复制[NoDrogen模板](<https://www.notion.so/kisrea/1ac8cfb2dde44bbc8f6ed18d2acb1e3b?v=86c74e71bd524a29b5dc0fa1a1cf4fce>)并公之于众
* 设置Core端环境变量（使用Vercel部署时在Deloy之前设置）
``` .env.local
PAGE_ID=aa045af321034b62ad9c962b42fe7f48
```

`PAGE_ID`<details><summary>PAGE_ID在哪里？</summary>
打码处就是啦
  <img src="https://i0.imgs.ovh/2024/02/08/baeyd.png">
</details>

* 设置客户端环境变量
``` .env.local
TWIKOO_ID=https://zitons-nodrogen.hf.space
NEXT_PUBLIC_PROTOCOL=https://
NEXT_PUBLIC_BLOG=api.kisrea.com
NEXT_PUBLIC_FIRST_SLUG=c64b67c2-ff19-43c7-8f7f-9dbe0144ac1f
```
`NEXT_PUBLIC_BLOG`部署Core的域名
`TWIKOO_ID`用于调用评论系统
`NEXT_PUBLIC_FIRST_SLUG`为保留名


### 自有服务器（推荐）

```shell
git clone http://github.com/kisrea-team/NoDrogen.git
cd NoDrogen
npm install --unsafe-perm
npm run build
npm run start
```

### Vercel（推荐）

## 注意：需要部署两次，一个Core，一个Client，配置的环境变量在前提配置中。
1.启动Vercel<br />
2.选择Next.js<br />
![20240125153353](https://github.com/kisrea-team/NoDrogen/assets/49295983/c5d256f3-e56e-42e6-8d86-8aae1bfd63b8)<br />
3.导入Git仓库<br />
![20240125153544](https://github.com/kisrea-team/NoDrogen/assets/49295983/88e72d3a-de3e-408b-a1a0-aae5aad02b2f)<br />
![20240125153808](https://github.com/kisrea-team/NoDrogen/assets/49295983/1c5ca88c-0e2b-476c-b2bd-7e2a2e8d9d41)<br />
4.修改环境变量<br />
![20240125161352](https://github.com/kisrea-team/NoDrogen/assets/49295983/01e78939-e269-47ca-886f-a0b2894e491a)
5.Deloy

### 静态导出

## NoDrogen默认不再支持静态导出。


## 致谢

[React-Notion-X](https://github.com/NotionX/react-notion-x)
[Nobelium](https://github.com/craigary/nobelium)
[NotionNext](https://github.com/tangly1024/NotionNext)
