/*
 * @Author: zitons
 * @Date: 2024-02-13 12:38:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-14 16:40:55
 * @Description: 简介
 */
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.BLOG,
    generateRobotsTxt: true, // (optional)
    outDir :'public/xml'
    // ...other options
}