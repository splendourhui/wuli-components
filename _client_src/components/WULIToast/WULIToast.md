<!--
@Author: SplendourHui
@Date:   2016-05-13 11:10
@Last modified by:   SplendourHui
@Last modified time: 2016-05-13 11:42
-->



## WULIToast

> 全局 toast

### props

- show
  - 说明：显示 & 隐藏
  - 类型：Boolean
  - 必须：是
  - 默认值：
  - 样例：
  ```
    true
  ```

- type
  - 说明：类型
  - 类型：String，可选值有 'success', 'error', 'warning', 'info'
  - 必须：是
  - 默认值：'info'
  - 样例：
  ```
    'success'
  ```

- hideToast
  - 说明：隐藏 toast 的方法，一般是设置 state 的方法
  - 类型：Function
  - 必须：是
  - 默认值：
  - 样例：
  ```
    this.props.messageActions.hideToast
  ```

- hold
  - 说明：持续时间，单位为秒
  - 类型：Number
  - 必须：否
  - 默认值：3
  - 样例：
  ```
    3
  ```

- content
  - 说明：内容
  - 类型：String
  - 必须：否
  - 默认值：''
  - 样例：
  ```
    '成功提示'
  ```
