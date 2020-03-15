### babel配置

    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        "plugins": [
            "react-hot-loader/babel",
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
        ]
    }

    "react-hot-loader/babel", : 热更新
    ["@babel/plugin-proposal-decorators", { "legacy": true }] : 支持修饰器,这个必须 class-properties 前面
    ["@babel/plugin-proposal-class-properties", { "loose": true }], : 支持 class 写法
    
### eslint配置

    安装包

    yarn add babel-eslint eslint eslint-config-airbnb eslint-friendly-formatter eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks -D

    webpack

    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            enforce: 'pre',
            options: {
            formatter: require('eslint-friendly-formatter'),
            emitWarning: true
            }
        },
        ...
        ],
    },


### 安装

    npm install

### 启动

    npm start

### 编译生成

    npm run build:prod


## 约定规范

### 组件属性方法首字母大小写方式

    export default class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
            // 首字母小写组件内部使用
            this.title = 'xxx';
        }
        // 组件外部使用
        Distortion = () => {

        }
        render() {
            return (
            <div className="Nav">
                Nav
            </div>
            );
        }
    }
