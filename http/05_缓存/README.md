# 认识Http缓存

### 缓存的优点
+ 减少冗余的数据传输
+ 解决网速问题
+ 减轻服务器的压力
+ 降低了距离时延

### 衡量缓存效果的指标
+ 字节命中率
+ 文档命中率

### 缓存的处理步骤（客户端缓存模块）
1.接收缓存
2.解析报文
3.查询本地副本
本地是否有缓存，如果缓存命中，那么直接返回副本，如果缓存未命中，则去服务器上面拿
4.新鲜度检测
当缓存命中，但是需要新鲜度检测是时候
5.创建响应（缓存命中）
6.发送
7.日志

### 新鲜度检测规则
1.首部使用:Expires,Cache-Control
注意:Cache-Control的优先级高于Expires
当服务器使用Cache-Control时
max-age:xxxx秒 表示缓存到xxx秒 这期间直接返回副本，不需要请求服务器
如果已经超过max-age的时间，再根据条件请求进行判断
2.主要使用的两个条件请求首部：If-modified-Since:<date>;If-None-Match
If-modified-Since和Last-Modified配合使用，如果文件最后修改时间未发生变化，那么服务器返回304 Not Modified 并且会重写max-age
If-None-Match 和 ETag 配合使用 如果Etag没有发生变化，那么服务器返回304
如果都设置了，那么服务器发现两个条件都满足后才能返回304

### 客户端新鲜度的限制
客户端可以使用Cache-Control这个头部对缓存进行强化和放松
max-stale 缓存可以随意提供过期文件
max-stale = /<s/> 在这个时间内，文档不会过期
min-fresh = /<s/> 在这个时间内，文档需要时最新的
max-age = /<s/> 缓存无法缓存大于max-age时间的缓存
no-cache 资源必须经过验证才能缓存
no-store 要求本地删除缓存
on-if-cached 本地有副本才进行缓存