# Browserslist

## 用途
一个可用于前端不同工具对目标浏览器兼容的配置文件

## 工具列表

- autoprefixer
- babel
- postcss
...

## 如何使用？
### add to package.json

```
{
  browerslist: [
    "last 1 version",
    "> 1%",
    "not dead"
  ]
}
```

###  in ```.browserslistrc``` config:

```
last 1 version // 表示浏览器是最后一个版本 
> 1% // 表示浏览器在市场份额大于 1 %
not dead
```

文件中的每一项配置都表示满足的浏览器
在 [这个地址](https://browserl.ist/)

## 注意要点

+ 如果只是在某个浏览器上执行 才缩小范围
+ ```>0.2%```
