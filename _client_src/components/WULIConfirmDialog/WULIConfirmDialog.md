<!--
@Author: SplendourHui
@Date:   2016-05-12 15:30
@Last modified by:   SplendourHui
@Last modified time: 2016-05-12 15:36
-->



## WULIConfirmDialog

> 操作确认对话框

### props

- show
  - 说明：显示 & 隐藏对话框
  - 类型：Boolean
  - 必须：是
  - 默认值：
  - 样例：
  ```
    true
  ```

- title
  - 说明：标题
  - 类型：String
  - 必须：是
  - 默认值：
  - 样例：
  ```
    '操作确认'
  ```

- handleOK
  - 说明：按下确认按钮后执行的操作
  - 类型：Function
  - 必须：否
  - 默认值：void(0)
  - 样例：
  ```
    () => console.log('press ok');
  ```

- handleCancel
  - 说明：按下取消或关闭按钮后执行的操作，一般是传入关闭对话框的操作
  - 类型：Function
  - 必须：否
  - 默认值：void(0)
  - 样例：
  ```
    () => console.log('press cancel');
  ```

- confirmLoading
  - 说明：显示 & 隐藏确认按钮上的 loading
  - 类型：Boolean
  - 必须：否
  - 默认值：false
  - 样例：
  ```
    true
  ```

- content
  - 说明：内容
  - 类型：String
  - 必须：否
  - 默认值：''
  - 样例：
  ```
    '确认要删除数据吗？'
  ```
