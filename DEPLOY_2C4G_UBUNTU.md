# 在2C4G Ubuntu服务器上部署Coze Studio

Coze Studio是一个功能强大的AI智能体开发平台，虽然标准配置对资源要求较高，但通过合理的配置和优化，可以在2C4G的Ubuntu服务器上成功部署和运行。

## 系统要求

- Ubuntu 18.04或更高版本
- 2 CPU核心
- 4GB内存
- 至少20GB可用磁盘空间

## 安装必要组件

### 1. 安装Docker和Docker Compose

```bash
# 更新系统包
sudo apt update

# 安装必要的包
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release

# 添加Docker官方GPG密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 添加Docker仓库
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 更新包索引
sudo apt update

# 安装Docker
sudo apt install docker-ce docker-ce-cli containerd.io

# 启动并启用Docker
sudo systemctl start docker
sudo systemctl enable docker

# 将当前用户添加到docker组
sudo usermod -aG docker $USER

# 安装Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

执行完以上命令后，请注销并重新登录以使用户组更改生效。

### 2. 获取Coze Studio源代码

```bash
# 克隆代码仓库
git clone https://github.com/coze-dev/coze-studio.git
cd coze-studio
```

## 优化配置以适应2C4G环境

### 1. 配置环境变量

```bash
cd docker
cp .env.example .env
```

### 2. 资源优化配置

在docker-compose.yml中已经为各服务添加了资源限制，以适应2C4G环境：

- MySQL: 限制为最大800M内存
- Redis: 限制为最大200M内存
- Elasticsearch: 限制为最大800M内存，JVM堆内存设置为512M
- MinIO: 限制为最大300M内存
- Etcd: 限制为最大200M内存
- Milvus: 限制为最大600M内存
- NSQ系列服务: 限制为总共200M内存

这些配置可以确保所有服务在4GB内存内正常运行。

## 配置模型服务

Coze Studio需要配置模型服务才能正常工作。默认支持多种模型提供商，以火山引擎的doubao-seed模型为例：

```bash
# 复制模型配置模板
cp ../backend/conf/model/template/model_template_ark_doubao-seed-1.6.yaml ../backend/conf/model/ark_doubao-seed-1.6.yaml

# 编辑模型配置文件
nano ../backend/conf/model/ark_doubao-seed-1.6.yaml
```

在配置文件中填写以下必要字段：
- **id**: 模型ID，例如100001（必须是唯一的非零整数）
- **meta.conn_config.api_key**: 从模型提供商获取的API Key
- **meta.conn_config.model**: 从模型提供商获取的模型标识符

## 启动服务

完成所有配置后，可以启动服务：

```bash
# 启动所有服务
docker compose --profile "*" up -d
```

初次启动可能需要较长时间来拉取镜像和初始化数据，请耐心等待。

## 监控和管理

### 查看服务状态

```bash
# 查看所有容器状态
docker compose ps

# 查看容器资源使用情况
docker stats

# 查看系统整体资源使用情况
htop
```

### 查看日志

```bash
# 查看所有服务日志
docker compose logs

# 查看特定服务日志
docker compose logs <service-name>

# 实时查看日志
docker compose logs -f <service-name>
```

## 访问Coze Studio

服务启动完成后，可以通过浏览器访问 `http://your-server-ip:8888/` 来使用Coze Studio。

默认情况下，Coze Studio会运行在8888端口，MinIO控制台运行在9001端口。

## 性能优化建议

为了在资源受限的环境中获得更好的性能，建议：

### 1. 选择性启动服务

如果不需要某些功能，可以选择性启动服务：

```bash
# 只启动核心服务
docker compose --profile middleware up -d
```

### 2. 调整JVM内存设置

对于Elasticsearch等Java应用，可以进一步调整JVM内存设置：

```bash
# 在.env文件中添加或修改
ES_JAVA_OPTS=-Xms256m -Xmx256m
```

### 3. 使用外部服务

如果有条件，可以将MySQL、Redis等服务部署到其他服务器上，并在.env文件中配置相应的连接信息。

### 4. 定期维护

```bash
# 清理无用的Docker镜像和容器
docker system prune -a

# 清理无用的卷
docker volume prune
```

## 故障排除

### 常见问题

1. **服务启动失败**
   - 检查是否有端口冲突
   - 确认系统资源是否充足
   - 查看具体服务日志进行排查

2. **内存不足**
   - 进一步降低各服务的内存限制
   - 考虑增加交换空间

3. **数据库连接失败**
   - 检查MySQL服务是否正常运行
   - 确认连接参数是否正确

### 重置部署

如果需要重置整个部署环境：

```bash
# 停止并删除所有容器
docker compose down

# 删除数据卷（会丢失所有数据）
docker compose down -v

# 清理相关镜像（可选）
docker rmi $(docker images -q "coze-*")
```

## 总结

通过以上配置和优化，Coze Studio可以在2C4G的Ubuntu服务器上正常运行。虽然性能会受到一定限制，但对于开发、测试和小规模生产环境来说是足够的。随着业务增长，建议升级到更高配置的服务器以获得更好的性能体验。