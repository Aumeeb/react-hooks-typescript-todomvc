# 启动

yarn start || npm start

总结如下

# todo mvc

todo mvc 是一个典型的，广泛存在于软件中的一个功能集。 根据业务需求，分别从数据加载 =》 数据处理 =》 数据保存。 形成另一个完全的闭环，其特点是业务之间的数据是相互依赖的，如果我们能处理好数据和业务逻辑之间的关系，做到合理的划分和设计，这将会对软件架构有很大的帮助。

# 你可以用不同的语言来编写这样的业务场景。

Javascript C# PhP...
这里我使用了 React & Typescript & Redux

# 项目结构
src
    components （📃）
        todo-list （📁）  （子组件）
            Footer.tsx （元件）
            Header.tsx（元件）
            index.tsx （todo-list引导页面）
            List.tsx（元件）
        index.tsx（通用元件）
    pages （📁）
        TodoListPage.tsx （单独页面）
    state（📁）
        todo （todo系列的状态管理）
            hooks.ts （model层和react函数组件之间的桥梁）
            reducer.test.ts （单元测试）
            slicer.ts （model层的数据存储，和数据操作文件）
        index.ts （redux引导页面）
    theme（📁）
        index.tsx （主题引导页面）
    utils（📁）
        gen.ts （生成相关）
        keyboard.ts （键盘相关）
        noop.ts （空函数）
    App.tsx
    index.tsx