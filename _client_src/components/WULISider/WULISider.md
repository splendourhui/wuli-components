<!--
@Author: SplendourHui
@Date:   2016-05-11 09:53
@Last modified by:   SplendourHui
@Last modified time: 2016-05-18 15:49
-->



## WULISider

> 侧边栏组件

### props

- menus
  - 说明：菜单项描述
  - 类型：JSON Array
  - 必须：是
  - 默认值：
  - 样例：
  ```
  [{
      key: 'sub1',
      title: '导航1',
      icon: 'mail',
      sub: [
        {
          key: '1',
          title: '选项1'
        },
        {
          key: '2',
          title: '选项2',
          sub: [
            {
              key: '3',
              title: '子选项'
            }
          ]
        }
      ]
    },
    {
      key: 'sub2',
      title: '导航2',
      icon: 'appstore',
      sub: [
        {
          key: '4',
          title: '选项4',
          disabled: true
        },
        {
          key: '5',
          title: '选项5'
        }
      ]
    }]
  ```

  - openKeys
    - 说明：展开的菜单项，只有包含子项的菜单项才可展开
    - 类型：string Array，每一项都是菜单项的 key
    - 必须：否
    - 默认值：[]
    - 样例：
    ```
    ['sub1', '2']
    ```

  - selectedKey
    - 说明：选中的菜单项，只有该菜单项的父节点被展开才能正常工作
    - 类型：string
    - 必须：否
    - 默认值：''
    - 样例：
    ```
    '3'
    ```

  - handleSelect
    - 说明：当菜单项选中时执行
    - 类型：function
    - 必须：是
    - 默认值：
    - 样例：
    ```
    this.handleSelect.bind(this)
    ```

  - setOpenKeys
    - 说明：传入设置展开菜单项的方法
    - 类型：function
    - 必须：是
    - 默认值：
    - 样例：
    ```
    this.props.commonActions.setSidebarOpenKeys
    ```

  - setSelectedKey
    - 说明：传入设置选中菜单项的方法
    - 类型：function
    - 必须：是
    - 默认值：
    - 样例：
    ```
    this.props.commonActions.setSidebarSelectedKey
    ```

  - style
    - 说明：样式
    - 类型：object
    - 必须：否
    - 默认值：{}
    - 样例：
    ```
    {width: 240}
    ```
