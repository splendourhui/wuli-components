<!--
@Author: SplendourHui
@Date:   2016-05-14 14:41
@Last modified by:   SplendourHui
@Last modified time: 2016-05-16 15:13
-->



## WULINotification

> 通知组件

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

- hideNotification
  - 说明：隐藏 notification 的方法，一般是设置 state 的方法
  - 类型：Function
  - 必须：是
  - 默认值：
  - 样例：
  ```
    this.props.messageActions.hideNotification
  ```

- hold
  - 说明：持续时间，单位为秒，设置为 `0` 之后，不会自动消失
  - 类型：Number
  - 必须：否
  - 默认值：3
  - 样例：
  ```
    3
  ```

- title
  - 说明：标题
  - 类型：String
  - 必须：否
  - 默认值：''
  - 样例：
  ```
    '通知标题'
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

- notificationKey
  - 说明：当前通知的唯一标识
  - 类型：String
  - 必须：是
  - 默认值：
  - 样例：
  ```
    'wubianluomoxiaoxiaoxia'
  ```

- onClose
  - 说明：当关闭通知时的回调
  - 类型：String
  - 必须：否
  - 默认值：
  - 样例：
  ```
    () => console.log('Click close.');
  ```
