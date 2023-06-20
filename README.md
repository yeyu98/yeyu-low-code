

  
monorepo：单仓库管理
- 目录
  - app 放置项目的应用和子应用工程，比如接口服务，搭建平台web客户端。
  - packages 放置项目中创建的npm子包主要是一些SDK，如编辑器组件，物料库，核心实现等npm包。
    - core
      - vite-plugin-dts：打包之后自动生成.d.ts文件；
      - 拖拽 这里使用的是craft.js；
- 构建
  - Turborepo：用于monorepo下的仓库的统一构建处理；
    - umd支持cjs和amd
- ESLint TS
  - 在全局安装 ESlint 和 TS这样所有子仓库都能直接使用；
  -npx ESLint --init 初始化eslint；（暂时先去掉不确定要哪些东西，react js ts jsx tsx）
    - eslint-define-config：eslint config提示；
    - @typescript-eslint/parser：ts eslint校验；
    - eslint-config-standard：eslint标准库；
    - eslint-config-standard-jsx：eslint标准jsx；
    - eslint-plugin-import：对导入的库顺序限制；
    - eslint-plugin-node：对node的限制；
    - eslint-plugin-promise：对promise的限制；


微前端


低代码
