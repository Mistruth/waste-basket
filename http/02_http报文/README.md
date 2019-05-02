# 第二节 http报文

### 报文的组成部分
+ 起始行
```
// 请求行
<method><request-url><version>
```
```
// 响应行
<version><status><reason-phrase>
```
+ 首部
由key:value的形式组成
+ 主体
一般响应的请求会带主体

### 方法
+ GET
> 语义：用来请求服务器上的某个资源
+ POST
> 语义：用来向服务器发送数据的（填写表单）
+ HEAD
> 作用：发送该请求后 服务器响应内容不包含主体，只包含响应起始行和首部
+ PUT
> 语义：修改资源
+ TRACE
> 在经过转发的头部会带有之前头部经过站点的信息

### 状态码

+ 100 ~ 199
  + 101 switching protocols
  会根据客户端指定的update首部进行协议转换
+ 200 ~ 299 成功状态码
  + 200 OK
+ 300 ~ 399 重定向状态码
  + 301 永久重定向 在Location 首部会包含新资源位置
  + 302 临时重定向 在Location 首部会包含资源的临时位置
  + 304 Not Modified 表明当前资源未更改 可以使用缓存？
  + 305 Use Proxy 表明必须通过代理来访问资源
+ 400 ~ 499 客户端错误状态码
  + 400 bad request 请求错误
  + 401 认证未通过
  + 403 没有权限
  + 404 没有这个资源
+ 500 ~ 599 服务端错误状态码
  + 500 Internal Server Error 一般是后端代码出问题
  + 501 比如方法不对，不识别之类的
  + 502 bad Gateway 网关没有得到响应
  + 504 Gatewat Timeout
  + 505 http版本不匹配

### 首部
+ 通用首部
  + Connection
  + Date
  + MIME
  + Transfer-Encoding
  + Update
  + via
  + Cache-control
+ 请求首部
  + 信息性首部
    + Clinet-IP 客户端的ip地址
    + Host 接收请求的服务器的主机名和端口号
    + referer 当前URL(不包含资源地址)
    + User-Agent 客户端名
  + Accpet首部 告诉服务器所需要接收的媒体类型
  + 条件请求首部 比如客户端保留副本
    + If-Match 实体标记匹配
    + If-Modified-Since 询问该资源是否修改过
    + If-None-Match 实体标记不匹配
  + 安全请求首部
    + Authorization 
    + Cookie
  + 代理请求首部
    + Proxy-Authorization
    + Proxy-Connection
+ 响应首部
  + 信息性首部
    + Age 响应持续时间
    + Public 该资源支持的方法
    + Retry-After 如果资源不可用下一次这个时间重试
    + Server 服务器
    + Title Html文档的title标签
  + 协商首部
    + Vary
    + Accept-Ranges
  + 安全响应首部
    + Set-Cookie
+ 实体首部
  + 内容首部
    + centent-base 基础URL
    + content-encoding 编码方式
    + content-language 支持语言
    + content-length 主体的长度
    + content-Type 主体对象类型
  + 实体缓存首部
    + Etag 实体标记
    + Expires
+ 扩展首部