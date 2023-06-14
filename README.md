

# gout-helper-system

gout-helper-system



## 开发流程

- 代码编写
- 提交代码前校验

    ```powershell
    pnpm run lint:fix
    ```

- 提交代码

    ```powershell
    pnpm run commit
    ```

- （可选）如果需要更新版本、生成ChangeLog

    ```powershell
    # alpha 为tag名称
     pnpm run release  --prerelease alpha
    ```

- 提交代码

    ```powershell
    # 如果使用了release则无需push
    git push
    ```

    




## 版本控制

### 开发期

#### Alpha

**预览版**，内部测试版，一般不向外部发布，内部使用

#### Beta

**测试版**，公开测试版，针对部分用户使用

#### RC（Release Candidate）

**最终测试版本**，发行候选版本，基本不再加入新的功能，主要修复bug。

### 正式版

#### Release

正式发布版，官方推荐使用的版本，有的用GA来表示。

#### Final

最终版，也是正式发布版的一种表示方法。



