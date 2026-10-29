# cs2-demotracer-sig

CS2 DemoTracer 的 Windows x64 兼容性检查与公开状态报告。

**[查看当前检测快照 →](reports/latest.md)** · [机器可读结果](reports/latest.json)

报告分别展示正式版与开发版对同一份游戏文件的静态检查结果。每次检测记录 CS2 版本、Steam build / depot manifests、游戏模块指纹，以及产品源码的确切 commit。报告是带时间和版本的快照，不自动代表 Steam 当前最新版。

## 运行

需要 Node.js 22+、已更新完成的 Windows CS2 安装，以及访问 GitHub 的网络。无需 npm install。

```powershell
node src/check.mjs --game-dir '<CS2 安装根目录>'
```

安装根目录下应有 `game/csgo/steam.inf`。默认读取相邻 Steam 库的 `appmanifest_730.acf`，同时检查公开仓库的最新 Release 和 `main`，随后生成 `reports/latest.md` 和 `reports/latest.json`。

```powershell
# 比较指定版本；独立服务器可显式提供对应 appmanifest
node src/check.mjs --game-dir '<安装根目录>' --app-manifest '<appmanifest 路径>' --refs v1.6.4,v1.6.5,main
node --test
```

可用 `--output reports/<快照名>` 保留不同游戏版本的报告。GitHub API 限流时可设置 `GH_TOKEN`；令牌只发送到 GitHub API，不写入报告。

退出码：`0` 表示没有静态失败，**不表示完全兼容**；`1` 表示发现静态不匹配（仍生成完整报告）；`2` 表示输入、源码解析或检查工具出错。

## 检查范围

| 范围 | 自动检查 | 仍需验证 |
| --- | --- | --- |
| dtr-controller / dtr-hider | 从产品 gamedata 读取 Windows 签名，检查可执行节内是否唯一匹配 | 函数语义、字段布局、虚表槽与调用约定 |
| 投掷物 | pe-image-v1、入口匹配、磁盘函数体哈希、六个虚表引用 | 加载后内存、钩子安装和实际投掷物行为 |
| BotRandomizer | 从公开源码读取三个 Windows 原生绑定的签名 | 饰品应用、切换与生命周期 |
| 动态 Schema | 枚举产品声明的必需字段 | 服务器内实际解析 |
| CSS / Metamod | 展示该产品 commit 声明的最低要求 | 安装版本、初始化状态与 ABI / capability 检查 |
| 实际回放 | 单独保留验证状态 | 加载、播放、停止、切换、接管及清理 |

`pass` 只针对该行的静态检查；`fail` 表示明确不匹配；`not_checked` 表示没有相应证据。静态匹配不能证明函数语义没有变化。组件加载和回放在本版始终明确标为待验证，不将旧版游戏的通过结果套用到新版。

所有适配配置来自 [unicbm/demotracer](https://github.com/unicbm/demotracer) 的固定 commit，本仓库不维护第二份 gamedata，不生成新签名或修改适配配置。源码提取格式变化时检查失败退出，避免漏项后继续报绿。

## 更新报告

CS2 更新完成后运行上述命令，核对报告中的游戏版本与产品 commit，审查 `git diff` 后提交生成的两个报告。工具不启动或修改游戏，不安装插件，也不自动提交、推送或发布产品。CI 仅运行工具自身测试；下载游戏和运行真实回放尚未自动化。

公开内容限定为检查工具、版本 / 指纹、检查项和状态。报告按固定字段构造，不复制游戏二进制、Steam 账户字段、安装路径、demo、回放或服务器日志。

## License / provenance

主体采用 AGPL-3.0-only；PE 指纹模块保留 GPL-3.0-or-later，详见 [NOTICE.md](NOTICE.md)。第三方项目名称用于标识检查对象，不表示其认可或担保。状态页的呈现方式参考 [ianlucas/cs2-signatures](https://github.com/ianlucas/cs2-signatures)；未复制其实现或报告。
