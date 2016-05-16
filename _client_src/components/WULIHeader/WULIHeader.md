<!--
@Author: SplendourHui
@Date:   2016-05-11 11:07
@Last modified by:   SplendourHui
@Last modified time: 2016-05-16 14:53
-->



## WULIHeader

> Header 组件

### props

- title
  - 说明：标题
  - 类型：String
  - 必须：是
  - 默认值：
  - 样例：
  ```
    'WULI Components'
  ```

- logoHref
  - 说明：图标跳转链接
  - 类型：String
  - 必须：否
  - 默认值：'#'
  - 样例：
  ```
    'http://yoursite.com/'
  ```

- logoSrc
  - 说明：图标链接
  - 类型：String
  - 必须：否
  - 默认值：'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg'
  - 样例：
  ```
    'http://yoursite.com/imgs/logo.png'
  ```

- user
  - 说明：用户显示及操作, 包括 name（显示用户名，必须）, actions（用户操作，非必须）, onClick（点击操作项回调）
  - 类型：Object
  - 必须：否
  - 默认值：''
  - 样例：
  ```
    const onClick = ({key}) => console.log(`点击了菜单${key}`);
    user={{
      name: '郑南辉',
      actions: [
        {key: 'settings', title: '设置'},
        {key: 'logout', title: '退出登陆'}
      ],
      onClick
    }}
  ```
