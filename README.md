# package 的入口文件是/lib/index.ts

## 安装 pkg1 到 pkg2

```sh
pnpm install @websee/pk1 --filter @websee/pk2
```

## pnpm 提供了 -w 参数，可以将依赖包安装到工程的根目录下，作为所有 package 的公共依赖

```sh
# 升级版本
npm run changeset
pnpm install rollup @rollup/plugin-typescript typescript -D  -w
```
